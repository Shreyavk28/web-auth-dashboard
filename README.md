# Task Manager Web App
Frontend Developer Intern Assignment

A full-stack task management web application with authentication, dashboard, and CRUD operations.
Built using React.js, Tailwind CSS, Node.js, Express, MongoDB, and JWT authentication.

---

## Features

Authentication
- User registration and login
- Password hashing using bcrypt
- JWT-based authentication
- Protected dashboard routes

Dashboard
- User dashboard after login
- View total tasks
- Logout functionality

Task Management (CRUD)
- Create new tasks
- Read all tasks
- Update tasks using inline edit
- Delete tasks
- Custom confirmation modal before update and delete

UI / UX
- Responsive design
- Tailwind CSS styling
- Clean SaaS-style dashboard
- Custom modal instead of browser alerts

---

## Tech Stack

Frontend
- React.js
- React Router
- Axios
- Tailwind CSS

Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT Authentication
- bcrypt

---

## Project Structure
```
project-root/
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── controllers/
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json
│   └── .env
│
└── README.md
```
---

## Environment Variables

Backend (backend/.env)

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

Frontend (frontend/.env)

VITE_API_URL=http://localhost:5000/api

Note: Environment files are ignored using .gitignore for security.

---

## How to Run the Project Locally

1. Clone the repository

git clone https://github.com/your-username/task-manager-app.git
cd task-manager-app

2. Backend setup

cd backend
npm install
npm run dev

Backend runs on http://localhost:5000

3. Frontend setup

cd frontend
npm install
npm run dev

Frontend runs on http://localhost:5173

---

## API Endpoints

Authentication
- POST /api/auth/register – Register user
- POST /api/auth/login – Login user

Tasks (Protected)
- GET /api/tasks – Fetch all tasks
- POST /api/tasks – Create a task
- PUT /api/tasks/:id – Update a task
- DELETE /api/tasks/:id – Delete a task

---

## API Testing

A Postman collection is included to test:
- Authentication APIs
- Task CRUD APIs

---

## Security Practices

- Password hashing using bcrypt
- JWT token validation middleware
- Protected routes
- Sensitive credentials stored in environment variables

---

## Scalability Notes

- Modular project structure
- Separation of routes, controllers, and services
- Easily extendable for pagination, role-based access, and cloud deployment

---

## Author

Shreya V S  
Frontend Developer Intern Applicant

---

## Assignment Status

All required features implemented.
Project completed within the given timeline.
Ready for review and deployment.

Thank you for reviewing my assignment.
