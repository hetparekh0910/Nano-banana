# Nano Banana - Premium Scrollytelling E-commerce Site

A revolutionary scrollytelling experience for premium cold-pressed juice brand "Nano Banana" built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Canvas-based Image Sequence Animation**: Smooth 80-120 frame animations triggered by scroll
- **Text Overlays with Scroll Animations**: Dynamic text that appears/disappears with scroll progress
- **Product Switching System**: Navigate between 3 premium juice flavors with smooth transitions
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop
- **Performance Optimized**: Static export for Netlify Drop deployment
- **Production Ready**: Error-free, type-safe TypeScript codebase

## 📦 Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animations)
- **HTML5 Canvas** (image sequence rendering)

## 🛠️ Installation

1. Install dependencies:
```bash
npm install
```

2. Ensure image assets are in place:
   ```
   public/images/
   ├── mango/
   ├── chocolate/
   └── pomegranate/
   ```

## 🏃 Development

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Build & Deploy

Generate static export for Netlify:

```bash
npm run build
```

This creates an `out/` directory ready for Netlify Drop or any static hosting.

## 📋 Project Structure

```
fruit/
├── app/
│   ├── layout.tsx          # Root layout with fonts & metadata
│   ├── page.tsx            # Main orchestration page
│   └── globals.css         # Global styles
├── components/
│   ├── ProductBottleScroll.tsx    # Canvas animation engine
│   ├── ProductTextOverlays.tsx    # Scroll-triggered text reveals
│   ├── Navbar.tsx                 # Fixed navigation
│   └── Footer.tsx                 # Footer with links
├── data/
│   └── products.ts         # Product data & interfaces
├── public/
│   └── images/
│       ├── mango/          # Mango animation frames
│       ├── chocolate/      # Chocolate animation frames
│       └── pomegranate/    # Pomegranate animation frames
├── next.config.mjs         # Next.js config (static export)
├── tailwind.config.ts      # Tailwind configuration
└── tsconfig.json           # TypeScript configuration
```

## 🎨 Products

### 1. Cream Mango
- Price: ₹120
- Features: Rich in Vitamin C, No preservatives, 100% fruit
- 80 frame animation sequence

### 2. Dutch Chocolate
- Price: ₹140
- Features: Premium Cocoa, Almond Milk, Plant Protein
- 59 frame animation sequence

### 3. Ruby Pomegranate
- Price: ₹150
- Features: Heart Healthy, Cold Pressed, Immunity Booster
- 59 frame animation sequence

## 🎯 Navigation

- **Arrow Buttons** (Left/Right): Switch between products
- **Bottom Menu**: Jump to any product directly
- **Scroll**: Experience the scrollytelling animation

## 📱 Responsive Features

- Mobile-optimized touch buttons
- Adaptive canvas sizing
- Flexible grid layouts
- Touch-friendly navigation

## 🚀 Deployment

### Netlify Drop
1. Run `npm run build`
2. Drag & drop the `out/` folder to Netlify Drop
3. Your site is live!

### Vercel
```bash
vercel deploy --prod
```

### Any Static Host
The `out/` directory is fully static and can be deployed anywhere.

## 🔧 Customization

### Add New Product
1. Add product object to `data/products.ts`
2. Create folder in `public/images/{product-id}/`
3. Add image sequence (numbered frames)
4. Update navigation in `app/page.tsx` if needed

### Modify Colors
Edit gradient values in `data/products.ts` for each product

### Change Animation Speed
Adjust scroll progress ranges in `components/ProductTextOverlays.tsx`

## ⚡ Performance Tips

- Image frames are lazy-loaded on-demand
- Canvas rendering is optimized with requestAnimationFrame
- Animations use GPU-accelerated Framer Motion
- Static export minimizes bundle size

## 📄 License

MIT License - Feel free to use and modify!

## 🤝 Support

For issues or questions, please create an issue in the repository.

---

Built with ❤️ for the Nano Banana brand. Future of Freshness. ✨
