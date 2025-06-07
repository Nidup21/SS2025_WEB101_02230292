# React + Vite  

This template offers a streamlined configuration to kickstart React development with Vite, featuring Hot Module Replacement (HMR) and essential ESLint rules. It prioritizes performance and developer experience, making it an ideal starting point for modern React applications.  


## 🚀 Features  

- **Vite Build Tool**: Lightning-fast bundling with native ES modules.  
- **React Integration**: Support for both Babel and SWC plugins for Fast Refresh.  
- **HMR (Hot Module Replacement)**: Instantly update components without page reloads.  
- **ESLint Configuration**: Pre-configured to enforce code quality standards.  
- **TypeScript Support**: Optional setup for type safety.  


## 📦 Available Plugins  

### 1. `@vitejs/plugin-react` (Babel)  
- Uses Babel for transpilation and Fast Refresh.  
- Ideal for projects requiring custom Babel plugins or transforms.  
- Config example:  
  ```js
  // vite.config.js  
  import { defineConfig } from 'vite';  
  import react from '@vitejs/plugin-react';  
  
  export default defineConfig({  
    plugins: [react()],  
  });  
  ```  

### 2. `@vitejs/plugin-react-swc` (SWC)  
- Utilizes SWC (Speedy Web Compiler) for faster builds and HMR.  
- 2-3x faster than Babel in benchmarks.  
- Config example:  
  ```js
  // vite.config.js  
  import { defineConfig } from 'vite';  
  import reactSWC from '@vitejs/plugin-react-swc';  
  
  export default defineConfig({  
    plugins: [reactSWC()],  
  });  
  ```  


## 📝 Differences Between Plugins  

| Feature               | `@vitejs/plugin-react` (Babel)          | `@vitejs/plugin-react-swc` (SWC)        |  
|-----------------------|-----------------------------------------|-----------------------------------------|  
| **Transpiler**        | Babel (JavaScript)                      | SWC (Rust-based)                        |  
| **Build Speed**       | Slower (JavaScript runtime)             | Faster (compiled Rust binary)           |  
| **HMR Performance**   | Good                                    | Excellent (near-instant updates)        |  
| **Custom Transformations** | Easy to extend with Babel plugins      | Limited (SWC has fewer plugins)        |  
| **TypeScript Support**| Native support                          | Native support                          |  


## 🚦 Quick Start  

1. **Create a new project**:  
   ```bash  
   # Using npm  
   npm create vite@latest my-react-app --template react  
   
   # Using yarn  
   yarn create vite my-react-app --template react  
   ```  

2. **Install dependencies**:  
   ```bash  
   cd my-react-app  
   npm install  
   # or  
   yarn install  
   ```  

3. **Start development server**:  
   ```bash  
   npm run dev  
   # or  
   yarn dev  
   ```  


## 📂 Project Structure  

```  
my-react-app/  
├── public/            # Static assets (HTML, images)  
├── src/               # Source code  
│   ├── components/    # Reusable UI components  
│   ├── App.jsx         # Root component  
│   ├── main.jsx        # Entry point  
│   └── index.css       # Global styles  
├── vite.config.js      # Vite configuration  
├── package.json        # Dependencies and scripts  
└── .eslintrc.js        # ESLint rules  
```  


## 🛠️ Customization  

### 1. Add TypeScript:  
```bash  
npm install typescript @types/react @types/react-dom --save-dev  
```  
- Rename `jsx` files to `tsx` and add a `tsconfig.json`.  

### 2. Configure ESLint:  
Modify `.eslintrc.js` to add rules:  
```js  
module.exports = {  
  extends: ['plugin:react/recommended', 'standard'],  
  plugins: ['react'],  
  rules: {  
    'react/prop-types': 'off', // For TypeScript projects  
    'no-console': 'warn',  
  },  
};  
```  

### 3. Add Tailwind CSS:  
```bash  
npm install tailwindcss postcss autoprefixer --save-dev  
npx tailwindcss init -p  
```  
- Configure `tailwind.config.js` and add utilities to `index.css`.  


## 📚 Learn More  

- **Vite Documentation**: [vitejs.dev](https://vitejs.dev)  
- **React with Vite Guide**: [React Official Docs](https://react.dev/learn/start-a-new-react-project#using-vite)  
- **SWC vs Babel**: [Blog Post](https://swc.rs/blog/swc-vs-babel)  
- **Hot Module Replacement**: [Vite HMR Guide](https://vitejs.dev/guide/features.html#hot-module-replacement)