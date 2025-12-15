# Portfolio Website

A modern, interactive portfolio website built with React, Three.js, and Tailwind CSS. Features 3D animations, smooth scrolling, and responsive design to showcase projects and skills.

## 🚀 Live Demo

Visit the live portfolio: [My Portfolio](https://github.com/indianathe3rdKing/my-portfolio)

## ✨ Features

- **Interactive 3D Elements** - Three.js powered 3D models and animations
- **Smooth Animations** - GSAP animations for engaging user experience
- **Responsive Design** - Fully responsive across all device sizes
- **Modern UI/UX** - Clean, professional design with Tailwind CSS
- **Contact Integration** - EmailJS integration for contact form
- **Project Showcase** - Interactive project gallery with detailed descriptions
- **Skills Timeline** - Visual timeline of experience and frameworks

## 🛠️ Tech Stack

- **Frontend**: React 19, Vite
- **3D Graphics**: Three.js, React Three Fiber, React Three Drei
- **Styling**: Tailwind CSS 4.x
- **Animations**: GSAP, Motion
- **Email**: EmailJS
- **Icons**: React Icons, Tabler Icons, Lucide React
- **Development**: ESLint, TypeScript

## 📁 Project Structure

```
portfolio/
├── public/
│   └── assets/
│       ├── logos/          # Technology logos
│       ├── projects/       # Project screenshots
│       ├── socials/        # Social media icons
│       └── models/         # 3D models
├── src/
│   ├── components/         # React components
│   │   ├── ui/            # UI components
│   │   └── lib/           # Utility functions
│   ├── constants/         # Project data and constants
│   ├── App.jsx           # Main app component
│   ├── main.jsx          # Entry point
│   └── index.css         # Global styles
├── components.json        # Shadcn/ui configuration
├── tailwind.config.js    # Tailwind configuration
├── tsconfig.json         # TypeScript configuration
└── vite.config.js        # Vite configuration
```

## 🚦 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/indianathe3rdKing/my-portfolio.git
   cd my-portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Visit `https://my-portfolio-phi-three-54.vercel.app/` to view the portfolio

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📂 Featured Projects

### Movie Fetcher

A simple movie discovery app that fetches movie data from external APIs. Built with React for searching and browsing movies with a clean, user-friendly interface.

### Steam Logger

Internal web application for logging and tracking Steam-related activity in real-time. Features structured logging, searchable records, and mobile/desktop versions.

### Ghost Platform

A 3D platformer minigame built in Unity featuring basic movement mechanics, obstacles, and portal-based level resets. My first step into game development.

## 🎨 Key Components

- **Hero Section** - Interactive 3D world with animated text
- **About** - Personal introduction with skills overview
- **Projects** - Interactive project showcase with detailed modals
- **Experience** - Timeline of professional experience
- **Frameworks** - Technologies and tools proficiency
- **Contact** - Integrated contact form with EmailJS

## 🔧 Configuration

### Environment Variables

Create a `.env` file for EmailJS configuration:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### Customization

- **Projects**: Edit `src/constants/index.js` to add/modify projects
- **Colors**: Update Tailwind config in `tailwind.config.js`
- **3D Models**: Replace models in `public/models/`
- **Assets**: Update logos and images in `public/assets/`

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:

- 📱 Mobile devices (320px+)
- 📱 Tablets (768px+)
- 💻 Laptops (1024px+)
- 🖥️ Desktops (1280px+)

## ⚡ Performance

- **Vite** for fast development and optimized builds
- **Code splitting** for efficient loading
- **Optimized assets** and lazy loading
- **Three.js optimizations** for smooth 3D performance

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📧 Contact

- **GitHub**: [@indianathe3rdKing](https://github.com/indianathe3rdKing)
- **Email**: indiemenziwa@gmail.com

---

Built with ❤️ using React, Three.js, and modern web technologies.
