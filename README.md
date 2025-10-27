# AI Course Generator 🚀

A full-stack web application that leverages the Google Gemini API to dynamically generate structured educational courses, complete with modules and quizzes, from a single user prompt.

**Live Demo:** [https://ai-course-generator-ahcxgxajcuc8fdc6.centralindia-01.azurewebsites.net/](https://ai-course-generator-ahcxgxajcuc8fdc6.centralindia-01.azurewebsites.net/)

---


## ✨ Features

- **AI-Powered Content:** Utilizes the Google Gemini API to generate comprehensive course content, including detailed module notes and quizzes.
- **User Authentication:** Secure user registration and login system using JWT and bcrypt for password hashing.
- **Personalized Dashboard:** Users can view and manage their saved courses.
- **Dynamic Module Generation:** Automatically creates a list of relevant module titles based on the initial course prompt.
- **Save & Resume:** Course progress and generated content are saved to an Azure SQL database via Sequelize.
- **PDF Export:** Export generated module content and quizzes to a downloadable PDF document.
- **Responsive Design:** A clean and modern user interface built with React and Tailwind CSS.

---

## 🛠️ Tech Stack

- **Frontend:**
  - React.js
  - Vite
  - Tailwind CSS
  - Axios
  - React Router
- **Backend:**
  - Node.js
  - Express.js
  - Sequelize ORM
- **Database:**
  - Supabase SQL
- **Authentication:**
  - JSON Web Tokens (JWT)
  - bcrypt.js
- **AI:**
  - Google Gemini API
- **Deployment:**
  - Microsoft Azure App Service (Linux)
  - CI/CD with GitHub Actions