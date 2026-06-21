import Image from 'next/image';
import styles from './ArtistPage.module.scss';
import {ContentSection} from "@/widgets";
import {useTranslations} from "next-intl";

type ProductPageProps = {
    params: {
        id: string;
    };
};

const MOCK_PRODUCT =     {
    id: 1,
    name: 'Егор Крид',
    description: 'Певец поп-музыки Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod blandit ante non \\nmalesuada. Nunc congue urna id laoreet tempor. Nunc rhoncus nec ante eu dapibus. Sed egestas neque vel \\nvehicula ullamcorper. Phasellus quis accumsan turpis, et condimentum nibh. Sed dignissim diam ex, consectetur \\naliquet lectus feugiat a. Etiam tempor varius massa, sed suscipit nulla. Pellentesque orci est, porta a massa \\nac, pretium pulvinar mi. Praesent ac placerat leo, tempus hendrerit ipsum. Phasellus felis ex, blandit et \\nnibh at, tincidunt gravida est.\\',
    image: '/images/ex3.png',
    category: 'singer',
    slug: 'egor-krid',
}

export default function ArtistPage({ params }: ProductPageProps) {
    const product = MOCK_PRODUCT;
    const localizer = useTranslations()

    return (
        <div className={styles.root}>
            <section className={styles.hero}>
                <div className={styles.posterWrap}>
                    <Image
                        src={product.image}
                        alt={product.image}
                        width={280}
                        height={350}
                        className={styles.poster}
                        priority
                    />
                </div>

                <div className={styles.info}>
                    <span className={styles.info_category}>{product.category}</span>
                    <h1 className={styles.title}>{product.name}</h1>

                    {product.description ? (
                        <section className={styles.descriptionSection}>
                            <h2 className={styles.description}>{product.description}</h2>
                        </section>
                    ) : null}
                </div>
            </section>

            <section className={styles.products}>
                <h2 className={styles.products_title}>{localizer('artistsProductsTitle')}</h2>
                <ContentSection />
            </section>
        </div>
    );
}