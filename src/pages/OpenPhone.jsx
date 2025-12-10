import ActionButton from "../components/ActionButton"
import NextButton from "../components/NextButton"
import TextBox from "../components/TextBox"

export function OpenPhone( {setCurrentPage} ) {
    return (
            <div id="openPhone"
                className="flex flex-col text-center gap-6 w-screen px-3 sm:px-[18px] pb-12 lg:px-[60px] h-screen py-6 xl:py-11">

                <TextBox>

                    <p>
                        CORTEX SYSTEM: <NextButton onClick={() => setCurrentPage('kickSomeButt')} text='"Is that really how you want Timmy to spend the day?"'/>
                    </p>

                </TextBox>

                <div className="flex flex-col flex-1 w-full h-full gap-2.5">

                </div>

            </div>
    )
}