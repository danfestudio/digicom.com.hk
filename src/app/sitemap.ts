import { MetadataRoute } from 'next'

export const revalidate = 3600

const getAllProducts = async () => {
  const limit = 50000;
  let page = 1;

  const result = await fetch(`${process.env.NEXT_PUBLIC_API_URL}product?limit=${limit}&page=${page}`)
    .then((res) => res.json());

  const products = result?.data?.data;

  return products;
};

const getAllBlogs = async () => {
  const limit = 50000;
  let page = 1;

  const result = await fetch(`${process.env.NEXT_PUBLIC_API_URL}blog?limit=${limit}&page=${page}`)
    .then((res) => res.json());

  return result?.data?.blogs?.data;
};

export default async function sitemap() {

  const products = await getAllProducts()
  const blogs = await getAllBlogs()

  const productSiteMaplist = products.map((product: {
    [x: string]: any; updatedAt: any;
  }) => ({
    url: `https://www.digicom.com.hk/product/${product?.product_sku}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 1
  }))

  const blogSiteMaplist = blogs.map((blog: {
    [x: string]: any; updatedAt: any;
  }) => ({
    url: `https://www.digicom.com.hk/blog/${blog?.blog_slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 1
  }))

  return [
    {
      url: 'https://www.digicom.com.hk/',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://www.digicom.com.hk/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.digicom.com.hk/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://www.digicom.com.hk/warranty',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://www.digicom.com.hk/customersupport',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://www.digicom.com.hk/faqs',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://www.digicom.com.hk/userguides',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://www.digicom.com.hk/customersupport',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...productSiteMaplist,
    ...blogSiteMaplist
  ]
}