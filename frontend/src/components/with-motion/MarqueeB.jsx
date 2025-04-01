import { useEffect, useRef, useState } from "react";

const Marquee = ({ children, direction = "left", speed = 50, pauseOnHover = true, className = "" }) => {
  const [contentWidth, setContentWidth] = useState(0);
  const contentRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (contentRef.current) {
      setContentWidth(contentRef.current.scrollWidth);
    }
  }, [children]);

  return (
    <div
      className={`overflow-hidden relative ${className}`}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}>
      <div
        className='flex min-w-full gap-4'
        style={{
          transform: `translateX(${direction === "left" ? "-" : ""}${isPaused ? contentWidth / 4 : 0}px)`,
          animation: `scroll-${direction} ${contentWidth / speed}s linear infinite`,
          animationPlayState: isPaused ? "paused" : "running",
        }}>
        <div ref={contentRef} className='flex gap-4 shrink-0'>
          {children}
        </div>
        <div className='flex gap-4 shrink-0'>{children}</div>
      </div>

      <style>
        {`
          @keyframes scroll-left {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
          @keyframes scroll-right {
            from { transform: translateX(-50%); }
            to { transform: translateX(0); }
          }
        `}
      </style>
    </div>
  );
};

const ReviewCard = ({ avatar, name }) => (
  <div className='w-80 p-4 bg-card rounded-lg border border-border shadow-sm'>
    <div className='flex items-center gap-3 mb-3'>
      <img src={avatar} alt={name} className='w-20 h-20 rounded-full object-cover' />
      <div>
        <h3 className='font-medium text-foreground'>{name}</h3>
      </div>
    </div>
  </div>
);

export default function MarqueeB() {
  const things = [
    {
      id: 1,
      name: "iPhone charger",
      avatar:
        "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MQGH2?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1618617119000",
    },
    {
      id: 2,
      name: "Laptop edges",
      avatar: "https://techterms.com/img/xl/laptop_586.png",
    },
    {
      id: 3,
      name: "Slippers",
      avatar: "/assets/images/slipper.jfif",
    },
    {
      id: 4,
      name: "Remote control buttons",
      avatar: "https://nexim.my.salesforce-sites.com/articleimage/servlet/servlet.FileDownload?file=015F9000009C7VIIA0",
    },
    {
      id: 5,
      name: "Carpet edges",
      avatar: "/assets/images/carpet.jfif",
    },
    {
      id: 6,
      name: "Cardboard boxes",
      avatar: "https://5.imimg.com/data5/IOS/Default/2023/5/305528872/MH/BB/PV/130084026/product-jpeg-500x500.png",
    },
    {
      id: 7,
      name: "Wood",
      avatar: "https://cdn.shopify.com/s/files/1/0634/6283/4312/files/type-of-wood-oak_480x480.png?v=1729680122",
    },
    {
      id: 8,
      name: "Papers with hard covers",
      avatar: "https://www.collinsdictionary.com/images/full/paper_111691001.jpg",
    },
    {
      id: 9,
      name: "Baseboard corners",
      avatar: "https://api.example.com/avatars/baseboard-corners",
    },
    {
      id: 10,
      name: "Shoelaces",
      avatar: "https://upload.wikimedia.org/wikipedia/commons/3/37/Shoelaces_20050719_001.jpg",
    },
    {
      id: 11,
      name: "Electrical Wires",
      avatar:
        "https://www.thespruce.com/thmb/PbIs5mo930gZZLLzpOJdgSiFyks=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/electrical-wiring-1152909_05_directburial_3223-9c5ce8a6c20c406881560c1c9d2d40f9.jpg",
    },
  ];

  return (
    <div className='flex flex-col gap-8 items-center justify-center'>
      <div className='w-full max-w-full space-y-8'>
        <div className='space-y-2'>
          <h2 className='text-center text-xl md:text-2xl font-bold mb-10'>
            Things Toqui Has Eaten{" "}
            <span className='text-pink-600'>
              <br /> (Not Edible)
            </span>{" "}
          </h2>
          <Marquee direction='left' className='py-4' speed={30}>
            {things.map((review) => (
              <ReviewCard key={review.id} avatar={review.avatar} name={review.name} />
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
}
