import ActionButton from "../components/ActionButton"
import NextButton from "../components/NextButton"
import TextBox from "../components/TextBox"

export function StartLePetitPrince( {setCurrentPage} ) {
    return (
            <div id="startLePetitPrince"
                className="flex flex-col text-center gap-6 w-screen px-[18px] lg:px-[60px] h-screen py-6 xl:py-11">

                <TextBox>

                    <p>
                        “Eh, I don’t think I’d want to start something new today...”, said Timmy
                        <br /><br />
                        CORTEX SYSTEM: This voice that we’re hearing, it’s Timmy’s inner monologue. That’s why he’s so wordy and expressive with everything. In reality, he’s somewhat of a shy lad. He’s also indecisive, so don’t knock on yourself too much when he keeps changing his mind. If anything, it’s a good sign because he knows what he wants, and he wants to read Pride and Prejudice. It’s pretty simple. <NextButton text="Got it?" onClick={() => setCurrentPage('readBook')} />
                    </p>

                </TextBox>

                <div className="flex flex-col flex-1 w-full h-full gap-2.5">

                </div>

            </div>
    )
}