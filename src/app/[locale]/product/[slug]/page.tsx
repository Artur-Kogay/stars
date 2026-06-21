'use client';

import styles from './ProductPage.module.scss';
import Image from 'next/image';
import {useAtom} from "jotai";
import {isAsideOpenAtom} from "@/shared";
import {AsideBar} from "@/widgets";
import {useTranslations} from "next-intl";

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
    image: '/images/ex2.png',
};

export default function ProductPage({ params }: ProductPageProps) {
    const [isOpen, setIsOpen] = useAtom(isAsideOpenAtom);
    const product = MOCK_PRODUCT;
    const localizer = useTranslations()

    return (
        <div className={styles.root}>
            <section className={styles.hero}>
                <div className={styles.posterWrap}>
                    <Image
                        src={product.image}
                        alt={product.title}
                        width={600}
                        height={600}
                        className={styles.poster}
                        priority
                    />
                </div>

                <div className={styles.info}>
                    <h1 className={styles.title}>{product.title}</h1>

                    <div className={styles.price}>
                        {product.price.toLocaleString('ru-RU')} сом
                    </div>

                    <p className={styles.author}>Артист: {product.author}</p>

                    {product.description ? (
                        <section className={styles.descriptionSection}>
                            <h2 className={styles.sectionTitle}>{localizer('description')}</h2>
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