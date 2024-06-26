"use client";

import * as style from "@style/home/main.css";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import Image from "next/image";
import { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";

export default function TodayProduct() {
  const mockData = [
    {
      img: "/assets/images/today-products/today-product_1.webp",
      title:
        "Nikon D D80 10.2MP Digital SLR Camera - Black (Plus 3 Lenses, Bag, Chargers)",
      price: "130.00",
    },
    {
      img: "/assets/images/today-products/today-product_2.webp",
      title:
        "Nikon D D80 10.2MP Digital SLR Camera - Black (Plus 3 Lenses, Bag, Chargers)",
      price: "130.00",
    },
    {
      img: "/assets/images/today-products/today-product_3.webp",
      title:
        "Nikon D D80 10.2MP Digital SLR Camera - Black (Plus 3 Lenses, Bag, Chargers)",
      price: "130.00",
    },
    {
      img: "/assets/images/today-products/today-product_4.webp",
      title:
        "Nikon D D80 10.2MP Digital SLR Camera - Black (Plus 3 Lenses, Bag, Chargers)",
      price: "130.00",
    },
    {
      img: "/assets/images/today-products/today-product_5.webp",
      title:
        "Nikon D D80 10.2MP Digital SLR Camera - Black (Plus 3 Lenses, Bag, Chargers)",
      price: "130.00",
    },
  ];
  const [selectedIndex, setSelectedIdx] = useState(0);
  const tempProductArr = [0, 1, 2];
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000 }),
  ]);
  useEffect(() => {
    if (emblaApi) {
      emblaApi.on("select", () => {
        setSelectedIdx(emblaApi.selectedScrollSnap());
      });
    }
  }, [emblaApi]);

  const handleClickPrev = () => {
    emblaApi.scrollPrev();
    setSelectedIdx(emblaApi.selectedScrollSnap());
  };

  const handleClickNext = () => {
    emblaApi.scrollNext();
    setSelectedIdx(emblaApi.selectedScrollSnap());
  };
  return (
    <section className={style.today_product_container}>
      <em className={style.sub_theme_title}>
        <span className={style.sub_title_emphasis}>Today&apos;s Products</span>
      </em>
      <div className={style.product_item_wrapper} ref={emblaRef}>
        <div className={style.scroll_wrapper}>
          <ul className={style.slider_wrapper}>
            {isMobile
              ? mockData.slice(0, 2).map(({ img, title, price }, idx) => {
                  return (
                    <li className={style.slider_item_wrapper} key={idx}>
                      <Link
                        href="/search"
                        className={style.product_detail_link}
                      >
                        <div className={style.slider_item_image_wrapper}>
                          <Image
                            src={img}
                            width={100}
                            height={100}
                            alt="today's product image"
                            className={style.product_image}
                          />
                        </div>
                        <div className={style.product_info_wrapper}>
                          <span className={style.product_title}>{title}</span>
                          <span className={style.product_price}>${price}</span>
                        </div>
                      </Link>
                    </li>
                  );
                })
              : mockData.map(({ img, title, price }, idx) => {
                  return (
                    <li className={style.slider_item_wrapper} key={idx}>
                      <Link
                        href="/search"
                        className={style.product_detail_link}
                      >
                        <div className={style.slider_item_image_wrapper}>
                          <Image
                            src={img}
                            width={100}
                            height={100}
                            alt="today's product image"
                            className={style.product_image}
                          />
                        </div>
                        <div className={style.product_info_wrapper}>
                          <span className={style.product_title}>{title}</span>
                          <span className={style.product_price}>${price}</span>
                        </div>
                      </Link>
                    </li>
                  );
                })}
          </ul>
          <ul className={style.slider_wrapper}>
            {isMobile
              ? mockData.slice(0, 2).map(({ img, title, price }, idx) => {
                  return (
                    <li className={style.slider_item_wrapper} key={idx}>
                      <Link
                        href="/search"
                        className={style.product_detail_link}
                      >
                        <div className={style.slider_item_image_wrapper}>
                          <Image
                            src={img}
                            width={100}
                            height={100}
                            alt="today's product image"
                            className={style.product_image}
                          />
                        </div>
                        <div className={style.product_info_wrapper}>
                          <span className={style.product_title}>{title}</span>
                          <span className={style.product_price}>${price}</span>
                        </div>
                      </Link>
                    </li>
                  );
                })
              : mockData.map(({ img, title, price }, idx) => {
                  return (
                    <li className={style.slider_item_wrapper} key={idx}>
                      <Link
                        href="/search"
                        className={style.product_detail_link}
                      >
                        <div className={style.slider_item_image_wrapper}>
                          <Image
                            src={img}
                            width={100}
                            height={100}
                            alt="today's product image"
                            className={style.product_image}
                          />
                        </div>
                        <div className={style.product_info_wrapper}>
                          <span className={style.product_title}>{title}</span>
                          <span className={style.product_price}>${price}</span>
                        </div>
                      </Link>
                    </li>
                  );
                })}
          </ul>
          <ul className={style.slider_wrapper}>
            {isMobile
              ? mockData.slice(0, 2).map(({ img, title, price }, idx) => {
                  return (
                    <li className={style.slider_item_wrapper} key={idx}>
                      <Link
                        href="/search"
                        className={style.product_detail_link}
                      >
                        <div className={style.slider_item_image_wrapper}>
                          <Image
                            src={img}
                            width={100}
                            height={100}
                            alt="today's product image"
                            className={style.product_image}
                          />
                        </div>
                        <div className={style.product_info_wrapper}>
                          <span className={style.product_title}>{title}</span>
                          <span className={style.product_price}>${price}</span>
                        </div>
                      </Link>
                    </li>
                  );
                })
              : mockData.map(({ img, title, price }, idx) => {
                  return (
                    <li className={style.slider_item_wrapper} key={idx}>
                      <Link
                        href="/search"
                        className={style.product_detail_link}
                      >
                        <div className={style.slider_item_image_wrapper}>
                          <Image
                            src={img}
                            width={100}
                            height={100}
                            alt="today's product image"
                            className={style.product_image}
                          />
                        </div>
                        <div className={style.product_info_wrapper}>
                          <span className={style.product_title}>{title}</span>
                          <span className={style.product_price}>${price}</span>
                        </div>
                      </Link>
                    </li>
                  );
                })}
          </ul>
        </div>
      </div>
      <div className={style.progress_wrapper}>
        <FaAngleLeft onClick={handleClickPrev} className={style.prev_icon} />
        {tempProductArr.map((_, idx) => {
          return (
            <div
              key={idx}
              className={`${style.progress_item} ${idx === selectedIndex ? style.progress_active : ""}`}
            />
          );
        })}
        <FaAngleRight onClick={handleClickNext} className={style.next_icon} />
      </div>
    </section>
  );
}
