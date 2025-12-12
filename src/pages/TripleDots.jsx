import ActionButton from "../components/ActionButton"
import TextBox from "../components/TextBox"
import NextButton from "../components/NextButton"

export function TrippleDots( {setCurrentPage} ) {
    return (
        <div id="threeDots"
            className="flex flex-col h-screen text-center w-screen px-3 sm:px-[18px] lg:px-[60px] pb-12 py-6 xl:py-11">

            <TextBox>

                <p>
                    CORTEX SYSTEM: “Neuron! It is rumored that behind the walls of Microglia, they have formed their own acquired hierarchy. Yes, it means that they have a newly kinged Microglian Leader. With coordinated Axon infiltrations such as the one you saw, I am sure that it was his doing. Thus, I am more than certain that his annihilation will be of the telos. How will we get to him, you ask? HAHA!  <NextButton text='I have a plan”' onClick={() => setCurrentPage('haveAPlan')}/>
                    <div className="h-6"></div>
                </p>

            </TextBox>

            <div className="flex-col flex-1 w-full py-6 gap-2.5 hidden">

            </div>

        </div>
    )
}