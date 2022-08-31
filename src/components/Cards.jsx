import React from "react";
import { useSelector } from "react-redux/es/exports";
import Card from "./Card";

import Filter from "./Filter";

const Cards = ({ searchQuery, setSearchQuery }) => {
  const { cards, filters } = useSelector((state) => state);

  const { categories, author } = filters;

  let regex = new RegExp(`${searchQuery}`, "ig");

  return (
    <>
      <div>
        <div className="text-center w-[400px] mx-auto">
          <h1 className="font-bold text-3xl mt-2">ALL BLOGS ARE HERE</h1>
          <p className="text-gray-300 text-lg">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
            libero labore natus atque, ducimus sed.
          </p>
        </div>

        {(categories.length || author) && <Filter />}

        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {cards
            .filter((blog) =>
              categories.length
                ? categories.every((tag) => blog.categories.includes(tag))
                : true
            )
            .filter((blog) => (author ? blog.author === author : true))
            .filter((blog) =>
              searchQuery.trim().length ? blog.title.match(regex) : true
            )

            .map((card, indx) => (
              <Card card={card} key={indx} />
            ))}
        </div>
      </div>
    </>
  );
};

export default Cards;
