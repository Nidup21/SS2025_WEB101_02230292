# 📊 Practical 7: Data Visualization  

## 🎯 Overview  
This project demonstrates implementing the Recharts library in a React dashboard to create interactive data visualizations, including line, pie, bar, and area charts for sales analytics, product categories, customer acquisition, and visitor patterns.  


## ✨ Features  
- **📈 Monthly Sales Chart**: Line chart with actual vs. target trends  
- **🥧 Product Category Chart**: Pie chart for market share visualization  
- **👥 Customer Acquisition Chart**: Grouped bar chart for new/returning customers  
- **📅 Weekly Visitors Chart**: Area chart with gradient fills  


## 🛠️ Technologies Used  
- **React 18** with Next.js  
- **Recharts**: Charting library for responsive visualizations  
- **TypeScript**: Type safety and developer tools  
- **Tailwind CSS**: Responsive design and styling  


## 📦 Installation  
1. **Clone & install dependencies**:  
   ```bash  
   git clone <repo>  
   cd Practical7_Data_Visualization  
   npm install  
   npm install recharts  
   ```  

2. **Run development server**:  
   ```bash  
   npm run dev  
   ```  


## 📁 Project Structure  
```  
src/  
├── app/  
│   ├── page.tsx         # Main dashboard with chart components  
│   └── layout.tsx       # Header and footer layout  
├── components/  
│   ├── monthly-sales-chart.tsx   # Line chart for sales trends  
│   ├── product-category-chart.tsx # Pie chart for categories  
│   ├── customer-acquisition-chart.tsx # Bar chart for customers  
│   └── weekly-visitors-chart.tsx   # Area chart for visitors  
└── utils/  
    └── data.ts          # Mock data for charts  
```  


## 🎨 Chart Components  

### 1. Monthly Sales Chart (Line Chart)  
```jsx  
// components/monthly-sales-chart.tsx  
<ResponsiveContainer width="100%" height={300}>  
  <LineChart data={salesData}>  
    <CartesianGrid strokeDasharray="3 3" />  
    <XAxis dataKey="month" />  
    <YAxis />  
    <Tooltip />  
    <Legend />  
    <Line type="monotone" dataKey="sales" stroke="#8884d8" name="Actual" />  
    <Line type="monotone" dataKey="target" stroke="#82ca9d" name="Target" />  
  </LineChart>  
</ResponsiveContainer>  
```  

### 2. Product Category Chart (Pie Chart)  
```jsx  
// components/product-category-chart.tsx  
<ResponsiveContainer width="100%" height={300}>  
  <PieChart>  
    <Pie  
      data={categoryData}  
      cx="50%"  
      cy="50%"  
      labelLine={false}  
      outerRadius={80}  
      fill="#8884d8"  
      dataKey="value"  
    >  
      <Label formatter={(value, name) => `${name}: ${value}%`} />  
      <Legend />  
    </Pie>  
  </PieChart>  
</ResponsiveContainer>  
```  


## 🎯 Key Implementation Details  

### Data Structure  
Mock data is structured for each chart type:  
```javascript  
// utils/data.ts  
export const salesData = [  
  { month: 'Jan', sales: 4000, target: 3800 },  
  { month: 'Feb', sales: 3000, target: 3200 },  
  // ...  
];  
```  

### Responsive Design  
All charts use `ResponsiveContainer` to adapt to screen sizes:  
```jsx  
<ResponsiveContainer width="100%" height="100%">  
  {/* Chart content */}  
</ResponsiveContainer>  
```  

### Custom Styling  
Gradients and colors are defined via SVG defs:  
```jsx  
<defs>  
  <linearGradient id="visitorsGradient" x1="0" y1="0" x2="0" y2="1">  
    <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.8} />  
    <stop offset="100%" stopColor="#3b82f6" stopOpacity={0.1} />  
  </linearGradient>  
</defs>  
```  


## 🚀 Performance Optimizations  
1. **Component Memoization**: Charts use `React.memo` to prevent unnecessary re-renders.  
2. **Static Data**: Mock data is defined outside components to avoid re-creation.  
3. **Lazy Loading**: Charts can be lazily loaded for large datasets.  


## 📱 Responsive Features  
- **CSS Grid Layout**: Dashboard adapts to mobile/desktop with grid columns.  
- **Fluid Containers**: Charts scale proportionally using `ResponsiveContainer`.  
- **Touch Interactions**: Tooltips and hover effects optimized for touch devices.  


## 🎨 Customization  
1. **Colors**: Update `color` properties in data objects.  
2. **Data Source**: Replace mock data with API responses in `utils/data.ts`.  
3. **Layout**: Modify Tailwind classes in `page.tsx` for custom spacing.  


## 🔧 Troubleshooting  
- **Charts not rendering**: Ensure `recharts` is installed and imported correctly.  
- **Responsive issues**: Check that parent containers have defined widths/heights.  
- **Data errors**: Verify data keys match chart component props (e.g., `dataKey="sales"`).  


## 🤝 Contributing  
1. Fork the repo.  
2. Create a feature branch (`git checkout -b new-chart`).  
3. Commit changes (`git commit -m "Add new chart"`).  
4. Push to branch (`git push origin new-chart`).  
5. Submit a pull request.  


## 🙏 Acknowledgments  
- [Recharts Documentation](https://recharts.org/)  
- [Next.js Tutorials](https://nextjs.org/learn)  
- [Tailwind CSS Guides](https://tailwindcss.com/docs)