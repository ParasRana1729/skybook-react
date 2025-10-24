# ✈️ SkyBook React - Flight Booking Application

A modern flight booking website built with **React** to demonstrate all core React concepts covered in your syllabus.

---

## 📚 Complete Syllabus Coverage

This project demonstrates **ALL** the concepts from your syllabus with practical examples.

---

## 🎯 What is React?

**React** is a **JavaScript library** for building user interfaces, specifically for creating interactive and dynamic web applications.

### Key Points:
- **Created by**: Facebook (Meta) - Jordan Walke
- **Purpose**: Building reusable UI components
- **Type**: Library (not a framework)
- **Focus**: View layer of applications
- **Philosophy**: Component-based architecture

### Why React?
- Makes building complex UIs easier
- Breaks UI into reusable components
- Fast and efficient updates using Virtual DOM
- Large community and ecosystem

---

## 📖 History Behind React

### Timeline:
- **2011**: Created by Jordan Walke at Facebook
- **2013**: Open-sourced at JSConf US
- **2015**: React Native released for mobile development
- **2016**: React 15 released
- **2017**: React 16 (Fiber) - complete rewrite with better performance
- **2019**: React Hooks introduced (v16.8) - revolutionized functional components
- **2020**: Concurrent Mode experimental features
- **2022**: React 18 released with automatic batching and concurrent features

### Why was React created?
- Facebook needed dynamic UIs for News Feed
- Traditional approaches were slow and hard to maintain
- Needed better way to handle frequent UI updates

---

## ⭐ React Features

1. **Component-Based Architecture**
   - Build encapsulated components that manage their own state
   - Compose components to build complex UIs

2. **Declarative**
   - Describe what UI should look like for any state
   - React handles updating the DOM efficiently

3. **Virtual DOM**
   - In-memory representation of real DOM
   - Fast diffing algorithm to find changes
   - Updates only what changed in real DOM

4. **JSX (JavaScript XML)**
   - Write HTML-like syntax in JavaScript
   - Makes code more readable and intuitive

5. **One-Way Data Flow**
   - Data flows down from parent to child via props
   - Predictable and easier to debug

6. **Hooks**
   - Use state and lifecycle features in functional components
   - useState, useEffect, useContext, etc.

7. **Reusability**
   - Components can be reused across application
   - Reduces code duplication

8. **Large Ecosystem**
   - Thousands of libraries and tools
   - Active community support

---

## 🔤 What is JSX?

**JSX** stands for **JavaScript XML** - a syntax extension for JavaScript.

### Examples in this project:

```javascript
// JSX Example from Hero.js
const element = (
  <div className="hero-content">
    <h2>Professional Flight Solutions</h2>
    <p>Trusted by businesses worldwide</p>
  </div>
);
```

### Key Features of JSX:
- Looks like HTML but it's JavaScript
- Use `className` instead of `class` (class is reserved in JS)
- Use `htmlFor` instead of `for`
- Can embed JavaScript expressions using `{}`
- Self-closing tags must have `/` (e.g., `<img />`)

### JSX Compilation:
```javascript
// JSX
<h1>Hello, {name}!</h1>

// Compiles to:
React.createElement('h1', null, 'Hello, ', name, '!');
```

**Where to see JSX in project**: All `.js` files in `src/components/`

---

## 🧩 Difference Between Element and Component

### Component (Blueprint):
A function or class that returns React elements.

```javascript
// Component - can be reused multiple times
const FlightCard = (props) => {
  return <div>{props.airline}</div>;
};
```

### Element (Instance):
An object describing what should appear on screen.

```javascript
// Element - specific instance of component
<FlightCard airline="SkyWings" />
```

### Think of it as:
- **Component** = Recipe (reusable instructions)
- **Element** = Meal (specific instance)

**Where to see**: `FlightCard.js` (component) used in `FlightResults.js` (elements)

---

## 🏗️ How Do You Create Component in React?

### Method 1: Functional Component (Modern & Recommended)

```javascript
// Example from Header.js
function Header({ currentUser, onAuthClick }) {
  return (
    <header>
      <h1>SkyBook</h1>
      {/* Component content */}
    </header>
  );
}
```

### Method 2: Arrow Function Component

```javascript
// Example from Footer.js
const Footer = () => {
  return (
    <footer>
      <p>&copy; 2025 SkyBook</p>
    </footer>
  );
};
```

### Method 3: Class Component (Older way, not used in this project)

```javascript
class Header extends React.Component {
  render() {
    return <header>...</header>;
  }
}
```

**Where to see**: All files in `src/components/` folder

---

## 💪 Why Do We Use Functional Component?

### Advantages:

1. **Simpler Syntax**
   - Less boilerplate code
   - Easier to read and write

2. **Hooks Support**
   - Can use useState, useEffect, etc.
   - Modern React features

3. **Better Performance**
   - No `this` keyword overhead
   - Easier for JavaScript engine to optimize

4. **Easier to Test**
   - Pure functions are simpler to test
   - Predictable output for given input

5. **Modern Best Practice**
   - React team recommends functional components
   - Future React features will focus on functions

6. **Cleaner Code**
   ```javascript
   // Functional (Clean)
   const Greeting = ({ name }) => <h1>Hello, {name}!</h1>;
   
   // vs Class (More code)
   class Greeting extends React.Component {
     render() {
       return <h1>Hello, {this.props.name}!</h1>;
     }
   }
   ```

**Where to see**: All components in this project are functional!

---

## 📦 What is State in React?

**State** is data that changes over time and determines what the component renders.

### Characteristics:
- **Mutable**: Can be changed by the component
- **Local**: Owned by the component
- **Triggers Re-render**: When state changes, component re-renders
- **Initialized**: Set with initial value

### Example from SearchFlights.js:

```javascript
const [formData, setFormData] = useState({
  from: '',
  to: '',
  departure: '',
  passengers: ''
});

// Update state
setFormData({ ...formData, from: 'New York' });
```

### When to Use State:
- Form inputs (controlled components)
- UI state (modals open/closed)
- Data that changes (search results)
- User interactions

**Where to see**: `SearchFlights.js`, `AuthModal.js`, `App.js`

---

## 🎁 What is Props?

**Props** (properties) are data passed from parent component to child component.

### Characteristics:
- **Immutable**: Cannot be changed by child component
- **Read-Only**: Child can only read, not modify
- **Flow Downward**: Parent to child (one-way data flow)
- **Any Data Type**: Strings, numbers, objects, functions, etc.

### Example from Header.js:

