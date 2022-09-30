import React, { useEffect, useState } from 'react'
import { BsBookmark, BsFillBookmarkFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { Post } from '../App'
import ItemRow from '../components/ItemRow'
import './savedPosts.css'

type Props = {
    setPosts: (posts: Post[]) => void
}

export default function savedPosts( { setPosts }: Props) {
    const [savedPosts, setSavedPosts] = useState<Post[]>([]);

    useEffect(() => {
        fetch(`http://localhost:4000/savedPosts`)
        .then(r => r.json())
        .then(savedPostsFromServer => setSavedPosts(savedPostsFromServer) )
    }, [])


  return (
    <main className='main'>
        <div className='saved-posts'>
            <h1 className='saved-posts-h1'>Saved Posts</h1>
            {savedPosts.filter(post => post.saved === true).map((post) => (
                <ItemRow post={post} setPosts={setPosts}/>
            ))}
        </div>
    </main>
  )
}
