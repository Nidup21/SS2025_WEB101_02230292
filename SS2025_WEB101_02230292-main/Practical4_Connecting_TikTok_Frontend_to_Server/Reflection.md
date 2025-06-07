# Practical 4: Connecting TikTok Frontend to Server Reflection  

## Documentation: Main Concepts Applied  

### 1. Full-Stack Integration  
Demonstrated seamless connection between Next.js frontend and Express.js backend, showcasing modern client-server communication patterns.  


### 2. Authentication Architecture  
- **JWT Implementation**: Stateless authentication using JSON Web Tokens.  
- **React Context**: Global auth state management with automatic token attachment.  
- **Protected Routes**: Conditional access control for authenticated users.  

**Key Code**:  
```javascript
// AuthContext.jsx  
const AuthProvider = ({ children }) => {  
  const [user, setUser] = useState(null);  
  const login = async (credentials) => {  
    const { data } = await api.post('/auth/login', credentials);  
    localStorage.setItem('token', data.token);  
    setUser(decodeToken(data.token));  
  };  
  // ... logout and context setup  
};  
```  


### 3. API Client Architecture  
- **Axios Configuration**: Centralized client with interceptors for tokens and errors.  
- **Service Layer**: Modular API calls (e.g., `videoService`, `userService`).  
- **Error Handling**: Global interceptor for standardized feedback.  

**Interceptors**:  
```javascript
// api-config.js  
api.interceptors.request.use((config) => {  
  const token = localStorage.getItem('token');  
  if (token) config.headers.Authorization = `Bearer ${token}`;  
  return config;  
});  

api.interceptors.response.use(  
  (response) => response,  
  (error) => {  
    toast.error(error.response?.data.message || 'API Error');  
    return Promise.reject(error);  
  }  
);  
```  


### 4. State Management Patterns  
- **Global State**: React Context for authentication.  
- **Local State**: Form validation and UI interactions.  
- **API State**: Loading/error states with `useState`.  


### 5. Component Architecture  
- **Reusability**: Modal, forms, and video components designed for flexibility.  
- **Separation of Concerns**: UI (presentational) vs. Logic (container) components.  


### 6. Social Media Features  
- **Feeds**: Personalized "For You" and "Following" content.  
- **Interactions**: Like/comment/follow with real-time updates.  
- **File Upload**: Video/image handling with validation.  


## Reflection: What I Learned  

### Technical Skills  
1. **API Integration Mastery**  
   - RESTful consumption with proper error handling.  
   - Token management (attachment, validation, refresh).  

2. **React Advanced Patterns**  
   - Context API for cross-component state.  
   - Custom hooks (e.g., `useAuth`, `useVideoFeed`).  

3. **Authentication Depth**  
   - JWT lifecycle (signing, verification, expiration).  
   - Secure storage (localStorage + HTTP-only cookies).  

4. **Full-Stack Coordination**  
   - Endpoint design (e.g., `/api/videos/like`).  
   - Data transformation between frontend/backend.  


### Conceptual Insights  
1. **Architecture Principles**  
   - Service-oriented design for maintainability.  
   - Client-server communication patterns (request/response).  

2. **UX-Centric Development**  
   - Loading states and feedback for asynchronous operations.  
   - Graceful error recovery (e.g., network failures).  

3. **Security Best Practices**  
   - Token-based authentication risks (e.g., CSRF, XSS).  
   - Input validation and sanitization.  


### Challenges & Solutions  

#### Challenge 1: CORS Configuration  
**Problem**: Browser blocked API requests due to missing CORS headers.  
**Solution**:  
```javascript
// Backend CORS setup  
app.use(cors({  
  origin: 'http://localhost:3000',  
  credentials: true  
}));  
```  
**Learning**: Understand browser security policies and backend middleware.  


#### Challenge 2: Auth State Persistence  
**Problem**: Page refresh reset authentication state.  
**Solution**:  
- Initialize context from localStorage:  
  ```javascript
  useEffect(() => {  
    const token = localStorage.getItem('token');  
    if (token) setUser(decodeToken(token));  
  }, []);  
  ```  
**Learning**: Proper state initialization is critical for SSR/CSR consistency.  


#### Challenge 3: Inconsistent Error Handling  
**Problem**: Varied error messages and user feedback.  
**Solution**:  
- Standardized error format:  
  ```javascript
  // Backend error response  
  res.status(400).json({ error: 'Invalid credentials' });  

  // Frontend interceptor  
  toast.error(error.response.data.error);  
  ```  
**Learning**: Centralized error handling improves UX and debugging.  


#### Challenge 4: Complex State Management  
**Problem**: Prop drilling and inconsistent updates.  
**Solution**:  
- React Context for global state:  
  ```javascript
  // AuthContext.jsx  
  const { user, login } = useContext(AuthContext);  
  ```  
**Learning**: Use context for app-wide state; reserve props for component-specific data.  


#### Challenge 5: File Upload Issues  
**Problem**: Large videos timed out; no progress feedback.  
**Solution**:  
- Axios progress tracking:  
  ```javascript
  const onUploadProgress = (e) => {  
    const progress = Math.round((e.loaded / e.total) * 100);  
    setUploadProgress(progress);  
  };  

  axios.post('/api/upload', formData, { onUploadProgress });  
  ```  
**Learning**: Always provide upload progress for large files.  


### Key Insights  
1. **Architecture Drives Maintainability**: Modular services and context简化 feature addition.  
2. **UX is Non-Negotiable**: Loading states and clear errors prevent user frustration.  
3. **Security Requires Vigilance**: Token storage and validation must be airtight.  
4. **Testing Social Features**: Multiple test accounts are essential for interaction flows.  


### Future Improvements  
1. **Performance**  
   - Lazy loading for videos.  
   - API response caching (e.g., Redis).  

2. **Features**  
   - Real-time notifications (WebSockets).  
   - Advanced search with filters.  

3. **Testing**  
   - Unit tests for API services.  
   - End-to-end testing with Playwright.  

4. **Security**  
   - Rate limiting (e.g., Express Rate Limit).  
   - Token rotation with refresh tokens.  


## Conclusion  
This practical solidified my understanding of full-stack integration, authentication systems, and modern React patterns. Key takeaways:  
- **Holistic Development**: Frontend and backend must align in architecture and error handling.  
- **User-Centric Focus**: Every technical decision impacts UX.  
- **Security by Design**: Authentication and data validation are foundational.  

The challenges faced—from CORS to state management—reinforced the importance of robust architectures and systematic testing. This experience prepares me for scaling applications with complex interactions and security requirements.