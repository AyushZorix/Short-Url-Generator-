Short URL Generator
A simple and efficient URL shortener built with Node.js, Express, and MongoDB.
Now with user authentication to securely manage shortened URLs.
🚀 Features
Convert long URLs into short, shareable links
Unique short IDs generated using nanoid
Store URL mappings and visit history in MongoDB
Track every visit with timestamps
User Authentication (Signup/Login) using sessions & cookies
Only logged-in users can create/manage short URLs
RESTful API tested via Postman
🛠 Tech Stack
Backend: Node.js, Express
Database: MongoDB (Mongoose)
Authentication: Cookie-based session management (uuid, cookie-parser)
ID Generation: nanoid
API Testing: Postman
Views: EJS
🔑 Authentication Endpoints
1️⃣ User Signup
POST /user/signup
Request Body:
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securepassword"
}
2️⃣ User Login
POST /user/login
Request Body:
{
  "email": "john@example.com",
  "password": "securepassword"
}
👉 On successful login, a session cookie (sessionId) is set.
🌐 URL Endpoints (Authenticated Users Only)
3️⃣ Create a Short URL
POST /url
Request Body:
{
  "url": "https://example.com/long-page"
}
Response (EJS render or JSON):
{
  "shortID": "abc123",
  "redirectURL": "https://example.com/long-page"
}
4️⃣ Redirect to Original URL
GET /:shortid
Redirects to the original long URL and logs visit history with timestamp.

