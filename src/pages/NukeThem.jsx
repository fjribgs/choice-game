import ActionButton from "../components/ActionButton"
import TextBox from "../components/TextBox"
import NextButton from "../components/NextButton"

export function NukeThem( {setCurrentPage} ) {
    return (
        <div id="thump"
            className="flex flex-col h-screen text-center w-screen px-3 sm:px-[18px] lg:px-[60px] pb-12 py-6 xl:py-11">

            <TextBox>

                <p>
                    DN-1: “Sire, that is dangerous. Even WE are weak to Excitotoxicity! Have you considered the possibility that the power of Microglia has also negatively affected your sagacity?”
                    <br /><br />
                    CORTEX SYSTEM: “How dare you! Have you not any respect for me, and for your kind’s superior? The presence that instilled incomparable fear within Microglia not twelve hours into his lifetime?! Timmy is on his way to campus as we speak, and I will NOT let Microglia get the best out of his hypervigilance.”
                    <br /><br />
                    You can’t seem to talk. Your exoskeleton has drifted and fully covered your vocal system, leaving your voice trapped inside you for no one to hear.
                    <br /><br />
                    <NextButton text='“…”' onClick={() => setCurrentPage('threeDots')}/>
                    <div className="h-6"></div>
                </p>

            </TextBox>

            <div className="flex-col flex-1 w-full py-6 gap-2.5 hidden">

            </div>

        </div>
    )
}