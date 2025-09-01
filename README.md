 #  Short URL Generator

A **secure and lightweight URL shortener** built with **Node.js**,
**Express**, and **MongoDB**, featuring **JWT-based authentication**,
**role-based authorization**, and **visit analytics**.

##  Features

-    **User Authentication** -- Signup & login with **JWT tokens**
-    **Role-Based Access Control (RBAC)** -- Separate permissions for
    **normal users** and **admins**
-    **URL Shortening** -- Convert long URLs into short, shareable
    links
-    **Unique IDs** -- Generated using `nanoid`
-    **Analytics** -- Track visits with timestamps and user details
-    **MongoDB Database** -- Store users, short links, and analytics
-    **REST API** -- Fully tested with Postman
-    **EJS Templates** -- Clean and minimal UI

------------------------------------------------------------------------

##  Tech Stack

-   **Backend**: Node.js, Express
-   **Database**: MongoDB (Mongoose)
-   **Authentication**: **JWT (JSON Web Tokens)**
-   **Authorization**: Role-based (Normal User / Admin)
-   **ID Generation**: nanoid
-   **Templating**: EJS
-   **Testing**: Postman

------------------------------------------------------------------------

##  Authentication & Authorization

We initially implemented **session-based auth with cookies**, but later
migrated to a **JWT-based stateless authentication system** for
scalability and security.

### User Roles

-   **Normal User** -- Can create and manage their own short links
-   **Admin** -- Can manage all users and links

------------------------------------------------------------------------

##  Authentication APIs

### 1️⃣ User Signup

**POST** `/api/auth/signup`

``` json
{
  "name": "Ayush Bhandari",
  "email": "ayush@example.com",
  "password": "securepassword",
  "role": "user"
}
```

### 2️⃣ User Login

**POST** `/api/auth/login`

``` json
{
  "email": "ayush@example.com",
  "password": "securepassword"
}
```

✔ On success → returns a **JWT token**

------------------------------------------------------------------------

## 🌐 URL APIs (JWT Required)

### 3️⃣ Create Short URL

**POST** `/api/url`

**Headers**

``` http
Authorization: Bearer <JWT_TOKEN>
```

**Body**

``` json
{
  "url": "https://example.com/long-page"
}
```

**Response**

``` json
{
  "shortID": "abc123",
  "redirectURL": "https://example.com/long-page",
  "createdBy": "userId123"
}
```

------------------------------------------------------------------------

### 4️⃣ Redirect to Original URL

**GET** `/:shortid`

-   Redirects user to the original URL
-   Stores visit timestamp in `visitHistory`

------------------------------------------------------------------------

### 5️⃣ Admin Routes (Restricted)

**GET** `/api/admin/users`
- List all registered users (Admin only)

**DELETE** `/api/admin/url/:id`
- Delete any short URL (Admin only)

------------------------------------------------------------------------

##  Getting Started

### 1. Clone the repo

``` bash
git clone https://github.com/your-username/short-url-generator.git
cd short-url-generator
```

### 2. Install dependencies

``` bash
npm install
```

### 3. Set environment variables

Create a `.env` file:

``` env
PORT=8001
MONGO_URI=mongodb://localhost:27017/shorturl
JWT_SECRET=your_jwt_secret_key
```

### 4. Start MongoDB

``` bash
mongod
```

### 5. Run the server

``` bash
node index.js
```

Server runs at 👉 **http://localhost:8001**

------------------------------------------------------------------------

## 🔮 Future Enhancements

-   ⏳ Expiry dates for short URLs
-   📈 Advanced analytics dashboard
-   📬 Email verification & password reset
-   🌐 Rate limiting & IP-based restrictions

------------------------------------------------------------------------

##  License

This project is licensed under the **MIT License**.

------------------------------------------------------------------------

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
Check the [issues
page](https://github.com/your-username/short-url-generator/issues).

------------------------------------------------------------------------

## ⭐ Show Your Support

If you like this project, consider giving it a ⭐ to support
development!
