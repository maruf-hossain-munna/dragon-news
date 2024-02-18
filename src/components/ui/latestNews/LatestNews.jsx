import { getAllNews } from "@/utils/getAllNews"
import NewsCard from "../newsCard/NewsCard";
import SmallNewsCard from "../newsCard/SmallNewsCard";


export default async function LatestNews() {
    const { data: allNews } = await getAllNews();

    // console.log(allNews.length)
    return (
        <div>
            <div>
                {
                    allNews.slice(0, 1).map((news) => <NewsCard key={news.id} news={news} />)
                }
            </div>

            <div className="mt-10">
                <h1 className="text-xl lg:text-3xl font-bold">Latest Posts</h1>
                <hr className="border border-red-700 mt-1" />
            </div>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                {
                    allNews.slice(1, 9).map((news) => <SmallNewsCard key={news.id} news={news} />)
                }
            </div>
        </div>
    )
}
