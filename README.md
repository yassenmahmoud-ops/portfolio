# Yassen Mahmoud - Professional Portfolio

A high-performance, modern portfolio website built with **Tailwind CSS** and **Vanilla JavaScript**. Designed to convert visitors into clients with premium animations and fast load times.

## 🚀 Features

- ⚡ **Lightning Fast** - Optimized for performance with minimal CSS bloat
- 🎨 **Premium Animations** - Smooth scroll transitions, bounce effects, and glow animations
- 📱 **Fully Responsive** - Mobile-first design that works on all screen sizes
- 🌙 **Dark Mode Only** - Modern, professional dark theme
- ♿ **Accessible** - Semantic HTML with proper ARIA labels and focus states
- 📊 **Live Counter Animations** - Scroll-triggered stat counters
- 💼 **Professional Sections**:
  - Hero Section with CTAs
  - Statistics Dashboard
  - Services Overview
  - 4-Step Process Timeline
  - Project Showcase
  - 10 Core Skills with Progress Meters
  - Client Testimonials
  - Contact Form & Social Links

## 📋 Sections

1. **Hero** - Attention-grabbing headline with dual CTAs (Book Call + WhatsApp)
2. **Stats** - Live animated counters for social proof (50+ Projects, 5+ Years, 100% Satisfaction)
3. **Services** - 4 service offerings with subtle hover effects
4. **Process** - Clear 4-step workflow with connecting timeline
5. **Projects** - Showcase of 2 recent projects with live/code links
6. **Skills** - 10 professional skills with animated progress meters (HTML5, Tailwind, JavaScript, React, Responsive Design, Performance, SEO, TypeScript, Web Animation, Git & GitHub)
7. **Testimonials** - 3 professional client reviews with 5-star ratings
8. **Contact** - Email, WhatsApp, LinkedIn contact cards + contact form
9. **Back-to-Top Button** - Beautiful animated arrow with bounce and glow effects

## 🛠 Tech Stack

- **Framework**: Tailwind CSS v3.4.1
- **Typography**: Sora (display) + Space Grotesk (body)
- **Colors**: Dark mode only (#0f172a base, sky-400 primary, emerald-500 accents)
- **Animations**: Pure CSS keyframes (no heavy libraries)
- **Scripts**: Vanilla JavaScript (no dependencies)
- **Build Tool**: Tailwind CLI with PostCSS

## 🚀 Getting Started

### Prerequisites
- Node.js v14+ installed

### Installation

```bash
# Clone or download the project
cd portfolio

# Install dependencies
npm install

# Start development server with watch mode
npm run dev

# Build for production
npx tailwindcss -i ./input.css -o ./output.css --minify
```

### Project Structure

```
portfolio/
├── index.html           # Main HTML file
├── input.css           # Tailwind + custom animations
├── output.css          # Compiled CSS (auto-generated)
├── package.json        # Dependencies
├── tailwind.config.js  # Tailwind configuration
├── postcss.config.js   # PostCSS configuration
├── pic/
│   └── yassen.jpeg     # Hero image
├── README.md           # This file
└── .gitignore          # Git configuration
```

## 🎯 Performance Optimizations

- ✅ Minimal CSS (~34KB minified)
- ✅ No heavy animation libraries
- ✅ Optimized image loading with proper attributes
- ✅ DNS prefetch for Google Fonts
- ✅ Reduced motion on non-critical animations
- ✅ Clean JavaScript with no external dependencies
- ✅ Backdrop blur set to minimal level (sm, not md)
- ✅ Scroll performance with passive event listeners

## 🎨 Animation Features

- **Scroll Animations**: Sections fade and scale in as they enter viewport
- **Bounce Button**: Back-to-top arrow bounces with pulse glow
- **Skill Meters**: Progress bars animate to target percentage on scroll
- **Counter Animations**: Stats count up smoothly when visible
- **Card Reveals**: Staggered card appearances with scale transitions
- **Hover Effects**: Subtle lift and shadow on interactive elements
- **Shimmer Sheen**: Gradient shine effect on buttons

## ✨ Key Sections Details

### Hero Section
- Dual CTAs: "Book A Free Call" (pulsing) + "WhatsApp Direct"
- Professional headline and value proposition
- Responsive grid layout with image
- Quick badges highlighting key benefits

### Skills Section
1. HTML5 Semantic (98%)
2. Tailwind CSS (97%)
3. JavaScript (94%)
4. React Components (92%)
5. Responsive Design (96%)
6. Performance (95%)
7. SEO Optimization (93%)
8. TypeScript (88%)
9. Web Animation (91%)
10. Git & GitHub (89%)

### Contact Form
- Name, Email, Subject, Message fields
- Focus states with blue ring effect
- Autocomplete attributes for better UX
- Smooth transitions and focus animations

## 🔧 Customization

### Colors
Edit `tailwind.config.js` to change the primary color scheme. Currently using `sky-400` (#60a5fa) as primary.

### Animations
All animations are defined in `input.css` under `@keyframes`. Modify timing (ms values) to adjust animation speed.

### Typography
Google Fonts are loaded in `index.html`. To change fonts, update the font-family classes or the Google Fonts link.

### Content
Simply edit `index.html` to update:
- Hero text and images
- Service descriptions
- Project links and descriptions
- Social media links
- Contact information

## 📱 Responsive Breakpoints

- **Mobile**: Default single-column layout
- **Tablet** (sm: 640px): 2-column grids for skills
- **Desktop** (md: 768px and up): 3-column grids and expanded layouts

## ♿ Accessibility

- ✅ Semantic HTML structure
- ✅ Proper heading hierarchy
- ✅ ARIA labels on buttons
- ✅ Focus indicators (blue ring on inputs)
- ✅ Autocomplete attributes on form fields
- ✅ Alt text on all images
- ✅ Color contrast meets WCAG standards

## 📊 SEO

- ✅ Comprehensive meta tags
- ✅ Keywords for discoverability
- ✅ Open Graph tags for social sharing
- ✅ Semantic HTML5 structure
- ✅ Mobile-first design
- ✅ Fast page load (Core Web Vitals)

## 🤝 Contact Links

- **Email**: yassen.mahmoud.hassen@gmail.com
- **WhatsApp**: +20 109 682 2329
- **LinkedIn**: linkedin.com/in/yassen-mahmoud

## 📄 License

ISC License - Feel free to use and modify for your needs

## 💬 Notes

This portfolio is built with the philosophy of **"Built to convert, not just to look good"**. Every design decision, animation timing, and section is optimized for both aesthetics and conversion.

---

**Built with ❤️ using Tailwind CSS and Vanilla JavaScript**