```javascript
// Parent passes props
<Header 
  currentUser={user} 
  onAuthClick={handleClick} 
/>

// Child receives props
const Header = ({ currentUser, onAuthClick }) => {
  return <div>{currentUser.name}</div>;
};
```

**Where to see**: `Header.js`, `FlightCard.js`, `Hero.js`

---

## ⚖️ Difference Between State and Props

| Aspect | State | Props |
|--------|-------|-------|
| **Ownership** | Owned by component | Passed from parent |
| **Mutability** | Mutable (can change) | Immutable (read-only) |
| **Changes** | Changed by component | Changed by parent |
| **Purpose** | Internal component data | Component configuration |
| **Re-render** | Triggers re-render | Triggers re-render |
| **Declaration** | useState() | Function parameters |

### Visual Example:

```javascript
// App.js (Parent)
const [user, setUser] = useState(null); // STATE - owned by App

return <Header currentUser={user} />; // PROPS - passed to Header

// Header.js (Child)
const Header = ({ currentUser }) => { // PROPS - received from parent
  // Cannot do: currentUser = "new value" ❌
  // Can only read: currentUser.name ✅
};
```

**Where to see**: `App.js` (manages state), `Header.js` (receives props)

---

## 📥 How to Retrieve node_modules Folder After Deletion?

### Answer: Run `npm install` (or `npm i`)

```bash
npm install
```

### What This Does:
1. Reads `package.json` file
2. Downloads all dependencies listed
3. Creates `node_modules` folder
4. Installs all packages and their dependencies

### Why It Works:
- `package.json` contains list of all dependencies
- NPM registry stores all packages
- `package-lock.json` ensures same versions are installed

**Note**: This is why we include `package.json` in Git but not `node_modules`

---

## 📦 What Happens When We Do npm install?

### Step-by-Step Process:

1. **Reads package.json**
   - Looks at "dependencies" section
   - Looks at "devDependencies" section

2. **Checks package-lock.json**
   - Ensures exact same versions are installed
   - Maintains consistency across installations

3. **Downloads Packages**
   - Connects to NPM registry (https://npmjs.com)
   - Downloads specified packages

4. **Installs Dependencies**
   - Installs each package's dependencies
   - Creates dependency tree

5. **Creates node_modules**
   - Folder structure with all packages
   - Nested dependencies

6. **Updates package-lock.json**
   - Records exact versions installed
   - Creates reproducible builds

### Example Output:
```
added 1234 packages from 456 contributors
found 0 vulnerabilities
```

---

## 🔄 What is Reconciliation?

**Reconciliation** is React's algorithm for efficiently updating the DOM.

### How It Works:

1. **State/Props Change**
   - Component state or props update

2. **Create New Virtual DOM**
   - React creates new virtual representation

3. **Diffing (Comparison)**
   - Compares new virtual DOM with previous one
   - Finds what actually changed

4. **Calculate Minimal Changes**
   - Determines smallest set of updates needed

5. **Update Real DOM**
   - Applies only necessary changes to real DOM

6. **Batching**
   - Groups multiple updates together for performance

### Example:

```javascript
// Old Virtual DOM
<div>
  <h1>Hello</h1>
  <p>World</p>
</div>

// New Virtual DOM
<div>
  <h1>Hello</h1>
  <p>React</p>  // Only this changed
</div>

// Reconciliation Result:
// Only updates the <p> text from "World" to "React"
// Doesn't recreate the entire div or h1
```

**Where it happens**: Automatically by React in all components

---

## ⚡ Why React is Fast?

### 1. **Virtual DOM**
- Lightweight copy of real DOM in memory
- Fast to manipulate (just JavaScript objects)
- No expensive DOM operations until necessary

### 2. **Reconciliation (Diffing Algorithm)**
- Smart comparison of old vs new virtual DOM
- Updates only what changed
- Avoids unnecessary DOM manipulations

### 3. **Batching**
- Groups multiple state updates together
- Single re-render instead of multiple
- Reduces performance overhead

### 4. **Component-Based**
- Only affected components re-render
- Rest of the app stays untouched
- Isolated updates

### 5. **Efficient Updates**
- Minimal DOM manipulations
- Reuses existing DOM nodes when possible
- Smart key-based list updates

### Example:
```javascript
// Without React (Slow)
document.getElementById('item1').innerHTML = 'New text';
document.getElementById('item2').innerHTML = 'New text';
document.getElementById('item3').innerHTML = 'New text';
// Each line triggers browser reflow/repaint

// With React (Fast)
setState({ items: newItems });
// React batches all updates, applies changes once
```

---

## 🆚 Difference Between Actual DOM and Virtual DOM

| Aspect | Actual DOM | Virtual DOM |
|--------|------------|-------------|
| **What is it?** | Browser's HTML representation | JavaScript object |
| **Speed** | Slow to update | Fast to update |
| **Updates** | Direct, expensive | In-memory, cheap |
| **Re-rendering** | Entire subtree | Only changed parts |
| **Memory** | Heavy | Lightweight |
| **Manipulation** | Triggers reflow/repaint | No visual change |
| **Access** | document.getElementById() | React manages it |

### Visual Comparison:

```javascript
// ACTUAL DOM (Slow)
document.getElementById('price').innerHTML = '$899';
// Browser recalculates styles, repaints, etc.

// VIRTUAL DOM (Fast)
{ type: 'div', props: { children: '$899' } }
// Just a JavaScript object, very fast

// React compares virtual DOMs, then updates real DOM efficiently
```

### Why Virtual DOM is Faster:
1. **DOM operations are expensive** (browser has to recalculate layout, styles, etc.)
2. **JavaScript is fast** (comparing objects in memory is cheap)
3. **Batch updates** (apply multiple changes at once to real DOM)

---

## 🎣 What is useState?

**useState** is a React Hook that lets you add state to functional components.

### Syntax:
```javascript
const [stateValue, setStateValue] = useState(initialValue);
```

### Parts:
- `stateValue`: Current state value
- `setStateValue`: Function to update state
- `initialValue`: Starting value for state

### Example from SearchFlights.js:

```javascript
const [formData, setFormData] = useState({
  from: '',
  to: '',
  departure: ''
});

// Read state
console.log(formData.from);

// Update state
setFormData({ ...formData, from: 'New York' });
```

### Important Rules:
1. Only call at top level of component (not in loops/conditions)
2. Updating state triggers component re-render
3. State updates are asynchronous
4. Use functional update for state based on previous state

### Multiple useState:
```javascript
const [name, setName] = useState('');
const [age, setAge] = useState(0);
const [email, setEmail] = useState('');
```

**Where to see**: `SearchFlights.js`, `AuthModal.js`, `App.js`

---

## 🎣 What is useEffect?

**useEffect** is a React Hook for performing side effects in functional components.

### What are Side Effects?
- Data fetching
- Subscriptions
- Manually changing DOM
- Timers
- Logging

### Syntax:
```javascript
useEffect(() => {
  // Side effect code here
  
  return () => {
    // Cleanup code (optional)
  };
}, [dependencies]);
```

### Example from App.js:

```javascript
useEffect(() => {
  // Runs after component renders
  console.log('Component mounted');
  
  const savedUser = localStorage.getItem('currentUser');
  if (savedUser) {
    setCurrentUser(JSON.parse(savedUser));
  }
  
  // Cleanup function
  return () => {
    console.log('Component will unmount');
  };
}, []); // Empty array = run once on mount
```

### Three Ways to Use useEffect:

```javascript
// 1. Run on every render
useEffect(() => {
  console.log('Runs after every render');
});

// 2. Run once on mount
useEffect(() => {
  console.log('Runs once after first render');
}, []);

// 3. Run when dependencies change
useEffect(() => {
  console.log('Runs when count changes');
}, [count]);
```

**Where to see**: `SearchFlights.js`, `App.js`

---

## 🔗 Why Do We Use Dependency Array in useEffect?

### Purpose:
Control **WHEN** the effect runs - optimization and correctness.

### Dependency Array Options:

#### 1. No Dependency Array
```javascript
useEffect(() => {
  console.log('Runs after EVERY render');
});
// ⚠️ Usually avoided - causes too many runs
```

#### 2. Empty Array `[]`
```javascript
useEffect(() => {
  console.log('Runs ONCE after initial render');
}, []);
// ✅ Good for: mounting logic, API calls, subscriptions
```

#### 3. With Dependencies `[var1, var2]`
```javascript
useEffect(() => {
  console.log('Runs when count or name changes');
}, [count, name]);
// ✅ Good for: reacting to specific changes
```

### Why It's Important:

```javascript
// ❌ BAD - Infinite loop!
const [count, setCount] = useState(0);
useEffect(() => {
  setCount(count + 1); // Updates count
}); // No dependency array = runs after every render
// This causes: render → effect → setCount → render → effect → ...

// ✅ GOOD - Runs only when needed
useEffect(() => {
  // Only runs when userName changes
  console.log('User changed:', userName);
}, [userName]);
```

### Real Example from SearchFlights.js:

```javascript
useEffect(() => {
  // Update return date minimum when departure changes
  if (formData.departure) {
    console.log('Departure changed:', formData.departure);
  }
}, [formData.departure]); // Only runs when departure changes
```

**Benefits:**
1. **Performance**: Avoids unnecessary effect runs
2. **Correctness**: Effect runs only when relevant data changes
3. **Prevents bugs**: Avoids infinite loops and stale data

---

## 🌐 What Do You Understand By Fetch Method?

**fetch()** is a modern JavaScript API for making HTTP requests (AJAX calls).

### Basic Syntax:
```javascript
fetch(url)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

### With Async/Await (Modern):
```javascript
async function getFlights() {
  try {
    const response = await fetch('https://api.skybook.com/flights');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
}
```

### Example from App.js:

```javascript
const fetchFlights = async (searchParams) => {
  try {
    const response = await fetch('https://api.skybook.com/flights', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(searchParams)
    });
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching flights:', error);
    return [];
  }
};
```

### fetch() Options:

```javascript
fetch(url, {
  method: 'POST',        // GET, POST, PUT, DELETE, etc.
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer token'
  },
  body: JSON.stringify(data) // Request payload
})
```

### Important Methods:
- `response.json()` - Parse JSON response
- `response.text()` - Get text response
- `response.ok` - Check if request successful (status 200-299)
- `response.status` - HTTP status code

---

## ⏳ Is It Possible to Write await Without async Function?

### Answer: **NO** (mostly)

### Why?
- `await` can **only** be used inside `async` functions
- `await` pauses execution until Promise resolves
- JavaScript needs to know function is asynchronous

### Examples:

```javascript
// ❌ WRONG - Will cause error
function getData() {
  const data = await fetch(url); // SyntaxError!
  return data;
}

