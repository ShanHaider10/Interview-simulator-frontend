<div align="center">
  <br />
  <a href="https://github.com/ShanHaider10/Interview-Simulator" target="_blank">
    <img src="https://github.com/ShanHaider10/Interview-Simulator/blob/master/project.PNG" alt="Project Banner">
  </a>
  <br />

  <div>
    <img src="https://img.shields.io/badge/Next.js-0070F3?style=for-the-badge&logo=next.js&logoColor=white" />
    <img src="https://img.shields.io/badge/-JavaScript-green?style=for-the-badge&logo=javascript&logoColor=white" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logo=tailwindcss&logoColor=white" />
    <img src="https://img.shields.io/badge/-Express.js-grey?style=for-the-badge&logo=express&logoColor=white" />
    <img src="https://img.shields.io/badge/MongoDB-4DB33D?style=for-the-badge&logo=mongodb&logoColor=white" />
  </div>

  <h3 align="center">Interview Simulator 🎤</h3>
</div>

---

## 📋 Table of Contents

1. [📖 Introduction](#introduction)
2. [⚙️ Tech Stack](#tech-stack)
3. [🚀 Features](#features)
4. [📦 Setup & Installation](#setup--installation)
5. [💡 Usage](#usage)
6. [📁 Folder Structure](#folder-structure)
7. [🌐 Links](#links)

---

## 🤖 Introduction

A full-stack AI-based Interview Simulator that:

- Asks role-based interview questions.
- Records user answers and performs **Sentiment Analysis**.
- Displays an animated **interview summary**.
- Saves transcript data to **MongoDB**.
- Built using `Next.js`, `Express`, `MongoDB`, `TailwindCSS`, `Framer Motion`.

---

## ⚙️ Tech Stack

- **Frontend**: Next.js 15, TailwindCSS, Framer Motion
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose)
- **State Management**: Context API
- **Deployment**: (Optional - add Vercel / Render link here)

---

## 🚀 Features

- ✅ Role-based dynamic interview flow
- ✅ Animated question and answer UI
- ✅ Real-time Sentiment Analysis
- ✅ Summary Table with highlight effects
- ✅ Data stored in MongoDB
- ✅ Restart interview functionality
- 🚧 (Coming Soon): Export to PDF, Auth with Google, Admin Analytics

---

## 🤸 Setup & Installation

### Prerequisites

- Node.js (v18+)
- MongoDB (local or Atlas)
- Yarn / npm

---

### 📦 Clone the repository

```bash
git clone https://github.com/ShanHaider10/Interview-Simulator.git
cd Interview-Simulator
```

---

### 🔧 Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Visit 👉 [http://localhost:3000](http://localhost:3000)

---

### 🔧 Backend Setup

```bash
cd backend
npm install
npm run dev
```

This will start the server on 👉 `http://localhost:4000`

✅ Make sure MongoDB is running on: `mongodb://127.0.0.1:27017/interview`

---

### Example `.env` (Optional)

If needed:

```env
PORT=4000
MONGODB_URI=mongodb://127.0.0.1:27017/interview
```

---

## 💡 Usage

- Select a role and start interview.
- Answer questions and submit.
- Summary appears with **animated sentiment result**.
- Transcript is saved to MongoDB.

---

## 📁 Folder Structure

```bash
Interview-Simulator/
├── frontend/       # Next.js client
│   ├── app/
│   ├── components/
│   ├── context/
│   ├── utils/
│   └── ...
├── backend/        # Express server
│   ├── routes/
│   ├── models/
│   ├── controllers/
│   └── ...
```
---

## 🌐 Links

- 🔥 [Live Demo (if deployed)](https://your-live-link.com)
- 📦 [MongoDB Docs](https://mongodb.com)
- 🔠 [Next.js Docs](https://nextjs.org/docs)
- 🛠️ [Framer Motion](https://www.framer.com/motion/)

---

## 🙌 Credits

Built with ❤️ by [Shan Haider](https://github.com/ShanHaider10)

---
