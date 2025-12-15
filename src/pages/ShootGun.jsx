import ActionButton from "../components/ActionButton"
import TextBox from "../components/TextBox"
import NextButton from "../components/NextButton"

export function ShootGun( {setCurrentPage} ) {
    return (
        <div id="bedroom"
            className="flex flex-col h-screen text-center w-screen px-3 sm:px-[18px] lg:px-[60px] pb-12 py-6 xl:py-11">

            <TextBox>

                <p>
                    The strand was chiefly abandoned by the Microglia upon the mere sight of the two of you, allowing for it to be occupied. You thank DN-1 for his backup.
                    <br /><br />
                    DN-1: “Cute. You think that was because of me?? They ran away because they saw you! You didn’t even get to shoot your Acetylcholine, HAHA! Don’t dwell on it too much though. Timmy was just confused, probably. We’ll be appointed to more exciting battles soon. Why don’t we fill these seats, get Timmy to start focusing on his reading <NextButton onClick={() => setCurrentPage('haughtyCortex')} text=" and get back to that ol’ haughty Cortex, ey?”"/>
                </p>

            </TextBox>

            <div className="flex-col flex-1 w-full py-6 gap-2.5 hidden">

            </div>

        </div>
    )
}