// ✅ CORRECT - async function
async function getData() {
  const data = await fetch(url); // Works!
  return data;
}

// ✅ CORRECT - async arrow function
const getData = async () => {
  const data = await fetch(url);
  return data;
};
```

### Exception: Top-level await (ES2022)
In modules, you can use await at top level (not in this project):

```javascript
// In a module file
const data = await fetch(url); // Works in modules only
```

### Why async/await Go Together:

```javascript
// async function always returns a Promise
async function example() {
  return "Hello"; // Automatically wrapped in Promise
}

// Same as:
function example() {
  return Promise.resolve("Hello");
}

// await unwraps Promises
const result = await example(); // result = "Hello"
```

**Where to see**: `App.js` - `fetchFlights()` function

---

## 🤝 What is Promises?

**Promise** is an object representing the eventual completion (or failure) of an asynchronous operation.

### Three States:

1. **Pending**: Initial state, operation ongoing
2. **Fulfilled**: Operation completed successfully
3. **Rejected**: Operation failed

### Creating a Promise:

```javascript
const promise = new Promise((resolve, reject) => {
  // Async operation
  if (success) {
    resolve(data); // Success
  } else {
    reject(error); // Failure
  }
});
```

### Using Promises:

```javascript
// Method 1: .then() and .catch()
promise
  .then(result => {
    console.log('Success:', result);
  })
  .catch(error => {
    console.error('Error:', error);
  })
  .finally(() => {
    console.log('Always runs');
  });

// Method 2: async/await
async function handlePromise() {
  try {
    const result = await promise;
    console.log('Success:', result);
  } catch (error) {
    console.error('Error:', error);
  }
}
```

### Real-World Example:

```javascript
// Simulating API call
const fetchUserData = (userId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId > 0) {
        resolve({ id: userId, name: 'John' });
      } else {
        reject('Invalid user ID');
      }
    }, 1000);
  });
};

// Using the Promise
fetchUserData(5)
  .then(user => console.log(user))
  .catch(error => console.error(error));
```

### Promise Chaining:

```javascript
fetch('https://api.example.com/user')
  .then(response => response.json())  // Returns promise
  .then(data => {
    console.log(data);
    return fetch(`https://api.example.com/posts/${data.id}`);
  })
  .then(response => response.json())
  .then(posts => console.log(posts))
  .catch(error => console.error(error));
