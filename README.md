# 🌐 Responsive User Explorer

**Developed by: Lakshmi Moksha Boya**

A professional, production-ready frontend application that demonstrates modern React best practices, stunning aesthetics, and resilient API integration.

## 🚀 Project Overview

**Responsive User Explorer** allows users to browse a dynamic list of users fetched from a REST API. It features a mobile-first design, real-time search filtering, and robust error handling.

## ✨ Features

- **Dynamic Data Fetching**: Fetches user data from JSONPlaceholder API on load.
- **Search Functionality**: Filter users by name in real-time.
- **Mobile-First Design**: Fully responsive layout using CSS Grid.
  - Mobile: 1 column
  - Tablet: 2 columns
  - Desktop: 3 columns
  - Large Desktop: 4 columns
- **State Management**: Handles loading and error states gracefully.
- **UI/UX Excellence**: Clean spacing, soft shadows, rounded corners, and hover animations for a premium feel.
- **Accessibility**: Semantic HTML and ARIA labels for better accessibility.

## 🛠️ Tech Stack

- **Framework**: React.js (Functional Components, Hooks)
- **Build Tool**: Vite (SWC)
- **Styling**: Vanilla CSS3 (Custom Variables, Flexbox, Grid)
- **API**: Fetch API

## 📋 Setup Steps

1. **Clone the repository** (if applicable) or navigate to the project directory.
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Run in development mode**:
   ```bash
   npm run dev
   ```
4. **Build for production**:
   ```bash
   npm run build
   ```

## 🌐 Deployment Steps

The project is ready to be deployed on **Vercel** or **Netlify**:

### Vercel
1. Connect your repository to Vercel.
2. Ensure the build command is `npm run build` and output directory is `dist`.
3. Click "Deploy".

### Netlify
1. Drag and drop the `dist` folder after running `npm run build`.
2. Or connect your repository and use the same build settings as above.

## 🧠 Code Quality & Structure

The project is built with professional evaluation criteria in mind:
- **Modular Components**: Separation of concerns between UI, layout, and logic.
- **JSDoc Documentation**: All components and core logic include descriptions and prop documentation.
- **Accessibility (A11y)**: Usage of semantic elements, ARIA labels, and keyboard-friendly interactions.
- **Standardized Styling**: Consistent design language using CSS variables and a mobile-first grid.
- **Resilient Logic**: Advanced link handling (Google Search fallback) and error boundaries.

```
src/
├── components/      # Documented React components
│   ├── UserCard     # Refined display logic with resilient links
│   ├── SearchBar    # Professional filter with clear button
│   ├── Loader       # CSS Animated Spinner
│   └── ErrorMessage # User-friendly fallback UI
├── pages/           # Page containers
│   └── Home         # Search & Fetch orchestration
├── services/        # Service layer
│   └── api.js       # Fetch wrappers
├── App.jsx          # Root entry
└── main.jsx         # Component mounting
```
