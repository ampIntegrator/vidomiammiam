import type { Media, User } from '@/payload-types'
import { RequiredDataFromCollectionSlug } from 'payload'

export type BlogPostArgs = {
  heroImages: Media[]
  author: User
}

const blogPostsData = [
  {
    slug: 'future-of-web-development',
    title: 'The Future of Web Development',
    intro: 'Exploring emerging trends that will shape how we build websites in the coming years.',
    paragraphs: [
      'Web development has evolved dramatically over the past decade, transforming from simple static pages to complex, interactive applications. Today, developers have access to an unprecedented array of tools, frameworks, and methodologies that enable them to create stunning digital experiences.',
      'The rise of modern JavaScript frameworks like React, Vue, and Svelte has revolutionized how we approach front-end development. These tools provide developers with powerful abstractions that make it easier to build maintainable, scalable applications while delivering exceptional user experiences.',
      'Looking ahead, we can expect to see continued innovation in areas like server-side rendering, edge computing, and progressive web applications. The line between native and web applications continues to blur, opening up exciting new possibilities for developers.',
      'Artificial intelligence is also beginning to play a larger role in development workflows. From code completion to automated testing, AI-powered tools are helping developers work more efficiently and catch potential issues earlier in the development process.',
    ],
  },
  {
    slug: 'mastering-modern-css',
    title: 'Mastering Modern CSS Techniques',
    intro: 'Discover powerful CSS features that make styling websites easier and more maintainable.',
    paragraphs: [
      'CSS has come a long way from its humble beginnings. Modern CSS offers powerful features like Grid, Flexbox, and custom properties that give developers unprecedented control over layout and design.',
      'CSS Grid revolutionized layout creation, allowing developers to create complex, responsive layouts with minimal code. Combined with Flexbox for component-level layouts, these tools provide a robust foundation for modern web design.',
      'Custom properties, or CSS variables, have transformed how we manage design systems. They enable dynamic theming, easier maintenance, and more flexible styling approaches that were previously only possible with preprocessors.',
      'Container queries are the latest addition to the CSS arsenal, allowing components to adapt based on their container\'s size rather than the viewport. This represents a fundamental shift in how we think about responsive design.',
      'As CSS continues to evolve, features like cascade layers and nesting are making stylesheets more organized and maintainable. The future of CSS is bright, with new features that continue to empower developers.',
    ],
  },
  {
    slug: 'building-scalable-applications',
    title: 'Building Scalable Web Applications',
    intro: 'Best practices for creating applications that grow with your business needs.',
    paragraphs: [
      'Scalability is a critical consideration for any web application. Whether you\'re building a startup MVP or an enterprise platform, planning for growth from the beginning can save countless headaches down the road.',
      'Architectural decisions made early in a project can have long-lasting implications. Choosing the right database, implementing proper caching strategies, and designing modular, maintainable code are all essential components of a scalable application.',
      'Microservices architecture has gained popularity as a way to build highly scalable systems. By breaking applications into smaller, independent services, teams can develop, deploy, and scale components independently.',
      'Performance optimization is crucial for scalability. Techniques like code splitting, lazy loading, and efficient data fetching help ensure your application remains fast even as it grows in complexity and user base.',
      'Monitoring and observability are often overlooked but essential aspects of scalable applications. Understanding how your application performs in production allows you to identify bottlenecks and optimize accordingly.',
    ],
  },
  {
    slug: 'typescript-for-beginners',
    title: 'TypeScript Essentials for JavaScript Developers',
    intro: 'A comprehensive guide to adding type safety to your JavaScript projects.',
    paragraphs: [
      'TypeScript has become increasingly popular in the JavaScript ecosystem, and for good reason. By adding static typing to JavaScript, TypeScript helps catch errors early and improves code maintainability.',
      'Getting started with TypeScript is easier than many developers think. The language is a superset of JavaScript, meaning valid JavaScript is also valid TypeScript. This allows for gradual adoption in existing projects.',
      'One of TypeScript\'s greatest strengths is its tooling support. Modern IDEs provide excellent autocomplete, refactoring capabilities, and inline documentation when working with TypeScript code.',
      'Understanding TypeScript\'s type system unlocks its full potential. From basic types to advanced features like generics and conditional types, the type system provides powerful ways to model your application\'s domain.',
    ],
  },
  {
    slug: 'api-design-best-practices',
    title: 'REST API Design Best Practices',
    intro: 'Creating intuitive, maintainable APIs that developers love to use.',
    paragraphs: [
      'A well-designed API is a joy to work with. It should be intuitive, consistent, and thoroughly documented. Good API design requires thoughtful consideration of how developers will interact with your service.',
      'RESTful conventions provide a solid foundation for API design. Using proper HTTP methods, status codes, and resource naming creates APIs that are predictable and easy to understand.',
      'Versioning is crucial for API longevity. Whether you use URL versioning, header versioning, or content negotiation, having a clear versioning strategy allows your API to evolve without breaking existing integrations.',
      'Error handling and validation are often overlooked aspects of API design. Providing clear, actionable error messages helps developers quickly identify and fix issues in their code.',
      'Documentation is not optional. Comprehensive API documentation, whether through OpenAPI specifications, interactive documentation tools, or code examples, is essential for developer success.',
      'Security should be built into your API from the ground up. Implementing proper authentication, authorization, rate limiting, and input validation protects both your service and your users.',
    ],
  },
  {
    slug: 'responsive-design-strategies',
    title: 'Modern Responsive Design Strategies',
    intro: 'Creating beautiful experiences across all devices and screen sizes.',
    paragraphs: [
      'Responsive design is no longer optional in today\'s multi-device world. Users expect seamless experiences whether they\'re on a smartphone, tablet, or desktop computer.',
      'Mobile-first design has become the standard approach. By starting with the mobile experience and progressively enhancing for larger screens, we ensure that the core functionality works everywhere.',
      'Fluid typography and spacing systems create more harmonious designs across breakpoints. Tools like CSS clamp() and custom properties make it easier to implement fluid design systems.',
      'Testing across real devices remains important despite the improvements in browser dev tools. Different devices have unique characteristics that can only be discovered through hands-on testing.',
    ],
  },
  {
    slug: 'web-performance-optimization',
    title: 'Web Performance Optimization Guide',
    intro: 'Techniques for creating lightning-fast websites that delight users.',
    paragraphs: [
      'Website performance directly impacts user experience, SEO rankings, and conversion rates. Even small improvements in load time can have significant business impact.',
      'Image optimization is one of the most impactful performance improvements you can make. Using modern formats like WebP and AVIF, implementing responsive images, and lazy loading can dramatically reduce page weight.',
      'JavaScript bundle size is a common performance bottleneck. Code splitting, tree shaking, and careful dependency management help keep bundle sizes manageable.',
      'Caching strategies at multiple levels - from browser caching to CDN edge caching - can dramatically improve perceived performance for repeat visitors.',
      'Core Web Vitals have become important metrics for measuring user experience. Understanding and optimizing for LCP, FID, and CLS helps create fast, responsive websites.',
    ],
  },
  {
    slug: 'jamstack-architecture-explained',
    title: 'Understanding JAMstack Architecture',
    intro: 'How JAMstack is transforming modern web development workflows.',
    paragraphs: [
      'JAMstack represents a fundamental shift in how we build websites. By decoupling the front-end from the back-end, JAMstack architecture offers improved performance, security, and developer experience.',
      'Static site generation has evolved far beyond simple blogs. Modern SSG frameworks can handle complex, dynamic websites while maintaining the benefits of pre-rendering.',
      'The ecosystem of headless CMS platforms has exploded in recent years. These tools provide content management capabilities while giving developers full control over the front-end presentation.',
      'Serverless functions complement JAMstack architecture perfectly. They provide dynamic functionality when needed while keeping the bulk of the site static and cacheable.',
    ],
  },
  {
    slug: 'accessibility-web-development',
    title: 'Web Accessibility Best Practices',
    intro: 'Building inclusive websites that work for everyone.',
    paragraphs: [
      'Web accessibility is a fundamental aspect of good web development. Creating websites that work for people with disabilities isn\'t just the right thing to do - it often improves the experience for everyone.',
      'Semantic HTML forms the foundation of accessible websites. Using appropriate HTML elements and ARIA attributes helps screen readers and other assistive technologies understand your content.',
      'Keyboard navigation is essential for many users. Ensuring all interactive elements are keyboard accessible and providing visible focus indicators improves usability for everyone.',
      'Color contrast and text sizing affect readability for users with visual impairments. Following WCAG guidelines for contrast ratios and allowing text to be resized without breaking layouts are important considerations.',
      'Automated testing tools can catch many accessibility issues, but manual testing with screen readers and other assistive technologies is essential for a truly accessible experience.',
    ],
  },
  {
    slug: 'graphql-modern-apis',
    title: 'GraphQL for Modern APIs',
    intro: 'Exploring the benefits and trade-offs of GraphQL versus REST.',
    paragraphs: [
      'GraphQL has emerged as a powerful alternative to traditional REST APIs. By allowing clients to request exactly the data they need, GraphQL can reduce over-fetching and improve performance.',
      'The strongly-typed nature of GraphQL schemas provides excellent developer experience. IDEs can offer autocomplete and validation, while schema documentation is automatically generated.',
      'GraphQL\'s flexibility comes with complexity. Implementing features like pagination, caching, and authorization requires careful consideration and often custom solutions.',
      'The GraphQL ecosystem has matured significantly. Tools like Apollo Client and Server, along with code generation tools, make building GraphQL APIs more accessible than ever.',
      'Deciding between GraphQL and REST depends on your specific use case. Understanding the trade-offs helps you make informed architectural decisions for your project.',
    ],
  },
]

export const createBlogPosts = (
  args: BlogPostArgs,
): RequiredDataFromCollectionSlug<'posts'>[] => {
  const { heroImages, author } = args

  return blogPostsData.map((post, index) => ({
    slug: post.slug,
    _status: 'published',
    authors: [author],
    title: post.title,
    heroImage: heroImages[index].id,
    content: {
      root: {
        type: 'root',
        children: [
          {
            type: 'heading',
            children: [
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: post.intro,
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            tag: 'h2',
            version: 1,
          },
          ...post.paragraphs.map((paragraph) => ({
            type: 'paragraph' as const,
            children: [
              {
                type: 'text' as const,
                detail: 0,
                format: 0,
                mode: 'normal' as const,
                style: '',
                text: paragraph,
                version: 1,
              },
            ],
            direction: 'ltr' as const,
            format: '',
            indent: 0,
            textFormat: 0,
            version: 1,
          })),
        ],
        direction: 'ltr',
        format: '',
        indent: 0,
        version: 1,
      },
    },
    meta: {
      description: post.intro,
      image: heroImages[index].id,
      title: post.title,
    },
    relatedPosts: [],
  }))
}
