# Full Stack Landing Page & Admin Panel Project

## Introduction
Hi, I'm Harry, an engineering student and a full-stack developer. This project is a part of my campus placement task, where I built a dynamic web application using React, Tailwind CSS, Node.js, and MySQL. It demonstrates the creation of a landing page, a functional admin panel, and dynamic data handling using REST APIs.

## Project Overview
This project consists of two main sections:

1. **Landing Page**  
   - Displays projects and clients dynamically.
   - Contact form for user inquiries.
   - Newsletter subscription.

2. **Admin Panel**  
   - Add, view, and manage projects and clients.
   - View contact form submissions.
   - View newsletter subscribers.

## Technologies Used
- **Frontend:** React (Vite), Tailwind CSS, React Router DOM  
- **Backend:** Node.js, Express.js  
- **Database:** MySQL  
- **API Communication:** REST API using fetch  
- **Version Control:** Git/GitHub  

## Features
- Fully dynamic projects and clients section.
- Contact form submissions stored in MySQL.
- Newsletter subscription with email validation.
- Admin panel to manage all data.
- Responsive and modern design using Tailwind CSS.

## Database Tables
1. **projects** – id, name, description, image  
2. **clients** – id, name, description, designation, image  
3. **contacts** – id, full_name, email, mobile, city, created_at  
4. **subscribers** – id, email, created_at  

## How to Run
1. **Backend**  
   ```bash
   cd flipr-backend
   npm install
   node server.js
