"use client";
/* eslint-disable @next/next/no-img-element */
import Header from "@/components/Header";
import React, { useEffect, useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

type Props = {};

const Gallery = (props: Props) => {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    setShouldRender(true);
  }, []);

  return (
    <div className="bg-white font-montserrat">
      <Header
        heading="FSM Gallery"
        subheading="Explore a visual showcase of our fire safety solutions and real-world applications in action."
      />
      <div className="masonry mt-20 bg-white px-8 md:px-20 xl:px-40">
        {shouldRender && (
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
          >
            <Masonry gutter="20px">
              <img alt="pic" src="/Home-product-2.png" />
              <img alt="pic" src="/Home-product-3.png" />
              <img alt="pic" src="/Home-product-4.png" />
              <img alt="pic" src="/Home-product-5.png" />
              <img alt="pic" src="/Home-product-6.png" />
              <img alt="pic" src="/Home-product-7.png" />
              <img alt="pic" src="/Home-product-2.png" />
              <img alt="pic" src="/Home-product-3.png" />
              <img alt="pic" src="/Home-product-4.png" />
              <img alt="pic" src="/Home-product-5.png" />
              <img alt="pic" src="/Home-product-6.png" />
              <img alt="pic" src="/Home-product-7.png" />
            </Masonry>
          </ResponsiveMasonry>
        )}
      </div>
    </div>
  );
};

export default Gallery;
