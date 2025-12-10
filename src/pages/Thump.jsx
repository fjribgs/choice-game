import ActionButton from "../components/ActionButton"
import TextBox from "../components/TextBox"
import NextButton from "../components/NextButton"

export function Thump( {setCurrentPage} ) {
    return (
        <div id="thump"
            className="flex flex-col h-screen text-center w-screen px-3 sm:px-[18px] lg:px-[60px] pb-12 py-6 xl:py-11">

            <TextBox>

                <p>
                        CORTEX SYSTEM: “Ah, DN-1, perfect timing, we were just discu —
                        <br /><br />
                        DN-1: “SIRE! We lost squadron C-8, and they have taken, with them, approximately two hundred thousand strands!”
                        <br /><br />
                        CORTEX SYSTEM: “WHAT?! THEN WHY WAS THERE NO COMMOTION?? WHAT EVEN HAPPENED?”
                        <br /><br />
                        DN-1: “They were consumed in The Inhibition, sire, it’s reached Sector 7-B. The system won’t notice.”
                        <br /><br />
                        CORTEX SYSTEM: “Vagus, what happened? Can you look into it?”
                        <br /><br />
                        VAGUS NERVE: “According to the latest electrical reports by Optics and Auditory, while their respective stories differ, I can conclude that in addition to manifestation, Timmy was admonished by his big brother.”
                        <br /><br />
                        CORTEX SYSTEM: “You mean, Jasper? Admonishment? In regard to what?!”
                        <br /><br />
                        VAGUS NERVE: “We are not sure, sire. The reports are waving in extra-slow.”
                        <br /><br />
                        CORTEX SYSTEM: “How could this be … NEURONS, I have conceived a plan. I will send half of you against <i>The Inhibition.</i>”
                        <br /><br />
                        DN-1: “HALF?!”
                        <br /><br />
                        CORTEX SYSTEM: “I’m not finished, DN-1. Our newest neuron here will be the only one infiltrating. AND, OH, he will perform a great surprise.”
                        <br /><br />
                        You receive Excitotoxicity explosives.
                        <br /><br />
                        CORTEX SYSTEM: <NextButton text='"Why don’t we nuke them?"' 
                            onClick={() => setCurrentPage('nukeThem')}/>
                        <div className="h-6"></div>
                </p>

            </TextBox>

            <div className="flex-col flex-1 w-full py-6 gap-2.5 hidden">

            </div>

        </div>
    )
}