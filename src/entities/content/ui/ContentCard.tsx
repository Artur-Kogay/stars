import Image from 'next/image';
import Link from 'next/link';
import styles from './ContentCard.module.scss';
import {useTranslations} from "next-intl";

interface ProductCardProps {
    type: 'product';
    slug: string;
    title: string;
    price: number;
    author: string;
    image?: string;
    new?: boolean;
    onClick?: () => void;
};

const ContentCard = (props: ProductCardProps) => {
    const localizer = useTranslations();

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
                    <p className={styles.author}>{props.author}</p>
                    <h3 className={styles.title}>{props.title}</h3>
                    <p className={styles.price}>{props.price} сом</p>
                </div>
            </Link>
        );
};

export default ContentCard;