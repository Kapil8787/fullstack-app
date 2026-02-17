# Flipr Full-Stack Real Estate Platform

A full-stack real estate web application built using the **MERN stack** that allows users to explore real estate projects and enables administrators to manage projects, clients, contacts, and subscribers through a secure admin panel.  
The application focuses on clean UI, responsiveness, real-world CRUD operations, and optimized image handling with cropping support.

---

## 🚀 Project Overview

This project is designed to simulate a **real-world company website** for a real estate firm.  
It includes:

- A **public landing page** for visitors
- A **fully functional admin panel** for content management
- **Image upload with fixed-ratio cropping**
- RESTful APIs
- Responsive UI for all screen sizes

---

## 🧩 Key Features

### 🌐 Landing Page (User Side)
- Modern, responsive UI
- Project listings with images
- Client testimonials
- Newsletter subscription
- Contact form
- Clean card-based layout

### 🛠 Admin Panel
- Dashboard navigation
- Add / delete **Projects**
- Add / delete **Clients**
- View **Contacts** submitted from landing page
- View **Subscribers**
- Image upload with **mandatory cropping before saving**
- Secure and structured admin workflows

### 🖼 Image Cropping (Bonus Feature)
- Image cropping before upload (Admin panel)
- Fixed aspect ratio (4:3)
- Cropped image stored on backend
- Prevents layout breaking due to inconsistent image sizes

---

## 🧪 Tech Stack

### Frontend
- React.js (Vite)
- Tailwind CSS
- React Router
- Axios
- react-image-crop

### Backend
- Node.js
- Express.js
- Multer (image uploads)
- MongoDB (Atlas)
- Mongoose

### Database
- MongoDB Atlas (Free Tier)

---

## 📁 Folder Structure

# Flipr Full-Stack Real Estate Platform

A full-stack real estate web application built using the **MERN stack** that allows users to explore real estate projects and enables administrators to manage projects, clients, contacts, and subscribers through a secure admin panel.  
The application focuses on clean UI, responsiveness, real-world CRUD operations, and optimized image handling with cropping support.

---

## 🚀 Project Overview

This project is designed to simulate a **real-world company website** for a real estate firm.  
It includes:

- A **public landing page** for visitors
- A **fully functional admin panel** for content management
- **Image upload with fixed-ratio cropping**
- RESTful APIs
- Responsive UI for all screen sizes

---

## 🧩 Key Features

### 🌐 Landing Page (User Side)
- Modern, responsive UI
- Project listings with images
- Client testimonials
- Newsletter subscription
- Contact form
- Clean card-based layout

### 🛠 Admin Panel
- Dashboard navigation
- Add / delete **Projects**
- Add / delete **Clients**
- View **Contacts** submitted from landing page
- View **Subscribers**
- Image upload with **mandatory cropping before saving**
- Secure and structured admin workflows

### 🖼 Image Cropping (Bonus Feature)
- Image cropping before upload (Admin panel)
- Fixed aspect ratio (4:3)
- Cropped image stored on backend
- Prevents layout breaking due to inconsistent image sizes

---

## 🧪 Tech Stack

### Frontend
- React.js (Vite)
- Tailwind CSS
- React Router
- Axios
- react-image-crop

### Backend
- Node.js
- Express.js
- Multer (image uploads)
- MongoDB (Atlas)
- Mongoose

### Database
- MongoDB Atlas (Free Tier)

---

## 📁 Folder Structure

FLIPR-FULLSTACK/
│
├── backend/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── uploads/
│ ├── server.js
│ └── package.json
│
├── frontend/
│ ├── src/
│ │ ├── assets/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── services/
│ │ ├── App.jsx
│ │ └── main.jsx
│ ├── public/
│ └── package.json
│
└── README.md


---

## 🔗 API Endpoints

### Projects
- `GET /api/projects` – Fetch all projects
- `POST /api/projects` – Add new project (Admin)
- `DELETE /api/projects/:id` – Delete project

### Clients
- `GET /api/clients`
- `POST /api/clients`
- `DELETE /api/clients/:id`

### Contacts
- `POST /api/contact`
- `GET /api/contact`

### Subscribers
- `POST /api/subscribers`
- `GET /api/subscribers`

---

## ⚙️ Local Setup Instructions

### 1️⃣ Clone Repository
```bash
git clone https://github.com/your-username/flipr-fullstack.git
cd flipr-fullstack

2️⃣ Backend Setup
cd backend
npm install


Create a .env file:

MONGO_URI=your_mongodb_atlas_connection_string


Run backend server:

node server.js


Backend runs on:

http://localhost:5000

3️⃣ Frontend Setup
cd frontend
npm install
npm run dev


Frontend runs on:

http://localhost:5173


---


