# CLAUDE.md - Upto1 Project Documentation

## Project Overview

**Upto1** is a modern, production-ready website built with Payload CMS 3.x and Next.js 15, designed for marketing and SaaS applications. The project uses a block-based content architecture, providing flexible page composition capabilities with strong type safety and a focus on developer experience.

### Tech Stack

- **Framework**: Next.js 15.4.7 (App Router)
- **CMS**: Payload CMS 3.63.0
- **Database**: SQLite (via @payloadcms/db-sqlite)
- **Language**: TypeScript 5.7.3
- **Styling**: TailwindCSS 3.4.3 + Custom CSS
- **UI Components**: Radix UI + Custom components
- **Rich Text**: Lexical Editor
- **Package Manager**: pnpm (v9 or v10)
- **Node Version**: ^18.20.2 || >=20.9.0

---

## Directory Structure

```
/home/user/upto1/
├── src/                          # Main source code
│   ├── app/                      # Next.js App Router
│   │   ├── (frontend)/           # Public frontend routes
│   │   │   ├── [slug]/           # Dynamic pages
│   │   │   ├── posts/            # Blog posts
│   │   │   ├── search/           # Search functionality
│   │   │   ├── audit-form/       # Multi-step form
│   │   │   ├── globals.css       # Global styles
│   │   │   └── styles/           # Additional CSS files
│   │   │       ├── icons.css     # Nucleo icons
│   │   │       └── upto1.css     # Custom Upto1 styles
│   │   └── (payload)/            # Payload CMS admin and API
│   │       ├── admin/            # CMS admin panel
│   │       └── api/              # API routes
│   ├── blocks/                   # Custom content blocks (18 types)
│   │   ├── ArchiveBlock/
│   │   ├── Banner/
│   │   ├── CallToAction/
│   │   ├── ClientSlider/
│   │   ├── Code/
│   │   ├── ColoredBanner/
│   │   ├── Content/
│   │   ├── FAQ/
│   │   ├── Form/
│   │   ├── HeroSection/
│   │   ├── IconsBox/
│   │   ├── MediaBlock/
│   │   ├── NumberedFeatures/
│   │   ├── RelatedPosts/
│   │   ├── RenderBlocks.tsx      # Block factory
│   │   ├── Statistics/
│   │   └── Testimonial/
│   ├── collections/              # Payload CMS collections
│   │   ├── Pages/                # Static pages
│   │   ├── Posts/                # Blog posts
│   │   ├── Media/                # Media assets
│   │   ├── Categories/           # Post categories
│   │   └── Users/                # Admin users
│   ├── components/               # Reusable React components
│   │   ├── ui/                   # Atomic UI components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── checkbox.tsx
│   │   │   ├── input.tsx
│   │   │   ├── label.tsx
│   │   │   ├── pagination.tsx
│   │   │   ├── select.tsx
│   │   │   └── textarea.tsx
│   │   ├── AdminBar/             # Admin editing bar
│   │   ├── Link/                 # CMS Link component
│   │   ├── Media/                # Media rendering
│   │   ├── Pagination/           # Pagination component
│   │   ├── RichText/             # Rich text rendering
│   │   └── SeoAuditForm/         # SEO audit form
│   ├── heros/                    # Hero section variants
│   │   ├── HighImpact/
│   │   ├── LowImpact/
│   │   ├── MediumImpact/
│   │   └── PostHero/
│   ├── Header/                   # Global header
│   │   ├── Component.tsx         # Server component
│   │   ├── Component.client.tsx  # Client component
│   │   └── Nav/                  # Navigation component
│   ├── Footer/                   # Global footer
│   ├── access/                   # Access control policies
│   │   ├── authenticated.ts
│   │   ├── authenticatedOrPublished.ts
│   │   └── anyone.ts
│   ├── endpoints/                # Custom API endpoints
│   ├── fields/                   # Payload field configurations
│   │   ├── defaultLexical.ts
│   │   ├── link.ts
│   │   └── linkGroup.ts
│   ├── hooks/                    # Payload hooks
│   │   ├── populatePublishedAt.ts
│   │   ├── revalidatePage.ts
│   │   ├── revalidatePost.ts
│   │   └── revalidateRedirects.ts
│   ├── plugins/                  # Payload plugin configurations
│   ├── providers/                # React context providers
│   │   ├── Theme/
│   │   ├── HeaderTheme/
│   │   └── index.tsx
│   ├── search/                   # Search functionality
│   ├── utilities/                # Helper functions
│   │   ├── getDocument.ts
│   │   ├── getGlobals.ts
│   │   ├── generateMeta.ts
│   │   ├── formatDateTime.ts
│   │   ├── formatAuthors.ts
│   │   ├── useClickableCard.ts
│   │   ├── useDebounce.ts
│   │   └── ui.ts                 # cn() classname helper
│   └── payload.config.ts         # Payload CMS configuration
├── tests/                        # Test files
├── public/                       # Static assets
│   ├── fonts/                    # Font files
│   └── images/                   # Images
├── inspiration/                  # Reference materials
│   └── uptown/                   # Design inspiration
│       └── assets/css/scss/      # SCSS reference styles
├── package.json                  # Dependencies and scripts
├── next.config.js                # Next.js configuration
├── tailwind.config.mjs           # TailwindCSS configuration
├── tsconfig.json                 # TypeScript configuration
├── vitest.config.mts             # Unit test configuration
├── playwright.config.ts          # E2E test configuration
└── Dockerfile                    # Docker configuration
```

