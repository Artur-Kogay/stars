'use client'

import styles from './ProductSlider.module.scss'
import 'swiper/css';
import 'swiper/css/pagination';
import {Autoplay} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import Image from "next/image";
import {useState} from "react";
import {Swiper as SwiperType} from "swiper";
import {IProduct} from '@/shared'
import clsx from "clsx";

interface ProductSliderProps {
    products: Pick<IProduct, 'images' | 'title'>;
}

function ProductSlider({products}: ProductSliderProps) {
    const [swiper, setSwiper] = useState<SwiperType | null>(null);
    const [active, setActive] = useState(0);

    return (
        <div className={styles.root}>
            <div className={styles.slider}>
                <Swiper
                    modules={[Autoplay]}
                    onSwiper={setSwiper}
                    onSlideChange={(swiper) => setActive(swiper.realIndex)}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    loop
                >
                    {products?.images?.map((image, index) => (
                        <SwiperSlide key={index}>
                            <Image
                                src={image}
                                alt={'slide'}
                                width={600}
                                height={800}
                                className={styles.poster}
                                priority={index === 0}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className={styles.pagination}>
                {products?.images?.map((img, index) => (
                    <button
                        key={index}
                        type="button"
                        className={clsx(
                            styles.paginationBullet,
                            active === index && styles.active
                        )}
                        onClick={() => swiper?.slideToLoop(index)}
                    >
                        <img src={img} alt={`Preview ${index + 1}`} />
                    </button>
                ))}
            </div>
        </div>
    );
}

export default ProductSlider;