import { FC } from 'react'
import PostProps from './Post.types'
import { Heading } from '@/components/Heading'
import Image from 'next/image'
import { Quote } from '@/components/Quote'
import { Rating } from '@/components/Rating'

const Post: FC<PostProps> = ({ data }) => {
    const { title, author, pics, ts_end, annotation, quotes, readers, locale } = data

    return <div className="w-full p-4 bg-white shadow-md rounded-md flex flex-col items-center mb-8">
        <Heading level="h1" text={title}/>
        <Heading level="h2" text={author}/>
        <Image 
            width={300}
            height={300}
            className="my-5 h-auto w-6/12"
            src={pics[0]}
            alt=""
        />
        <p className="text-bold mb-5 font-bold self-end">{ ts_end }</p>
        <p className="self-start text-justify text-xl mb-4" >{ annotation }</p>
        {quotes.map((quote, i) => <div key={i} className="mb-4 self-start"><Quote text={quote}/></div>)}
        <Rating readers={readers} locale={locale || 'ru'} />
    </div>
}

export default Post