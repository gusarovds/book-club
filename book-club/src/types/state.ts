interface BookRating {
    plot: number,
    atmosphere: number,
    characters: number,
    total: number
}

type ReaderName = 'anya' | 'vera' | 'timur' | 'dima'
type ReaderField = 'rating' | 'promoter'

interface ReaderInfo {
    promoter?: boolean,
    rating?: BookRating
}


type Readers = Record<ReaderName, ReaderInfo>

interface Post {
    title: string,
    author: string,
    pics: string[],
    ts_end: string,
    annotation: string,
    quotes: string[],
    emoji: string,
    anchor: string,
    locale?: 'en' | 'ru',
    readers: Readers
}

type State = Record<string, Record<string, Post[]>>

export type { State }