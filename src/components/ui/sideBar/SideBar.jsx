import { getAllNews } from "@/utils/getAllNews";
import NewsCardSideBar from "../newsCard/NewsCardSideBar";
import Image from "next/image";


export default async function SideBar() {
    const { data: allNews } = await getAllNews();
    return (
        <div>
            <div>
                <h1 className="text-xl lg:text-3xl font-bold">Popular Posts</h1>
                <hr className="border border-red-700 mt-1" />
            </div>

            <div className="mt-6 grid grid-cols-1 gap-8">
                {
                    allNews.map((news) => <NewsCardSideBar key={news.id} news={news} />)
                }
            </div>

            <div className="mt-10">
                <Image
                    src='/images/world-icon.png'
                    alt="World Icon"
                    width={400}
                    height={500}
                    className="w-full rounded-md"
                />
            </div>
        </div>
    )
}
