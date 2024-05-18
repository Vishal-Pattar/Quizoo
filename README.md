# Quizoo

Quizoo is a web-based quiz application built with modern web technologies. It allows users to take quizzes on various topics and get instant feedback.

## Features

- **Multiple Choice Questions**: Answer questions from a variety of topics.
- **Instant Feedback**: Get immediate feedback on your answers.
- **Score Tracking**: Track your quiz performance over time.
- **Responsive Design**: Accessible on both desktop and mobile devices.

## Technologies Used

- **JavaScript**
- **SCSS**
- **HTML**
- **Vite**: Build tool
- **Netlify**: Deployment

## Getting Started

### Prerequisites

- Node.js
- npm (Node Package Manager)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Vishal-Pattar/Quizoo.git
   cd Quizoo
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000`.

### Building for Production

To build the project for production, run:
```bash
npm run build
```

This will generate a `dist` folder with all the optimized files.

### Deployment

You can deploy the contents of the `dist` folder to any static hosting service. This project is currently deployed on Netlify.

Check out the live app: [Quizoo on Netlify](https://melodious-llama-9b6b16.netlify.app/)

## Project Structure

```
Quizoo/
├── public/           # Static files
├── src/              # Source files
│   ├── assets/       # Images, fonts, etc.
│   ├── components/   # React components
│   ├── styles/       # SCSS stylesheets
│   └── App.js        # Main React component
├── .eslintrc.cjs     # ESLint configuration
├── .gitignore        # Git ignore file
├── index.html        # Main HTML file
├── package.json      # NPM package file
├── vite.config.js    # Vite configuration
└── README.md         # Project documentation
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- Inspired by various quiz applications.
- Built with ♥ by Vishal Pattar.

---

Feel free to explore, use, and contribute to Quizoo!
