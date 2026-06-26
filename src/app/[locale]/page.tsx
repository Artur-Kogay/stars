import styles from './Home.module.scss'
import {BannersCarousel} from "@/entities";
import {Container} from "@/shared";
import {FilterArtistsList, GlobalSearchInput} from "@/features";
import {ArtistsSection, ContentSection} from "@/widgets";
import { getTranslations } from "next-intl/server";

interface HomeProps {
    params: {
        locale: string;
    }
}

export default async function Home({params}: HomeProps) {
    const {locale} = params;

    const localizer = await getTranslations({locale});
  return (
      <div className={styles.content}>
        <Container className={'flex flex-col gap-6'}>
          <BannersCarousel />
            <FilterArtistsList />
            <ArtistsSection
                title={localizer('artistsTitle')} />
        </Container>
      </div>
  );
}
