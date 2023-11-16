'use client'
import { Post } from '@/components/Post'
import { selectCurrentPosts, setCurrentYearPosts, selectYears } from "@/store/posts";
import { useSelector } from "react-redux";
import { useParams } from 'next/navigation'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const Posts = () => {
    const params = useParams();
    const years = useSelector(selectYears);
    const dispatch = useDispatch();
    
    
    useEffect(() => {
        dispatch(setCurrentYearPosts((params?.year || Math.max(...years))))
    }, [params])

    const posts = useSelector(selectCurrentPosts);

    return <div>
        {posts.map((post, i) => <div id={post.anchor} key={i}><Post data={post}></Post></div>)}
    </div>
}

export default Posts