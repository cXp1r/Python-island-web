import type { MetadataRoute } from 'next';

const BASE_URL = 'https://pyisland.top';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    {
      url: `${BASE_URL}/`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
  ];

  return routes;
}
