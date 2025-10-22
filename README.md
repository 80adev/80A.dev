# 80A.dev - RJ's Portfolio Website

![80A.dev Portfolio](/80ADEV.PNG)

A modern, responsive portfolio website built with Astro, showcasing RJ's projects, bio, and posts. Features a clean design with smooth scrolling animations and dark/light theme support.

## 🌟 Features

- **Modern Design**: Clean, responsive layout with smooth scrolling
- **Dark/Light Theme**: Automatic theme detection with manual toggle
- **Smooth Animations**: Locomotive Scroll integration for enhanced UX
- **Component-Based**: Built with Astro + React components
- **TypeScript**: Full type safety throughout the codebase
- **SEO Optimized**: Static site generation for optimal performance

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build/) - Static site generator
- **Language**: TypeScript
- **UI Library**: React components with Astro integration
- **Styling**: Tailwind CSS
- **Icons**: React Icons + Lucide React
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Animations**: Locomotive Scroll
- **Code Formatting**: Prettier

## 📁 Project Structure

```
80A.dev/
├── public/                     # Static assets
│   ├── 80ADEV.PNG            # Logo/avatar image
│   ├── blueriver.jpg         # Project images
│   ├── markwriter.jpg
│   ├── neovim.jpg
│   ├── portfolios.png
│   ├── linkedin.png
│   └── fav.svg               # Favicon
├── src/
│   ├── components/           # React components
│   │   ├── Avatar.tsx       # Profile avatar component
│   │   ├── ModeToggle.tsx   # Dark/light theme toggle
│   │   ├── Navbar.tsx       # Navigation component
│   │   ├── PostCard.tsx     # Blog post card
│   │   ├── PostsSection.tsx # Posts listing section
│   │   ├── ProjectCard.tsx  # Project card component
│   │   ├── ProjectSection.tsx # Projects section
│   │   ├── SmoothScroll.tsx # Scroll animation component
│   │   ├── Timeline.tsx     # Bio timeline component
│   │   └── ui/              # shadcn/ui components
│   │       ├── avatar.tsx
│   │       ├── badge.tsx
│   │       ├── button.tsx
│   │       └── card.tsx
│   ├── content/             # Content data
│   │   ├── bio.ts          # Bio/timeline data
│   │   ├── posts.ts        # Blog posts data
│   │   └── projects.ts     # Projects data
│   ├── layouts/
│   │   └── Layout.astro    # Main layout component
│   ├── lib/
│   │   └── utils.ts        # Utility functions
│   ├── pages/
│   │   └── index.astro     # Homepage
│   └── styles/
│       └── globals.css     # Global styles
├── astro.config.mjs        # Astro configuration
├── components.json         # shadcn/ui configuration
├── tailwind.config.mjs     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/80adev/80A.dev.git
   cd 80A.dev
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to [http://localhost:4321](http://localhost:4321)

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run prettier` - Format code with Prettier
- `npm run astro` - Run Astro CLI commands

## 📝 Content Management

### Adding Projects

Edit `src/content/projects.ts` to add new projects:

```typescript
export const PROJECTS = [
  {
    title: "Project Name",
    description: "Project description",
    image: "/project-image.jpg",
    tags: ["Tag1", "Tag2", "Tag3"],
    links: [
      {
        name: "Source Code",
        url: "https://github.com/username/repo",
        icon: FaGithub,
      },
    ],
  },
]
```

### Adding Bio Entries

Edit `src/content/bio.ts` to update timeline:

```typescript
export const BIO = [
  {
    date: "2024 - Present",
    title: "Your Role/Position",
    description: "Description of your work",
    location: "Location (optional)",
  },
]
```

### Adding Blog Posts

Edit `src/content/posts.ts` to add new posts:

```typescript
export const POSTS = [
  {
    title: "Post Title",
    description: "Post description",
    date: "2024-01-01",
    tags: ["Tag1", "Tag2"],
    url: "post-url",
  },
]
```

## 🎨 Customization

### Theme Colors

The site uses Tailwind CSS with custom color scheme. Modify `tailwind.config.mjs` to change colors:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        // Add your custom colors here
      },
    },
  },
}
```

### Components

All components are located in `src/components/`. The site uses:
- **shadcn/ui** components in `src/components/ui/`
- **Custom components** for specific functionality
- **React integration** with Astro for interactive features

## 📄 License

This project is licensed under the Apache-2.0 License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Forked from [slydragonn/alogocode.site](https://github.com/slydragonn/alogocode.site)
- Built with [Astro](https://astro.build/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [React Icons](https://react-icons.github.io/react-icons/)

## 📞 Contact

- **Website**: [80A.dev](https://80a.dev)
- **GitHub**: [@80adev](https://github.com/80adev)
- **Email**: [Email](80adev@gmail.com)

---

Made with ♥ by RJ | @80adev · Forked from [slydragonn/alogocode.site](https://github.com/slydragonn/alogocode.site)