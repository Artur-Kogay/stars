'use client';

import { useAtom } from 'jotai';
import { IoClose } from 'react-icons/io5';

import styles from './AsideBar.module.scss';
import {isAsideOpenAtom, LabelInput} from '@/shared';
import Image from "next/image";
import {FormSendDataUserForPay} from "@/features";
import {useTranslations} from "next-intl";

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
                        <div>
                            <h4>Nike Aif Force 1</h4>
                            <p>12990 сом</p>
                        </div>
                    </div>
                </div>
                <hr className={styles.divider}/>

                <div className={styles.body}>
                    <FormSendDataUserForPay />
                </div>

                <div className={styles.footer}>
                    <hr className={styles.divider}/>
                    <div className={styles.footer_price}>
                        <h3>{localizer('totalToPay')}</h3>
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