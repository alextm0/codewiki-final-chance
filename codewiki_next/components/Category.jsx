import React from "react";
import Link from "next/link";

import { v4 as uuidv4 } from 'uuid';

import Rating from "./Rating";

function Category({ category, categoryName, categoryDescription, topics }) {
  if (!category || !categoryName || !categoryDescription || !topics) {
    return;
  }

  const topicArray = topics.map((topic) => {
    return (
      <div
        key={ uuidv4() }
        className="font-poppins flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-violet-400"
      >
        <Link href={`/${category}/${topic.slug}`}>
          <div>
            <div className="text-xl font-semibold tracking-wide text-gray-800">
              {topic.name}
            </div>
            <div className="mt-4">
              <Rating stars={topic.stars} onBlogPost={true} />
            </div>
          </div>
        </Link>

        <div className="mt-3 text-gray-500">{topic.description}</div>
      </div>
    );
  });

  return (
    <section className="text-gray-500">
      <div
        className="container max-w-5xl px-4 py-12 mx-auto font-poppins"
        bis_skin_checked="1"
      >
        <div className="grid gap-4 mx-4 sm:grid-cols-12" bis_skin_checked="1">
          <div className="col-span-12 sm:col-span-3">
            <div
              className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0"
              bis_skin_checked="1"
            >
              <h3 className="text-gray-800 text-3xl   font-semibold before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-violet-400">
                {categoryName}
              </h3>
              <span className="text-sm font-bold tracking-wider uppercase">
                {" "}
                {categoryDescription}{" "}
              </span>
            </div>
          </div>
          <div
            className="relative col-span-12 px-4 space-y-6 sm:col-span-9"
            bis_skin_checked="1"
            key={ uuidv4() }
          >
            <div
              className=" ml-10 col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-400"
              bis_skin_checked="1"
              key={ uuidv4() }
            >
              {topicArray}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Category;