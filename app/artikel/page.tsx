"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../ui/Navbar";
import Image from "next/image";
import Footer from "../ui/Footer";
import { articles } from "@/data/articles";
import { CiCalendarDate } from "react-icons/ci";
import { IoPeopleOutline } from "react-icons/io5";
import ReactPaginate from "react-paginate";
import { Article } from "@/type/type";
import { Skeleton } from "@/components/ui/skeleton";
import { fetchArticles } from "@/lib/api";

function Articles() {
  const [itemOffset, setItemOffset] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const itemsPerPage = 9;
  const endOffset = itemOffset + itemsPerPage;

  const [currentItems, setCurrentItems] = useState<Article[]>([]);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % articles.length;

    setItemOffset(newOffset);
    setCurrentItems(articles.slice(newOffset, newOffset + itemsPerPage));
  };

  useEffect(() => {
    fetchArticles().then((data) => {
      setPageCount(Math.ceil(data.length / itemsPerPage));
      setCurrentItems(data.slice(itemOffset, endOffset));
    });
  }, []);

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <Navbar />
      <div className="relative h-dvh w-full overflow-hidden ">
        <div className="relative h-full w-full ">
          <Image
            src={"/img/dokumentasi/article.jpg"}
            fill
            alt="galeri"
            className=" object-cover"
          />

          <h1
            className="absolute left-[50%] top-[50%] -translate-x-[50%]
                          -translate-y-[50%] text-center leading-[1.2] !text-headerOne text-shadow-headerOne font-semibold"
          >
            Articles
          </h1>
        </div>
      </div>
      <div className="mt-4 py-8 px-3 container">
        <div
          className=" gap-x-4 gap-y-6 grid grid-cols-1 
      sm:grid-cols-2  lg:grid-cols-3"
        >
          {currentItems.length > 0
            ? currentItems.map((article, index) => {
                return (
                  <div
                    key={index}
                    className="flex flex-col gap-1 px-4 py-4 rounded-lg shadow-lg
                   items-start  border-1 border-slate-200"
                  >
                    <a
                      className="group relative w-full h-full max-w-[600px] max-h-[300px] aspect-square md:max-h-[300px] 
                            md:max-w-[500px]  flex-shrink-0 cursor-pointer  hover:scale-[98%] active:scale-[98%]
                             transition-all duration-400 ease-in-out overflow-hidden"
                      href={`/artikel/${article.id}`}
                    >
                      <Image
                        src={article?.thumbnail}
                        alt={article?.title!}
                        fill
                        className=" object-cover group-hover:scale-110 group-active:scale-110 transform ease-in-out
                                duration-400 transition-transform"
                      />
                    </a>
                    <div className="flex flex-col gap-2">
                      <h4 className="font-bold !text-black">{article.title}</h4>
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
                      <p>{article.summary.slice(0, 100)}...</p>
                    </div>

                    <a
                      className="flex flex-row items-center justify-center p-2
                  bg-[#F3C725] w-full  rounded-lg shadow-md hover:scale-95 active:scale-95 transform ease-in-out
                                duration-400 transition-transform cursor-pointer "
                      href={`/artikel/${article.id}`}
                    >
                      <span className="!text-white font-semibold  ">
                        Lihat Selengkapnya
                      </span>
                    </a>
                  </div>
                );
              })
            : Array.from({ length: 9 }).map((_, index) => (
                <Skeleton
                  key={index}
                  className="group relative w-full h-full max-w-[600px] max-h-[350px] aspect-square md:max-h-[350px] 
                            md:max-w-[500px]  flex-shrink-0 cursor-pointer  hover:scale-[98%] active:scale-[98%]
                             transition-all duration-400 ease-in-out overflow-hidden"
                />
              ))}
        </div>

        <ReactPaginate
          breakLabel="..."
          nextLabel=" >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< "
          renderOnZeroPageCount={null}
          breakClassName={"break-me"}
          activeClassName={"active"}
          containerClassName={"pagination"}
        />
      </div>
      <Footer />
    </div>
  );
}

export default Articles;
