import { FaPizzaSlice, FaHamburger } from 'react-icons/fa'
import { GiNoodles, GiAfrica } from 'react-icons/gi'
import React from 'react'
import {NavLink} from 'react-router-dom'

export default function Category() {
    return (
        <div className='list'>
            <NavLink to={'/cuisine/Italian'}>
                <FaPizzaSlice />
                <h4>Italian</h4>
            </NavLink>
            <NavLink to={'/cuisine/American'}>
                <FaHamburger />
                <h4>American</h4>
            </NavLink>
            <NavLink to={'/cuisine/Thai'}>
                <GiNoodles />
                <h4>Thai</h4>
            </NavLink>
            <NavLink to={'/cuisine/African'}>
                <GiAfrica />
                <h4>African</h4>
            </NavLink>
        </div>
    )
}

