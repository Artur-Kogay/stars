import styles from './Home.module.scss'
import {BannersCarousel} from "@/entities";
import {Container} from "@/shared";
import {FilterArtistsList} from "@/features";
import {ArtistsSection, ContentSection} from "@/widgets";
import { useTranslations } from "next-intl";

export default function Home() {
    const localizer = useTranslations();
  return (
      <div className={styles.content}>
        <Container className={'flex flex-col gap-6'}>
          <BannersCarousel />
            <ContentSection title={localizer('productsTitle')}/>
            <FilterArtistsList />
            <ArtistsSection title={localizer('artistsTitle')}/>
        </Container>
      </div>
  );
}
