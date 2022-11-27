import Image from "next/image";
import Link from "next/link";
import { GridData } from "../pages/api/GridData";

export default function Grid() {
    return (
        <section className="container mx-auto p-8 sm:px-12 md:px-14 lg:px-16 sm:text-center 
        lg:text-left">
            <div id="grid-header">
                <h2 className="font-bold text-5xl mb-6 text-red-500">My Projects</h2>
                <p className="mb-6">So this is my project I&apos;ve been made within my learning progress</p>
            </div>
            <div id="grid-content" className="grid grid-cols-1 gap-8 lg:grid-cols-2 
            md:grid-cols-2">
                {GridData.map(grid => {
                    return (
                        <Link href={grid.link} key={grid.id}>
                            <a target={"_blank"}>
                                <Image src={grid.path}
                                    className="rounded-lg" 
                                    layout="responsive" 
                                    objectFit='cover'
                                    width="100%" 
                                    height="50%"
                                    alt=""
                                />
                                <h2 className="font-bold mt-3 text-xl">{grid.title}</h2>
                            </a>
                        </Link>
                    )
                })}
            </div>
        </section>
    )
}