
```markdown
# Practical 2: Implementing Requests to a Public API (RESTful API Weather Application)

A comprehensive web application demonstrating all four primary RESTful API operations (GET, POST, PUT, DELETE) using real-world APIs.

## 📋 Project Overview

This project implements a weather application that showcases:
- **GET requests** to retrieve weather data from OpenWeatherMap API
- **POST requests** to save location data
- **PUT requests** to update existing location information
- **DELETE requests** to remove saved locations

## 🚀 Features

### 1. Weather Data Retrieval (GET)
- Fetches real-time weather information for any city
- Displays temperature, humidity, wind speed, and atmospheric pressure
- Shows weather icons and descriptions
- Handles API errors gracefully

### 2. Location Management (POST, PUT, DELETE)
- Save favorite locations with custom names and notes
- Edit existing location information
- Delete unwanted locations
- Persistent storage using localStorage

### 3. User Interface
- Clean, responsive design with tabbed navigation
- Real-time API response status display
- Loading indicators and error handling
- Mobile-friendly layout

## 🛠️ Setup Instructions

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- OpenWeatherMap API key (free registration required)

### Installation Steps

1. **Create Project Directory**
   ```bash
   mkdir weather-api-app
   cd weather-api-app
   ```

2. **Download Files**
   - Save the provided `index.html` file
   - Save the provided `script.js` file

3. **Get API Key**
   - Visit [OpenWeatherMap](https://openweathermap.org/api)
   - Sign up for a free account
   - Generate an API key

4. **Configure API Key**
   - Open `script.js`
   - Replace `YOUR_OPENWEATHERMAP_API_KEY` with your actual API key:
   ```javascript
   const WEATHER_API_KEY = 'your_actual_api_key_here';
   ```

5. **Run the Application**
   - Open `index.html` in your web browser
   - No server setup required.

## 📖 Usage Guide

### Getting Weather Data (GET Request)
1. Click on the "GET - Weather Data" tab
2. Enter a city name (e.g., "London", "New York", "Tokyo")
3. Click "Get Weather" button
4. View the weather information and API response status

### Saving Locations (POST Request)
1. Click on the "POST - Save Location" tab
2. Fill in the location details:
   - Location Name (e.g., "Home", "Office")
   - City name
   - Country name
   - Optional notes
3. Click "Save Location" button
4. Check the response status and confirmation

### Managing Locations (PUT/DELETE Requests)
1. Click on the "PUT/DELETE - Manage Locations" tab
2. Click "Load Saved Locations" to view all saved locations
3. For each location, you can:
   - **Edit (PUT)**: Click "Edit" button, modify details, and save
   - **Delete (DELETE)**: Click "Delete" button and confirm removal

## 🔧 Technical Implementation

### APIs Used
- **OpenWeatherMap API**: For real weather data retrieval
- **JSONPlaceholder API**: For demonstrating POST, PUT, DELETE operations

### Key Technologies
- **HTML5**: Structure and semantic markup
- **CSS3**: Styling with flexbox and grid layouts
- **JavaScript ES6+**: Async/await, fetch API, modern syntax
- **Local Storage**: Client-side data persistence

### HTTP Methods Demonstrated

#### GET Request Example
```javascript
const response = await fetch(`${WEATHER_API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
const data = await response.json();
```

#### POST Request Example
```javascript
const response = await fetch(JSONPLACEHOLDER_URL, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(locationData)
});
```

#### PUT Request Example
```javascript
const response = await fetch(`${JSONPLACEHOLDER_URL}/${id}`, {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedData)
});
```

#### DELETE Request Example
```javascript
const response = await fetch(`${JSONPLACEHOLDER_URL}/${id}`, {
    method: 'DELETE'
});
```

## 🎨 Design Features

- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Modern UI**: Clean interface with gradient backgrounds and smooth transitions
- **Error Handling**: Comprehensive error messages and status indicators
- **Loading States**: Visual feedback during API calls
- **Accessibility**: Semantic HTML and keyboard navigation support

## 🔍 Testing the Application

### Test Scenarios

1. **Valid Weather Request**
   - Enter "London" → Should display weather data
   - Check response status (200 OK)

2. **Invalid Weather Request**
   - Enter "InvalidCityName123" → Should show error message
   - Check response status (404 Not Found)

3. **Save Location**
   - Fill all fields → Should save successfully
   - Leave required fields empty → Should show validation error

4. **Edit Location**
   - Click edit on saved location → Should open modal
   - Update information → Should reflect changes

5. **Delete Location**
   - Click delete → Should show confirmation
   - Confirm deletion → Should remove from list

## 🚨 Troubleshooting

### Common Issues

1. **Weather data not loading**
   - Verify API key is correctly set
   - Check internet connection
   - Ensure city name is spelled correctly

2. **API key errors**
   - Confirm API key is active (may take a few minutes after registration)
   - Check for extra spaces or characters in the API key

3. **CORS errors**
   - This shouldn't occur with the chosen APIs, but if it does, try running from a local server

## 📚 Learning Outcomes

This project demonstrates:
- RESTful API principles and HTTP methods
- Asynchronous JavaScript programming
- Error handling and user feedback
- Modern web development practices
- API integration and data management

## 🔗 API Documentation

- [OpenWeatherMap API Documentation](https://openweathermap.org/api)
- [JSONPlaceholder API Documentation](https://jsonplaceholder.typicode.com/)
```

Key improvements:
1. Consistent Markdown formatting
2. Proper code blocks for bash and JavaScript
3. Emoji headers for better readability
4. Preserved all original content
5. Added syntax highlighting for code examples
6. Fixed indentation for technical sections
7. Maintained link formatting for external resources

You can copy this directly into VSCode and save as `README.md`