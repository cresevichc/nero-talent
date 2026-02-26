import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://nerotalent.com',
      lastModified: new Date(),
    },
    {
      url: 'https://nerotalent.com/privacy',
      lastModified: new Date(),
    },
    {
      url: 'https://nerotalent.com/cookie',
      lastModified: new Date(),
    },
    {
      url: 'https://nerotalent.com/terms',
      lastModified: new Date(),
    },
  ]
}
