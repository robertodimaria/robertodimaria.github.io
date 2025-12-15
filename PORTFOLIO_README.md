# Portfolio Website - Roberto Di Maria

Modern, responsive engineering portfolio showcasing advanced research in mechanical engineering, additive manufacturing, and computational engineering.

## 🎨 Design & Features

- **Modern Template**: Clean, professional design with Tailwind CSS
- **Responsive Layout**: Works seamlessly on desktop, tablet, and mobile devices
- **Dark/Light Theme**: Toggle between dark and light modes with persistent preference
- **Dynamic Content**: Projects loaded dynamically from `projectsData.js`
- **Smooth Animations**: GSAP-powered scroll animations and transitions
- **Accessibility**: ARIA labels and semantic HTML for screen readers

## 📁 File Structure

```
/
├── index.html              # Main homepage with hero, projects grid, and contact
├── project-detail.html     # Dynamic project detail page
├── projectsData.js         # Source of truth for all project data
├── main.js                 # Project loading and homepage animations
├── utils.js                # Shared utilities (theme, navigation)
├── new/                    # Template assets
│   ├── css/
│   │   ├── tailwind-build.css   # Compiled Tailwind styles
│   │   └── index.css            # Custom styles and variables
│   └── assets/
│       └── logo/
└── assets/
    └── images/             # Project images and thumbnails
```

## 🚀 Key Sections

### Homepage (index.html)

1. **Hero Section** (`#about`)
   - Introduction and professional summary
   - Call-to-action button

2. **Projects Grid** (`#projects`)
   - 3-column responsive grid (1 column on mobile)
   - Dynamic project cards loaded from `projectsData.js`
   - Hover effects and smooth transitions

3. **Contact Section** (`#contact`)
   - Email: dimaria.roberto@studium.unict.it
   - LinkedIn: https://www.linkedin.com/in/roberto-di-maria
   - GitHub: https://github.com/robertodimaria

### Project Details (project-detail.html)

- Reads project ID from URL parameter
- Displays full project content from `projectsData.js`
- Rich HTML formatting with images, lists, and sections
- Back button to return to projects

## 🎯 Projects Featured

1. **3D Printed RF Antenna & Material Selection** (`rf-antenna`)
   - Material selection using Ansys Granta EduPack
   - CST simulations and validation

2. **Carbon Capture, Storage, And Utilization Thesis** (`ccsu-thesis`)
   - Best Thesis Award winner
   - Comprehensive analysis of CCSU technologies

3. **Additive Manufacturing Heat Exchanger** (`gyroid-heatexchanger`)
   - LPBF feasibility study
   - Gyroid TPMS architecture optimization

## 🔧 Technologies Used

- **HTML5**: Semantic markup
- **Tailwind CSS**: Utility-first CSS framework
- **JavaScript (ES6+)**: Dynamic content loading
- **GSAP**: Animation library with ScrollTrigger
- **Bootstrap Icons**: Icon library

## 📝 Adding/Editing Projects

All project content is centralized in `projectsData.js`. To add or edit a project:

1. Open `projectsData.js`
2. Add/modify a project object with:
   ```javascript
   {
     id: "unique-slug",          // Used in URLs
     title: "Project Title",
     thumbnail: "path/to/image.jpg",
     shortDescription: "Brief summary for card",
     fullContent: `<h2>Full HTML content...</h2>`
   }
   ```
3. Place thumbnail image in `assets/images/`
4. The project will automatically appear on the homepage

## 🎨 Customization

### Theme Colors

Edit `new/css/index.css` to change color schemes:

```css
:root {
    --btn-bg: #000;              /* Button background */
    --primary-text-color: #000;   /* Text color */
    /* ... other variables */
}
```

### Animations

Modify animation timing in `main.js`:

```javascript
revealUptimeline.to(sec.querySelectorAll(".reveal-up"), {
    opacity: 1,
    duration: 0.8,     // Animation duration
    y: "0%",
    stagger: 0.2,      // Delay between elements
});
```

## 🔒 Security Features

- URL parameter sanitization (project IDs)
- URL encoding for external links
- Trusted content source (projectsData.js)
- No user-generated content vulnerabilities

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🌐 Deployment

The site is deployed on GitHub Pages:
- Production: https://robertodimaria.github.io
- Automatically builds from the main branch

## ✨ Credits

Template design adapted from the `new/` folder template.
Custom implementation by Roberto Di Maria for engineering portfolio showcase.
