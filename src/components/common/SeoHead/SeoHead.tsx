import { Helmet } from 'react-helmet-async';
import { PAGE_SEO_CONFIG, generateBreadcrumbSchema, generateSeoData } from '@/utils/seo';
import { type BreadcrumbItem, type SeoData } from '@/types/seo';

export interface SeoHeadProps {
  breadcrumbs?: BreadcrumbItem[];
  pageKey?: keyof typeof PAGE_SEO_CONFIG;
  customData?: BreadcrumbItem;
}

export default function SeoHead({ ...seoData }: SeoHeadProps) {
  const seo: SeoData = generateSeoData(seoData.pageKey, seoData.customData);
  const breadcrumbSchema = seoData.breadcrumbs
    ? generateBreadcrumbSchema(seoData.breadcrumbs)
    : null;

  return (
    <Helmet>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seo.keywords} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:type" content={seo.type} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:site_name" content={seo.siteName} />
      <meta name="twitter:card" content={seo.twitterCard} />
      {seo.canonical && <link rel="canonical" href={seo.canonical} />}
      {seo.noindex && <meta name="robots" content="noindex" />}
      {seo.nofollow && <meta name="robots" content="nofollow" />}

      {/* Breadcrumb Schema */}
      {breadcrumbSchema && breadcrumbSchema.itemListElement.length > 0 && (
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      )}
    </Helmet>
  );
}
