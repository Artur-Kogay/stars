import Image from 'next/image';
import Link from 'next/link';
import styles from './ContentCard.module.scss';
import {useTranslations} from "next-intl";

type BaseProps = {
    onClick?: () => void;
};

type ProductCardProps = BaseProps & {
    type: 'product';
    slug: string;
    title: string;
    price: number;
    author: string;
    image?: string;
    new?: boolean;
};

type ArtistCardProps = BaseProps &{
    type: 'artist';
    slug: string;
    name: string;
    description: string;
    image?: string;
};

type Props = ProductCardProps | ArtistCardProps;

const ContentCard = (props: Props) => {
    const localizer = useTranslations();

    if (props.type === 'product') {
        return (
            <Link href={`/product/${props.slug}`}
                  onClick={props.onClick}
                  className={styles.root}>
                {
                    props.new && (
                        <span className={styles.new}>{localizer('newProductBadge')}</span>
                    )
                }

                <div className={styles.imageWrap}>
                    {props.image && (
                        <Image src={props.image} alt={props.title} fill className={styles.image} />
                    )}
                </div>

                <div className={styles.body}>
                    <h3 className={styles.title}>{props.title}</h3>
                    <p className={styles.author}>{props.author}</p>
                    <p className={styles.price}>{props.price} сом</p>
                </div>
            </Link>
        );
    }

    return (
        <Link href={`/artist/${props.slug}`} className={styles.root}>
            <div className={styles.imageWrap}>
                {props.image && (
                    <Image src={props.image} alt={props.name} fill className={styles.image} />
                )}
            </div>

            <div className={styles.body}>
                <h3 className={styles.title}>{props.name}</h3>
                <p className={styles.author}>{props.description}</p>
                <p className={styles.countProducts}>10 товаров</p>
            </div>
        </Link>
    );
};

export default ContentCard;