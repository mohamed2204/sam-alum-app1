import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { IoIosArrowDown } from "react-icons/io";
const data = [
  {
    id: 1,
    name: 'Double Cheeseburger',
    category: 'burger',
    image:
      'https://images.unsplash.com/photo-1607013251379-e6eecfffe234?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2Vyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1400&q=60',
    price: '$$$$',
  },
  {
    id: 2,
    name: 'Bacon Cheeseburger',
    category: 'burger',
    image:
      'https://images.unsplash.com/photo-1553979459-d2229ba7433b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGJ1cmdlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60',
    price: '$',
  },
  {
    id: 3,
    name: 'Mushroom Burger',
    category: 'burger',
    image:
      'https://images.unsplash.com/photo-1608767221051-2b9d18f35a2f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJ1cmdlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60',
    price: '$$',
  },
  {
    id: 4,
    name: 'Loaded Burger',
    category: 'burger',
    image:
      'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YnVyZ2Vyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1400&q=60',
    price: '$$$',
  },
  {
    id: 5,
    name: 'Feta & Spinnach',
    category: 'pizza',
    image:
      'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cGl6emF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
    price: '$$',
  },
];
// const SliderArrow = ({ className, style, onClick, position }) => {
//   const arrowStyle =
//     position === 'next'
//       ? { ...style, right: '10px' }
//       : { ...style, left: '10px', zIndex: '1' };

//   return <div className={className} style={arrowStyle} onClick={onClick} />;
// };
const Carousel = () => {
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   slidesToShow: 4,
  //   slidesToScroll: 4,
  //   initialSlide: 0,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 3,
  //         infinite: true,
  //         dots: true,
  //       },
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2,
  //         initialSlide: 2,
  //       },
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],
  //   autoplay: true,
  //   speed: 1000,
  //   autoplaySpeed: 3000,
  //   cssEase: 'linear',
  //   // nextArrow: <SliderArrow position="next" />,
  //   // prevArrow: <SliderArrow position="prev" />,
  // };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <div className="flex flex-col py-12 gap-5">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-4xl text-primary font-bold leading-8 tracking-tighter		">
            Our Top Five Menu
          </h2>
          <p className="text-xl font-semibold tracking-tight">
            Try our best Menu Today
          </p>
        </div>
        <div className="mx-12 ">
          <Slider {...settings}>
            {data.map((item, index) => (
              <div key={index}>
                <div className="border rounded-lg mx-2">
                  <img
                    width={400}
                    height={300}
                    src={item.image}
                    alt={item.name}
                    className="w-full h-[300px] object-cover rounded-t-lg "
                  />
                  <div className="flex flex-col gap-2 px-2 py-4">
                    <div className="text-lg ">{item.name}</div>

                    <div className="flex flex-row justify-between items-center font-semibold">
                      <p>150.00 MAD</p>
                      <button className="bg-primary duration-200 p-1 text-sm rounded-full text-white  hover:bg-white hover:border-primary hover:text-primary">
                        add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <div className="flex flex-col justify-center items-center pt-9 ">
          <h2 className="text-xl font-semibold tracking-tight ">
            see more menu
          </h2>
          {/* <div className="animate-bounce text-bold">
            <IoIosArrowDown size={40} className="text-primary" />
          </div> */}
        </div>
      </div>
    </div>
  );

  

  // return (
  //   <Slider {...settings}>
  //     <div>
  //       <h3>Slide 1</h3>
  //     </div>
  //     <div>
  //       <h3>Slide 2</h3>
  //     </div>
  //     <div>
  //       <h3>Slide 3</h3>
  //     </div>
  //   </Slider>
  // );
};
export default Carousel;
