import {MdOutlineInsertComment} from 'react-icons/md'
import {AiOutlineHeart} from 'react-icons/ai'
import {BsBag} from 'react-icons/bs'
import { useState } from 'react'
import { User } from '../App'



export default function Header1() {

  return (
    <header className='header-1'>
        <div className='header-1-icons'>
            <MdOutlineInsertComment />
            <AiOutlineHeart />
            <BsBag />
        </div>
        <div className='header-1-user'>

        </div>
    </header>
  )
}
