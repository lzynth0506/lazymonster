import Image from 'next/image'

export default function Hero() {
    return (
        <header className="container mx-auto p-8 md:flex md:items-center md:justify-between
        sm:px-12 md:px-14 lg:px-16 sm:text-center lg:text-left">
            <div id="right-handed" className="sm:order-last lg:order-2">
                <Image src="/assets/flex.svg" width={540} height={540} alt="" />
            </div>
            <div id="left-handed" className="sm:order-1">
                <h2 className='text-red-500 font-bold text-5xl md:text-6xl lg:text-7xl mb-6'>I&apos;m very lazy</h2>
                <p className='text-md mb-3 sm:max-w-full lg:max-w-lg'>I&apos;m lazy and tired, but anyway, 
                this is a good reason to making you more sarcastic as the way you did</p>
                <span className='font-bold uppercase'>
                Scroll Down
                </span>
            </div>
        </header>
    )
}