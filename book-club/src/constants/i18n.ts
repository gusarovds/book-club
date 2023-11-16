import { Rating, Locale } from '@/types/state'

const RATING_TYPE_TO_HUMAN_READABLE: Record<Rating, Record<Locale, string>> = {
    plot: {
        'ru': 'Сюжет',
        'en': 'Plot'
    },
    atmosphere: {
        'ru': 'Aтмосфера',
        'en': 'Atmosphere'
    },
    characters: {
        'ru': 'Персонажи',
        'en': 'Characters'
    },
    total: {
        'ru': 'Общая оценка',
        'en': 'Total'
    }
};

export { RATING_TYPE_TO_HUMAN_READABLE }