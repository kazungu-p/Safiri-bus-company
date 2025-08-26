# Bus Company Website 🚍

A **full-stack web application** for a bus company built with **Node.js, Express, and EJS**.  
The website allows visitors to view information about the company, contact support, and (soon) sign in or register to access more features.

---

## 🌟 Features
- **Home Page** – Overview of the company.
- **About Page** – Company background and mission.
- **Contact Page** – Users can send inquiries through a contact form (AJAX-based, no page reload).
- **Login & Registration (Coming Soon)** – Secure authentication system for customers.
- **Desktop-First Design** – Currently optimized for desktop screens.  
  _(Responsive design with media queries will be added in a future update.)_

---

## 🏗️ Tech Stack
- **Backend**: Node.js, Express.js
- **Frontend**: EJS templating, HTML, CSS, JavaScript
- **Middleware**: Body-parser (for parsing form data)
- **Future Add-ons**: Database (MongoDB/MySQL) for storing users, authentication with Passport.js or JWT

---

## 📂 Project Structure
bus-website/
├── views/ # EJS templates (home, about, contact, login)
│ ├── index.ejs
│ ├── about.ejs
│ ├── contact.ejs
│ └── login.ejs (coming soon)
├── public/ # Static files (CSS, JS, images)
│ └── style.css
├── app.js # Main server file
├── package.json # Dependencies & scripts
└── README.md # Documentation

yaml
Copy
Edit

---

## 🚀 Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/bus-website.git
   cd bus-website
Install dependencies:

bash
Copy
Edit
npm install
Start the server:

bash
Copy
Edit
npm start
or

bash
Copy
Edit
node app.js
Open in your browser:

arduino
Copy
Edit
http://localhost:3000

## 🔮 Roadmap
- ✅ Home, About, Contact pages
- ⏳ Login & Registration
- ⏳ Responsive Design (mobile & tablet support)
- ⏳ Bus booking system
- ⏳ Admin dashboard