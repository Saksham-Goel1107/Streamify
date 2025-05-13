# Streamify - Language Learning Social Platform 🌍

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node->=18.0.0-brightgreen.svg)](https://nodejs.org/)
[![React Version](https://img.shields.io/badge/react-^18.2.0-blue.svg)](https://reactjs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-4.4+-darkgreen.svg)](https://www.mongodb.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v3.4-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)
![Streamify](frontend/public/favicon.ico)

Streamify is a modern social platform designed to connect language learners worldwide. Practice languages through video calls, chat with native speakers, and find language exchange partners based on your learning goals.

![Streamify Screenshot](frontend/public/screenshot-for-readme.png)

## ✨ Features

- 🤝 Connect with language exchange partners
- 💬 Real-time chat with message translation
- 🎥 Video calls for language practice
- 🌐 Language proficiency matching
- 🔍 Smart partner recommendations
- 🌙 Light/Dark mode support
- 🔐 Secure authentication
- 📱 Responsive design

## 🚀 Tech Stack

- **Frontend:**
  - React.js with Vite
  - TailwindCSS & DaisyUI
  - React Query
  - Zustand for state management

- **Backend:**
  - Node.js & Express
  - MongoDB with Mongoose
  - JWT Authentication
  - WebRTC for video calls
  - Stream SDK for chat

## 📁 Project Structure

```
Streamify/
├── frontend/                # React frontend application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── hooks/         # Custom React hooks
│   │   ├── store/         # State management
│   │   ├── lib/           # Utilities and API client
│   │   └── constants/     # Constants and configurations
│   └── public/            # Static assets
│
└── backend/               # Node.js backend server
    ├── src/
    │   ├── controllers/   # Request handlers
    │   ├── models/        # Database models
    │   ├── routes/        # API routes
    │   ├── middleware/    # Custom middleware
    │   └── lib/           # Utilities and configurations
    └── tests/            # Backend tests
```

## 🔧 Setup & Installation

### Prerequisites

- Node.js >= 18.x
- MongoDB >= 4.4
- npm or yarn
- Stream account for chat functionality

### Environment Variables

Create `.env` files in both frontend and backend directories:

#### Backend (.env)
```env
PORT=5001
MONGO_URI=mongodb://localhost:27017/Streamify
STEAM_API_KEY=your_stream_api_key
STEAM_API_SECRET=your_stream_api_secret
JWT_SECRET_KEY=your_jwt_secret
NODE_ENV=development
```

#### Frontend (.env)
```env
VITE_API_URL=http://localhost:5001
VITE_STREAM_API_KEY=your_stream_api_key
```

### Installation Steps

1. Clone the repository:
```bash
git clone https://github.com/Saksham-Goel1107/Streamify.git
cd Streamify
```

2. Install backend dependencies:
```bash
cd backend
npm install
```

3. Install frontend dependencies:
```bash
cd frontend
npm install
```

4. Start the development servers:

Backend:
```bash
cd backend
npm run dev
```

Frontend:
```bash
cd frontend
npm run dev
```

The application will be available at `http://localhost:5173`

## 📝 API Documentation

### Authentication Endpoints

- `POST /api/auth/signup` - Register a new user
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `GET /api/auth/me` - Get current user

### User Endpoints

- `GET /api/users` - Get recommended users
- `GET /api/users/friends` - Get user's friends
- `POST /api/users/friend-request/:id` - Send friend request
- `PUT /api/users/friend-request/:id/accept` - Accept friend request

### Chat Endpoints

- `GET /api/chat/token` - Get Stream chat token
- `GET /api/chat/messages` - Get chat messages

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- Saksham Goel - [GitHub Profile](https://github.com/Saksham-Goel1107)

## 🙏 Acknowledgments

- [Stream](https://getstream.io/) for chat functionality
- [TailwindCSS](https://tailwindcss.com/) for styling
- [DaisyUI](https://daisyui.com/) for UI components