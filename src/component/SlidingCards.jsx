import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import lappy from "../assets/lappy.png";
import {
  ArrowLeftRight,
  ArrowRightCircleIcon,
  Eye,
  Heart,
  Star,
  ShoppingCart,
} from "lucide-react";
import product1 from "../assets/product01.png";
import product2 from "../assets/product02.png";
import product3 from "../assets/product03.png";
import product4 from "../assets/product04.png";
import product5 from "../assets/product05.png";
import product6 from "../assets/product06.png";
import product7 from "../assets/product07.png";
import product8 from "../assets/product08.png";
import product9 from "../assets/product09.png";

const products = [
  {
    id: 1,
    title: "Wireless Headphones",
    price: 49.99,
    rating: 4,
    new: false,
    percentageOff: false,

    image: product1,
  },

  {
    id: 2,
    title: "Smart Watch",
    price: 79.99,
    rating: 4,
    new: true,
    percentageOff: true,
    discount: 15,
    image: product2,
  },

  {
    id: 3,
    title: "Laptop",
    price: 899.99,
    rating: 5,
    new: false,
    percentageOff: true,
    discount: 25,
    image: product3,
  },

  {
    id: 4,
    title: "Tablet",
    price: 499.99,
    rating: 2,
    new: true,
    percentageOff: true,
    discount: 10,
    image: product4,
  },

  {
    id: 5,
    title: "Gaming Laptop",
    price: 1299.99,
    rating: 0,
    new: false,
    percentageOff: true,
    discount: 30,
    image: product5,
  },

  {
    id: 6,
    title: "Wireless Headphones",
    price: 99.99,
    rating: 3,
    new: true,
    percentageOff: false,
    image: product6,
  },

  {
    id: 7,
    title: "Smart Phone",
    price: 699.99,
    rating: 5,
    new: false,
    percentageOff: true,
    discount: 15,
    image: product7,
  },

  {
    id: 8,
    title: "Digital Camera",
    price: 549.99,
    rating: 4,
    new: true,
    percentageOff: false,
    image: product8,
  },

  {
    id: 9,
    title: "Smart Watch",
    price: 149.99,
    rating: 4,
    new: false,
    percentageOff: true,
    discount: 20,
    image: product9,
  },
];

import "swiper/css";

const SlidingCards = () => {
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={3}
      loop={true}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      modules={[Autoplay]}
      onMouseEnter={(swiper) => swiper.autoplay.stop()}
      onMouseLeave={(swiper) => swiper.autoplay.start()}
    >
      {products.map((prod) => (
        <SwiperSlide>
          <div className="flex flex-col justify-center w-64 relative fullcard">
            <div className="flex gap-1.5 absolute top-4 right-3">
              {prod.new && (
                <div className="bg-primary flex items-center justify-center p-1">
                  <p className="text-white text-xs">NEW</p>
                </div>
              )}
              {prod.percentageOff && (
                <div className="border-2 border-primary flex items-center justify-center p-1">
                  <p className="text-primary text-xs">-{prod.discount}%</p>
                </div>
              )}
            </div>
            <div className="relative card w-full shadow border border-gray-200 py-5 px-3">
              <img src={prod.image} alt="p-1" />
              <div className="flex items-center flex-col justify-center">
                <p className="text-gray-400">category</p>
                <p className=" font-bold">{prod.title}</p>
                <div className="flex gap-1">
                  <p className="text-primary font-bold">{prod.price}</p>
                  <p className="text-gray-400 line-through">$900.00</p>
                </div>
              </div>
              <div className="mt-4 relative ">
                <div className=" h-px bg-gray-400 w-full z-10"></div>
                <div className="flex justify-center gap-1 w-1/2 ml-12 bg-white -mt-2 z-50">
                  {Array.from({ length: prod.rating }).map((_, index) => (
                    <Star
                      key={index}
                      className="text-primary z-50 fill-primary"
                      size={12}
                    />
                  ))}
                </div>
              </div>
              {/* icons */}
              <div className="flex gap-5 justify-center mt-6">
                <Heart size={15} />
                <ArrowLeftRight size={15} />
                <Eye size={15} />
              </div>
            </div>
            <div className="addtocart w-48 h-14 bg-secondary flex items-center ml-2 justify-center">
              <div className="addtocartbtn relative overflow-hidden bg-primary rounded-3xl text-sm text-white font-bold">
                <ShoppingCart
                  size={16}
                  className="carticon absolute left-3 top-1/2 -translate-y-1/2 -translate-x-8 opacity-0"
                />

                <p className="px-4 py-2 pl-8">ADD TO CART</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SlidingCards;
