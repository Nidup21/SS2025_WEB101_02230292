# React + TypeScript + Vite Setup Guide  

A streamlined configuration for building React applications with TypeScript and Vite, featuring Hot Module Replacement (HMR) and ESLint integration.  


## 🚀 Features  

- **Vite Build Tool**: Ultra-fast bundling and development server.  
- **TypeScript Support**: Strong typing for robust code.  
- **HMR**: Instant component updates without page reloads.  
- **ESLint**: Type-aware linting with React-specific rules.  
- **SWC/Babel**: Choose between speed (SWC) or flexibility (Babel).  


## 📦 Installation  

```bash
# Create a new Vite project with React + TypeScript template
npm create vite@latest my-react-ts-app -- --template react-ts
cd my-react-ts-app
npm install
```


## 🔧 Configuration  

### 1. Choose a Compiler Plugin  

#### SWC (Recommended for Speed)  
```bash
npm install @vitejs/plugin-react-swc --save-dev
```  
Update `vite.config.ts`:  
```typescript
// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
});
```

#### Babel (Flexible for Custom Transforms)  
```bash
npm install @vitejs/plugin-react --save-dev
```  
Update `vite.config.ts`:  
```typescript
// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
});
```


### 2. Configure ESLint for TypeScript  

Install dependencies:  
```bash
npm install eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin --save-dev
```  

Create `.eslintrc.cjs`:  
```javascript
// .eslintrc.cjs
module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    // Custom rules
    '@typescript-eslint/no-explicit-any': 'off',
    'react/prop-types': 'off',
  },
};
```


### 3. Add React-Specific Linting  

Install plugins:  
```bash
npm install eslint-plugin-react eslint-plugin-react-hooks --save-dev
```  

Update `.eslintrc.cjs`:  
```javascript
// .eslintrc.cjs
module.exports = {
  // ... existing config
  extends: [
    // ... existing extends
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  rules: {
    // ... existing rules
    'react/react-in-jsx-scope': 'off', // Vite includes JSX runtime automatically
  },
};
```


## 🚦 Scripts  

Add these to `package.json`:  
```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "lint": "eslint src --ext .ts,.tsx",
    "format": "prettier --write src"
  }
}
```


## 📂 Project Structure  

```
my-react-ts-app/
├── src/                 # Source code
│   ├── components/      # React components
│   ├── App.tsx          # Root component
│   ├── main.tsx         # Entry point
│   └── vite-env.d.ts    # TypeScript environment definitions
├── .eslintrc.cjs        # ESLint configuration
├── tsconfig.json        # TypeScript configuration
├── vite.config.ts       # Vite configuration
└── package.json         # Dependencies and scripts
```


## 💡 Best Practices  

### 1. TypeScript Interfaces for Components  

```typescript
// components/Button.tsx
interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, disabled = false }) => {
  return (
    <button onClick={onClick} disabled={disabled} className="btn">
      {label}
    </button>
  );
};
```


### 2. Use React's Built-in Types  

```typescript
import { useState, ChangeEvent } from 'react';

const Input: React.FC = () => {
  const [value, setValue] = useState<string>('');
  
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  
  return <input type="text" value={value} onChange={handleChange} />;
};
```


### 3. Environment Variables  

Create `.env.development` and `.env.production`:  
```bash
VITE_API_URL=https://api.example.com
```  

Access in code:  
```typescript
const apiUrl = import.meta.env.VITE_API_URL;
```


## 📚 Learn More  

- **Vite + React**: [https://vitejs.dev/guide/](https://vitejs.dev/guide/)  
- **TypeScript with React**: [https://www.typescriptlang.org/docs/handbook/react.html](https://www.typescriptlang.org/docs/handbook/react.html)  
- **ESLint + TypeScript**: [https://typescript-eslint.io/](https://typescript-eslint.io/)  


## 🔧 Troubleshooting  

### Common Issues  

1. **TypeScript not recognizing module imports**:  
   Add to `tsconfig.json`:  
   ```json
   {
     "compilerOptions": {
       "moduleResolution": "node",
       "esModuleInterop": true
     }
   }
   ```

2. **ESLint not running on TypeScript files**:  
   Ensure `.eslintrc.cjs` includes:  
   ```javascript
   {
     "parser": "@typescript-eslint/parser",
     "extends": ["plugin:@typescript-eslint/recommended"]
   }
   ```