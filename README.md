# Fluxline.pro - Open Source Edition

An open-source version of Fluxline.pro featuring a modern Next.js application with Fluent UI components.

## Features

This open-source version includes:

1. **Fluent UI Theme** - Custom theme configuration (`src/theme/theme.ts`)
2. **Core Components**
   - Header component with navigation
   - Navigation component for page navigation
3. **Pages**
   - Home page - Landing page with service highlights
   - About page - Company information with mission, values, and team sections
   - Services page - Overview of services offered
   - Service subpages:
     - Web Development
     - Consulting
     - Cloud Solutions

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **UI Library**: Fluent UI React Components
- **Styling**: Tailwind CSS + Fluent UI styling system
- **Icons**: Fluent UI React Icons

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone https://github.com/AplUSAndmINUS/fluxline-pro-next-core-open-source.git
cd fluxline-pro-next-core-open-source
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page and components
│   │   ├── components/    # About page specific components
│   │   └── page.tsx       # About page
│   ├── services/          # Services pages
│   │   ├── components/    # Service components
│   │   ├── web-development/
│   │   ├── consulting/
│   │   ├── cloud-solutions/
│   │   └── page.tsx       # Services overview page
│   ├── layout.tsx         # Root layout with theme provider
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # Shared components
│   ├── Header/           # Header component
│   └── Navigation/       # Navigation component
└── theme/                # Theme configuration
    └── theme.ts          # Fluent UI theme setup
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Customization

### Theme

The Fluent UI theme can be customized in `src/theme/theme.ts`. You can modify the brand colors and create custom light/dark themes.

### Components

All components use Fluent UI's styling system with the `makeStyles` hook, making it easy to customize styling while maintaining consistency.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Support

For questions or issues, please open an issue in the GitHub repository.

## Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [Fluent UI](https://react.fluentui.dev/)
- Icons from [Fluent UI Icons](https://react.fluentui.dev/?path=/docs/icons-catalog--page)