```

### Why Promises?
- Handle async operations cleanly
- Avoid "callback hell"
- Better error handling
- Composable and chainable

---

## 🎨 What is react-dom?

### DIFFERENCE BETWEEN REACT AND REACT-DOM

#### **React** (Core Library)
- Platform-agnostic core functionality
- Provides component logic, hooks, state management
- Can be used with any renderer

```javascript
import React, { useState, useEffect } from 'react';
```

**Provides:**
- Component creation
- Hooks (useState, useEffect, etc.)
- JSX transformation
- Virtual DOM logic
- Reconciliation algorithm

#### **ReactDOM** (Web Renderer)
- Renders React components to browser DOM
- Platform-specific (web browsers only)
- Connects React to actual HTML DOM

```javascript
import ReactDOM from 'react-dom/client';
```

**Provides:**
- `createRoot()` - Create root for React app
- `render()` - Render components to DOM
- `unmountComponentAtNode()` - Remove component
- `findDOMNode()` - Access actual DOM node

### Why Separate?

This separation allows React to work with different platforms:

- **react-dom** → Web browsers (HTML DOM)
- **react-native** → Mobile apps (iOS/Android)
- **react-three-fiber** → 3D graphics (Three.js)
- **ink** → Terminal applications

### Example from index.js:

```javascript
import React from 'react';           // Core React
import ReactDOM from 'react-dom/client'; // DOM renderer
import App from './App';

// ReactDOM renders React component to browser
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
```

### Analogy:
- **React** = Artist (creates the painting)
- **ReactDOM** = Gallery (displays painting on wall)
- Same artist (React) can display in different galleries (ReactDOM, React Native, etc.)

---

## 📤 Difference Between Named and Default Export

### Default Export (One per file)

```javascript
// Exporting
const Header = () => <div>Header</div>;
export default Header;

// OR
export default function Header() {
  return <div>Header</div>;
}

// Importing (can use any name)
import Header from './Header';
import MyHeader from './Header';  // Different name works!
import Whatever from './Header';  // This too!
```

### Named Export (Multiple per file)

```javascript
// Exporting
export const Header = () => <div>Header</div>;
export const Footer = () => <div>Footer</div>;
export const Sidebar = () => <div>Sidebar</div>;

// OR
const Header = () => <div>Header</div>;
const Footer = () => <div>Footer</div>;
export { Header, Footer };

// Importing (must use exact names)
import { Header } from './components';
import { Header, Footer } from './components';
import { Header as MyHeader } from './components'; // Rename with 'as'
```

### Comparison:

| Aspect | Default Export | Named Export |
|--------|----------------|--------------|
| **Per File** | One only | Multiple |
| **Import Name** | Any name | Exact name (or alias) |
| **Syntax** | No curly braces | Curly braces `{}` |
| **Rename** | Automatic | Use `as` keyword |
| **Common Use** | Main component | Utilities, helpers |

### Examples in This Project:

```javascript
// Default Export (App.js)
export default App;
import App from './App';  // Can name anything

// Named Export (could be used)
export { Header, Footer };
import { Header, Footer } from './components';
```

### Mixing Both:

```javascript
// File: utils.js
export const add = (a, b) => a + b;      // Named
export const subtract = (a, b) => a - b;  // Named
export default function multiply(a, b) {  // Default
  return a * b;
}

// Importing
import multiply, { add, subtract } from './utils';
```

---

## 📄 What Does package.json Contain?

**package.json** is the configuration file for your Node.js/React project.

### Our package.json Structure:

```json
{
  "name": "skybook-react",
  "version": "1.0.0",
  "description": "SkyBook Flight Booking - React Application",
  "private": true,
  
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-scripts": "5.0.1"
  },
  
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test"
  }
}
```

### Key Sections:

#### 1. **Metadata**
```json
"name": "skybook-react",        // Project name
"version": "1.0.0",             // Project version
"description": "...",           // Project description
"private": true,                // Prevents accidental publishing to NPM
"author": "Your Name",          // Author info
"license": "MIT"                // License type
```

#### 2. **dependencies**
Packages needed for production:
```json
"dependencies": {
  "react": "^18.2.0",           // React library
  "react-dom": "^18.2.0",       // React DOM renderer
  "axios": "^1.4.0"             // HTTP client (example)
}
```

Version symbols:
- `^18.2.0` - Compatible with 18.x.x (minor updates OK)
- `~18.2.0` - Compatible with 18.2.x (patch updates only)
- `18.2.0` - Exact version only

#### 3. **devDependencies**
Packages needed only for development:
```json
"devDependencies": {
  "eslint": "^8.0.0",           // Code linting
  "@testing-library/react": "^13.0.0"  // Testing
}
```

#### 4. **scripts**
Commands you can run:
```json
"scripts": {
  "start": "react-scripts start",    // npm start
  "build": "react-scripts build",    // npm run build
  "test": "react-scripts test"       // npm test
}
```

Run with: `npm start`, `npm run build`, `npm test`

#### 5. **browserslist**
Target browsers for build:
```json
"browserslist": {
  "production": [">0.2%", "not dead"],
  "development": ["last 1 chrome version"]
}
```

---

## 🔒 Can I Change package-lock.json File?

### Answer: **Generally, NO - Don't modify it manually!**

### What is package-lock.json?

- **Auto-generated** file by npm
- **Records exact versions** of every package installed
- **Ensures consistency** across different installations
- **Includes dependency tree** with all nested dependencies

### Why It Exists:

```
Your app needs React 18.2.0
React needs loose-envify ^1.1.0
loose-envify needs js-tokens ^3.0.0 || ^4.0.0

package-lock.json records EXACT versions:
- React: 18.2.0
- loose-envify: 1.4.0
- js-tokens: 4.0.0
```

### Should You Edit It?

**NO** - Let npm manage it:

```bash
# ✅ RIGHT WAY
npm install package-name      # Updates package-lock.json automatically
npm update                    # Updates dependencies
npm install                   # Respects package-lock.json

