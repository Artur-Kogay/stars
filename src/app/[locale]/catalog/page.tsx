import styles from './CatalogPage.module.scss'
import {ContentSection} from "@/widgets";
import {Container} from "@/shared";
import {useTranslations} from "next-intl";

function CatalogPage() {
    const localizer = useTranslations()

    return (
        <div className={'py-[24px]'}>
            <Container className={'flex flex-col gap-6'}>
                <div className={styles.title}>
                    <h1>{localizer('catalogPageTitle')}</h1>
                    <h4>{localizer('catalogPageSubtitle')}</h4>
                </div>
                <ContentSection />
            </Container>
        </div>
    );
}

export default CatalogPage;