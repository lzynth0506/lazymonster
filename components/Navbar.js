import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className='border-b-2 p-6 list-none flex items-center justify-between sm:px-12
        md:px-14 lg:px-16'>   
            <div id="logo" className='font-bold sm:text-sm md:text-xl'>   
                lazymonster
            </div>
            <div id="nav-links">
                <li className='sm:text-xs md:text-base'>
                    <Link href="/">
                        <a className='text-red-500'>Main Page</a>
                    </Link>
                </li>
            </div>
        </nav>
    )
}