# ❌ WRONG WAY
# Manually editing package-lock.json
```

### Should You Commit It?

**YES** - Always commit to Git:
- Ensures team uses same versions
- Reproducible builds
- Prevents "works on my machine" issues

### When It Changes:

- Adding new package: `npm install axios`
- Removing package: `npm uninstall axios`
- Updating package: `npm update react`
- Running `npm install` with updated package.json

### Difference:

| File | Purpose | Edit? | Commit? |
|------|---------|-------|---------|
| **package.json** | List dependencies | ✅ Yes | ✅ Yes |
| **package-lock.json** | Lock exact versions | ❌ No | ✅ Yes |

---

## 📦 Difference Between dependencies and devDependencies

### **dependencies**
Packages needed to **RUN** the application in production.

```json
"dependencies": {
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "axios": "^1.4.0"
}
```

**Installed by**: `npm install` (always installed)

**Used in**: Production environment

**Examples**:
- React, React-DOM (core libraries)
- Axios (HTTP requests)
- Redux (state management)
- React Router (navigation)

### **devDependencies**
Packages needed only for **DEVELOPMENT** - not in production.

```json
"devDependencies": {
  "@testing-library/react": "^13.0.0",
  "eslint": "^8.0.0",
  "prettier": "^2.8.0"
}
```

**Installed by**: `npm install` (in dev mode)

**NOT installed by**: `npm install --production`

**Used in**: Development only (testing, linting, building)

**Examples**:
- Testing libraries
- Linters (ESLint)
- Formatters (Prettier)
- Build tools

### Comparison:

| Aspect | dependencies | devDependencies |
|--------|--------------|-----------------|
| **Used in** | Production + Dev | Development only |
| **npm install** | Always installed | Installed in dev |
| **npm install --production** | Installed | NOT installed |
| **Bundle size** | Affects size | No affect |
| **Examples** | react, axios | eslint, jest |

### Why Separate?

1. **Smaller production builds** - Don't ship dev tools to users
2. **Faster deployment** - Skip unnecessary packages in production
3. **Security** - Fewer packages = smaller attack surface
4. **Clarity** - Clear what's needed where

---

## 📁 What Does .gitignore File Contain?

**.gitignore** tells Git which files/folders to ignore (not track in version control).

### Our .gitignore:

```
# Dependencies
/node_modules
/.pnp
.pnp.js

# Testing
/coverage

# Production builds
/build

# Misc
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local

# Logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Optional
.eslintcache
```

### Why Ignore Files?

#### 1. **node_modules** (ALWAYS ignore)
- **Why**: Huge folder (100+ MB), can be regenerated
- **How to get back**: Run `npm install`
- **Reason**: Listed in package.json, anyone can download

#### 2. **build** folder
- **Why**: Generated files, not source code
- **How to get back**: Run `npm run build`
- **Reason**: Can be rebuilt from source

#### 3. **.env files**
- **Why**: Contains secrets (API keys, passwords)
- **Security**: NEVER commit secrets to Git
- **Alternative**: Use .env.example as template

#### 4. **Log files**
- **Why**: Personal/temporary, not needed in repo
- **Reason**: Each developer generates their own

#### 5. **.DS_Store** (macOS)
- **Why**: macOS system file
- **Reason**: Not needed for project

### What TO Commit:

✅ Source code (.js, .jsx, .css)
✅ package.json & package-lock.json
✅ README.md
✅ Configuration files
✅ Public assets (images, fonts)

### What NOT to Commit:

❌ node_modules
❌ Build output
❌ Secrets (.env with API keys)
❌ System files (.DS_Store)
❌ IDE config (.vscode, .idea)
❌ Log files

---

## 🌍 What Do You Understand By Cross Origin?

**Cross-Origin** refers to requests made between different origins (domains).

### What is an Origin?

An origin consists of three parts:
1. **Protocol** (http vs https)
2. **Domain** (example.com)
3. **Port** (3000, 80, 443)

### Examples:

```
Same Origin:
https://skybook.com/flights
https://skybook.com/search
✅ Same protocol, domain, port

Cross-Origin:
https://skybook.com        → https://api.skybook.com
✅ Different subdomain = Cross-Origin

https://skybook.com        → http://skybook.com
✅ Different protocol = Cross-Origin

https://skybook.com:3000   → https://skybook.com:8080
✅ Different port = Cross-Origin
```

### CORS (Cross-Origin Resource Sharing)

Browser security feature that restricts cross-origin HTTP requests.

### Example Problem:

```javascript
// Your React app runs on: http://localhost:3000
// API server runs on: http://localhost:5000

fetch('http://localhost:5000/api/flights')
  .then(response => response.json())
  .catch(error => console.error(error));

// ❌ Error: CORS policy blocked the request
```

### Solution - Server Must Allow:

```javascript
// Backend (Node.js/Express)
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
```

### Why CORS Exists?

**Security**: Prevents malicious websites from:
- Stealing your data from other sites
- Making unauthorized requests
- Accessing your authentication cookies

### Common CORS Scenarios:

1. **Frontend and Backend on different domains**
   - React app: https://skybook.com
   - API: https://api.skybook.com

2. **Development environment**
   - React dev server: http://localhost:3000
   - API server: http://localhost:5000

3. **Third-party APIs**
   - Your site: https://mysite.com
   - API: https://api.external.com

### Headers Involved:

```
Request Header:
Origin: https://skybook.com

Response Headers:
Access-Control-Allow-Origin: https://skybook.com
Access-Control-Allow-Methods: GET, POST
Access-Control-Allow-Headers: Content-Type
```

---

## 🌐 What is CDN?

**CDN** stands for **Content Delivery Network** - a network of servers distributed globally.

### How CDN Works:

```
User in India requests file
    ↓
CDN routes to nearest server (Mumbai)
    ↓
Fast delivery (low latency)

vs

User in India → Server in USA
    ↓
Slow (high latency, long distance)
```

### Benefits:

1. **Faster Loading**
   - Content served from nearest server
   - Reduced latency

2. **Better Performance**
   - Cached content
   - Reduced load on origin server

3. **Reliability**
   - Multiple servers (redundancy)
   - If one fails, others work

4. **Cost Effective**
   - Reduces bandwidth costs
   - Offloads traffic from main server

### Using React from CDN:

```html
<!-- Loading React from CDN -->
<script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
```

### Popular CDNs:

- **unpkg** - NPM package CDN
- **jsDelivr** - Open source CDN
- **Cloudflare** - Global CDN
- **AWS CloudFront** - Amazon's CDN
- **Google Fonts** - Font CDN (used in our project!)

### Example in Our Project:

```html
<!-- From public/index.html -->
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans..." rel="stylesheet">
```

This loads fonts from Google's CDN instead of our server.

### CDN vs Local Files:

| Aspect | CDN | Local |
|--------|-----|-------|
| **Speed** | Fast (nearby server) | Depends on hosting |
| **Caching** | Cached across sites | Only your site |
| **Bandwidth** | Saves your bandwidth | Uses your bandwidth |
| **Reliability** | High (multiple servers) | Depends on your server |
| **Control** | Less control | Full control |

---

## 📚 Difference Between Library and Framework?

### **Library** (like React)

A collection of functions/components **you call**.

**YOU are in control** - You decide when to use it.

```javascript
// Library - You call React when you want
import React from 'react';
import ReactDOM from 'react-dom';

