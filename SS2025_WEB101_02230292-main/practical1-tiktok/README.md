

```markdown
# Practical 1: TikTok Clone

A TikTok-inspired web application built with Next.js, React, and Tailwind CSS. This project demonstrates modern web development practices including component-based architecture, form handling, and responsive design.

## Features
- **Main Interface**: TikTok-like web layout with sidebar navigation
- **Video Feed**: Scrollable video feed with placeholder content
- **Navigation Pages**: For You, Following, Explore, Live, and Profile pages
- **User Authentication**: Login and registration forms with validation
- **Upload Interface**: Video upload page mockup
- **Responsive Design**: Mobile and desktop-friendly interface

## Technologies Used
- **Next.js 14+**: React framework with App Router
- **React**: Component-based UI library
- **Tailwind CSS**: Utility-first CSS framework
- **React Hook Form**: Form state management and validation
- **React Icons**: Icon library for UI elements

## Installation Instructions

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager
- Git

### Step 1: Clone the Repository
```bash
git clone https://github.com/02240365/SS2025_WEB101_02240365.git
cd practical1-tiktok
```

### Step 2: Create Next.js Project
```bash
npx create-next-app@latest
```

Configure with these settings:
- TypeScript: No (using JSX)
- ESLint: Yes
- Tailwind CSS: Yes
- src/ directory: Yes
- App Router: Yes
- Default import alias: No

### Step 3: Install Dependencies
```bash
npm install react-icons react-hook-form
```

### Step 4: Set Up Project Structure
```bash
mkdir -p src/components/layout
mkdir -p src/components/ui
mkdir -p src/lib
mkdir -p src/app/profile
mkdir -p src/app/upload
mkdir -p src/app/login
mkdir -p src/app/signup
mkdir -p src/app/following
mkdir -p src/app/explore
mkdir -p src/app/live
```

### Step 5: Start Development Server
```bash
npm run dev
```

Visit `http://localhost:3000` to view the application.

## Project Structure
```plaintext
src/
├── app/
│   ├── layout.js          # Root layout
│   ├── page.js            # Home page (For You feed)
│   ├── globals.css        # Global styles
│   ├── profile/
│   │   └── page.jsx       # Profile page
│   ├── upload/
│   │   └── page.jsx       # Upload page
│   ├── login/
│   │   └── page.jsx       # Login page
│   ├── signup/
│   │   └── page.jsx       # Registration page
│   ├── following/
│   │   └── page.jsx       # Following feed
│   ├── explore/
│   │   └── page.jsx       # Explore page
│   └── live/
│       └── page.jsx       # Live page
├── components/
│   ├── layout/
│   │   └── MainLayout.jsx # Main layout component
│   └── ui/
│       ├── VideoCard.jsx  # Individual video component
│       └── VideoFeed.jsx  # Video feed container
└── lib/                   # Utility functions
```

## Key Components

### MainLayout.jsx
The main layout component that provides:
- Sidebar navigation with TikTok-style menu
- Header with search and user actions
- Responsive design for mobile and desktop

### VideoCard.jsx
Individual video component featuring:
- Video placeholder with play/pause functionality
- User information display
- Interaction buttons (like, comment, share)
- Video description and hashtags

### VideoFeed.jsx
Container component that:
- Renders multiple VideoCard components
- Manages video feed state
- Provides scrollable interface

## Form Implementation

### Login Form (src/app/login/page.jsx)
- Email and password validation
- Form state management with React Hook Form
- Loading states and error handling
- Responsive design

### Registration Form (src/app/signup/page.jsx)
- Comprehensive form validation
- Password confirmation matching
- Terms and conditions checkbox
- Email format validation using regex

### Form Validation Features
- Required field validation
- Email format validation
- Password strength requirements (minimum 8 characters)
- Password confirmation matching
- Custom error messages
- Loading states during submission

## Styling
The project uses Tailwind CSS for styling with:
- Utility-first approach
- Responsive design classes
- Custom color schemes
- Hover and focus states
- Dark mode considerations

## Navigation
The application includes:
- **For You**: Main video feed (home page)
- **Following**: Videos from followed users
- **Explore**: Discover new content
- **Live**: Live streaming content
- **Profile**: User profile page
- **Upload**: Video upload interface
- **Login/Signup**: Authentication pages

## Development Notes

### Key Concepts Implemented
1. **Component Architecture**: Modular, reusable components
2. **State Management**: React hooks for local state
3. **Form Handling**: React Hook Form for validation
4. **Routing**: Next.js App Router for navigation
5. **Responsive Design**: Mobile-first approach

### Best Practices Used
- Clean component structure
- Proper prop handling
- Form validation patterns
- Loading state management
- Error handling
- Accessibility considerations

## Testing the Application

### Form Validation Testing
1. **Login Form**:
   - Submit without filling fields
   - Enter invalid email format
   - Enter short password

2. **Registration Form**:
   - Test all validation rules
   - Try mismatched passwords
   - Submit without terms agreement

### Navigation Testing
- Test all sidebar navigation links
- Verify responsive behavior
- Check mobile menu functionality

## Future Enhancements
- Backend API integration
- Real video upload functionality
- User authentication system
- Database integration
- Real-time features
- Video streaming capabilities
- Social features (comments, likes, follows)

## Resources
- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://legacy.reactjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [React Hook Form](https://react-hook-form.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
```

This version maintains the exact content but formats it as a proper README.md file with:
1. Correct Markdown headers
2. Code blocks for commands and file structures
3. Proper links for external resources
4. Consistent indentation
5. No unnecessary HTML tags

You can copy this entire block directly into a new file in VSCode and save it as `README.md`