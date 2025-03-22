import React from "react";

const BlogCard = () => {
    const items = [
      {
        id: 1,
        title: "Timothy Hay",
        tag: "Second Cut",
        src: "/assets/images/timothy-hay.webp",
      },
      {
        id: 2,
        title: "Lettuce",
        tag: "Romaine",
        src: "/assets/images/lettuce.avif",
      },
      {
        id: 3,
        title: "Banana",
        tag: "Latundan",
        src: "/assets/images/latundan.webp",
      },
      {
        id: 4,
        title: "Slippers (a.ka. Cookies)",
        tag: "Rubbers",
        src: "/assets/images/slippers.webp",
      },
    ];
  return items.map((index) => (
    <div className='antialiased text-gray-900'>
      <div className='p-2 flex items-center justify-center'>
        <div className='bg-gray-100 rounded-lg overflow-hidden shadow-2xl h-auto w-72'>
          <img className='h-48 w-full object-cover object-center' src={index.src} />
          <div className='p-6'>
            <div className='flex items-baseline'>
              <span className='text-tiny inline-block bg-teal-200 text-teal-800 py-1 px-4 text-xs rounded-full uppercase font-semibold tracking-wide'>
                {index.tag}
              </span>
            </div>
            <h4 className='mt-2 font-semibold text-lg leading-tight truncate'>{index.title}</h4>
          </div>
        </div>
      </div>
    </div>
  ));
};

export default BlogCard;
