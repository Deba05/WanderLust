# 🌍 WanderLust

WanderLust is a full-stack Node.js web application for discovering and sharing campgrounds. Inspired by YelpCamp, it enables users to register, post, review, and explore camping sites with detailed information and images.

---

## ✨ Features

- 🔐 User authentication (Register/Login/Logout)
- 🏕️ Add, edit, delete campgrounds
- 📝 Review system with ratings and comments
- 📍 Location mapping via Mapbox
- ☁️ Image uploads via Cloudinary
- 🧰 Middleware-based route protection and validation
- 📸 Responsive frontend using EJS and Bootstrap

---

## 🔧 Tech Stack

### Backend:
- Node.js
- Express.js
- MongoDB + Mongoose
- Passport.js (authentication)
- Cloudinary (image hosting)
- Mapbox (location services)

### Frontend:
- EJS Templating
- Bootstrap 5
- Custom CSS

---

## 📦 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/Deba05/WanderLust.git
cd WanderLust
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root folder and add:

```bash
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_KEY=your_key
CLOUDINARY_SECRET=your_secret
MAPBOX_TOKEN=your_mapbox_token
DB_URL=mongodb://localhost:27017/wanderlust
SECRET=session_secret
```

### 4. Start the Server

```bash
node app.js
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🧪 Project Structure

```
WanderLust/
├── app.js
├── init/
├── controllers/
├── models/
├── routes/
├── views/
├── public/
├── utils/
├── middleware.js
├── schema.js
└── .env (you create this)
```

---

## 🖼️ Screenshots

> Add some `.png` or `.jpg` files in `public/images/` and link them here to show how the site looks.

---

## 🙋 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you'd like to change.

---

## 📄 License

This project is licensed under the MIT License.

---

## 📬 Contact

**Debaditya Dasgupta**  
GitHub: [@Deba05](https://github.com/Deba05)
