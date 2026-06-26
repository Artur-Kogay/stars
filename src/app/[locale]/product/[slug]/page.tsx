import styles from './ProductPage.module.scss';
import {Container} from "@/shared";
import {ProductSlider} from "@/entities";
import {ProductSlugDetailsContainer} from "@/widgets";
import Image from 'next/image'

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
    images: ['/images/ex10.jpg', '/images/ex8.jpg', '/images/ex9.jpg'],
};

export default async function ProductPage({ params }: ProductPageProps) {
    return (
        <div className={styles.root}>
            <div className={styles.bg}>
                <Image
                    src={'/images/hero5.png'}
                    alt="background"
                    fill
                    priority
                    sizes="100vw"
                    className={styles.lightImg}
                />
                <Image
                    src={'/images/hero4.png'}
                    alt="background"
                    fill
                    priority
                    sizes="100vw"
                    className={styles.darkImg}
                />
            </div>
            <Container className={styles.content}>
            <section className={styles.hero}>
                <ProductSlider products={MOCK_PRODUCT} />
                <ProductSlugDetailsContainer product={MOCK_PRODUCT} />
            </section>
            </Container>
        </div>
    );
}