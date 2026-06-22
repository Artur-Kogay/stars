'use client';

import styles from './ArtistsSection.module.scss';
import ContentCard from '@/entities/content/ui/ContentCard';
import { useAtomValue } from 'jotai';
import {
    artistsAtom,
    selectedArtistCategoryAtom,
} from '@/shared';

interface ContentSectionProps {
    title?: string;
    searchQuery?: string;
}

const ArtistsSection = ({ title, searchQuery }: ContentSectionProps) => {
    const artists = useAtomValue(artistsAtom);
    const selectedCategory = useAtomValue(selectedArtistCategoryAtom);

    const filteredArtists =
        selectedCategory === 'all'
            ? artists
            : artists.filter(
                (artist) => artist.category === selectedCategory
            );

    if (!filteredArtists.length) return null;

    return (
        <section className={styles.root}>
            {title && (
                <header className={styles.header}>
                    <h2 className={styles.title}>{title}</h2>
                </header>
            )}

            <div className={styles.grid}>
                {filteredArtists.map((item) => (
                    <ContentCard
                        key={item.id}
                        type="artist"
                        name={item.name}
                        description={item.description}
                        image={item.image}
                        slug={item.slug}
                    />
                ))}
            </div>
        </section>
    );
};

export default ArtistsSection;