// You control the flow
ReactDOM.render(<App />, document.getElementById('root'));
```

### **Framework** (like Angular)

A complete structure that **calls your code**.

**FRAMEWORK is in control** - It decides when to call your code.

```typescript
// Framework - Angular calls your code
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  // Framework calls this at the right time
  ngOnInit() {
    // Your code here
  }
}
```

### Key Differences:

| Aspect | Library | Framework |
|--------|---------|-----------|
| **Control** | You control flow | Framework controls flow |
| **Flexibility** | Very flexible | More opinionated |
| **Learning Curve** | Usually easier | Usually steeper |
| **Size** | Smaller, focused | Larger, complete |
| **Examples** | React, Lodash, Axios | Angular, Vue, Next.js |
| **Usage** | Pick what you need | Use provided structure |
| **Architecture** | You decide | Framework decides |

### Analogy:

**Library = Tools in a toolbox**
- You pick which tools to use
- You decide how to build
- Example: Hammer, saw, drill

**Framework = House blueprint**
- Framework provides structure
- You fill in the details
- Example: Complete building plan

### React: Library or Framework?

**React is a LIBRARY** because:
- Only handles UI (view layer)
- You choose routing library (React Router)
- You choose state management (Redux, Context)
- You control application structure
- Flexible and unopinionated

### Code Example:

```javascript
// LIBRARY (React)
// You decide WHEN to render
function MyApp() {
  const [show, setShow] = useState(false);
  
  // YOU control when to use React features
  if (show) {
    return <Component />; // You decide
  }
  return null;
}

// FRAMEWORK (Angular)
// Framework decides WHEN to call lifecycle methods
export class MyComponent {
  ngOnInit() {
    // Framework calls this automatically
  }
  ngOnDestroy() {
    // Framework calls this automatically
  }
}
```

---

## 🔀 What is Conditional Rendering?

**Conditional Rendering** means showing different UI based on conditions (if/else logic in JSX).

### Method 1: if/else Statement

```javascript
function Greeting({ isLoggedIn }) {
  if (isLoggedIn) {
    return <h1>Welcome back!</h1>;
  } else {
    return <h1>Please sign in.</h1>;
  }
}
```

### Method 2: Ternary Operator (Most Common)

```javascript
function Greeting({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? (
        <h1>Welcome back!</h1>
      ) : (
        <h1>Please sign in.</h1>
      )}
    </div>
  );
}
```

### Method 3: Logical AND (&&)

```javascript
function Mailbox({ unreadMessages }) {
  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 && (
        <h2>You have {unreadMessages.length} unread messages.</h2>
      )}
    </div>
  );
}
```

### Method 4: Element Variable

```javascript
function LoginControl({ isLoggedIn }) {
  let button;
  
  if (isLoggedIn) {
    button = <LogoutButton />;
  } else {
    button = <LoginButton />;
  }
  
  return <div>{button}</div>;
}
```

### Method 5: Return null (Render Nothing)

```javascript
function Warning({ show }) {
  if (!show) {
    return null; // Renders nothing
  }
  
  return <div className="warning">Warning!</div>;
}
```

### Examples from Our Project:

#### From Header.js:
```javascript
{currentUser ? `Logout (${currentUser.name})` : 'Login'}
```

#### From FlightResults.js:
```javascript
{flights.length === 0 ? (
  <div className="no-results">
    <h4>No flights found</h4>
  </div>
) : (
  flights.map(flight => <FlightCard key={flight.id} flight={flight} />)
)}
```

#### From AuthModal.js:
```javascript
if (!show) {
  return null; // Don't render modal
}
```

### Best Practices:

1. **Use && for simple conditions**
   ```javascript
   {isLoading && <Spinner />}
   ```

2. **Use ternary for if/else**
   ```javascript
   {isLoading ? <Spinner /> : <Content />}
   ```

3. **Use early return for complex logic**
   ```javascript
   if (!data) return <Loading />;
   return <Content data={data} />;
   ```

4. **Avoid nesting too deep**
   ```javascript
   // ❌ Hard to read
   {a ? (b ? (c ? <X /> : <Y />) : <Z />) : <W />}
   
   // ✅ Better - use helper function
   const getComponent = () => {
     if (a && b && c) return <X />;
     if (a && b) return <Y />;
     if (a) return <Z />;
     return <W />;
   };
   ```

---

## 🎭 What Do You Understand By Renderer?

A **renderer** is responsible for rendering React components to a specific platform.

### React Architecture:

```
React (Core)
    ↓
Renderer (Platform-specific)
    ↓
Target Platform (DOM, Mobile, etc.)
```

### Types of Renderers:

#### 1. **ReactDOM** - Web Browser Renderer

Renders React components to HTML DOM.

```javascript
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
```

**Target**: Web browsers
**Output**: HTML DOM elements

#### 2. **React Native** - Mobile Renderer

Renders React components to native mobile UI.

```javascript
import { AppRegistry } from 'react-native';
import App from './App';

AppRegistry.registerComponent('MyApp', () => App);
```

**Target**: iOS and Android
**Output**: Native mobile components

#### 3. **React Three Fiber** - 3D Renderer

Renders React components to 3D graphics.

```javascript
import { Canvas } from '@react-three/fiber';

<Canvas>
  <mesh>
    <boxGeometry />
  </mesh>
</Canvas>
```

**Target**: WebGL (Three.js)
**Output**: 3D graphics

#### 4. **Ink** - Terminal Renderer

Renders React components to terminal/console.

```javascript
import { render, Text } from 'ink';

render(<Text>Hello Terminal</Text>);
```

**Target**: Command line terminal
**Output**: Terminal UI

### Why Separate Renderer?

React core is **platform-agnostic** - it doesn't know about DOM, mobile, or any specific platform.

```
Same React Code
    ↓
┌───────┬─────────┬──────────┐
│  DOM  │ Mobile  │ Terminal │
└───────┴─────────┴──────────┘
```

### How It Works:

1. **React Core** creates Virtual DOM and handles component logic
2. **Renderer** translates Virtual DOM to platform-specific operations
3. **Platform** displays the result

### Example:

```javascript
// React Core (platform-agnostic)
const element = <div>Hello</div>;

