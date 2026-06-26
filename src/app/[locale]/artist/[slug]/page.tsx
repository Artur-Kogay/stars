import Image from 'next/image';
import styles from './ArtistPage.module.scss';
import {ContentSection} from "@/widgets";
import {useTranslations} from "next-intl";
import clsx from "clsx";
import {Music, Package, Users} from "lucide-react";
import {Container} from "@/shared";

interface ArtistPageProps {
    params: {
        id: string;
    };
}

const MOCK_PRODUCT =     {
    id: 1,
    name: 'Егор Крид',
    description: 'Певец поп-музыки Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod blandit ante non \\nmalesuada. Nunc congue urna id laoreet tempor. Nunc rhoncus nec ante eu dapibus. Sed egestas neque vel \\nvehicula ullamcorper. Phasellus quis accumsan turpis, et condimentum nibh. Sed dignissim diam ex, consectetur \\naliquet lectus feugiat a. Etiam tempor varius massa, sed suscipit nulla. Pellentesque orci est, porta a massa \\nac, pretium pulvinar mi. Praesent ac placerat leo, tempus hendrerit ipsum. Phasellus felis ex, blandit et \\nnibh at, tincidunt gravida est.\\',
    image: '/images/ex3.png',
    category: 'singer',
    slug: 'egor-krid',
}

export default function ArtistPage({ params }: ArtistPageProps) {
    const product = MOCK_PRODUCT;
    const localizer = useTranslations()

    return (
        <div>
            <section className="relative h-[52vh] min-h-[380px] w-full overflow-hidden">
                <img
                    src={'/images/hero.png'}
                    alt="image"
                    className="absolute inset-0 h-full w-full object-cover"
                />
                <div className={clsx(styles.bg, "absolute inset-0 bg-gradient-to-t from-background via-background/70 to-black/40")} />
            </section>
            <section className="mx-auto -mt-28 max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col gap-6 sm:flex-row sm:items-end">
                    <div className={clsx(styles.userAvatar, "relative h-44 w-44 shrink-0 overflow-hidden rounded-3xl shadow-2xl sm:h-52 sm:w-52")}>
                        <Image
                            className={'w-full h-full object-cover'}
                            src={'/images/ex4.jpg'}
                            width={100}
                            height={100}
                            alt={'user photo'} />
                    </div>

                    <div className="pb-2 relative z-10">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              <Music className={'h-4 w-4'} /> Певец
            </span>
                        <h1 className="mt-3 font-heading text-4xl font-bold sm:text-6xl">
                            Егор Крид
                        </h1>
                        <p className="mt-1 text-lg text-muted-foreground">Исполнитель рэпа</p>

                        <div className="mt-4 flex flex-wrap gap-3">
              <span className={clsx(styles.badge, "inline-flex items-center gap-2 rounded-full bg-card px-4 py-2 text-sm")}>
                <Users className="h-4 w-4 text-primary" color={'lab(79.2667 9.96342 51.0155)'}/>
                  1М лайков
              </span>
                            <span className={clsx(styles.badge, "inline-flex items-center gap-2 rounded-full bg-card px-4 py-2 text-sm")}>
                <Package className="h-4 w-4 text-primary" color={'lab(79.2667 9.96342 51.0155)'}/>
                                16 товаров
              </span>
                        </div>
                    </div>
                </div>
            </section>

            <Container>
                <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod blandit ante non \nmalesuada. Nunc congue urna id laoreet tempor. Nunc rhoncus nec ante eu dapibus. Sed egestas neque vel \nvehicula ullamcorper. Phasellus quis accumsan turpis, et condimentum nibh. Sed dignissim diam ex, consectetur \naliquet lectus feugiat a. Etiam tempor varius massa, sed suscipit nulla. Pellentesque orci est, porta a massa \nac
                </p>

            <section className={styles.products}>
                <h2 className={styles.products_title}>{localizer('artistsProductsTitle')}</h2>
                <ContentSection />
            </section>
            </Container>
        </div>
    );
}