import React from 'react'

export default function Header2() {
  return (
    <header className='header-2'>
        <img src='https://www.merrjep.com/Content/Images/Kosovo/Kosovo.svg' alt='merrjep' width={350}/>
        <div className='header-2-pages'>
            <p>Posts</p>
            <div className='header-2-create-a-post-page'>
                <span>+</span>
                <p>Create a Post</p>
            </div>
        </div>
    </header>
  )
}
