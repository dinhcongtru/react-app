import type { PageSeoConfig, SeoData } from '@/types/seo';

const BASE_URL = import.meta.env.VITE_APP_URL || 'https://your-domain.com';

// Default SEO configuration
export const DEFAULT_SEO: SeoData = {
  title: 'React App - Modern Web Development',
  description:
    'Professional React application with modern web development practices, dynamic layouts, and responsive design.',
  keywords: 'React, TypeScript, SCSS, Web Development, Responsive Design, Modern UI',
  image: '/assets/images/common/ogp.jpg',
  url: BASE_URL,
  type: 'website',
  siteName: 'React App',
  locale: 'vi_VN',
  author: 'React App Team',
  twitterCard: 'summary_large_image',
  canonical: BASE_URL,
  noindex: true,
  nofollow: true,
};

// Page-specific SEO configurations
export const PAGE_SEO_CONFIG: Record<string, PageSeoConfig> = {
  home: {
    title: 'Home - React App',
    description:
      'Welcome to React App - Experience our dynamic layout system and modern web development approach.',
    keywords: 'React App, Home, Dynamic Layout, Web Development',
    url: BASE_URL,
    canonical: BASE_URL,
    breadcrumbs: [{ name: 'Home', url: '/' }],
  },
  about: {
    title: 'About Us - React App',
    description:
      'Learn about our company, team, and mission. Discover how we create innovative web solutions.',
    keywords: 'About Us, Company, Team, Mission, Web Development',
    url: `${BASE_URL}/about`,
    canonical: `${BASE_URL}/about`,
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'About', url: '/about' },
    ],
  },
  services: {
    title: 'Our Services - React App',
    description:
      'Comprehensive web development services including React applications, mobile apps, UI/UX design, and cloud solutions.',
    keywords: 'Services, Web Development, React, Mobile Apps, UI/UX Design, Cloud Services',
    url: `${BASE_URL}/services`,
    canonical: `${BASE_URL}/services`,
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Services', url: '/services' },
    ],
  },
  contact: {
    title: 'Contact Us - React App',
    description: "Get in touch with our team. We're here to help with your web development needs.",
    keywords: 'Contact, Get in Touch, Web Development, Support',
    url: `${BASE_URL}/contact`,
    canonical: `${BASE_URL}/contact`,
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Contact', url: '/contact' },
    ],
  },
  notFound: {
    title: 'Page Not Found - React App',
    description: 'Trang bạn đang tìm kiếm không tồn tại hoặc đã bị di chuyển.',
    url: `${BASE_URL}/404`,
    noindex: true,
    nofollow: true,
    canonical: `${BASE_URL}/404`,
  },
};

// Generate complete SEO data by merging default with page-specific
export const generateSeoData = (
  pageKey?: keyof typeof PAGE_SEO_CONFIG,
  customData?: Partial<SeoData>
): SeoData => {
  const pageConfig = pageKey ? PAGE_SEO_CONFIG[pageKey] : {};

  return {
    ...DEFAULT_SEO,
    ...pageConfig,
    ...customData,
  };
};

// Generate structured data for breadcrumbs
export const generateBreadcrumbSchema = (breadcrumbs: { name: string; url: string }[]) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${DEFAULT_SEO.url}${item.url}`,
    })),
  };
};

// Generate organization schema
export const generateOrganizationSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: DEFAULT_SEO.siteName,
    url: DEFAULT_SEO.url,
    logo: `${DEFAULT_SEO.url}/assets/images/common/logo.png`,
    sameAs: [
      'https://facebook.com/your-page',
      'https://twitter.com/your-handle',
      'https://linkedin.com/company/your-company',
    ],
  };
};

// Generate website schema
export const generateWebsiteSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: DEFAULT_SEO.siteName,
    url: DEFAULT_SEO.url,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${DEFAULT_SEO.url}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };
};
