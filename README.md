# Portfolio Website

A modern, responsive personal portfolio website built with React and Vite. Features user authentication, dark/light theme toggle, and a fully responsive design that showcases skills, projects, and contact information.

## 🚀 Features

### Authentication System
- **User Registration**: Create an account with username, email, and password
- **User Login**: Secure login with session management
- **Protected Routes**: Portfolio page is protected and requires authentication
- **Session Management**: Persistent login state using localStorage

### Portfolio Sections
- **Hero Section**: Eye-catching introduction with name, profession, and call-to-action buttons
- **About Section**: Personal story, background, and professional journey
- **Skills Section**: Visual representation of technical skills with proficiency levels
- **Projects Section**: Showcase of projects with descriptions, images, and live demo links
- **Contact Section**: Contact form for visitors to reach out

### User Experience
- **Dark/Light Theme**: Toggle between light and dark modes with persistent preference
- **Responsive Design**: Fully responsive layout that works on all devices (mobile, tablet, desktop)
- **Smooth Navigation**: Smooth scrolling navigation with fixed navbar
- **Modern UI**: Clean, modern interface built with Tailwind CSS
- **Form Validation**: Client-side validation for all forms

## 🛠️ Technologies Used

- **React 19.2** - Modern React with hooks
- **Vite 7.2** - Fast build tool and development server
- **React Router DOM 7.9** - Client-side routing
- **Tailwind CSS 4.1** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library
- **ESLint** - Code linting and quality assurance

## 📁 Project Structure

```
portfolio-website/
├── public/
│   ├── mahesh_babu_resume.pdf
│   └── vite.svg
├── src/
│   ├── assets/          # Images and logos
│   ├── components/      # Reusable React components
│   │   ├── AboutSection.jsx
│   │   ├── ContactSection.jsx
│   │   ├── HeroSection.jsx
│   │   ├── NavBar.jsx
│   │   ├── ProjectsSection.jsx
│   │   ├── SkillsSection.jsx
│   │   └── ThemeToggle.jsx
│   ├── context/         # React Context providers
│   │   └── ThemeContext.jsx
│   ├── css/            # Global styles
│   │   └── index.css
│   ├── lib/            # Utility functions
│   │   └── utils.js
│   ├── pages/          # Page components
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   └── NotFound.jsx
│   ├── Services/       # Service utilities
│   │   └── ProtectedRoute.jsx
│   ├── App.jsx         # Main app component
│   └── main.jsx        # Entry point
├── package.json
├── vite.config.js
└── README.md
```

## 🚦 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production build will be created in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## 📝 Usage

### First Time Setup

1. **Register a New Account**:
   - Navigate to `/register`
   - Fill in username, email, and password
   - Submit the form to create your account

2. **Login**:
   - Go to `/login`
   - Enter your registered email and password
   - You'll be redirected to the portfolio page upon successful login

3. **View Portfolio**:
   - After logging in, you'll see the full portfolio with all sections
   - Use the navigation bar to jump to different sections
   - Toggle between light and dark themes using the theme toggle button

4. **Logout**:
   - Click the "Logout" button in the navigation bar
   - You'll be redirected back to the login page

## 🎨 Customization

### Update Personal Information

- **Hero Section**: Edit `src/components/HeroSection.jsx` to update name, profession, and introduction
- **About Section**: Modify `src/components/AboutSection.jsx` with your personal story
- **Skills**: Update the skills array in `src/components/SkillsSection.jsx`
- **Projects**: Add your projects in `src/components/ProjectsSection.jsx`
- **Contact**: Customize the contact form in `src/components/ContactSection.jsx`

### Theme Colors

Edit the color scheme in `src/css/index.css` under the `:root` and `.dark` selectors.

## 🚀 Deployment

### Deploy to Vercel

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

### Deploy to Netlify

1. Build the project:
```bash
npm run build
```

2. Drag and drop the `dist` folder to [Netlify Drop](https://app.netlify.com/drop)

Or connect your GitHub repository to Netlify for automatic deployments.

### Deploy to Render

1. Create a new Static Site on Render
2. Connect your repository
3. Set build command: `npm run build`
4. Set publish directory: `dist`

## 🔒 Security Notes

- This project uses localStorage for authentication, which is suitable for demonstration purposes
- For production applications, consider implementing:
  - Backend API with JWT tokens
  - Password hashing (bcrypt)
  - HTTPS encryption
  - Session management on the server

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Mahesh Babu**

- Portfolio: [Your Portfolio URL]
- Email: [Your Email]
- LinkedIn: [Your LinkedIn]

## 🙏 Acknowledgments

- Design inspiration from Figma community
- Icons provided by [Lucide](https://lucide.dev/)
- Built with [Vite](https://vitejs.dev/) and [React](https://react.dev/)

---

Made with ❤️ using React and Tailwind CSS
