# Personal Portfolio

A modern, high-performance personal portfolio built with Next.js 16, React 19, and Tailwind CSS v4. Features smooth animations, interactive UI components, and a clean design system.

## Features

- **Next.js 16** - App Router, Server Components, and optimized rendering
- **Tailwind CSS v4** - Utility-first styling with custom design tokens
- **Framer Motion** - Smooth, physics-based animations
- **Lenis** - Buttery smooth scroll interpolation
- **Three.js** - 3D graphics and visual effects
- **Radix UI** - Accessible, unstyled UI components
- **react-icons** - Icon library with 1000+ icons

## Tech Stack

### Frontend
- React 19.2.4
- Next.js 16.2.1
- TypeScript 5
- Tailwind CSS 4

### Animation & Motion
- Framer Motion 12
- Motion 12
- Lenis 1.3.23 (smooth scroll)

### UI Components
- Radix UI (Accordion, Slot, etc.)
- Lucide React (icons)
- React Icons (5.6.0)

### 3D & Graphics
- Three.js 0.183.2
- D3 7.9.0 (data visualization)

### Utilities
- clsx + tailwind-merge (cn utility)
- Class Variance Authority (CVA)

## Getting Started

### Prerequisites

- Node.js 20+
- pnpm (recommended) or npm

### Installation

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

## Project Structure

```
my-app/
├── app/
│   ├── components/       # Page-specific components
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── TechMarquee.tsx
│   │   └── ...
│   ├── layout.tsx        # Root layout with fonts
│   └── page.tsx          # Home page
├── components/
│   └── ui/               # Reusable UI components
│       ├── infinite-slider.tsx
│       ├── radial-orbital-timeline.tsx
│       ├── price.tsx
│       └── ...
├── lib/
│   └── utils.ts          # cn() utility function
├── public/               # Static assets
└── package.json
```

## Key Components

### InfiniteSlider
A smooth infinite marquee slider for displaying tech stacks or any horizontal scrolling content. Supports speed control, hover interactions, and both horizontal/vertical directions.

### RadialOrbitalTimeline
An interactive radial timeline for displaying services/processes with orbiting nodes.

### Pricing Cards
Beautiful pricing cards with feature lists and call-to-action buttons.

## Scripts

```bash
pnpm dev      # Start development server
pnpm build    # Build for production
pnpm start    # Start production server
pnpm lint     # Run ESLint
```

## Deployment

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository to Vercel
3. Deploy

<!-- ## License

MIT -->
