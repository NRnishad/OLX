
# OLX Clone Project

This project is a simple web application inspired by OLX, built with **React**. It includes features like recommendations, a homepage layout, and context management using **Context API**.

---

## Table of Contents
1. [Features](#features)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Scripts](#scripts)
5. [Dependencies](#dependencies)
6. [Project Structure](#project-structure)
7. [License](#license)

---

## Features
- **Dynamic Recommendations**: Uses `RecommendationsContext` to manage and display recommendation data.
- **Reusable Components**: Organized folder structure with reusable components like `Header`, `Banner`, `Posts`, and `Footer`.
- **React Context API**: Global state management for seamless sharing of data across components.

---

## Installation

### Prerequisites
- Node.js (v14 or later recommended)
- npm (v6 or later)

### Steps
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd olx
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

---

## Usage

### Run the development server
Start the app in development mode:
```bash
npm start
```
By default, the app will be available at [http://localhost:3000](http://localhost:3000).

### Build for production
Generate a production-ready build:
```bash
npm run build
```

---

## Scripts

The following scripts are available in the project:

| Script        | Description                                 |
|---------------|---------------------------------------------|
| `npm start`   | Runs the app in development mode.           |
| `npm run build` | Builds the app for production.             |
| `npm test`    | Launches the test runner.                  |
| `npm run eject` | Ejects the app for customization.          |

---

## Dependencies

The project uses the following major dependencies:

| Dependency             | Version    | Description                                   |
|-------------------------|------------|-----------------------------------------------|
| `react`                | ^17.0.2    | A JavaScript library for building UIs.        |
| `react-router-dom`     | ^5.2.0     | Declarative routing for React applications.   |
| `react-scripts`        | ^5.0.1     | Scripts for building and running React apps.  |
| `@testing-library/react` | ^11.1.0 | Utilities for testing React components.       |

To see all dependencies, check the `package.json` file.

---

## Project Structure

Here’s an overview of the key files and folders:

```
olx/
├── public/
│   └── index.html         # Main HTML file
├── src/
│   ├── Components/
│   │   ├── Header/        # Header component
│   │   ├── Banner/        # Banner component
│   │   ├── Posts/         # Posts (recommendations) component
│   │   └── Footer/        # Footer component
│   ├── Pages/
│   │   └── Home.js        # Home page layout
│   ├── RecommendationsContext.js # Context for recommendations
│   ├── App.js             # Main App component
│   ├── index.js           # Entry point of the app
│   └── assets/            # Static assets (e.g., JSON data, images)
├── package.json           # Project metadata and dependencies
├── .gitignore             # Files to ignore in version control
└── README.md              # Project documentation
```

---

## License

This project is licensed under the **MIT License**. You are free to use, modify, and distribute the code, but attribution is appreciated.

---
