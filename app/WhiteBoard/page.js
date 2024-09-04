"use client";
import React, { useRef, useEffect, useState } from 'react';
import io from 'socket.io-client';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import { FaPen, FaEraser, FaTrashAlt, FaDownload } from 'react-icons/fa';
import Link from 'next/link';

// Replace with your server URL
const socket = io('http://localhost:3001');

const WhiteBoard = () => {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const [drawing, setDrawing] = useState(false);
  const [tool, setTool] = useState('pen');
  const [color, setColor] = useState('#000000');
  const [lineWidth, setLineWidth] = useState(5);
  const [eraserSize, setEraserSize] = useState(10);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth * 2;
    canvas.height = window.innerHeight * 2;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;

    const context = canvas.getContext('2d');
    context.scale(2, 2);
    context.lineCap = 'round';
    context.strokeStyle = color;
    context.lineWidth = lineWidth;
    contextRef.current = context;

    socket.on('drawing', (data) => {
      const { offsetX, offsetY, color, lineWidth } = data;
      context.strokeStyle = color;
      context.lineWidth = lineWidth;
      context.lineTo(offsetX, offsetY);
      context.stroke();
      context.beginPath();
      context.moveTo(offsetX, offsetY);
    });
  }, [color, lineWidth]);

  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);
    setDrawing(true);
  };

  const finishDrawing = () => {
    contextRef.current.closePath();
    setDrawing(false);
    socket.emit('drawing', { finish: true });
  };

  const draw = ({ nativeEvent }) => {
    if (!drawing) return;
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
    socket.emit('drawing', {
      offsetX,
      offsetY,
      color: contextRef.current.strokeStyle,
      lineWidth: contextRef.current.lineWidth,
    });
  };

  const handleToolChange = (newTool) => {
    setTool(newTool);
    if (newTool === 'eraser') {
      contextRef.current.strokeStyle = 'white'; // Background color
      contextRef.current.lineWidth = eraserSize; // Eraser size
    } else {
      contextRef.current.strokeStyle = color;
      contextRef.current.lineWidth = lineWidth;
    }
  };

  const clearCanvas = () => {
    contextRef.current.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
  };

  const downloadCanvas = () => {
    const link = document.createElement('a');
    link.download = 'whiteboard.png';
    link.href = canvasRef.current.toDataURL();
    link.click();
  };

  return (
    <>
      <Navbar />
      <div className="flex">
        {/* Sidebar */}
        <div className="w-60 p-4 dark:bg-gray-800 bg-gray-100 border-r-2 border-gray-300">
          <h3 className="dark:text-gray-200 text-xl font-semibold mb-4">Tools</h3>
          <div className="flex flex-col space-y-2">
            <button
              onClick={() => handleToolChange('pen')}
              className={`flex items-center p-2 rounded-lg transition ${
                tool === 'pen' ? 'bg-blue-500 text-white' : 'bg-white text-black dark:bg-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
              title="Pen Tool"
            >
              <FaPen className="mr-2" />
              Pen
            </button>
            <button
              onClick={() => handleToolChange('eraser')}
              className={`flex items-center p-2 rounded-lg transition ${
                tool === 'eraser' ? 'bg-blue-500 text-white' : 'bg-white text-black dark:bg-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
              title="Eraser Tool"
            >
              <FaEraser className="mr-2" />
              Eraser
            </button>
            <button
              onClick={clearCanvas}
              className="flex items-center p-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition"
              title="Clear Canvas"
            >
              <FaTrashAlt className="mr-2" />
              Clear Canvas
            </button>
            <button
              onClick={downloadCanvas}
              className="flex items-center p-2 rounded-lg bg-green-500 text-white hover:bg-green-600 transition"
              title="Download Image"
            >
              <FaDownload className="mr-2" />
              Download Image
            </button>
          </div>
   

          <div className='fixed bottom-4 right-4'>
                    <Link href="/Help" className='bg-indigo-600 rounded-full text-white flex items-center justify-center shadow-lg w-16 h-16 hover:bg-indigo-700 transition duration-300 ease-in-out transform hover:scale-110'>
                        <span className="sr-only">Ask with AI</span>
                        <img src="./robo_ai.jpg" alt='Robot' className="w-8 h-8 rounded-full" />
                    </Link>
                </div>


          <h3 className="dark:text-gray-200 text-xl font-semibold mt-6 mb-4">Colors</h3>
          <input
            type="color"
            value={color}
            onChange={(e) => {
              setColor(e.target.value);
              if (tool !== 'eraser') {
                contextRef.current.strokeStyle = e.target.value;
              }
            }}
            className="w-full h-10 p-1 border-2 border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-600"
          />

          <h3 className="dark:text-gray-200 text-xl font-semibold mt-6 mb-4">Line Width</h3>
          <input
            type="range"
            min="1"
            max="20"
            value={lineWidth}
            onChange={(e) => {
              setLineWidth(e.target.value);
              if (tool !== 'eraser') {
                contextRef.current.lineWidth = e.target.value;
              }
            }}
            className="w-full h-2 bg-gray-300 rounded-lg dark:bg-gray-700"
          />

          <h3 className="dark:text-gray-200 text-xl font-semibold mt-6 mb-4">Eraser Size</h3>
          <input
            type="range"
            min="10"
            max="50"
            value={eraserSize}
            onChange={(e) => {
              setEraserSize(e.target.value);
              if (tool === 'eraser') {
                contextRef.current.lineWidth = e.target.value;
              }
            }}
            className="w-full h-2 bg-gray-300 rounded-lg dark:bg-gray-700"
          />
        </div>

        {/* Canvas */}
        <div className="flex-1 flex justify-center items-center bg-gray-50 dark:bg-gray-900">
          <canvas
            onMouseDown={startDrawing}
            onMouseUp={finishDrawing}
            onMouseMove={draw}
            ref={canvasRef}
            className={`border border-gray-300 rounded-lg shadow-lg dark:border-gray-700 ${
              tool === 'pen' ? 'cursor-crosshair' : 'cursor-cell'
            }`}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default WhiteBoard;