---

## Key Architectural Patterns

### 1. Block-Based Content Architecture

The project uses a **modular block system** for flexible page composition. Each block is self-contained with:

- **config.ts** - Payload schema definition with field configurations
- **Component.tsx** - React component for rendering the block
- **RenderBlocks.tsx** - Factory pattern that maps block types to components

**Example Block Structure:**
```
src/blocks/HeroSection/
├── config.ts          # Payload block schema
└── Component.tsx      # React rendering component
```

**Available Blocks (18 types):**
- HeroSection, Statistics, IconsBox, FAQ, Testimonial
- ClientSlider, ColoredBanner, NumberedFeatures
- ArchiveBlock, CallToAction, Content, Form
- MediaBlock, Banner, Code, RelatedPosts

### 2. Collection-Based Data Model

Payload CMS collections represent content types:

- **Pages** - Static pages with hero sections and layout blocks
- **Posts** - Blog posts with rich text and media
- **Media** - Image and video asset management
- **Categories** - Post categorization with nested docs plugin
- **Users** - Admin user management

### 3. Component Organization

- **UI Components** (`/src/components/ui/`) - Atomic design components built with Radix UI
- **Domain Components** (`/src/components/`) - Feature-specific components (RichText, Media, Link)
- **Global Components** - Header, Footer with SSR/CSR separation
- **Hero Variants** - Different hero section styles for various layouts

### 4. Server/Client Component Pattern

Following Next.js App Router best practices:

- **Server Components** (default): Data fetching, static rendering
  - Example: `Component.tsx`
- **Client Components**: Interactive UI, hooks, browser APIs
  - Example: `Component.client.tsx` (marked with `'use client'`)

### 5. Access Control System

Three-tier access policy:

- **authenticated** - Requires login
- **authenticatedOrPublished** - Public access OR authenticated
- **anyone** - Open access

Applied at collection and field levels.

### 6. Revalidation & ISR Pattern

Payload hooks trigger Next.js cache revalidation:

- **revalidatePage** - Invalidate page cache on update
- **revalidatePost** - Invalidate post cache on update
- **revalidateRedirects** - Update redirect mappings

Enables Incremental Static Regeneration (ISR).

---

## Styling System

### Color Palette

```css
/* Primary Colors */
--color-green: #01FF88;    /* Success */
--color-red: #FF0066;      /* Danger */
--color-orange: #ffc107;   /* Warning */
--color-blue: #04a8ff;     /* Primary */
--color-dark: rgba(18, 27, 54, 1);
--color-black: #000000;
--color-white: #ffffff;
```

### Typography

- **Body Font**: 'Sen', sans-serif
- **Heading Font**: 'dinBold', sans-serif (custom)
- **Icon Font**: 'Nucleo' (custom icon set)

### Tailwind Configuration

- NO TAIL WIND BUT BOOTSTRAP INSTEAD


### Header Styles

