'use client';

import styles from './ContentSection.module.scss';
import {ContentCard} from '@/entities';
import { useAtomValue } from 'jotai';
import { productsAtom } from '@/shared';
import {useMemo} from "react";

interface ContentSectionProps {
    title?: string;
}

const ContentSection = ({ title }: ContentSectionProps) => {
    const products = useAtomValue(productsAtom);

    if (!products.length) return null;

    return (
        <section className={styles.root}>
            {title && (
                <header className={styles.header}>
                    <h2 className={styles.title}>{title}</h2>
                </header>
            )}

            <div className={styles.grid}>
                {products.map((item) => (
                    <ContentCard
                        key={item.id}
                        type="product"
                        {...item}
                    />
                ))}
            </div>
        </section>
    );
};

export default ContentSection;