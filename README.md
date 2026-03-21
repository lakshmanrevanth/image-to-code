# Image to Code Converter

AI-powered web application that converts UI screenshots into clean frontend code.
Upload an image of a website or UI design and instantly generate the corresponding HTML/CSS code.

---

## 🚀 Overview

Image to Code Converter is a full-stack web application that allows users to upload screenshots of website layouts or UI designs. The system processes the image using AI techniques and generates structured frontend code that can be used directly in web development projects.

This tool helps developers, designers, and students quickly transform visual designs into working code.

---

## ✨ Features

* Upload UI screenshots
* Drag and drop image support
* Automatic image preview
* AI-based UI structure detection
* Convert image layouts into HTML/CSS code
* Syntax-highlighted code viewer
* Copy generated code to clipboard
* Download generated code as `.html`
* Responsive modern UI
* Dark mode interface
* Auto-adjusting split screen layout

---

## 🖥️ Tech Stack

### Frontend

* React
* Vite
* Tailwind CSS
* Axios
* PrismJS / Monaco Editor

### Backend

* Node.js
* Express.js
* Multer (for image uploads)

### AI / Processing

* Image processing pipeline
* Layout analysis
* Code generation logic

---

## 📂 Project Structure

```
major_project
│
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
├── backend
│   ├── server.js
│   ├── routes
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation

### 1. Clone the Repository

```
git clone https://github.com/your-username/image-to-code-converter.git
```

```
cd image-to-code-converter
```

---

### 2. Install Frontend Dependencies

```
cd frontend
npm install
```

Run frontend:

```
npm run dev
```

---

### 3. Install Backend Dependencies

Open another terminal:

```
cd backend
npm install
```

Run backend:

```
node server.js
```

---

## 📸 How It Works

1. User uploads a screenshot of a website or UI design.
2. The image is sent to the backend server.
3. The backend processes the image.
4. The AI analyzes the layout and UI components.
5. The system generates corresponding HTML/CSS code.
6. The generated code is displayed on the right panel.

---

## 📷 Example Workflow

Upload Image → AI Processing → Generated Code → Copy / Download

---

## 🎯 Use Cases

* Convert Figma or UI screenshots to code
* Frontend prototyping
* Learning HTML/CSS structures
* Rapid UI development
* Developer productivity tools

---

## 🔮 Future Improvements

* Live website preview
* Support for React component generation
* Tailwind CSS code generation
* Better layout detection
* Multi-image processing
* AI model improvements

---

## 🤝 Contributing

Contributions are welcome.
Feel free to fork the repository and submit a pull request.

---

## 📄 License

This project is licensed under the MIT License.

---

