import ActionButton from "../components/ActionButton"
import TextBox from "../components/TextBox"
import NextButton from "../components/NextButton"

export function HellYeah( {setCurrentPage} ) {
    return (
        <div className="flex flex-col h-screen text-center w-screen px-3 sm:px-[18px] lg:px-[60px] pb-12 py-6 xl:py-11">

            <TextBox>

                <p>
                    Inside, the room is vast and highly organized. At the other end of the room, seated atop a throne made of deceased axons, is the Microglian Leader!!! THAT’S HIM! HE’S BIGGER THAN THE REST!
                    <br /><br />
                    Use the momentum of your lunge, and  <NextButton onClick={() => setCurrentPage('throwTheBomb')} text='throw the bomb!'/>
                    <div className="h-5"></div>
                </p>

            </TextBox>

            <div className="flex-col flex-1 w-full py-6 gap-2.5 hidden">

            </div>

        </div>
    )
}