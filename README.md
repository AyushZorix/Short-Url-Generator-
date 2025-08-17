# Short URL Generator

A lightweight and secure **URL shortener** built with **Node.js**, **Express**, and **MongoDB**. Includes **user authentication** so only registered users can create and manage short links.

## ✨ Features

*  **User Authentication** – Signup, login, and session-based access
*  **URL Shortening** – Convert long URLs into short, shareable links
*  **Unique IDs** – Generated using `nanoid`
*  **Analytics** – Track visits with timestamps
*  **Database** – Store mappings and user data in MongoDB
*  **REST API** – Tested with Postman
*  **Views** – Clean EJS templates for UI

## 🛠 Tech Stack

* **Backend**: Node.js, Express
* **Database**: MongoDB (Mongoose)
* **Authentication**: Cookie + Session (`uuid`, `cookie-parser`)
* **ID Generation**: nanoid
* **Templating**: EJS
* **Testing**: Postman

## 🔑 Authentication APIs

### 1️⃣ User Signup
**POST** `/user/signup`

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securepassword"
}
```

### 2️⃣ User Login
**POST** `/user/login`

```json
{
  "email": "john@example.com",
  "password": "securepassword"
}
```

✔ On success → session cookie is created.

## 🌐 URL APIs (Requires Login)

### 3️⃣ Create Short URL
**POST** `/url`

```json
{
  "url": "https://example.com/long-page"
}
```

**Response**
```json
{
  "shortID": "abc123",
  "redirectURL": "https://example.com/long-page"
}
```

### 4️⃣ Redirect to Original URL
**GET** `/:shortid`
* Redirects user to the original URL
* Stores visit timestamp in `visitHistory`

## 🚀 Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/your-username/short-url-generator.git
cd short-url-generator
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start MongoDB
```bash
mongod
```

### 4. Run the server
```bash
node index.js
```

Server runs at 👉 **http://localhost:8001**

## 🔮 Future Enhancements

*  Password hashing (`bcrypt`)
*  JWT authentication option
*  Expiry dates for short URLs
*  Admin dashboard for analytics

## 📝 License

This project is licensed under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/your-username/short-url-generator/issues).

## ⭐ Show your support

Give a ⭐ if this project helped you!
