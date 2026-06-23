'use client';

import styles from './ProductPage.module.scss';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import {useAtom} from "jotai";
import {isAsideOpenAtom} from "@/shared";
import {AsideBar} from "@/widgets";
import {useTranslations} from "next-intl";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import {useState} from "react";
import { Swiper as SwiperType } from 'swiper';
import clsx from "clsx";

type ProductPageProps = {
    params: {
        id: string;
    };
};

const MOCK_PRODUCT = {
    id: 1,
    title: 'Nike Air Force 1',
    price: 12990,
    author: 'Egor Kreed',
    description: 'Оригинальные кроссовки Nike Air Force 1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto corporis cumque debitis distinctio doloribus eaque et, hic iure maxime nam natus necessitatibus nihil placeat quis totam ullam velit. Amet, minus.',
    image: ['/images/ex10.jpg', '/images/ex8.jpg', '/images/ex9.jpg'],
};

export default function ProductPage({ params }: ProductPageProps) {
    const [isOpen, setIsOpen] = useAtom(isAsideOpenAtom);
    const product = MOCK_PRODUCT;
    const localizer = useTranslations()
    const [swiper, setSwiper] = useState<SwiperType | null>(null);
    const [active, setActive] = useState(0);

    return (
        <div className={styles.root}>
            <section className={styles.hero}>
                <div className={styles.posterWrap}>
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        onSwiper={setSwiper}
                        onSlideChange={(s) => setActive(s.realIndex)}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        loop
                    >
                        {product.image.map((image, index) => (
                            <SwiperSlide key={index}>
                                <Image
                                    src={image}
                                    alt={product.title}
                                    width={600}
                                    height={600}
                                    className={styles.poster}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                <div className={styles.customPagination}>
                    {product.image.map((img, index) => (
                        <button
                            key={index}
                            className={clsx(active === index && styles.active, styles.customPagination_bullet)}
                            onClick={() => swiper?.slideToLoop(index)}
                        >
                            <img src={img} alt={'pagination dot'} />
                        </button>
                    ))}
                </div>

                <div className={styles.info}>
                    <p className={styles.author}>{product.author}</p>

                    <h1 className={styles.title}>{product.title}</h1>

                    <div className={styles.price}>
                        {product.price.toLocaleString('ru-RU')} сом
                    </div>

                    {product.description ? (
                        <section className={styles.descriptionSection}>
                            <p className={styles.description}>{product.description}</p>
                        </section>
                    ) : null}

                    <button className={styles.buyButton} onClick={() => setIsOpen(true)}>
                        {localizer('buy')}
                    </button>
                </div>
            </section>
            <AsideBar />
        </div>
    );
}