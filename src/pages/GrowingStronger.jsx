import ActionButton from "../components/ActionButton"
import TextBox from "../components/TextBox"
import NextButton from "../components/NextButton"

export function GrowingStronger( {setCurrentPage} ) {
    return (
            <div id="continuePridePrejudice"
                className="flex flex-col text-center gap-6 w-screen px-[18px] lg:px-[60px] h-screen py-6 xl:py-11">

                <TextBox>

                    <p>
                       [INTERRUPTION] [INTERRUPTION] [INTERRUPTION]
                       <br /><br />
                        [CAUTION] MICROGLIA SWARM ON Sector 12-B … TIMMY IS OPENING HIS PHONE. 
                        <br /><br />
                        CORTEX SYSTEM: “See?”
                        <br /><br />
                        You receive an Acetylcholine gun.
                        <br /><br />
                        CORTEX SYSTEM: “That is our best in armory. We have created not more than a dozen of them. Shoot them vexing bastards and help the Axons to force the HPA Axis to abort the emotion of stress and worry from reaching me; the brain. Make our Timmy happy.”
                        <br /><br />
                        …
                        <br /><br />
                        CORTEX SYSTEM: “Well, then, go ahead! I can’t come with you, of course, I have to stay here. Dopaminergic Neuron No.1  will be squad leader for now. You’ll be, in the next. Jog on then! <NextButton onClick={() => setCurrentPage('breakALeg')} text="Break a leg!" />"
                    </p>

                </TextBox>

                <div className="hidden flex-col flex-1 w-full h-full gap-2.5">

                    <ActionButton onClick={() => setCurrentPage('continueReadingPridePrejudice')} text="(continue reading)" />

                </div>

            </div>
    )
}