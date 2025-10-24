# 🚀 Quick Start Guide - SkyBook React

## Installation & Running

```bash
# Navigate to project
cd skybook-react

# Install dependencies (creates node_modules)
npm install

# Start development server
npm start
```

Your app will open at **http://localhost:3000**

---

## 📋 Quick Command Reference

```bash
# Install dependencies
npm install           # Install all packages
npm install axios     # Add new package

# Run application
npm start            # Development mode (hot reload)
npm run build        # Production build
npm test             # Run tests

# Package management
npm update           # Update packages
npm uninstall axios  # Remove package
```

---

## 🎓 Study Guide - Syllabus Order

### 1. Start Here (Basics)
- **README.md** - Read full syllabus explanations
- **public/index.html** - Single HTML page (SPA concept)
- **src/index.js** - Entry point, ReactDOM

### 2. Core Concepts
- **src/App.js** - Main component with detailed comments
  - What is React
  - React features
  - useState, useEffect
  - State management
  - Fetch API, Promises

### 3. Simple Components
- **src/components/Header.js** - Props, functional component
- **src/components/Hero.js** - JSX syntax
- **src/components/Footer.js** - Simple component

### 4. Advanced Components
- **src/components/SearchFlights.js** - Controlled components, forms
- **src/components/FlightCard.js** - Props, element vs component
- **src/components/FlightResults.js** - List rendering, keys
- **src/components/AuthModal.js** - Complex state, multiple forms

### 5. Supporting Components
- **src/components/About.js** - List rendering practice
- **src/components/Fleet.js** - More list rendering

---

## 🔍 Find Concepts Quickly

### State & Props
- **useState**: SearchFlights.js, AuthModal.js, App.js
- **Props**: Header.js, FlightCard.js
- **State vs Props**: App.js (comments)

### Hooks
- **useEffect**: App.js, SearchFlights.js
- **useState**: All form components

### Rendering
- **Conditional Rendering**: FlightResults.js, AuthModal.js
- **List Rendering**: FlightResults.js, About.js, Fleet.js
- **Keys**: FlightResults.js

### Components
- **Functional Components**: All component files
- **Controlled Components**: SearchFlights.js, AuthModal.js

### JavaScript Concepts
- **Fetch & Promises**: App.js
- **async/await**: App.js
- **Exports**: Every component file

### Configuration
- **package.json**: Root folder
- **.gitignore**: Root folder

---

## 💡 Common Questions Answered

### Q: What happens if I delete node_modules?
**A:** Run `npm install` to restore it

### Q: Where is the Virtual DOM?
**A:** React manages it internally - see comments in App.js

### Q: How do I see reconciliation in action?
**A:** Open React DevTools, check component re-renders

### Q: Where are controlled components?
**A:** SearchFlights.js and AuthModal.js

### Q: How to add new packages?
**A:** `npm install package-name`

---

## 🎯 Quick Tests

Test your knowledge:

1. **JSX**: Find 3 JSX examples → Hero.js
2. **useState**: Find 5 useState examples → SearchFlights.js
3. **useEffect**: Find useEffect with dependency → App.js
4. **Props**: Find component receiving props → FlightCard.js
5. **Keys**: Find list with keys → FlightResults.js
6. **Conditional Rendering**: Find 3 methods → FlightResults.js
7. **Controlled Component**: Find form with value & onChange → SearchFlights.js

---

## 📦 Project Files Map

```
Components:
Header      → Navigation, props demo
Hero        → JSX, static content
SearchFlights → useState, controlled forms, useEffect
FlightResults → List rendering, keys, conditional rendering
FlightCard    → Props, reusable component
About       → List rendering, features
Fleet       → List rendering, images
AuthModal   → Complex state, multiple forms
Footer      → Simple component

Main Files:
App.js      → Root component, state management, ALL concepts
index.js    → Entry point, ReactDOM
index.css   → Global styles
App.css     → Component styles

Config:
package.json      → Dependencies, scripts
.gitignore        → Ignored files
```

---

## ⚡ Hot Tips

1. **Read comments in code** - Every file has educational comments
2. **Start with App.js** - It has the most comprehensive explanations
3. **Console is your friend** - Many useEffect logs help you learn
4. **React DevTools** - Install browser extension to see component tree
5. **Break things** - Change code and see what happens!

---

## 🔧 Troubleshooting

| Problem | Solution |
|---------|----------|
| `npm: command not found` | Install Node.js |
| Port 3000 in use | `PORT=3001 npm start` |
| Changes not showing | Restart server (Ctrl+C, npm start) |
| node_modules missing | `npm install` |
| Dependency errors | `npm cache clean --force` then `npm install` |

---

## 📚 Learning Path (30 minutes)

```
5 min  → Read README "What is React" section
5 min  → Study index.js and App.js structure
10 min → Explore SearchFlights.js (useState, forms)
5 min  → Check FlightResults.js (keys, lists)
5 min  → Review AuthModal.js (complex state)
```

---

## ✨ Next Steps

After understanding this project:

1. **Add features**: New component, API integration
2. **Styling**: Customize CSS
3. **Routing**: Add React Router
4. **State Management**: Try Redux or Context API
5. **Build**: Run `npm run build` and deploy

---

## 🎓 Exam Prep Checklist

Before your exam, make sure you can:

- [ ] Explain what React is and its history
- [ ] Write JSX syntax
- [ ] Create functional components
- [ ] Use useState hook
- [ ] Use useEffect hook with dependencies
- [ ] Understand props and state difference
- [ ] Implement controlled components
- [ ] Render lists with keys
- [ ] Use conditional rendering
- [ ] Explain Virtual DOM vs Real DOM
- [ ] Know what npm install does
- [ ] Understand package.json structure
- [ ] Explain SPA concept
- [ ] Know difference between library and framework

---

**Happy Learning! 🎉**

For detailed explanations, see README.md
For code examples, explore src/components/