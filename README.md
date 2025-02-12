pulse | tech-Ecommerce
pulse | tech e-commerce platform designed to demonstrate a wide range of web development skills. Unlike traditional e-commerce sites, Genkart intentionally omits payment and "Buy Now" options, focusing instead on user experience, product management, and robust backend functionality. The project is built using cutting-edge technologies and frameworks to ensure scalability, performance, and maintainability.

Tech Stack Overview
Frontend: Built with Next.js, a powerful React-based framework that supports server-side rendering and static site generation, enhancing both performance and SEO.
Backend: Powered by Node.js and Express.js, providing a flexible and efficient environment for handling API requests and managing server-side logic.
Database: Utilizes MongoDB, a NoSQL database, for storing product information, user data, and other critical information. The schema-less nature of MongoDB allows for rapid development and flexibility in data management.
Image Management: Cloudinary is integrated for efficient image storage and delivery, offering responsive images and optimized media assets across the platform.
Styling: The user interface is styled with Tailwind CSS and Material UI, combining the utility-first approach of Tailwind with the component-rich Material UI to create a visually appealing and responsive design. Material Tailwind further enhances the design with additional UI components.
Key Features
Authentication & Authorization
Secure user authentication and role-based authorization are implemented using JWT (JSON Web Tokens).
The platform supports user roles such as admin and customer, each with specific access levels and permissions.
Product Management
Product Pages: Each product category, such as T-shirts and casual shirts, has dedicated pages. These pages dynamically display products pulled from the database, with detailed information and images stored via Cloudinary.
Category Pages: Users can browse products by categories, which are organized to provide a seamless shopping experience.
User Profile
The profile page allows users to manage their personal information, view their browsing history, and update account settings.
Admin Panel
The admin dashboard enables administrators to perform CRUD (Create, Read, Update, Delete) operations on products, categories, and user accounts.
This panel is designed with security in mind, ensuring that only authorized admins can make changes.
Project Objectives
Genkart is not just a showcase of products; it is a demonstration of full-stack web development skills. By integrating modern technologies and best practices, this project serves as a portfolio piece, illustrating the ability to build scalable, maintainable, and user-friendly applications. The project also highlights proficiency in authentication, media asset management, and responsive UI/UX design.

Potential Future Enhancements
Although the current version of Genkart does not include payment and "Buy Now" options, it is architected to easily integrate these features in the future.

Planned Features
Payment Gateway Integration (e.g., Razorpay, Stripe).
Shopping Cart System to manage user selections.
Order Management System for tracking purchases.
Technologies Used
Next.js
Node.js
Express.js
MongoDB
Tailwind CSS
Cloudinary
Material UI
Material Tailwind
How to Use
Requirements
Create a MongoDB Atlas Account: MongoDB Atlas
Create a Cloudinary Account: Cloudinary
Use Visual Studio Code: Download VS Code
Install Git:
Windows
Mac
Install Node.js: Node.js Download
Getting the Code
Clone the repository in VS Code:

bash
Copy
Edit
https://github.com/adildotes/Full-stack-Ecommerce-website.gitSet Up Environment Variables

Frontend Environment Variables (/client/.env)
bash
Copy
Edit
NEXT_PUBLIC_API='http://localhost:5000/api'
NEXT_PUBLIC_CLIENT_URL="http://localhost:5000/"
NEXT_PUBLIC_JWT_SECRET="your_secret"
NEXT_PUBLIC_JWT_USER_SECRET="your_user_secret"
NEXT_PUBLIC_NODE_ENV="development"
Backend Environment Variables (/server/.env)
bash
Copy
Edit
MONGO_DB_URI="mongodb+srv://username:password@project.mongodb.net/genkart?retryWrites=true&w=majority"
EMAIL_USER="your_email@gmail.com"
EMAIL_PASS="your_app_password"
CLIENT_URL="http://localhost:3000"
NODE_ENV="production"
CLOUDINARY_CLOUD_NAME=""
CLOUDINARY_API_KEY=""
CLOUDINARY_API_SECRET=""
CLOUDINARY_FOLDER_NAME="Genkart"
JWT_SECRET="your_secret"
JWT_USER_SECRET="your_user_secret"
JWT_EXPIRES_IN="1d"
How to Run
Step 1: Start the Backend
bash
Copy
Edit
cd server
npm install
npm start
Step 2: Start the Frontend
bash
Copy
Edit
cd client
npm install
npm run dev
Once both are running, you will see URLs displayed in the terminal.

Creating an Admin User
Uncomment the admin signup route in /server/routes/authRoutes.js.

Use Postman to create an admin:

h
Copy
Edit
POST http://localhost:5000/api/auth/admin/signup
Login to the Admin Panel at:

http
Copy
Edit
http://localhost:3000/admin
Re-comment the admin signup route after the admin is created for security.

Project Developed By
This project is designed and developed by Adildotes, a full-stack developer skilled in Next.js, Node.js, Express.js, Firebase, MongoDB, and UI/UX design.

🔗 GitHub: https://github.com/adildotes
🔗 LinkedIn: https://www.linkedin.com/in/adildotes
📩 Email: adildotes@gmail.com
🌐 Portfolio: https://adil.wedotes.com/

This project serves as a portfolio piece, demonstrating expertise in full-stack web development, authentication, database management, and UI/UX design. If you have any queries or collaboration opportunities, feel free to reach out! 🚀

