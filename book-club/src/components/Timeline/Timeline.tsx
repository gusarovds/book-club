import { selectCurrentPosts } from "@/store/posts";
import { useSelector } from "react-redux";
import Link from 'next/link'
import { Tooltip as TooltipUi } from '@mui/material'

const Timeline = () => {
    const posts = useSelector(selectCurrentPosts);

    return <div className="flex flex-row-reverse justify-between items-center m-4 h-1 w-10/12 bg-gray-50 rounded mx-auto my-10">
        {posts.map((post, i) => <Link key={i} href={`#${post.anchor}`} className="h-8 w-8 rounded-full bg-gray-50 flex items-center justify-center cursor-pointer text-xl">
            <TooltipUi placement="bottom" title={`${post.author} - ${post.title}`}>
                <span>{post.emoji}</span>
            </TooltipUi>
        </Link>)}
    </div>
}

export default Timeline