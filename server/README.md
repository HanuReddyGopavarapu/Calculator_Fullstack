# Calculator Project

## Overview
The Calculator Project is a simple web-based calculator application built using React for the front end and Node.js with Express for the back end. This application allows users to perform basic arithmetic operations (addition, subtraction, multiplication, and division) and is integrated with a MongoDB database for storing user history or other data.

---

## Features
- Perform basic arithmetic operations:
  - Addition
  - Subtraction
  - Multiplication
  - Division
- User-friendly interface with React.
- Backend API to handle operations and manage data.
- MongoDB integration for persistent data storage.

---

## Technologies Used
### Frontend
- React.js
- CSS (for styling)

### Backend
- Node.js
- Express.js

### Database
- MongoDB (Cloud-based connection using MongoDB Atlas)

---

## Project Structure
```
calculator-project/
├── client/             # React frontend
│   ├── public/         # Static assets
│   ├── src/            # Source code for React app
│   │   ├── components/ # Reusable React components
│   │   ├── App.js      # Main React component
│   │   └── index.js    # Entry point
├── server/             # Node.js backend
│   ├── routes/         # Express routes
│   │   └── calculator.js  # Calculator route handler
│   ├── models/         # Mongoose models
│   ├── server.js       # Entry point for the backend
│   └── .env            # Environment variables
├── README.md           # Project documentation
└── package.json        # Node.js dependencies
```

---

## Installation
### Prerequisites
- Node.js installed on your system
- MongoDB connection string (setup in `.env` file)

### Steps
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd calculator-project
   ```
2. Install dependencies:
   ```bash
   # Install backend dependencies
   cd server
   npm install

   # Install frontend dependencies
   cd ../client
   npm install
   ```
3. Configure environment variables:
   - Create a `.env` file in the `server` directory with the following content:
     ```env
     MONGO_URL=<Your MongoDB Connection String>
     PORT=3001
     ```
4. Run the project:
   ```bash
   # Start the backend server
   cd server
   npm start

   # Start the frontend
   cd ../client
   npm start
   ```

---

## API Endpoints
### Base URL: `http://localhost:3001`

### Calculator Routes
1. **POST** `/calculate`
   - Request:
     ```json
     {
       "operation": "add", // Supported values: add, subtract, multiply, divide
       "num1": 5,
       "num2": 3
     }
     ```
   - Response:
     ```json
     {
       "result": 8
     }
     ```

2. **GET** `/history`
   - Response:
     ```json
     [
       {
         "operation": "add",
         "num1": 5,
         "num2": 3,
         "result": 8
       }
     ]
     ```

---

## How to Use
1. Open the app in your browser (`http://localhost:3000`).
2. Input two numbers and select the operation.
3. View the result instantly.
4. (Optional) Check the calculation history if implemented.

---

## Future Enhancements
- Add more advanced operations (e.g., square root, power).
- Implement user authentication.
- Add unit testing for backend and frontend.
- Improve UI/UX for better accessibility.

---

## Contributing
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add new feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

---

## License
This project is licensed under the MIT License. See the LICENSE file for details.

