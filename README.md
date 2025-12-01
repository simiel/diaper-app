# Pure Hug - Kids Diaper Ecommerce Website

A modern, responsive ecommerce website for Pure Hug diaper products, built with Next.js 16, TypeScript, and Tailwind CSS.

## Features

- 🎨 **Modern Design**: Clean, playful design matching the Figma specifications
- 📱 **Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- ⚡ **Next.js 16**: Built with the latest Next.js App Router
- 🎯 **TypeScript**: Type-safe development
- 🎨 **Tailwind CSS**: Utility-first CSS framework
- 🚀 **Performance**: Optimized for fast loading and smooth interactions

## Design System

### Colors
- **Primary**: `#522260` (Purple)
- **Primary Light**: `#fee1eb` (Light Pink)
- **Green**: `#4CAF50`
- **Orange**: `#FF9800`

### Typography
- **Headings**: Anton (Google Fonts)
- **Body**: Inter (Google Fonts)
- **Accent**: Roboto (Google Fonts)

## Project Structure

```
diaper-app/
├── app/
│   ├── globals.css          # Global styles and design tokens
│   ├── layout.tsx           # Root layout with fonts
│   └── page.tsx             # Main landing page
├── components/
│   ├── Header.tsx           # Navigation header
│   ├── Hero.tsx             # Hero section
│   ├── ProductCard.tsx      # Reusable product card
│   ├── ProductsSection.tsx  # Products grid section
│   ├── MotivationalSection.tsx # Motivational content section
│   ├── LifeSection.tsx      # Life section with image grid
│   ├── FeaturesSection.tsx  # Features showcase
│   ├── TestimonialsSection.tsx # Customer testimonials
│   ├── NewsletterSection.tsx # Newsletter signup
│   └── Footer.tsx           # Footer with links
└── public/                  # Static assets
```

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Development

### Building for Production

```bash
npm run build
npm start
```

### Key Components

- **Header**: Responsive navigation with mobile menu
- **Hero**: Large hero section with call-to-action
- **ProductCard**: Reusable card component for products
- **ProductsSection**: Grid layout for product showcase
- **FeaturesSection**: Circular feature display
- **TestimonialsSection**: Carousel for customer reviews
- **NewsletterSection**: Email subscription form
- **Footer**: Multi-column footer with links

## Next Steps

To complete the ecommerce functionality, consider adding:

1. **Product Pages**: Individual product detail pages
2. **Shopping Cart**: Cart functionality and checkout
3. **User Authentication**: Login/signup pages
4. **Product Search**: Search functionality
5. **Category Pages**: Filter products by category
6. **Payment Integration**: Stripe or similar payment gateway
7. **Order Management**: Order history and tracking
8. **Admin Dashboard**: Product management interface

## Design Notes

The design follows the Figma specifications with:
- Large, bold typography using Anton font
- Purple (#522260) as the primary brand color
- Rounded corners (100px for buttons, 47px for cards)
- Cloud decorations throughout sections
- Responsive grid layouts
- Smooth transitions and hover effects

## License

This project is private and proprietary.
