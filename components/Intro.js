import Quote from "../pages/api/IntroData";

export default function Intro() {
    return (
        <section className="container mx-auto p-8 sm:px-12 md:px-14 lg:px-16 sm:text-center 
        lg:text-left">
            <h2 className="font-bold text-5xl mb-6 text-red-500">Hello there!</h2>
            {Quote.map(quotes => {
                return (
                    <p className="mb-3" key={quotes.id}>
                        {quotes.firstMsg || quotes.secondMsg}
                    </p>
                )
            })}
        </section>
    )
}