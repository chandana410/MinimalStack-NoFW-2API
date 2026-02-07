# MinimalStack-NoFW-2API

> A minimal full-stack web application demonstrating a vanilla HTML/CSS frontend with a Node.js backend featuring only 2 API endpoints.

## 🎯 Project Constraints

- **Frontend**: No CSS frameworks (vanilla CSS only)
- **Backend**: Exactly 2 API endpoints
- **Competition**: DevRush Build.Fix.Escape

## 📁 Project Structure

```
MinimalStack-NoFW-2API/
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
├── backend/
│   ├── server.js
│   ├── package.json
│   └── .env.example
├── README.md
└── .gitignore
```

## 🚀 Quick Start

### Frontend
No build process needed! Simply open `frontend/index.html` in a browser.

### Backend

1. Navigate to the backend directory:
   ```bash
   cd backend
   npm install
   ```

2. Create a `.env` file from `.env.example`:
   ```bash
   cp .env.example .env
   ```

3. Start the server:
   ```bash
   npm start
   ```

The backend will run on `http://localhost:3000`

## 📡 API Endpoints

### Endpoint 1: GET /api/data
Returns sample data from the server.

**Request:**
```
GET /api/data
```

**Response:**
```json
{
  "status": "success",
  "data": [
    { "id": 1, "message": "Hello from API" },
    { "id": 2, "message": "Minimal Stack" }
  ]
}
```

### Endpoint 2: POST /api/submit
Accepts form data and returns a confirmation.

**Request:**
```
POST /api/submit
Content-Type: application/json

{
  "name": "User Name",
  "message": "User Message"
}
```

**Response:**
```json
{
  "status": "success",
  "message": "Data received successfully",
  "received": {
    "name": "User Name",
    "message": "User Message",
    "timestamp": "2026-02-07T10:00:00Z"
  }
}
```

## 🎨 Frontend Features

- Pure HTML/CSS (no frameworks)
- Responsive design with vanilla CSS
- Vanilla JavaScript for interactivity
- Fetch API to communicate with backend

## ⚙️ Backend Features

- Node.js with Express.js
- CORS enabled for frontend requests
- JSON request/response handling
- Error handling middleware
- Environment configuration

## 📝 Technologies Used

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Backend**: Node.js, Express.js
- **Package Manager**: npm

## 🔧 Development

To modify the project:

1. Edit `frontend/` files for UI changes
2. Edit `backend/server.js` for API logic
3. No build step required for frontend
4. No dependencies for frontend

## 📜 License

MIT License - Feel free to use this project as a template!

## 👨‍💻 Author

Chandana410 - DevRush Build.Fix.Escape Submission