The header uses styles inspired by `/inspiration/uptown/` with:
- **Fixed positioning** with scrolled state
- **Color-coded menu items** (liSuccess, liDanger, liPrimary)
- **Glassmorphism effect** when scrolled (backdrop-filter blur)
- **Smooth transitions** (cubic-bezier easing)
- **Mega menu support** with dropdown styles

---

## Development Workflows

### Essential Commands

```bash
# Development
pnpm dev                  # Start dev server (localhost:3000)
pnpm build                # Production build
pnpm start                # Start production server

# Code Quality
pnpm lint                 # Run ESLint
pnpm lint:fix             # Auto-fix linting issues

# Testing
pnpm test                 # Run all tests
pnpm test:int             # Run integration tests (Vitest)
pnpm test:e2e             # Run E2E tests (Playwright)

# Payload CMS
pnpm payload              # Payload CLI
pnpm generate:types       # Generate TypeScript types
pnpm generate:importmap   # Generate import map

# Utilities
pnpm reinstall            # Clean reinstall dependencies
```

### File Naming Conventions

- **Routes**: `page.tsx`, `layout.tsx`, `route.ts`
- **Components**: `Component.tsx` or `index.tsx`
- **Client Components**: `Component.client.tsx` (with `'use client'`)
- **Config Files**: `config.ts`
- **Styles**: `globals.css`, `[name].css`

### TypeScript Usage

- **Generated Types**: Import from `@/payload-types`
- **Strict Mode**: Enabled (`strict: true`)
- **Path Aliases**: `@/` maps to `src/`

Example:
```typescript
import type { Page, Post } from '@/payload-types'
```

### Creating New Blocks

1. **Create block directory**: `src/blocks/MyBlock/`
2. **Add config.ts**:
   ```typescript
   import { Block } from 'payload'

   export const MyBlock: Block = {
     slug: 'myBlock',
     fields: [
       // Define fields
     ],
   }
   ```
3. **Add Component.tsx**:
   ```typescript
   import type { MyBlockType } from '@/payload-types'

   export const MyBlock: React.FC<MyBlockType> = (props) => {
     return <div>{/* Render block */}</div>
   }
   ```
4. **Register in RenderBlocks.tsx**
5. **Add to page/post layout configuration**

### Creating New Collections

1. **Create collection directory**: `src/collections/MyCollection/`
2. **Define schema with fields, hooks, access control**
3. **Register in `payload.config.ts`**
4. **Generate types**: `pnpm generate:types`
5. **Create frontend components to display data**

### Adding New Routes

1. **Create route directory**: `src/app/(frontend)/my-route/`
2. **Add `page.tsx`** (server component for data fetching)
3. **Add `layout.tsx`** (if custom layout needed)
4. **Use Payload data fetching utilities**:
   ```typescript
   import { getDocument } from '@/utilities/getDocument'

   const data = await getDocument({ collection: 'pages', slug: 'my-page' })
   ```

---

## Key Conventions for AI Assistants

### When Making Changes

1. **Always read files first** before editing
2. **Preserve exact indentation** (spaces/tabs)
3. **Use existing patterns** found in the codebase
4. **Generate types** after schema changes: `pnpm generate:types`
5. **Test locally** before committing: `pnpm dev`
6. **Follow naming conventions** strictly

### Code Style

- **Use TypeScript** - No plain JavaScript
- **Functional components** - No class components
- **React Hooks** - For state and effects
- **Server Components** by default, client only when needed
- **Named exports** preferred over default exports
- **Descriptive names** - Clear, verbose variable/function names

### Content Management

- **CMS-first approach** - Data managed in Payload, not hardcoded
- **Blocks for flexibility** - Use blocks for page composition
- **Rich text** - Use Lexical for formatted content
- **Media** - Always use Media collection, not direct file paths
- **SEO** - Use SEO plugin for meta tags

### Performance

- **Image optimization** - Use Next.js Image component
- **Static generation** - Prefer SSG over SSR when possible
- **Incremental regeneration** - Use ISR for dynamic content
- **Code splitting** - Import components dynamically when large
- **Bundle analysis** - Monitor bundle size

### Security

- **Access control** - Always define access policies
- **Input validation** - Validate all user inputs
- **Environment variables** - Use `.env` for secrets
- **CSRF protection** - Built into Payload
- **XSS prevention** - Sanitize rich text output

