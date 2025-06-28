# Read To Me - Text-to-Speech Application

A modern web application that converts text to speech and can read PDF files aloud. Built with React, Node.js, and MongoDB.

## Features

- 🔐 User authentication (signup/login)
- 📝 Text-to-speech functionality
- 📄 PDF file upload and reading
- 🎨 Modern, responsive UI
- 🔒 Protected routes
- 📱 Mobile-friendly design

## Tech Stack

### Frontend
- React 19 with TypeScript
- React Router for navigation
- Axios for API calls
- PDF.js for PDF processing
- Web Speech API for text-to-speech

### Backend
- Node.js with Express
- MongoDB with Mongoose
- JWT for authentication
- bcryptjs for password hashing
- CORS enabled

## Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd read-to-me-refactored
   ```

2. **Install all dependencies**
   ```bash
   npm run install-all
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the `backend` directory:
   ```env
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/read-to-me
   JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
   NODE_ENV=development
   ```

   **Note:** Replace `MONGO_URI` with your MongoDB connection string. If using MongoDB Atlas, use the connection string provided by Atlas.

4. **Start the development servers**
   ```bash
   npm run dev
   ```

   This will start both the backend server (port 5000) and frontend development server (port 3000).

### Alternative Setup

If you prefer to run servers separately:

**Backend only:**
```bash
cd backend
npm run dev
```

**Frontend only:**
```bash
cd frontend
npm start
```

## Usage

1. Open your browser and navigate to `http://localhost:3000`
2. Create an account or login with existing credentials
3. Use the text area to enter text for speech synthesis
4. Upload PDF files to extract and read their content
5. Use the controls to start/stop speech playback

## API Endpoints

### Authentication
- `POST /api/users/signup` - Register a new user
- `POST /api/users/login` - Login existing user

### Request/Response Format

**Signup:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

**Login:**
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "_id": "user_id",
  "name": "John Doe",
  "email": "john@example.com",
  "token": "jwt_token"
}
```

## Project Structure

```
read-to-me-refactored/
├── backend/
│   ├── controllers/
│   │   └── userController.js
│   ├── middleware/
│   │   └── authMiddleware.js
│   ├── models/
│   │   └── User.js
│   ├── routes/
│   │   └── userRoutes.js
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── auth/
│   │   │   └── PrivateRoute/
│   │   ├── components/
│   │   │   ├── Navbar.tsx
│   │   │   └── PDFReader.tsx
│   │   ├── context/
│   │   │   └── AuthContext.tsx
│   │   ├── pages/
│   │   │   ├── LoginPage.tsx
│   │   │   ├── ReaderPage.tsx
│   │   │   └── SignupPage.tsx
│   │   └── App.tsx
│   └── package.json
└── package.json
```

## Features in Detail

### Text-to-Speech
- Uses the Web Speech API for browser-native speech synthesis
- Supports multiple languages and voices
- Real-time speech control (play/pause/stop)

### PDF Reading
- Upload PDF files directly in the browser
- Extract text content using PDF.js
- Convert extracted text to speech
- Support for multi-page PDFs

### Authentication
- Secure user registration and login
- JWT-based authentication
- Protected routes for authenticated users
- Persistent login sessions

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the ISC License.

## Support

For support or questions, please open an issue in the repository. 