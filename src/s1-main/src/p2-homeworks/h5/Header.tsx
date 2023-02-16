import React from 'react'
import { Link } from "react-router-dom";
import { PATH } from '../../../../s2-homeworks/hw05/Pages';


function Header() {
    return (
        <div>
        <Link className='link' to={PATH.PRE_JUNIOR}  >Pre-junior</Link>
        <Link className='link' to={PATH.JUNIOR} >Junior</Link>
        <Link className='link' to={PATH.JUNIOR_PLUS} >JuniorPlus</Link>
        </div>
    )
}

export default Header
