import styles from './ArtistCard.module.scss'
import Link from "next/link";
import Image from "next/image";

type ArtistCardProps = {
    type: 'artist';
    slug: string;
    name: string;
    description: string;
    image?: string;
    onClick?: () => void;
};

function ArtistCard({type, slug, name, description, image, onClick}: ArtistCardProps) {
    return (
        <Link href={`/artist/${slug}`} className={styles.artistCard}>
            <span className={styles.new}>{type}</span>
            <img
                src={image}
                alt={name}
                className={styles.artistImage}
            />

            <div className={styles.bottomInfo}>
                <h3 className={styles.bottomName}>{name}</h3>
                <span className={styles.category}>{description}</span>
                <span className={styles.products}>10 товаров</span>
            </div>
        </Link>
    );
}

export default ArtistCard;