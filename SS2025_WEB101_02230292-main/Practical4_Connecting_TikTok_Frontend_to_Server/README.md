# Practical 4: Connecting TikTok Frontend to Server  

## Overview  
This practical demonstrates integrating a Next.js frontend with an Express.js backend for a TikTok-like app, focusing on user authentication, video management, and social features.  


## Prerequisites  
- Node.js (v14+)  
- Existing Next.js frontend (practical1-tiktok)  
- Express.js backend server  
- Basic knowledge of React, JWT auth, and API integration  


## Installation  
### Dependencies  
```bash  
npm install axios jwt-decode react-hot-toast  
```  


## Implementation Steps  

### Step 1: API Client Setup  
**File: src/lib/api-config.js**  
- Axios instance with base URL  
- Request interceptors for JWT tokens  
- Global error handling  

**Env File: .env.local**  
```  
NEXT_PUBLIC_API_URL=http://localhost:8000/api  
```  


### Step 2: Auth Context Implementation  
**File: src/contexts/authContext.jsx**  
- React context for auth state  
- Login/logout methods  
- JWT token management  

**Update: src/app/layout.js**  
- Wrap app with `AuthProvider` for global auth state  


### Step 3: Auth UI Components  
**File: src/components/ui/Modal.jsx**  
- Reusable modal with overlay and positioning  

**File: src/components/auth/AuthForms.jsx**  
- Login/signup forms with validation  
- API integration for auth requests  

**File: src/components/auth/AuthModal.jsx**  
- Combined modal and form UI  


### Step 4: Layout Updates  
**File: src/components/layout/MainLayout.jsx**  
- Conditional rendering by auth status  
- Login/logout buttons  
- Protected navigation items  


### Step 5: Video Service  
**File: src/services/videoService.js**  
- Fetch/like/comment on videos  
- Centralized video data handling  


### Step 6: User Service  
**File: src/services/userService.js**  
- User profile management  
- Follow/unfollow functionality  
- User search/discovery  


### Step 7: VideoCard Updates  
**File: src/components/ui/VideoCard.jsx**  
- Video display with user info  
- Real-time interaction controls (like/comment)  


### Step 8: VideoFeed Updates  
**File: src/components/ui/VideoFeed.jsx**  
- Fetch "For You" and "Following" feeds  
- Loading/error states  


### Step 9: Following Page  
**File: src/app/following/page.jsx**  
- Personalized feed from followed users  
- Empty state handling  


### Step 10: User Discovery  
**File: src/app/explore-users/page.jsx**  
- User browse/search interface  
- Follow/unfollow actions  


### Step 11: Dynamic Profile  
**File: src/app/profile/[userId]/page.jsx**  
- User-specific profile pages  
- Video feed and stats  


### Step 12: Video Upload  
**File: src/app/upload/page.jsx**  
- Video upload form  
- File validation and metadata handling  


## Key Features  
### Authentication  
- JWT-based auth with token storage  
- Protected routes and dynamic UI  


### Video Management  
- Feed display with infinite scroll  
- Like/comment system  
- Video upload flow  


### Social Features  
- User following network  
- Personalized content feeds  
- Profile exploration  


### API Integration  
- Centralized client with interceptors  
- Error/loading state management  


## Testing Guide  
### 1. Auth Flow  
- Register 2-3 test accounts  
- Verify login/logout persistence  
- Check protected route access  


### 2. Video Operations  
- Upload videos from different accounts  
- Test playback and controls  


### 3. Social Interactions  
- Follow/unfollow between accounts  
- Check "Following" feed accuracy  


### 4. Video Interactions  
- Like/unlike videos  
- Post/delete comments  


### 5. UI/UX  
- Responsive design testing  
- Auth-based UI updates  


## Project Structure  
```  
src/  
├── app/                # Pages & layouts  
│   ├── explore-users/  # User discovery page  
│   ├── following/      # Following feed  
│   ├── profile/[userId]/ # Dynamic profiles  
│   ├── upload/         # Video upload page  
│   └── layout.js       # Root layout  
├── components/         # Reusable UI  
│   ├── auth/           # Auth forms/modals  
│   ├── layout/         # Layout components  
│   └── ui/             # Video cards, feeds, etc.  
├── contexts/           # React contexts (auth)  
├── lib/                # API clients, utils  
└── services/           # API service layers  
```  


## Environment Variables  
```  
NEXT_PUBLIC_API_URL=http://localhost:8000/api  
```  


## Resources  
- [Next.js Docs](https://nextjs.org/docs)  
- [Axios](https://axios-http.com/)  
- [JWT.io](https://jwt.io/)  
- [Express.js](https://expressjs.com/)  


## Troubleshooting  
### Common Issues  
1. **CORS Errors**: Configure backend CORS for frontend URL  
2. **Auth Failures**: Check JWT token format/expiry  
3. **API Connection**: Verify backend is running and URL is correct  
4. **Upload Issues**: Check file size/type limits  


### Debug Tips  
- Use browser DevTools for network requests  
- Check console for JS errors  
- Test API endpoints with Postman first