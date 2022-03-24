import { FinalData } from "../pages/api/FinalData"

export default function Final() {
    return (
        <section className="container mx-auto p-8 sm:px-12 md:px-14 lg:px-16 sm:text-center 
        lg:text-left">
            <h2 className="font-bold text-5xl mb-6 text-red-500">For my end marks</h2>
            {FinalData.map(finale => {
                return (
                    <p className="mb-3" key={finale.id}>
                        {finale.thirdMsg || finale.fourthMsg}
                    </p>
                )
            })}
        </section>
    )
}