import Link from "next/link"

export default function Footer() {
    return (
        <footer className="text-center">
            <div id="first" className="bg-red-600 p-5">
                <Link href="/">
                        <a className="text-white sm:text-sm md:text-lg lg:text-base uppercase
                        underline underline-offset-8">
                        This project is open-source you can actually view this in my github
                        </a>
                </Link>
            </div>
            <div id="last" className="bg-red-500 p-5">
                <span className="text-white sm:text-sm md:text-lg lg:text-base uppercase">
                    &copy; lazymonster&apos;s unofficial by kenneth obsequio all rights reserved.
                </span>
            </div>
        </footer>
    )
}