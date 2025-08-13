# Short URL Generator

A simple and efficient URL shortener built with **Node.js**, **Express**, and **MongoDB**.  
This project generates short, shareable links using **nanoid** and tracks visit history with timestamps.  

---

## Features
- Convert long URLs into short, shareable links
- Unique short IDs generated using `nanoid`
- Store URL mappings and visit history in MongoDB
- Track every visit with timestamps
- RESTful API tested via Postman

---

## Tech Stack
- **Backend**: Node.js, Express
- **Database**: MongoDB (Mongoose)
- **ID Generation**: nanoid
- **API Testing**: Postman

---

## API Endpoints

### 1️⃣ Create a Short URL
**POST** `/url`  
**Request Body:**
```json
{
  "url": "https://example.com/long-page"
}
