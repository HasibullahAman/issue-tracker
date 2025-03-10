'use client'
import React from 'react'
import Link from 'next/link'
import { FaBug } from "react-icons/fa";
import { usePathname } from 'next/navigation';
import classnames from 'classnames';

const NavBar = () => {
    const currentpath = usePathname();
    const links = [
        {
            label: 'Dashboard',
            href: "/"
        },
        {
            label: "issue",
            href: "/issues"
        }
    ]
    return (
        <nav className='flex space-x-8 h-14 border-b mb-5 px-5 items-center'>
            <Link href="/"><FaBug /></Link>
            <ul className='flex space-x-6'>
                {links.map(links =>
                    <Link
                        key={links.label}
                        className={classnames({
                            'text-zinc-900': links.href === currentpath,
                            'text-zinc-500': links.href !== currentpath,
                            'hover:text-zinc-800 transition-colors': true,
                        })}
                        href={links.href}>
                        {links.label}
                    </Link>
                )}
            </ul>
        </nav >
    )
}

export default NavBar
