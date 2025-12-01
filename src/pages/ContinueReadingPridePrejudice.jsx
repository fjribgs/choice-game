import ActionButton from "../components/ActionButton"
import TextBox from "../components/TextBox"

export function ContinueReadingPridePrejudice( {setCurrentPage} ) {
    return (
            <div id="continueReadingPridePrejudice"
                className="flex flex-col text-center gap-6 w-screen px-[18px] lg:px-[60px] h-screen py-6 xl:py-11">

                <TextBox>

                    <p className="text-red-400">
                        [<span className="font-bold">INTERRUPTION</span>] You find yourself opening your phone.
                        <br /> 
                        [<span className="font-bold">CAUTION</span>] YOU BEGIN TO FEEL UNEASY.
                    </p>

                </TextBox>

                <div className="flex flex-col flex-1 w-full h-full gap-2.5">

                    <ActionButton onClick={() => setCurrentPage('findYourselfOpeningPhone')} text="Fight BACK!!!" />

                    <ActionButton onClick={() => setCurrentPage('checkMessages')} text="Just check for text messages." />

                </div>

            </div>
    )
}