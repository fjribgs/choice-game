import ActionButton from "../components/ActionButton"
import TextBox from "../components/TextBox"
import NextButton from "../components/NextButton"

export function HaveAPlan( {setCurrentPage} ) {
    return (
        <div className="flex flex-col h-screen text-center w-screen px-3 sm:px-[18px] lg:px-[60px] pb-12 py-6 xl:py-11">

            <TextBox>

                <p>
                    CORTEX SYSTEM: “Despite their savviness in efficient reproducing, Microglia are not very intelligent cells — they don’t even have an external weapon. I would  assume you can swoop past them when 299.999 other neurons come knocking on their door.”
                    <br /><br />
                    DN-1: “You would assume?! Sire, that is unacceptable. That young cell is my kind’s mightiest. Are you sure it would be prudent to risk a life not even half-lived yet on this inauspicious plan?”
                    <br /><br />
                    CORTEX SYSTEM: “DN-1,  one more word and you will be sent to the Astrocyte Isolation Ward.”
                    <br /><br />
                    DN-1: “...”
                    <br /><br />
                    CORTEX SYSTEM: <NextButton text='“Now, where was I?”' onClick={() => setCurrentPage('whereWasI')}/>
                    <div className="h-6"></div>
                </p>

            </TextBox>

            <div className="flex-col flex-1 w-full py-6 gap-2.5 hidden">

            </div>

        </div>
    )
}