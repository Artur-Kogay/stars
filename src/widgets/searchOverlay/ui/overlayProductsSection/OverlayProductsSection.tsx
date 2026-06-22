import styles from './OverlayProductsSection.module.scss'

import {ContentCard} from '@/entities';
import { useAtomValue } from 'jotai';
import { productsAtom } from '@/shared';
import {useMemo} from "react";

interface OverlayProductsSectionProps {
    searchQuery?: string;
}

function OverlayProductsSection({searchQuery}: OverlayProductsSectionProps ) {

    const products = useAtomValue(productsAtom);

    if (!products.length) return null;

    const filteredProducts = useMemo(() => {
        if (!searchQuery) return products;

        return products.filter((item) =>
            item.title?.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [products, searchQuery]);

    return (
        <section className={styles.products}>
            {filteredProducts.map((item) => (
                <ContentCard
                    key={item.id}
                    type="product"
                    {...item}
                />
            ))}
        </section>
    );
}

export default OverlayProductsSection;