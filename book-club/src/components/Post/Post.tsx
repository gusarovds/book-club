import { FC } from 'react'
import PostProps from './Post.types'
import { Heading } from '@/components/Heading'
import Image from 'next/image'
import { Quote } from '@/components/Quote'
import { Rating } from '@/components/Rating'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Post: FC<PostProps> = ({ data }) => {
    const { title, author, pics, ts_end, annotation, quotes, readers, locale } = data
    var sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        className: 'my-5 h-auto w-6/12'
      };

    return <div className="w-full p-4 bg-white shadow-md rounded-md flex flex-col items-center mb-8">
        <Heading level="h1" text={title}/>
        <Heading level="h2" text={author}/>
        { pics.length < 2 ? <Image 
            width={300}
            height={300}
            className="my-5 h-auto w-6/12"
            src={pics[0]}
            alt=""
        /> : <Slider {...sliderSettings}>
            {pics.map((pic) => <div key={pic}><Image
                width={300}
                height={300}
                className="h-auto"
                src={pic}
                alt=""
            /></div>)}
        </Slider>}
        <p className="text-bold mb-5 font-bold self-end">{ ts_end }</p>
        <p className="self-start text-justify text-xl mb-4" >{ annotation }</p>
        {quotes.map((quote, i) => <div key={i} className="mb-4 self-start"><Quote text={quote}/></div>)}
        <Rating readers={readers} locale={locale || 'ru'} />
    </div>
}

export default Post