import ActionButton from "../components/ActionButton"
import TextBox from "../components/TextBox"
import NextButton from "../components/NextButton"

export function ThrowTheBomb( {currentPage, setCurrentPage} ) {
    if (currentPage === 'throwTheBomb') {
        return (
            <div className="flex flex-col h-screen text-center w-screen px-3 sm:px-[18px] lg:px-[60px] pb-12 py-6 xl:py-11">

                <TextBox>

                    <p>
                        <NextButton onClick={() => setCurrentPage('throwTheBomb2')} text='“...”'/>
                        <div className="h-5"></div>
                    </p>

                </TextBox>

                <div className="flex-col flex-1 w-full py-6 gap-2.5 hidden">

                </div>

            </div>
        )
    }

    if (currentPage === 'throwTheBomb2') {
        return (
            <div className="flex flex-col h-screen text-center w-screen px-3 sm:px-[18px] lg:px-[60px] pb-12 py-6 xl:py-11">

                <TextBox>

                    <p>
                        A blinding flash of white light gleamed from the cracks of the door you closed behind you.
                        <br /><br />
                        KAPOWWW!!
                        <br /><br />
                        That will show ‘em, <NextButton onClick={() => setCurrentPage('throwTheBomb3')} text='HAHA!'/>
                        <div className="h-5"></div>
                    </p>

                </TextBox>

                <div className="flex-col flex-1 w-full py-6 gap-2.5 hidden">

                </div>

            </div>
        )
    }

    if (currentPage === 'throwTheBomb3') {
        return (
            <div className="flex flex-col h-screen text-center w-screen px-3 sm:px-[18px] lg:px-[60px] pb-12 py-6 xl:py-11">

                <TextBox>

                    <p>
                        <i>(HAHAHAHAHAAHAHAHAHAHAAHAHA) </i>
                        <br /><br />
                        … Huh?
                        <br /><br />
                        <i>(HAHAHAHAHAHAHAHAHAHAHAAHAHAHAHAHAHAHAAHAHA)</i>
                        <br /><br />
                        … What is that?
                        <div className="h-5"></div>
                    </p>

                </TextBox>

                <div className="flex-col flex-1 w-full py-6 gap-2.5 flex">

                    <ActionButton text='Open the door'
                        onClick={() => setCurrentPage('openTheDoor')}/>

                </div>

            </div>
        )
    }
}