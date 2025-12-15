import ActionButton from "../components/ActionButton"
import TextBox from "../components/TextBox"
import NextButton from "../components/NextButton"

export function OhGreatQuest( {setCurrentPage} ) {
    return (
        <div className="flex flex-col h-screen text-center w-screen px-3 sm:px-[18px] lg:px-[60px] pb-12 py-6 xl:py-11">
                    <TextBox>
                        <button onClick={() => setCurrentPage('bedroom')}
                            className="w-full h-full items-center">

                            <img src="images/ohGreatQuest.jpeg" className="object-cover cursor-pointer w-full h-full"/>

                        </button>
                    </TextBox>

                    <div className="flex-col flex-1 w-full py-6 gap-2.5 hidden">

                    </div>
                </div>
    )
}