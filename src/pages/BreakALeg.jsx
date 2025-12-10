import ActionButton from "../components/ActionButton"
import TextBox from "../components/TextBox"
import NextButton from "../components/NextButton"

export function BreakALeg( {setCurrentPage} ) {
    return (
            <div id="continuePridePrejudice"
                className="flex flex-col text-center gap-6 w-screen pb-12 px-3 sm:px-[18px] lg:px-[60px] h-screen py-6 xl:py-11">

                <TextBox>

                    <p>
                        Without any further preparation or briefing, Dopaminergic Neuron No. 1 immediately accelerates east-toward. He has an inscription on his back that says “DN-1”. The Corpus Callosum in this elevated Mesolimbic makes travel so much easier, almost at the speed of a Nociceptive Signal! The travel took no more than twenty milliseconds. Although — as it turns out — Sector 12-B was far from <i>The Inhibition</i>, Microglia are abundant nonetheless. Many axon strands were floating around, as if Timmy was begging for inner guidance.
                        <br /><br />
                        DN-1: <NextButton text='"ROLL OUT!"' onClick={() => setCurrentPage('rollOut')}/>
                    </p>

                </TextBox>

                <div className="hidden flex-col flex-1 w-full h-full gap-2.5">

                    <ActionButton onClick={() => setCurrentPage('continueReadingPridePrejudice')} text="(continue reading)" />

                </div>

            </div>
    )
}