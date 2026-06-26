'use client';

import styles from './ProductSlugDetailsContainer.module.scss';
import {ChooseDetailBtn, CLOTHES_SIZES, isAsideOpenAtom} from '@/shared';
import { useTranslations } from 'next-intl';
import { Check } from 'lucide-react';
import { useAtom } from 'jotai';
import {IProductSlugDetails} from "../../lib";
import {Counter} from "@/features";
import {AsideBar} from "@/widgets";
import {paymentDataGatewayAtom} from '@/entities'
import {useEffect} from "react";

interface ProductSlugDetailsContainerProps extends IProductSlugDetails {}

const ProductSlugDetailsContainer = ({ product }: ProductSlugDetailsContainerProps) => {
    const localizer = useTranslations();
    const [_, setIsAsideOpen] = useAtom(isAsideOpenAtom);
    const [paymentDataGateway, setPaymentDataGateway] = useAtom(paymentDataGatewayAtom)

    useEffect(() => {
        setPaymentDataGateway({...paymentDataGateway, size: CLOTHES_SIZES[0].text})
    }, []);

    return (
        <>
            <AsideBar
                productName={product.title}
                productCount={paymentDataGateway.count}
                productPrice={product.price}
                productSize={paymentDataGateway?.size}/>
        <div className={styles.info}>
            <span className={styles.new}>{product.author}</span>

            <h1 className={styles.title}>{product.title}</h1>

            <div className={styles.price}>
                {product?.price.toLocaleString('ru-RU')} сом
            </div>

            {product?.description && (
                <section className={styles.descriptionSection}>
                    <p className={styles.description}>
                        {product.description}
                    </p>
                </section>
            )}

            <section className={styles.sizes}>
                <h3>Выберите размер</h3>
                <div className={styles.sizes_btns}>
                    {CLOTHES_SIZES.map(({ text, id }) => (
                        <ChooseDetailBtn
                            onClick={() => setPaymentDataGateway({...paymentDataGateway, size: text})}
                            active={paymentDataGateway.size === text}
                            key={id}>
                            {text}
                        </ChooseDetailBtn>
                    ))}
                </div>
            </section>

            <div className={styles.btns}>
                <Counter
                    count={Number(paymentDataGateway.count)}
                    setCount={(value) =>
                        setPaymentDataGateway(prev => ({
                            ...prev,
                            count: value
                        }))
                    }
                />

                <button
                    className={styles.buyButton}
                    onClick={() => setIsAsideOpen(true)}
                >
                    {localizer('buy')}
                </button>
            </div>

            <section className={styles.additionalInfo}>
                <div>
          <span>
            <Check size={18} />
          </span>
                    <p>Премиальные материалы</p>
                </div>

                <div>
          <span>
            <Check size={18} />
          </span>
                    <p>Официальный лицензированный мерч</p>
                </div>

                <div>
          <span>
            <Check size={18} />
          </span>
                    <p>Доставка по всей стране</p>
                </div>

                <div>
          <span>
            <Check size={18} />
          </span>
                    <p>Качество товара</p>
                </div>
            </section>
        </div>
        </>
    );
};

export default ProductSlugDetailsContainer;