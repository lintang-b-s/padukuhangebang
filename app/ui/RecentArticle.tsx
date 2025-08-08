"use client";
import { Skeleton } from "@/components/ui/skeleton";
import { articles } from "@/data/articles";
import { fetchArticles, storageImageURL } from "@/lib/api";
import { Article } from "@/type/type";
import Image from "next/image";
import React, { useEffect } from "react";
import { CiCalendarDate } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa";
import { IoPeopleOutline } from "react-icons/io5";

function RecentArticles() {
  const [currentArticles, setCurrentArticles] = React.useState<Article[]>([]);
  useEffect(() => {
    fetchArticles().then((data) => {
      const now = new Date();
      const futureArticles = data.filter((event) => event.postDate > now);
      const pastArticles = data.filter((event) => event.postDate <= now);

      let sortedArticles: Article[] = [];
      if (futureArticles.length > 0) {
        let sortedFutureArticles = futureArticles.sort(
          (a, b) => a.postDate.getTime() - b.postDate.getTime()
        );
        sortedArticles.push(...sortedFutureArticles);
      }
      let sortedPastArticles = pastArticles.sort(
        (a, b) => b.postDate.getTime() - a.postDate.getTime()
      );

      sortedArticles.push(...sortedPastArticles);

      const currentSortedArticles = sortedArticles.map((article) => {
        let updatedArticle = article;
        if (article.thumbnail.startsWith("img/") ||  article.thumbnail.startsWith("images/")) {
          updatedArticle = {
            ...article,
            thumbnail: storageImageURL(article.thumbnail),
          };
        }

        updatedArticle.images = article.images!.map((image: string) =>
          storageImageURL(image)
        );
        return updatedArticle;
      });
      setCurrentArticles(currentSortedArticles);
    });
  }, []);
  return (
    <div className="flex flex-col gap-y-4 pl-1 pr-6 pt-4 container  ">
      <h2 className="hyphens-auto font-bold">Artikel</h2>
      <a
        className="group cursor-pointer flex items-center  gap-x-2"
        href={`/artikel`}
      >
        <span className="!text-[#F3C725] hover:text-[#dfc979] text-lg">
          Show all
        </span>
        <FaArrowRight
          color="#F3C725"
          className="group-hover:animate-seemore-next"
        />
      </a>

      <div className="flex flex-col gap-y-3 gap-x-3 sm:grid sm:grid-cols-2 md:grid-cols-3 ">
        {currentArticles.length > 0
          ? currentArticles.slice(0, 4).map((article, index) => {
              return (
                <div
                  key={index}
                  className="relative flex flex-col sm:grid sm:grid-cols-1 gap-1 items-center justify-center group
               rounded-lg shadow-lg  px-4 py-5 border-1 border-slate-200 h-full max-h-[526px]"
                >
                  <div
                    className="relative w-full max-w-80 h-46 sm:w-52 sm:h-50 md:w-62 md:h-50 lg:w-90 lg:h-70
              group-hover:scale-[98%] group-active:scale-[98%]  transition-all duration-400 
              ease-in-out overflow-hidden"
                  >
                    <Image
                      src={storageImageURL(article.thumbnail)!}
                      alt={article.title}
                      fill
                      className=" object-cover group-hover:scale-110 group-active:scale-110
                   transform ease-in-out duration-400 transition-transform"
                    />
                  </div>

                  <div className="flex flex-col gap-y-2 mt-1 sm:gap-y-0 sm:mt-2">
                    <span className="text-lg font-bold md:text-2xl">
                      {`${article.title.slice(0, 54)}...`}
                    </span>

                    <div className="flex flex-row gap-6 items-center">
                      <div className="flex flex-row gap-2">
                        <CiCalendarDate size={20} />
                        <span>{article.postDate.toDateString()}</span>
                      </div>
                      <div className="flex flex-row gap-2">
                        <IoPeopleOutline size={20} />
                        <span>{article.penulis}</span>
                      </div>
                    </div>
                    <div className="ql-editor pb-14">
                      <div
                        className="prose  "
                        dangerouslySetInnerHTML={{
                          __html: article.content.slice(0, 80) + "...",
                        }}
                      />
                    </div>

                    <a
                      className="absolute inset-x-4 bottom-3  flex flex-row items-center justify-center p-2
                  bg-[#F3C725] w-[90%]  rounded-lg shadow-md hover:scale-95 active:scale-95 transform ease-in-out
                                duration-400 transition-transform cursor-pointer "
                      href={`/artikel/${article.id}`}
                    >
                      <span className="!text-white font-semibold  ">
                        Lihat Selengkapnya
                      </span>
                    </a>
                  </div>
                </div>
              );
            })
          : Array.from({ length: 9 }).map((_, index) => (
              <Skeleton
                key={index}
                className="group relative w-full h-full sm:max-w-[300px] sm:max-h-[470px]  lg:max-w-[360px] lg:max-h-[470px] aspect-square 
                         flex-shrink-0 cursor-pointer  hover:scale-[98%] active:scale-[98%]
                                     transition-all duration-400 ease-in-out overflow-hidden"
              />
            ))}
      </div>
    </div>
  );
}

export default RecentArticles;
