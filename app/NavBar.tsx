import React from 'react'
import Link from 'next/link'
import { FaBug } from "react-icons/fa";

const NavBar = () => {
    const links = [
        {
            label: 'Dashboard',
            href: "/"
        },
        {
            label: "issue",
            href: "/issue"
        }
    ]
    return (
        <nav className='flex space-x-8 h-14 border-b mb-5 px-5 items-center'>
            <Link href="/"><FaBug /></Link>
            <ul className='flex space-x-6'>
                {links.map(links =>
                    <Link
                        key={links.label}
                        className='text-zinc-500 hover:text-zinc-800 transition-colors'
                        href={links.href}>
                        {links.label}
                    </Link>
                )}
            </ul>
        </nav>
    )
}

export default NavBar
