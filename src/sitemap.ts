import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const APP_URL = process.env.NEXT_PUBLIC_APP_URL

  return [
    {
      url: APP_URL!,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.7,
    },
    // Add more URLs here
  ]
}
