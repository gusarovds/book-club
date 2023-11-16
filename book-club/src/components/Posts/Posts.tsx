import { Post } from '@/components/Post'
import { selectCurrentPosts } from "@/store/posts";
import { useSelector } from "react-redux";

const Posts = () => {
    const posts = useSelector(selectCurrentPosts);

    return <div>
        {posts.map((post, i) => <div key={i}><Post data={post}></Post></div>)}
    </div>
}

export default Posts