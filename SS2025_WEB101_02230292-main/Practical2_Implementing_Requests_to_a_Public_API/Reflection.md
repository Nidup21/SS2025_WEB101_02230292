# Practical 2: Implementing Requests to a Public API (RESTful Weather App) Reflection  


## Documentation: Main Concepts Applied  


### 1. RESTful API Architecture  
Demonstrated the four core HTTP methods:  
- **GET**: Fetches weather data from OpenWeatherMap (e.g., `api.openweathermap.org/data/2.5/weather?q=London`).  
- **POST**: Creates new location entries via JSONPlaceholder (e.g., saving "Home" with city "Paris").  
- **PUT**: Updates existing records (e.g., editing a saved location's notes).  
- **DELETE**: Removes resources (e.g., deleting a saved city from local storage).  


### 2. Asynchronous JavaScript  
- **Async/Await**: Simplified promise handling for cleaner code:  
  ```js
  const response = await fetch(url);  
  const data = await response.json();  
  ```  
- **Fetch API**: Modern替代 to XMLHttpRequest, with built-in support for streaming and promises.  


### 3. Error Handling & UX  
- **HTTP Status Handling**: Differentiated between 200 (OK), 404 (Not Found), 401 (Unauthorized), etc.  
- **Loading States**: Showed spinners during API calls (e.g., "Fetching weather...").  
- **Input Validation**: Client-side checks before sending requests (e.g., required fields in forms).  


### 4. Data Management  
- **LocalStorage**: Persisted saved locations client-side (e.g., `localStorage.setItem('locations', JSON.stringify(data))`).  
- **JSON Serialization**: Converted JS objects to JSON for API requests/responses.  


### 5. Modern Web Practices  
- **Responsive Design**: Used CSS Grid/Flexbox for adaptive layouts (mobile-first approach).  
- **Accessibility**: Semantic HTML (e.g., `<main>`, `<section>`) and ARIA attributes.  


## 🤔 Reflection: What I Learned  


### Technical Skills  
1. **API Integration**: Mastered authenticating with OpenWeatherMap, handling query params, and parsing responses.  
2. **HTTP Fundamentals**: Understood method idempotency (e.g., GET/DELETE are safe, POST/PUT modify data).  
3. **Async Patterns**: Learned to chain async operations and handle failures with `try/catch`.  
4. **Security Awareness**: Recognized client-side API key risks (e.g., using a backend proxy in production).  


### Conceptual Insights  
- **REST Principles**: Resources are accessed via URLs, and methods define actions (e.g., `/locations` + POST = create).  
- **Stateless Design**: Each request contains all necessary context, no server-side session storage.  


### Challenges & Solutions  


#### Challenge 1: CORS Restrictions  
**Problem**: Browsers blocked requests to APIs without CORS headers.  
**Solution**:  
- Used CORS-friendly APIs (OpenWeatherMap/JSONPlaceholder).  
- Learned about `Access-Control-Allow-Origin` headers and proxy servers.  


#### Challenge 2: API Key Exposure  
**Problem**: Hardcoding API keys in client-side JS is insecure.  
**Solution**:  
- Documented the need to replace placeholder keys.  
- Explored server-side proxy patterns (e.g., Next.js API routes) for production.  


#### Challenge 3: Inconsistent Error Formats  
**Problem**: Different APIs return errors in varying structures.  
**Solution**:  
- Created a unified error handler:  
  ```js
  if (!response.ok) {  
    const error = await response.json();  
    throw new Error(error.message || 'API error');  
  }  
  ```  


#### Challenge 4: UI-Data Sync  
**Problem**: Updating the UI after DELETE/PUT requests required manual refresh.  
**Solution**:  
- Refactored to a single `updateUI()` function that syncs local storage with the DOM.  


### Technical Insights  
- **Performance**: Caching API responses (e.g., using `localStorage` for weather data) reduces redundant requests.  
- **UX**: Immediate feedback (e.g., toast notifications) improves perceived performance.  
- **Testing**: Using browser dev tools (Network tab) helped debug request/response cycles.  


## Future Improvements  
1. **Backend Proxy**: Host a server to secure API keys and handle CORS.  
2. **Database**: Replace LocalStorage with a real database (e.g., MongoDB) for multi-user support.  
3. **Authentication**: Add user accounts to persist locations across devices.  
4. **Advanced Features**:  
   - Weather forecasts (5-day API from OpenWeatherMap).  
   - Geolocation (auto-detect user city via IP).  
5. **Testing**: Implement unit tests for API handlers with Jest/Testing Library.  


## Conclusion  
This project solidified my understanding of RESTful architecture and modern API integration. Key takeaways:  
- **HTTP is the backbone**: Mastering GET/POST/PUT/DELETE is essential for full-stack development.  
- **Async is everywhere**: Modern web apps rely on handling network requests without blocking UI.  
- **Security can't be ignored**: Even simple apps must consider API key management and CORS.  

The experience highlighted that building real-world apps requires balancing technical implementation with user experience and security—a mindset that will guide future projects.