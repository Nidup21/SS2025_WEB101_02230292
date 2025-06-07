

```markdown
# Practical 3: File Upload Implementation

A comprehensive React/Next.js application demonstrating advanced file upload functionality with multipart form data handling, validation, progress tracking, and drag-and-drop interface.

## Features

- **Multipart Form Data Handling**: Proper handling of file uploads using FormData and formidable
- **File Validation**: Type and size validation with user-friendly error messages
- **Upload Progress Tracking**: Real-time progress indication during file uploads
- **Drag and Drop Interface**: Intuitive drag-and-drop functionality using react-dropzone
- **Multiple File Support**: Upload multiple files simultaneously
- **Responsive Design**: Mobile-friendly interface with Tailwind CSS styling

## Technologies Used

- **Next.js**: React framework for server-side rendering and API routes
- **React Hook Form**: Form state management and validation
- **React Dropzone**: Drag and drop file upload functionality
- **Formidable**: Server-side multipart form parsing
- **Axios**: HTTP client with upload progress tracking
- **Tailwind CSS**: Utility-first CSS framework for styling

## Project Structure

```plaintext
file-upload/
├── pages/
│   ├── index.js          # Main upload form component
│   └── api/
│       └── upload.js     # API route for handling file uploads
├── uploads/              # Directory for uploaded files (created automatically)
├── package.json          # Project dependencies
├── next.config.js        # Next.js configuration
└── README.md            # Project documentation
```

## Setup Instructions

### 1. Create New Next.js Project

```bash
npx create-next-app file-upload
cd file-upload
```

### 2. Install Required Dependencies

```bash
npm install react-hook-form formidable axios react-dropzone
```

### 3. Install Tailwind CSS (Optional for styling)

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Configure `tailwind.config.js`:
```javascript
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Add to `styles/globals.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 4. Run the Development Server

```bash
npm run dev
```

Visit `http://localhost:3000` to see the application.

## Implementation Details

### Frontend Components (pages/index.js)

#### File Validation
- **Allowed Types**: JPEG, PNG, GIF, PDF, TXT
- **Size Limit**: 5MB per file
- **Multiple Files**: Up to 10 files per upload

#### Drag and Drop Features
- Visual feedback during drag operations
- File type and size validation on drop
- Error handling for rejected files

#### Progress Tracking
- Real-time upload progress bar
- Percentage completion display
- Status messages for user feedback

### Backend API (pages/api/upload.js)

#### Multipart Form Handling
- Uses formidable for parsing multipart form data
- Configurable upload directory and file naming
- Automatic directory creation

#### Security Features
- File type validation on server-side
- File size limits enforcement
- Unique filename generation to prevent conflicts

#### Error Handling
- Comprehensive error messages
- File cleanup on validation failures
- Proper HTTP status codes

## Usage Examples

### Basic File Upload
1. Click the upload area or drag files onto it
2. Select files that meet the validation criteria
3. Optionally add a description
4. Click "Upload Files" to start the upload process

### Validation Scenarios
- **Invalid File Type**: Files with unsupported extensions are rejected
- **File Too Large**: Files exceeding 5MB are rejected with error message
- **No Files Selected**: Form prevents submission without files

### Progress Tracking
- Progress bar shows upload completion percentage
- Status messages provide real-time feedback
- Upload button is disabled during active uploads

## Configuration Options

### File Upload Limits
Modify in `pages/api/upload.js`:
```javascript
const form = formidable({
  maxFileSize: 5 * 1024 * 1024, // 5MB
  maxFiles: 10, // Maximum files
  // ... other options
});
```

### Allowed File Types
Update validation arrays in both frontend and backend:
```javascript
const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'application/pdf', 'text/plain'];
```

### Upload Directory
Change upload location in API route:
```javascript
const uploadDir = path.join(process.cwd(), 'uploads');
```

## Error Handling

### Client-Side Errors
- File validation errors with specific messages
- Network errors during upload
- Progress tracking failures

### Server-Side Errors
- File parsing errors
- Disk space issues
- Permission problems

## Security Considerations

1. **File Type Validation**: Both client and server-side validation
2. **File Size Limits**: Prevents large file attacks
3. **Unique Filenames**: Prevents file overwrites
4. **Upload Directory**: Isolated from web-accessible directories
5. **Error Messages**: No sensitive information exposure

## Deployment Notes

### Environment Variables
Create `.env.local` for configuration:
```env
UPLOAD_DIR=/path/to/uploads
MAX_FILE_SIZE=5242880
```

### Production Considerations
- Configure proper file storage (AWS S3, etc.)
- Implement user authentication
- Add database integration for file metadata
- Set up proper backup strategies
- Configure CDN for file serving

## Troubleshooting

### Common Issues

1. **"Module not found" errors**
   - Ensure all dependencies are installed: `npm install`

2. **Upload directory permissions**
   - Check write permissions for the uploads directory

3. **File size limits**
   - Verify Next.js body parser configuration
   - Check server memory limits

4. **CORS errors**
   - Configure proper headers in next.config.js

### Debug Mode
Enable detailed error logging by setting:
```javascript
process.env.NODE_ENV = 'development'
```

## Future Enhancements

- Image preview functionality
- File compression before upload
- Resume interrupted uploads
- Batch upload management
- Integration with cloud storage services
- User authentication and file ownership
- File sharing and permissions
- Virus scanning integration

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request
```

Key improvements:
1. Proper Markdown formatting for headings, code blocks, and lists
2. Consistent syntax highlighting for code examples
3. Cleaned up the project structure visualization
4. Added env file syntax highlighting
5. Maintained all original content and technical details
6. Fixed indentation and spacing for better readability
7. Preserved all code examples and configuration instructions

You can copy this directly into VSCode and save as `README.md`