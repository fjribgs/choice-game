import ActionButton from "../components/ActionButton"
import TextBox from "../components/TextBox"
import NextButton from "../components/NextButton"

export function ContinuePridePrejudice( {setCurrentPage} ) {
    return (
            <div id="continuePridePrejudice"
                className="flex flex-col text-center gap-6 w-screen pb-12 px-3 sm:px-[18px] lg:px-[60px] h-screen py-6 xl:py-11">

                <TextBox>

                    <p>
                        “Now, where was I? The last time I opened this book was two days ago, and the scene where I left off I can’t immediately remember. Oh! Yes! Lydia had just fled with Wickham to marry in Scotland! I remember now. What an unexpected twist, indeed. I am very intrigued in finding out what happens later, especially since Darcy’s politeness during the course has undoubtedly entranced Elizabeth.” said Timmy.
                        <br /><br />
                        CORTEX SYSTEM: “Yes, these electronic signals are very strong, indeed, even for audio. From what I’ve learned, Timmy’s voice is higher pitched as we hear it than how it actually is. And the sight quality as well, hail Hypothalamus! Timmy’s been eating lots of carrots, ey? It’s a shame though, Le Petit Prince has such an interesting cover. No amount of biological persuasion from any neuron, nor me, can convince him to read that yet. Sadly, even I, the brain, have limits. Oh, well, what’s important is that more Axons are occupied by your kin and not Microglia. Despite how jolly he usually is, our physical endowments are not as adaptive as microglias — <NextButton text="they keep growing stronger." onClick={() => setCurrentPage('growingStronger')}/>“
                    </p>

                </TextBox>

                <div className="flex-col flex-1 w-full h-full gap-2.5 hidden">

                    <ActionButton onClick={() => setCurrentPage('continueReadingPridePrejudice')} text="(continue reading)" />

                </div>

            </div>
    )
}