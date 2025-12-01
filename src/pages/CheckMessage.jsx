import ActionButton from "../components/ActionButton"
import TextBox from "../components/TextBox"

export function CheckMessages( {setCurrentPage} ) {
    return (
            <div id="checkMessages"
                className="flex flex-col text-center gap-6 w-screen px-[18px] lg:px-[60px] h-screen py-6 xl:py-11">

                <TextBox>

                    <p>
                        You have received none.
                    </p>

                </TextBox>

                <div className="flex flex-col flex-1 w-full h-full gap-2.5">

                    <ActionButton onClick={() => setCurrentPage('findYourselfOpeningPhone')} text="(continue reading)" />

                </div>

            </div>
    )
}