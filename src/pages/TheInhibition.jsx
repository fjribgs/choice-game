import ActionButton from "../components/ActionButton"
import TextBox from "../components/TextBox"
import NextButton from "../components/NextButton"

export function TheInhibition( {
    currentPage, 
    setCurrentPage, 
    isDriftUpwardVisited,
    setIsDriftUpwardVisited, 
    isDriftDownwardVisited, 
    setIsDriftDownwardVisited,
    isDriftLaterallyVisited,
    setIsDriftLaterallyVisited} ) {

        if (currentPage === 'theInhibition') {
            return (
                <div className="flex flex-col h-screen text-center w-screen px-3 sm:px-[18px] lg:px-[60px] pb-12 py-6 xl:py-11">

                    <TextBox>
                        <button onClick={() => setCurrentPage('theInhibition2')}
                            className="w-full h-full items-center">

                            <img src="images/theInhibition.jpeg" alt="The Inhibition" className="object-cover cursor-pointer w-full h-full"/>

                        </button>
                    </TextBox>

                    <div className="flex-col flex-1 w-full py-6 gap-2.5 hidden">

                    </div>
                </div>
            )
        }

        if (currentPage === 'theInhibition2') {
            return (
                <div id="lmao"
                    className="flex flex-col text-center pb-12 gap-6 w-screen px-3 sm:px-[18px] lg:px-[60px] h-screen py-6 xl:py-11">

                    <TextBox>

                        <p className={`${isDriftUpwardVisited && isDriftDownwardVisited ? "hidden" : ""}`}>
                            <span className={`${isDriftUpwardVisited || isDriftDownwardVisited ? "hidden" : ""}`}>
                                Without any tactical preparatory shouts, the two factions clashed for control of Timmy’s Mesolimbic. 
                                <br /><br />
                            </span>
                            
                            Quickly, find a breach point!
                        </p>

                        <p className={`${isDriftUpwardVisited && isDriftDownwardVisited ? "" : "hidden"}`}>
                            Scanning the breach’s surface revealed no conducive path through.
                        </p>

                    </TextBox>

                    <div className="flex flex-col flex-1 w-full h-full gap-2.5">

                        <div className={`${isDriftUpwardVisited ? "hidden" : ""}`}>
                            <ActionButton text='Drift upward' 
                            onClick={() => {
                                setCurrentPage('driftUpward');
                                setIsDriftUpwardVisited(true);
                            }}/>
                        </div>
                        
                        <div className={`${isDriftDownwardVisited ? "hidden" : ""}`}>
                            <ActionButton text='Drift downward' 
                            onClick={() => {
                                setCurrentPage('driftDownward');
                                setIsDriftDownwardVisited(true);
                            }}/>
                        </div>

                        <div className={`${isDriftUpwardVisited && isDriftDownwardVisited ? "" : "hidden"}
                        ${isDriftLaterallyVisited ? "hidden" : ""}`}>
                            <ActionButton text='Drift laterally' 
                            onClick={() => {
                                setCurrentPage('driftLaterally');
                                setIsDriftLaterallyVisited(true);
                            }}/>
                        </div>

                        <div className={`${isDriftUpwardVisited && isDriftDownwardVisited ? "" : "hidden"}`}>
                            <ActionButton text='Drift ahead' 
                            onClick={() => {
                                setCurrentPage('driftAhead');
                            }}/>
                        </div>

                    </div>

                </div>
            )
        }

        if (currentPage === 'driftUpward') {
            return (
                <div id="lmao"
                    className="flex flex-col text-center pb-12 gap-6 w-screen px-3 sm:px-[18px] lg:px-[60px] h-screen py-6 xl:py-11">

                    <TextBox>

                        <p>
                            EW!!! Microglia blood … <NextButton text='GROSS!' onClick={() => setCurrentPage('theInhibition2')}/>
                        </p>

                    </TextBox>

                    <div className="hidden flex-col flex-1 w-full h-full gap-2.5">

                    </div>

                </div>
            )
        }

        if (currentPage === 'driftDownward') {
            return (
                <div id="lmao"
                    className="flex flex-col text-center pb-12 gap-6 w-screen px-3 sm:px-[18px] lg:px-[60px] h-screen py-6 xl:py-11">

                    <TextBox>

                        <p>
                            There appears to be a travelable dent in the Mesolimbic wall — a small gap in the Microglia army!
                        </p>

                    </TextBox>

                    <div className="flex flex-col flex-1 w-full h-full gap-2.5">

                        <ActionButton text='ZOOMM!' onClick={() => setCurrentPage('zoom')}/>

                    </div>

                </div>
            )
        }

        if (currentPage === 'zoom') {
            return (
                <div id="lmao"
                    className="flex flex-col text-center pb-12 gap-6 w-screen px-3 sm:px-[18px] lg:px-[60px] h-screen py-6 xl:py-11">

                    <TextBox>

                        <p>
                            No, just an infinitely resilient barrier of angry Microglia, contracting like a dense school of krill. <NextButton text='Even you can’t penetrate that.' onClick={() => setCurrentPage('theInhibition2')}/>
                        </p>

                    </TextBox>

                    <div className="hidden flex-col flex-1 w-full h-full gap-2.5">

                    </div>

                </div>
            )
        }

        if (currentPage === 'driftLaterally') {
            return (
                <div id="lmao"
                    className="flex flex-col text-center pb-12 gap-6 w-screen px-3 sm:px-[18px] lg:px-[60px] h-screen py-6 xl:py-11">

                    <TextBox>

                        <p>
                            No, same fruitless effort.
                        </p>

                    </TextBox>

                    <div className="flex flex-col flex-1 w-full h-full gap-2.5">

                        <ActionButton text='Go back.' onClick={() => setCurrentPage('theInhibition2')}/>

                    </div>

                </div>
            )
        }

        if (currentPage === 'driftAhead') {
            return (
                <div id="lmao"
                    className="flex flex-col text-center pb-12 gap-6 w-screen px-3 sm:px-[18px] lg:px-[60px] h-screen py-6 xl:py-11">

                    <TextBox>

                        <p>
                            <NextButton text='Are you sure?' onClick={() => setCurrentPage('areYouSure')}/>
                        </p>

                    </TextBox>

                    <div className="hidden flex-col flex-1 w-full h-full gap-2.5">

                    </div>

                </div>
            )
        }

        if (currentPage === 'areYouSure') {
            return (
                <div id="lmao"
                    className="flex flex-col text-center pb-12 gap-6 w-screen px-3 sm:px-[18px] lg:px-[60px] h-screen py-6 xl:py-11">

                    <TextBox>

                        <p>
                            DN (plural): “LADS!! SHOOT THE CENTER!!”
                            <br /><br />
                            A slight opening was fleeting. <NextButton text='Slip past!' onClick={() => setCurrentPage('slipPast')}/>
                        </p>

                    </TextBox>

                    <div className="hidden flex-col flex-1 w-full h-full gap-2.5">

                    </div>

                </div>
            )
        }

        if (currentPage === 'slipPast') {
            return (
                <div id="lmao"
                    className="flex flex-col text-center pb-12 gap-6 w-screen px-3 sm:px-[18px] lg:px-[60px] h-screen py-6 xl:py-11">

                    <TextBox>

                        <p>
                            Oh my Hypothalamus, <NextButton text='you’re through!!' onClick={() => setCurrentPage('urThrough')}/>
                        </p>

                    </TextBox>

                    <div className="hidden flex-col flex-1 w-full h-full gap-2.5">

                    </div>

                </div>
            )
        }
}