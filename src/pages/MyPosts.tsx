import React from 'react'
import { Post, User } from '../App'
import ItemRow from '../components/ItemRow'

type Props = {
    posts: Post[]
    setPosts: (posts: Post[]) => void
    currentUser: User 
    
}

export default function MyPosts( { posts, setPosts, currentUser }: Props) {
  return (
    <main className='main'>
        <div className='my-posts'>
            <h1 className='my-posts-h1'>My Posts</h1>
            {posts.reverse().filter(post => post.userId === currentUser.id).map((post) => (
                <ItemRow post={post} setPosts={setPosts}/>
            ))}
        </div>
    </main>
  )
}
