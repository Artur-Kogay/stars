import { type Banner } from '../../api/schemas';

export interface IBannersCarousel {
    banners: Banner[];
    variant?: 'main' | 'strip';
}
