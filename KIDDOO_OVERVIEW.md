# Kiddoo Project Overview

Kiddoo is a React-based educational application designed for children to learn and practice fundamental skills in Mathematics, English, and Hindi. The app features various interactive challenges and games.

## 🚀 Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **State Management**: Redux Toolkit & Redux Saga
- **Styling**: Styled Components
- **Routing**: React Router DOM (HashRouter)
- **Deployment**: GitHub Pages

## 📁 Project Structure

- `src/components`: Reusable UI components like `KidButton` and `KidoText`.
- `src/dashboard`: Layout components including the main `Dashboard`, `Navbar`, and `MainMenu`.
- `src/pages`: Feature-specific pages categorized by subject:
  - `english/`: Alphabet learning, Sight words, Spelling, Missing letters, and Sudoku.
  - `math/`: Counting, Comparison (Greater/Less/Equal), and Number Sorting.
  - `hindi/`: Hindi Alphabet challenge.
- `src/store`: Redux store configuration, slices, and sagas.
- `src/theme`: Theme configuration and global styles using Styled Components.
- `src/util`: Utility functions (e.g., Text-to-Speech).

## 🎮 Features & Challenges

### 🔤 English
- **Alphabet**: Learn and practice English alphabets.
- **Sight Words**: Interactive challenge for common sight words.
- **Spellings**: Spelling practice and challenges.
- **Missing Letters**: Fill in the blanks for words.
- **Sudoku**: A kid-friendly version of Sudoku.

### 🔢 Math
- **Counting**: Math challenges focusing on counting.
- **Comparison**: Compare numbers using Greater Than (`>`), Less Than (`<`), and Equal (`=`).
- **Number Sorting**: Arrange numbers in the correct order.

### 🇮🇳 Hindi
- **Alphabet**: Practice and learn Hindi alphabets.

## 🛠️ Key Utilities
- **Text-to-Speech**: The app uses a utility to read text aloud, providing an interactive auditory experience for children.

## 🚦 Getting Started

1. **Install Dependencies**:
   ```bash
   npm install
   ```
2. **Run Development Server**:
   ```bash
   npm run dev
   ```
3. **Build for Production**:
   ```bash
   npm run build
   ```