### Testing

- **Unit tests** - For utilities and hooks (Vitest)
- **E2E tests** - For critical user flows (Playwright)
- **Type checking** - Run TypeScript compiler
- **Linting** - Fix ESLint errors before committing

---

## Database & Seeding

### Database

- **SQLite** - Local development database
- **Migrations** - Managed by Payload
- **Seed endpoint** - `/api/next/seed` for initial data

### Seeding Data

Seed files should be created in `/src/endpoints/seed/` following existing patterns:
- Check existing collections first
- Avoid duplicates by slug checking
- Create realistic, production-like content
- Include all required fields
- Use proper TypeScript types

---

## Deployment

### Build Process

```bash
pnpm build              # 1. Next.js build
# postbuild runs automatically
next-sitemap            # 2. Generate sitemap
```

### Environment Variables

Required:
- `PAYLOAD_SECRET` - Payload encryption key
- `DATABASE_URI` - Database connection string
- `NEXT_PUBLIC_SERVER_URL` - Public-facing URL

### Production Checklist

- [ ] All environment variables set
- [ ] Database migrations run
- [ ] Build completes without errors
- [ ] Tests passing
- [ ] SEO metadata configured
- [ ] Sitemap generated
- [ ] Images optimized
- [ ] Performance tested

---

## Troubleshooting

### Common Issues

**Build Errors:**
- Run `pnpm generate:types` after schema changes
- Clear `.next` folder and rebuild
- Check for TypeScript errors: `tsc --noEmit`

**Style Issues:**
- Verify CSS import order in `layout.tsx`
- Check Tailwind config for custom classes
- Inspect browser DevTools for specificity conflicts

**CMS Access Issues:**
- Verify access control policies
- Check user authentication status
- Review collection/field-level permissions

### Getting Help

- **Documentation**: Payload CMS docs, Next.js docs
- **Community**: GitHub issues, Discord
- **Logs**: Check browser console and server logs

---

## Plugin Configuration

### Active Plugins

- **@payloadcms/plugin-form-builder** - Dynamic forms
- **@payloadcms/plugin-nested-docs** - Hierarchical categories
- **@payloadcms/plugin-redirects** - URL redirects
- **@payloadcms/plugin-seo** - SEO optimization
- **@payloadcms/plugin-search** - Full-text search

### Plugin Usage

Plugins are configured in `payload.config.ts` and provide:
- Additional collections (Forms, Redirects, Search)
- Field enhancements (SEO fields)
- Admin UI customizations

---

## Inspiration Folder

The `/inspiration/uptown/` directory contains reference designs and styles:

- **Purpose**: Design reference for Upto1 branding
- **Assets**: SCSS files with variables, mixins, and components
- **Usage**: Extract patterns and adapt to React/Tailwind
- **Key Files**:
  - `_header.scss` - Navigation styles (now integrated)
  - `_variables.scss` - Color palette and spacing
  - `*.php` files - HTML structure reference

**Do not:**
- Copy PHP code directly
- Use SCSS without conversion to CSS
- Override existing working styles

**Do:**
- Reference for design patterns
- Extract color values and spacing
- Adapt animations and transitions
- Use as inspiration for new components

---

## Git Workflow

### Branch Naming

- **Feature branches**: `claude/claude-md-[session-id]`
- **Always develop on designated branch**
- **Never push to main/master directly**

### Commit Messages

- **Format**: `type: description`
- **Types**: feat, fix, docs, style, refactor, test, chore
- **Example**: `feat: add mega menu support to header`

### Push Requirements

- Use `git push -u origin <branch-name>`
- Branch must start with `claude/` and include session ID
- Retry on network errors (up to 4 times with backoff)

---

## Contact & Support

- **Project**: Upto1 Website
- **CMS**: Payload CMS 3.x
- **Framework**: Next.js 15
- **License**: MIT

---

## Changelog

**2025-11-13:**
- Initial CLAUDE.md created
- Header styles updated with inspiration/uptown reference
- Navigation styling with color-coded menu items
- Glassmorphism scrolled state effect
- Mega menu dropdown support added

---

**Last Updated**: 2025-11-13
**Document Version**: 1.0
