/* eslint-disable @next/next/no-img-element */
import Header from "@/components/Header";
import Image from "next/image";
import React from "react";
import { BiSearch } from "react-icons/bi";
import { FaRegCalendarAlt } from "react-icons/fa";

type Props = {};

const NewsPost = (props: Props) => {
  return (
    <div className="grid grid-cols-1 gap-16 bg-white px-8 py-20 font-montserrat sm:grid-cols-6 md:px-20 xl:px-40">
      {/* news  */}
      <div className="#w-[70%] space-y-8 sm:col-span-4">
        {/* image  */}
        <div>
          <img
            src="/Home-product-2.png"
            alt=""
            className="aspect-video w-full"
          />
        </div>
        {/* date  */}
        <div></div>
        {/* heading */}
        <div className="text-4xl font-bold uppercase">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
          perspiciatis vel libero accusamus illum totam aut amet suscipit est
          aliquam.
        </div>
        {/* news  */}
        <p className="text-base font-medium">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
          exercitationem, id amet assumenda dolorem et eius magni molestias,
          tempora ea doloremque soluta labore debitis cumque! Id quis nihil
          porro veritatis a dolorum dolore veniam saepe nesciunt animi odio
          molestias facere necessitatibus atque, ipsa velit ipsam? Repellat nisi
          saepe illum quisquam eum voluptatibus excepturi ullam vitae beatae qui
          voluptatem, laborum fugit expedita debitis fuga esse minima dicta,
          numquam cum facilis corrupti tempore, cupiditate rerum! At, in quasi
          corrupti, iusto temporibus hic nesciunt quod obcaecati eaque adipisci
          iure vitae minus earum ipsam maiores, tenetur nisi illo. Expedita
          ipsam id explicabo consectetur molestiae. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Nobis exercitationem, id amet assumenda
          dolorem et eius magni molestias, tempora ea doloremque soluta labore
          debitis cumque! Id quis nihil porro veritatis a dolorum dolore veniam
          saepe nesciunt animi odio molestias facere necessitatibus atque, ipsa
          velit ipsam? Repellat nisi saepe illum quisquam eum voluptatibus
          excepturi ullam vitae beatae qui voluptatem, laborum fugit expedita
          debitis fuga esse minima dicta, numquam cum facilis corrupti tempore,
          cupiditate rerum! At, in quasi corrupti, iusto temporibus hic nesciunt
          quod obcaecati eaque adipisci iure vitae minus earum ipsam maiores,
          tenetur nisi illo. Expedita ipsam id explicabo consectetur molestiae.
        </p>
      </div>
      <Sidebar />
    </div>
  );
};

const Sidebar = () => {
  return (
    <div className="#w-[30%] space-y-8 sm:col-span-2">
      <div className="relative h-[50px] w-full border-2 border-red-600 pl-10">
        <input
          className="h-full w-full"
          type="text"
          placeholder="Search FSM News"
        />
        <BiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-xl text-red-600" />
      </div>
      <img src="/CTA.png" alt="" />
      <RecentNews />
    </div>
  );
};

const RecentNews = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold">Recent News</h1>
      <div className="mt-8 space-y-8">
        {new Array(5).fill(0).map((_, ind) => (
          <div key={ind} className="flex items-start gap-x-5">
            <Image src="/Home-product-2.png" alt="" width={100} height={100} />
            <div>
              <h3 className="font-bold uppercase">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                dolores sed vitae reiciendis at nostrum totam?
              </h3>
              <p className="flex items-center gap-x-4">
                <span>
                  <FaRegCalendarAlt className="text-red-600" />
                </span>
                <span>16 Jan, 2024</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsPost;
