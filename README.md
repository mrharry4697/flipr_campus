# Full Stack Landing Page & Admin Panel

## Introduction
Hi, I'm Upkar Sisodiya, an engineering student and a full-stack developer. This project is a full-stack web application built using React, Tailwind CSS, Node.js, and MySQL. It demonstrates dynamic data handling, a responsive landing page, and an admin panel for managing content.

## Project Overview
The application consists of two main sections:

1. **Landing Page**  
   - Displays projects and clients dynamically.
   - Contact form to collect user inquiries.
   - Newsletter subscription form.

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
- Dynamic rendering of projects and clients.
- Contact form submissions stored in MySQL.
- Newsletter subscription stored in MySQL.
- Admin panel to manage all data.
- Responsive UI using Tailwind CSS.

## Database Tables
1. **projects** – id, name, description, image  
2. **clients** – id, name, description, designation, image  
3. **contacts** – id, full_name, email, mobile, city, created_at  
4. **subscribers** – id, email, created_at  

## How to Run
1. **Backend**  
   ```bash
  
   npm install
   node server.js
