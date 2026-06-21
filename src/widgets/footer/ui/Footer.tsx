import { LifeBuoy, Mail, MapPin, MessageCircle, Phone, Send } from 'lucide-react';
import styles from './Footer.module.scss';
import {SwitchThemeBtn} from "@/shared";
import {useTranslations} from "next-intl";

export const Footer = () => {
    const year = new Date().getFullYear();
    const localizer = useTranslations()

    return (
        <footer className={styles.root}>
            <div className={styles.inner}>
                <div className={styles.grid}>

                    <div className={styles.brandCol}>
                        <span className={styles.brandName}>Stars</span>
                        <p className={styles.tagline}>Лучший маркетплейс товаров от артистов</p>

                        <div className={styles.socials}>
                            <a href="#" className={styles.socialBtn} aria-label="Instagram">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <rect x="2" y="2" width="20" height="20" rx="5" />
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37z" />
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                </svg>
                            </a>

                            <a href="#" className={styles.socialBtn} aria-label="Telegram">
                                <Send size={18} />
                            </a>

                            <a href="#" className={styles.socialBtn} aria-label="Support">
                                <MessageCircle size={18} />
                            </a>
                        </div>
                    </div>

                    <div className={styles.col}>
                        <h3 className={styles.colTitle}>{localizer('navigation')}</h3>
                        <ul className={styles.linkList}>
                            <li><a className={styles.link} href="#">Главная</a></li>
                            <li><a className={styles.link} href="#">Каталог</a></li>
                            <li><a className={styles.link} href="#">Артисты</a></li>
                            <li><a className={styles.link} href="#">События</a></li>
                        </ul>
                    </div>

                    <div className={styles.col}>
                        <h3 className={styles.colTitle}>{localizer('help')}</h3>
                        <ul className={styles.linkList}>
                            <li><a className={styles.link} href="#">Доставка</a></li>
                            <li><a className={styles.link} href="#">Оплата</a></li>
                        </ul>
                    </div>

                    <div className={styles.col}>
                        <h3 className={styles.colTitle}>{localizer('contacts')}</h3>

                        <ul className={styles.linkList}>
                            <li className={styles.contactItem}>
                                <MapPin size={16} />
                                <span>Бишкек, Кыргызстан</span>
                            </li>

                            <li className={styles.contactItem}>
                                <Phone size={16} />
                                <a className={styles.link} href="tel:+996700000000">
                                    +996 700 000 000
                                </a>
                            </li>

                            <li className={styles.contactItem}>
                                <Mail size={16} />
                                <a className={styles.link} href="mailto:support@mail.com">
                                    support@mail.com
                                </a>
                            </li>

                            <li className={styles.contactItem}>
                                <LifeBuoy size={16} />
                                <a className={styles.link} href="#">
                                    Поддержка
                                </a>
                            </li>
                        </ul>
                        <SwitchThemeBtn />
                    </div>
                </div>

                <div className={styles.bottom}>
                    <span>© ОсОО "Билет Онлайн" {year}</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;