// ReactDOM Renderer (web)
// Translates to: document.createElement('div')

// React Native Renderer (mobile)
// Translates to: <View> component
```

### In Our Project:

```javascript
// index.js
import ReactDOM from 'react-dom/client'; // Using DOM renderer

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />); // Rendering to web browser
```

---

## 🔑 What is the Use of Keys in React?

**Keys** help React identify which items in a list have changed, been added, or removed.

### Why Keys are Important:

React uses keys to optimize rendering performance and maintain component state correctly.

### Example Without Keys (Bad):

```javascript
// ❌ BAD - No keys
{flights.map(flight => (
  <FlightCard flight={flight} />
))}

// Warning: Each child in a list should have a unique "key" prop
```

### Example With Keys (Good):

```javascript
// ✅ GOOD - With unique keys
{flights.map(flight => (
  <FlightCard key={flight.id} flight={flight} />
))}
```

### How Keys Work:

#### Without Keys:
```
Original List:
[A, B, C]

Add D at beginning:
[D, A, B, C]

React thinks:
- A changed to D
- B changed to A
- C changed to B
- Added C

Result: Re-renders ALL items ❌
```

#### With Keys:
```
Original List:
[{id:1, A}, {id:2, B}, {id:3, C}]

Add D at beginning:
[{id:4, D}, {id:1, A}, {id:2, B}, {id:3, C}]

React knows:
- id:1,2,3 are same (don't re-render)
- id:4 is new (render only this)

Result: Renders only new item ✅
```

### Key Rules:

1. **Must be unique among siblings**
   ```javascript
   // ✅ Good
   {items.map(item => <Item key={item.id} />)}
   ```

2. **Should be stable (not change)**
   ```javascript
   // ❌ Bad - key changes on re-render
   {items.map(item => <Item key={Math.random()} />)}
   
   // ✅ Good - stable ID
   {items.map(item => <Item key={item.id} />)}
   ```

3. **Avoid using array index (if possible)**
   ```javascript
   // ⚠️ OK only if list never reorders
   {items.map((item, index) => <Item key={index} />)}
   
   // ✅ Better - use stable ID
   {items.map(item => <Item key={item.id} />)}
   ```

### Examples from Our Project:

#### FlightResults.js:
```javascript
{flights.map(flight => (
  <FlightCard
    key={flight.id}  // Unique, stable ID
    flight={flight}
  />
))}
```

#### About.js:
```javascript
{features.map(feature => (
  <div key={feature.id} className="feature">
    <h4>{feature.title}</h4>
  </div>
))}
```

### When Keys Don't Matter:

If list never changes (static content), keys are less critical:

```javascript
// Static list - order never changes
<ul>
  <li>Home</li>
  <li>About</li>
  <li>Contact</li>
</ul>
```

---

## ⚛️ Why is React Called "React"?

The name **"React"** comes from how it **reacts to changes** in data.

### The Concept:

```
Data Changes → React Reacts → UI Updates
```

### Example:

```javascript
// State changes (data)
setCount(count + 1);
    ↓
// React REACTS to the change
    ↓
// UI updates automatically
<div>{count}</div>
```

### Reactive Programming:

React follows **reactive programming** principles:
- UI is a function of state
- When state changes, UI automatically reacts
- No manual DOM manipulation needed

### Traditional Way (Manual):
```javascript
// ❌ Manual DOM manipulation
let count = 0;
const button = document.getElementById('btn');
button.onclick = () => {
  count++;
  document.getElementById('count').textContent = count;
};
```

### React Way (Reactive):
```javascript
// ✅ Reactive - UI reacts to state changes
const [count, setCount] = useState(0);

return (
  <div>
    <div>{count}</div>
    <button onClick={() => setCount(count + 1)}>
      Increment
    </button>
  </div>
);
// UI automatically reacts when count changes!
```

### Why This Name is Perfect:

1. **Reacts to data changes** - Automatic UI updates
2. **Reactive paradigm** - Declarative, not imperative
3. **Fast reactions** - Efficient Virtual DOM updates
4. **Chain reactions** - Component updates trigger child updates

---

## 📱 What Do You Understand By Single Page Application?

**SPA (Single Page Application)** is a web application that loads a single HTML page and dynamically updates content without full page reloads.

### Traditional Multi-Page App:

```
Click Link → Server Request → Full Page Reload → New HTML
(Slow, page flicker, lose state)
```

### Single Page App (React):

```
Click Link → JavaScript Updates DOM → Same Page, New Content
(Fast, smooth, maintain state)
```

### How SPA Works:

1. **Initial Load**: Load HTML, CSS, JavaScript once
2. **Navigation**: JavaScript handles routing (no page reload)
3. **API Calls**: Fetch data in background (AJAX/Fetch)
4. **DOM Updates**: Update parts of page dynamically

### Our SkyBook App is a SPA:

```javascript
// Single HTML file loaded once
public/index.html
    ↓
<div id="root"></div>
    ↓
// React takes over and handles everything
<App />
  <Header />
  <Hero />
  <SearchFlights />
  <FlightResults />  // Content changes without reload!
```

### Benefits of SPA:

1. **Faster User Experience**
   - No page reloads
   - Instant navigation
   - Smooth transitions

2. **Better UX**
   - Feels like native app
   - Maintains scroll position
   - Preserves application state

3. **Reduced Server Load**
   - Server sends data (JSON), not full HTML
   - Less bandwidth usage

4. **Offline Capability**
   - Can cache app shell
   - Work offline with service workers

### Challenges of SPA:

1. **SEO** - Search engines may struggle with JS-heavy apps
2. **Initial Load** - First load can be slower
3. **Browser History** - Need routing library
4. **Memory Management** - Long-running app can use memory

### SPA vs MPA:

| Aspect | SPA | MPA (Multi-Page) |
|--------|-----|------------------|
| **Page Reloads** | No | Yes |
| **Speed** | Fast after initial load | Each page loads separately |
| **SEO** | Requires extra work | Better by default |
| **Development** | Complex | Simpler |
| **Examples** | Gmail, Facebook, Twitter | Wikipedia, News sites |

### React is Perfect for SPAs:

- Component-based architecture
- Virtual DOM for efficient updates
- Client-side routing (React Router)
- State management
- Rich ecosystem

---

## 🎛️ Controlled vs Uncontrolled Components

### **Controlled Component**

Form data is handled by **React state** - React controls the input.

```javascript
// CONTROLLED - React controls the input
const [name, setName] = useState('');

<input
  value={name}              // Value from state
  onChange={(e) => setName(e.target.value)}  // Update state
/>
```

**Characteristics:**
- Input value = React state
- onChange updates state
- Single source of truth (state)
- React has full control

### **Uncontrolled Component**

Form data is handled by **DOM itself** - Use ref to access value.

```javascript
// UNCONTROLLED - DOM controls the input
const nameRef = useRef();

<input ref={nameRef} />

// Get value when needed
const handleSubmit = () => {
  console.log(nameRef.current.value);
};
```

**Characteristics:**
- Input value = DOM state
- No onChange needed
- Access via ref
- DOM has control

### Comparison:

| Aspect | Controlled | Uncontrolled |
|--------|------------|--------------|
| **Value source** | React state | DOM |
| **How to get value** | From state | From ref |
| **onChange** | Required | Optional |
| **Validation** | Easy (real-time) | Harder |
| **Recommended** | ✅ Yes | Only for simple cases |

### Examples from Our Project:

#### Controlled Component (SearchFlights.js):

```javascript
const [formData, setFormData] = useState({
  from: '',
  to: ''
});

// CONTROLLED
<input
  name="from"
  value={formData.from}              // From state
  onChange={handleInputChange}       // Updates state
/>
```

#### Uncontrolled Component Example:

```javascript
const LoginForm = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Access values via refs
    console.log(emailRef.current.value);
    console.log(passwordRef.current.value);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input ref={emailRef} type="email" />
      <input ref={passwordRef} type="password" />
      <button>Submit</button>
    </form>
  );
};
```

### When to Use Each:

**Use Controlled (Recommended):**
- ✅ Real-time validation
- ✅ Conditional rendering based on input
- ✅ Dynamic inputs
- ✅ Multiple inputs affecting each other
- ✅ Modern React best practice

**Use Uncontrolled:**
- Simple forms with few inputs
- File inputs (must be uncontrolled)
- Integration with non-React code
- Quick prototypes

### All Forms in Our Project Use Controlled Components:
- SearchFlights.js - Flight search form
- AuthModal.js - Login and register forms

---

## 🚀 Getting Started

### Prerequisites:
```bash
node --version  # v14 or higher
npm --version   # v6 or higher
```

### Installation:

```bash
# 1. Navigate to project directory
cd skybook-react

