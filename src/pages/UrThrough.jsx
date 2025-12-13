import ActionButton from "../components/ActionButton"
import TextBox from "../components/TextBox"
import NextButton from "../components/NextButton"

export function UrThrough( {setCurrentPage} ) {
    return (
        <div className="flex flex-col h-screen text-center w-screen px-3 sm:px-[18px] lg:px-[60px] pb-12 py-6 xl:py-11">

            <TextBox>

                <p>
                    Woah … It’s surprisingly voidlike beyond the mega-Microglia swarm. It appears that nearly their entire army is chiefly engrossed by the one-dimensional attack. How fortunate! Perhaps haughtiness and high intelligence are inextricable after all — the Brain’s plan worked splendidly. It’s probably best to advance immediately before they notice, as these Microglia feel way stronger than any that has been encountered before.
                    <br /><br />
                    You traverse more and more east-toward with perceivably less and less roaming Microglia. Is performing stealth even essential at this point? Instead, most of what’s accompanying the silent air are corrupted Axon remains, and even some deceased Microglia remnants. 
                    <br /><br />
                    <NextButton onClick={() => setCurrentPage('whatHappened')} text='What happened here?'/>
                    <div className="h-5"></div>
                </p>

            </TextBox>

            <div className="flex-col flex-1 w-full py-6 gap-2.5 hidden">

            </div>

        </div>
    )
}