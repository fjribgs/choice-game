import ActionButton from "../components/ActionButton"
import TextBox from "../components/TextBox"
import NextButton from "../components/NextButton"

export function HaughtyCortex( {setCurrentPage} ) {
    return (
        <div id="bedroom"
            className="flex flex-col h-screen text-center w-screen px-3 sm:px-[18px] lg:px-[60px] pb-12 py-6 xl:py-11">

            <TextBox>

                <p>
                    CORTEX SYSTEM: “TAKE THAT BASTARDS, HAHAHA!”
                    <br /><br />
                    …
                    <br /><br />
                    CORTEX SYSTEM: “I’m sorry, do you have anything to say, DN?”
                    <br /><br />
                    You report your findings.
                    <br /><br />
                    CORTEX SYSTEM: “I see … The Microglia you exclusively attacked didn’t bring guns of their own, and instead attempted to flee and bring the Axons with them? <NextButton onClick={() => setCurrentPage('haughtyCortex')} text="Why?”"/>
                </p>

            </TextBox>

            <div className="flex-col flex-1 w-full py-6 gap-2.5 hidden">

            </div>

        </div>
    )
}