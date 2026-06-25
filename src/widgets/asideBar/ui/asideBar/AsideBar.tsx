'use client';

import { useAtom } from 'jotai';
import { IoClose } from 'react-icons/io5';
import styles from './AsideBar.module.scss';
import {isAsideOpenAtom, LabelInput} from '@/shared';
import Image from "next/image";
import {FormSendDataUserForPay} from "@/features";
import {useTranslations} from "next-intl";
import { ReceiptText, UserRound } from "lucide-react";

const AsideBar = () => {
    const [isOpen, setIsOpen] = useAtom(isAsideOpenAtom);
    const localizer = useTranslations()
    const onClose = () => setIsOpen(false);

    return (
        <>
            <div
                className={`${styles.overlay} ${isOpen ? styles.overlayOpen : ''}`}
                onClick={onClose}
            />

            <aside
                className={`${styles.panel} ${isOpen ? styles.panelOpen : ''}`}
                aria-hidden={!isOpen}
            >
                <div className={styles.header}>
                    <div className={styles.header__top}>
                        <h2>{localizer('checkoutTitle')}</h2>
                        <button
                            type="button"
                            className={styles.close}
                            onClick={onClose}
                            aria-label="close"
                        >
                            <IoClose size={24} />
                        </button>
                    </div>

                    <h4>{localizer('checkoutSubtitle')}</h4>

                    <div className={styles.productInfo}>
                        <Image src={'/images/ex8.jpg'}
                               alt={'product image'}
                               width={100}
                               height={100}
                               priority/>
                        <div className={styles.productInfo_textInfo}>
                            <h4>Nike Aif Force 1</h4>
                            <p>12990 сом</p>
                            <div>
                                <p>Размер: XS</p>
                                <p>Количество: 1шт.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <section className={styles.form}>
                    <div className={styles.form_title}>
                            <UserRound size={18} color={'lab(79.2667 9.96342 51.0155)'}/>
                        <h2>Контактные данные</h2>
                    </div>
                    <div className={styles.body}>
                        <FormSendDataUserForPay />
                    </div>
                </section>

                <div className={styles.footer}>
                    <div className={styles.footer_price}>
                        <div>
                            <ReceiptText size={18} color={'lab(79.2667 9.96342 51.0155)'}/>
                            <h3>{localizer('totalToPay')}</h3>
                        </div>
                        <h2>12990 сом</h2>
                    </div>
                    <div className={styles.footer_btns}>
                        <button
                            className={styles.payBtn}
                            form={'payment-form'}>
                            {localizer('pay')}
                        </button>
                    </div>
                </div>
            </aside>
        </>
    );
};

 export default AsideBar;