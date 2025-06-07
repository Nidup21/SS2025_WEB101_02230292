```markdown
# Practical 6: State Management (Todo List Application with Zustand) 

A simple and efficient Todo List application built with React and Zustand for state management. This project demonstrates how Zustand simplifies state management compared to prop drilling or complex Context setups.

## 🚀 Features

- ✅ Add new todos
- 🔄 Toggle todo completion status
- 🗑️ Remove individual todos
- 🧹 Clear all completed todos
- 💾 Persistent storage (localStorage)
- 📱 Responsive design

## 🛠️ Technologies Used

- **React** - Frontend framework
- **Zustand** - State management library
- **Vite** - Build tool
- **CSS** - Styling

## 📦 Installation

1. **Create a new React project**
   ```bash
   npx create-vite@latest todo-zustand
   cd todo-zustand
   ```

2. **Install Zustand**
   ```bash
   npm install zustand
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

## 📁 Project Structure

```
src/
├── components/
│   ├── TodoInput.jsx
│   ├── TodoItem.jsx
│   └── TodoList.jsx
├── store/
│   └── todoStore.js
├── App.js
├── index.js
└── App.css
```

## 🏗️ Implementation Guide

### Step 1: Create the Zustand Store

Create `src/store/todoStore.js`:

```javascript
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useTodoStore = create(
  persist(
    (set) => ({
      todos: [],
      
      addTodo: (text) => set((state) => ({
        todos: [...state.todos, {
          id: Date.now(),
          text,
          completed: false,
          createdAt: new Date().toISOString()
        }]
      })),
      
      toggleTodo: (id) => set((state) => ({
        todos: state.todos.map(todo =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
      })),
      
      removeTodo: (id) => set((state) => ({
        todos: state.todos.filter(todo => todo.id !== id)
      })),
      
      clearCompleted: () => set((state) => ({
        todos: state.todos.filter(todo => !todo.completed)
      }))
    }),
    {
      name: 'todo-storage'
    }
  )
)

export default useTodoStore
```

### Step 2: Create TodoInput Component

Create `src/components/TodoInput.jsx`:

```javascript
import { useState } from 'react'
import useTodoStore from '../store/todoStore'

const TodoInput = () => {
  const [inputValue, setInputValue] = useState('')
  const addTodo = useTodoStore(state => state.addTodo)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (inputValue.trim()) {
      addTodo(inputValue.trim())
      setInputValue('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="todo-input-form">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add a new todo..."
        className="todo-input"
      />
      <button type="submit" className="add-button">
        Add ➕
      </button>
    </form>
  )
}

export default TodoInput
```

### Step 3: Create TodoItem Component

Create `src/components/TodoItem.jsx`:

```javascript
import useTodoStore from '../store/todoStore'

const TodoItem = ({ todo }) => {
  const { toggleTodo, removeTodo } = useTodoStore(state => ({
    toggleTodo: state.toggleTodo,
    removeTodo: state.removeTodo
  }))

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
        className="todo-checkbox"
      />
      <span className="todo-text">{todo.text}</span>
      <button
        onClick={() => removeTodo(todo.id)}
        className="remove-button"
      >
        🗑️
      </button>
    </div>
  )
}

export default TodoItem
```

### Step 4: Create TodoList Component

Create `src/components/TodoList.jsx`:

```javascript
import useTodoStore from '../store/todoStore'
import TodoItem from './TodoItem'

const TodoList = () => {
  const { todos, clearCompleted } = useTodoStore(state => ({
    todos: state.todos,
    clearCompleted: state.clearCompleted
  }))

  const completedCount = todos.filter(todo => todo.completed).length
  const totalCount = todos.length

  return (
    <div className="todo-list-container">
      <div className="todo-stats">
        <span>Total: {totalCount} | Completed: {completedCount}</span>
        {completedCount > 0 && (
          <button onClick={clearCompleted} className="clear-button">
            Clear Completed 🧹
          </button>
        )}
      </div>
      
      <div className="todo-list">
        {todos.length === 0 ? (
          <p className="empty-message">No todos yet. Add one above! 🎯</p>
        ) : (
          todos.map(todo => (
            <TodoItem key={todo.id} todo={todo} />
          ))
        )}
      </div>
    </div>
  )
}

export default TodoList
```

### Step 5: Update App.js

```javascript
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import './App.css'

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>📝 Todo List with Zustand</h1>
        <p>Simple state management made easy!</p>
      </header>
      
      <main className="app-main">
        <TodoInput />
        <TodoList />
      </main>
    </div>
  )
}

export default App
```

## 🎨 Styling (Optional)

Add basic styles to `src/App.css`:

```css
.app {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.app-header {
  text-align: center;
  margin-bottom: 30px;
}

.todo-input-form {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.todo-input {
  flex: 1;
  padding: 12px;
  border: 2px solid #e1e5e9;
  border-radius: 8px;
  font-size: 16px;
}

.add-button {
  padding: 12px 20px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

.todo-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  border: 1px solid #e1e5e9;
  border-radius: 8px;
  margin-bottom: 8px;
}

.todo-item.completed .todo-text {
  text-decoration: line-through;
  opacity: 0.6;
}

.todo-stats {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  padding: 12px;
  background: #f8f9fa;
  border-radius: 8px;
}
```

## 🔑 Key Concepts

### How Zustand Works

1. **Store Creation**: Central store using `create` from Zustand containing both state and actions
2. **State Access**: Components access state directly using the hook: `useTodoStore(state => state.todos)`
3. **State Updates**: Actions use the `set` function to update state immutably
4. **Persistence**: The `persist` middleware automatically saves state to localStorage

### Benefits of Zustand

- 🚀 **Simple API** - No boilerplate code
- 🎯 **Selective subscriptions** - Components only re-render when needed
- 💾 **Built-in persistence** - Easy localStorage integration
- 🔧 **TypeScript support** - Great developer experience
- 📦 **Small bundle size** - Lightweight solution

## 🚀 Running the Application

1. Start the development server: `npm run dev`
2. Open your browser to `http://localhost:5173`
3. Start adding todos! ✨

## 📝 Usage

1. **Add Todo**: Type in the input field and press Enter or click "Add"
2. **Toggle Completion**: Click the checkbox next to any todo
3. **Remove Todo**: Click the 🗑️ button
4. **Clear Completed**: Click "Clear Completed" to remove all finished todos
5. **Persistence**: Your todos are automatically saved and restored on page refresh

## 🤝 Contributing

Feel free to fork this project and submit pull requests for any improvements.
```

The document is already in a clean Markdown format with proper code blocks, headings, and lists. I've preserved all the original content and formatting while ensuring consistent syntax highlighting and structure. The only change made was to convert the code fences to use triple backticks for better readability.