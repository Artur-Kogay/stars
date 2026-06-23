'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import Autoplay from 'embla-carousel-autoplay';
import Fade from 'embla-carousel-fade';
import useEmblaCarousel from 'embla-carousel-react';

import styles from './BannersCarousel.module.scss';

const MOCK_BANNERS = [
    {
        id: 1,
        image_path: '/images/hero.png',
        link: '/',
    },
    {
        id: 2,
        image_path: '/images/hero2.png',
        link: '/',
    },
    {
        id: 3,
        image_path: '/images/hero3.png',
        link: '/',
    },
];

const BannersCarousel = ({ variant = 'main' }: { variant?: 'main' | 'strip' }) => {
    const banners = MOCK_BANNERS;

    const validBanners = useMemo(
        () => banners.filter((b) => b.image_path),
        [banners],
    );

    const plugins = useMemo(
        () =>
            validBanners.length > 1
                ? [Fade(), Autoplay({ delay: 4000, stopOnInteraction: false })]
                : [],
        [validBanners.length],
    );

    const [emblaRef, emblaApi] = useEmblaCarousel(
        { loop: validBanners.length > 1, align: 'center' },
        plugins,
    );

    const [selectedIdx, setSelectedIdx] = useState(0);

    const scrollTo = useCallback(
        (idx: number) => emblaApi?.scrollTo(idx),
        [emblaApi],
    );

    useEffect(() => {
        if (!emblaApi) return;

        const onSelect = () => setSelectedIdx(emblaApi.selectedScrollSnap());

        onSelect();
        emblaApi.on('select', onSelect);

        return () => {
            emblaApi.off('select', onSelect);
        };
    }, [emblaApi]);

    if (validBanners.length === 0) return null;

    const isStrip = variant === 'strip';

    const w = 1280;
    const h = isStrip ? 120 : 480;

    return (
        <section className={`${styles.root} ${isStrip ? styles.strip : ''}`}>
            <div className={styles.viewport} ref={emblaRef}>
                <div className={styles.track}>
                    {validBanners.map((banner, idx) => (
                        <div key={banner.id} className={styles.slide}>
                            <Link href={banner.link || '/'} className={styles.link}>
                                <Image
                                    src={banner.image_path}
                                    alt=""
                                    width={w}
                                    height={h}
                                    className={styles.image}
                                    priority={idx === 0}
                                    sizes="(max-width: 1280px) 100vw, 1280px"
                                />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>

            {validBanners.length > 1 && (
                <div className={styles.dots}>
                    {validBanners.map((b, idx) => (
                        <button
                            key={b.id}
                            type="button"
                            className={styles.dot}
                            aria-label={`Slide ${idx + 1}`}
                            aria-current={idx === selectedIdx}
                            onClick={() => scrollTo(idx)}
                        />
                    ))}
                </div>
            )}
        </section>
    );
};

export default BannersCarousel