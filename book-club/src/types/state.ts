type Rating = 'plot' | 'atmosphere' | 'characters' | 'total'
type BookRating = Record<Rating, number>
type ReaderName = 'anya' | 'vera' | 'timur' | 'dima'
type Locale = 'en' | 'ru'
type Readers = Record<ReaderName, ReaderInfo>

interface ReaderInfo {
    promoter?: boolean,
    rating?: BookRating
}

interface Post {
    title: string,
    author: string,
    pics: string[],
    ts_end: string,
    annotation: string,
    quotes: string[],
    emoji: string,
    anchor: string,
    locale?: Locale,
    readers: Readers
}

type State = Record<string, Record<string, Post[]>>
interface PostsStore { 
    posts: State
    currentPosts: Post[],
    years: number[]
 }

export type { State, Post, Readers, Rating, Locale, PostsStore }