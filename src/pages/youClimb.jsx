import ActionButton from "../components/ActionButton"
import TextBox from "../components/TextBox"
import NextButton from "../components/NextButton"

export function YouClimb( {setCurrentPage} ) {
    return (
        <div className="flex flex-col h-screen text-center w-screen px-3 sm:px-[18px] lg:px-[60px] pb-12 py-6 xl:py-11">

            <TextBox>

                <p>
                    This must be the way! There are rustling noises ahead! 
                    <br /><br />
                    <i>(You prepare the Excitotoxicity Bomb)</i>
                    <br /><br />
                    Aha! A fancy door at the end of the Meningeal tunnel, as expected. <NextButton onClick={() => setCurrentPage('throneRoom')} text='This is DEFINITELY the throne room.'/>
                    <div className="h-5"></div>
                </p>

            </TextBox>

            <div className="flex-col flex-1 w-full py-6 gap-2.5 hidden">

            </div>

        </div>
    )
}