# 2. Install dependencies
npm install

# 3. Start development server
npm start

# 4. Open browser
# App runs on http://localhost:3000
```

### Available Scripts:

```bash
# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test

# Eject (one-way operation - not recommended)
npm run eject
```

---

## 📂 Project Structure

```
skybook-react/
├── public/
│   ├── index.html          # HTML template
│   └── images/             # Static images
├── src/
│   ├── components/         # React components
│   │   ├── Header.js
│   │   ├── Hero.js
│   │   ├── SearchFlights.js
│   │   ├── FlightResults.js
│   │   ├── FlightCard.js
│   │   ├── About.js
│   │   ├── Fleet.js
│   │   ├── AuthModal.js
│   │   └── Footer.js
│   ├── App.js              # Main App component
│   ├── App.css             # App styles
│   ├── index.js            # Entry point
│   └── index.css           # Global styles
├── package.json            # Dependencies and scripts
├── package-lock.json       # Locked dependency versions
├── .gitignore              # Git ignore rules
└── README.md               # This file
```

---

## 🎓 Learning Path

To master this project, study files in this order:

1. **index.js** - Entry point, ReactDOM
2. **App.js** - Main component, state management
3. **Header.js** - Simple functional component with props
4. **Hero.js** - JSX and component structure
5. **SearchFlights.js** - useState, controlled components, forms
6. **FlightCard.js** - Props and reusable components
7. **FlightResults.js** - List rendering, keys, conditional rendering
8. **AuthModal.js** - Complex state management, multiple forms
9. **About.js** & **Fleet.js** - More practice with components

---

## 📝 Key Takeaways

### React Concepts Covered:

✅ What is React and its history
✅ React features and benefits
✅ JSX - JavaScript XML
✅ Components (Functional)
✅ Elements vs Components
✅ Why functional components
✅ State with useState
✅ Props and data flow
✅ State vs Props difference
✅ useEffect hook and dependencies
✅ Controlled vs Uncontrolled components
✅ Conditional rendering
✅ List rendering with keys
✅ Event handling
✅ Form validation
✅ Component composition

### JavaScript/NPM Concepts:

✅ package.json structure
✅ dependencies vs devDependencies
✅ npm install and node_modules
✅ .gitignore file
✅ Fetch API and Promises
✅ async/await
✅ Named vs Default exports

### Web Concepts:

✅ Virtual DOM vs Real DOM
✅ Reconciliation algorithm
✅ Single Page Application (SPA)
✅ Cross-Origin and CORS
✅ CDN (Content Delivery Network)
✅ Library vs Framework
✅ React vs ReactDOM
✅ Renderer concept

---

## 🎯 Practice Exercises

1. **Add a new component**: Create a Testimonials section
2. **Add more state**: Implement flight filtering by price
3. **Use useEffect**: Fetch flights from a real API
4. **Conditional rendering**: Add loading spinner
5. **Forms**: Add a contact form with validation
6. **List rendering**: Display booking history
7. **Props drilling**: Pass data through multiple components
8. **State lifting**: Share state between sibling components

---

## 🐛 Common Issues & Solutions

### Issue: node_modules deleted
```bash
Solution: npm install
```

### Issue: Port 3000 already in use
```bash
Solution: Kill the process or use different port
PORT=3001 npm start
```

### Issue: npm install fails
```bash
Solution: Clear cache and retry
npm cache clean --force
npm install
```

### Issue: Changes not reflecting
```bash
Solution: Restart dev server
Ctrl+C (stop)
npm start (restart)
```

---

## 📚 Additional Resources

- **React Docs**: https://react.dev
- **MDN Web Docs**: https://developer.mozilla.org
- **NPM Documentation**: https://docs.npmjs.com
- **JavaScript Info**: https://javascript.info

---

## ✅ Syllabus Checklist

- [x] What is React?
- [x] History behind React
- [x] React features
- [x] What is JSX?
- [x] Diff between element and component
- [x] How to create component in React?
- [x] Why use functional component?
- [x] What is state in React?
- [x] What is props?
- [x] Diff between state and props
- [x] How to retrieve node_modules after deletion?