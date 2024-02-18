export const getAllNews = async () => {
    const res = await fetch("https://the-news-portal-server.vercel.app/all-news")
    const data = res.json()

    return data;
}