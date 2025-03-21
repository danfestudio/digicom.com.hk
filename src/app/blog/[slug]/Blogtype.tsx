export type BlogType = {
    _id: string,
    image: {
        _id: string,
        path: string
    },
    title: string,
    content: string,
    description: string,
    author: string,
    createdAt: string,
    blog_slug: string
}