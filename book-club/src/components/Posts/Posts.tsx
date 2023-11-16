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
    const effect = 
    
    
    useEffect(() => {
        dispatch(setCurrentYearPosts((params?.year || Math.max(...years))))
    }, [params, dispatch, years])

    const posts = useSelector(selectCurrentPosts);

    return <div className="w-full max-w-600 px-4">
        {posts.map((post, i) => <div id={post.anchor} key={i}><Post data={post}></Post></div>)}
    </div>
}

export default Posts