# SummarizerX 📚✨
### Advanced Text Summarization & Collaboration Tool

SummarizerX is a powerful web application designed to summarize large texts quickly and accurately. It also includes a real-time collaborative whiteboard feature.

## ✨ Features

- 🚀 Fast and accurate text summarization using the Hugging Face API
- 🖌️ Real-time collaborative whiteboard
- 🌓 Responsive design with theme switcher (light/dark mode)
- 📖 Documentation page with installation guide, API reference, and FAQs

## 🛠️ Tech Stack

- ⚛️ Next.js (App Router)
- 🌟 React
- 🎨 Tailwind CSS
- 🧩 Next UI
- 🔌 Socket.io (for real-time collaboration)
- 🤗 Hugging Face API (for text summarization)

## 🚀 Installation

To set up SummarizerX locally, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/your-repo/summarizerx.git
   ```

2. Navigate to the project directory:
   ```
   cd summarizerx
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm run dev
   ```

5. Open your browser and visit `http://localhost:3000`

## 📝 Usage

### 📊 Text Summarizer

1. Navigate to the Text Summarizer page
2. Enter or paste your text into the input box
3. Click on "Get Summary" to see the summarized text
4. Copy the summarized text using the copy button

### 🖌️ Whiteboard

1. Navigate to the Whiteboard page
2. Use the various tools (pen, eraser) to draw or write
3. Collaborate in real-time with other users
4. Download your whiteboard as an image

## 🔗 API Reference

The text summarization feature uses the Hugging Face API. Here's an example of how to use it:

```
POST https://api-inference.huggingface.co/models/facebook/bart-large-cnn
Authorization: Bearer YOUR_API_KEY
Content-Type: application/json

{
  "inputs": "Your text goes here..."
}
```

Replace `YOUR_API_KEY` with your actual Hugging Face API key.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the [MIT License](LICENSE).

## 🙋‍♂️ Support

If you have any questions or need help, feel free to reach out to our support team or check the FAQ section in the documentation.

## 🌟 Star Us!

If you find SummarizerX helpful, please consider giving us a star on GitHub. It helps us a lot!

[![GitHub stars](https://img.shields.io/github/stars/your-repo/summarizerx.svg?style=social&label=Star)](https://github.com/your-repo/summarizerx)

Happy summarizing! 🎉📚
