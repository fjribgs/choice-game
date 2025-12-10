import ActionButton from "../components/ActionButton"
import TextBox from "../components/TextBox"
import NextButton from "../components/NextButton"

export function RollOut( {setCurrentPage, isAxonAVisited, isAxonBVisited, setIsAxonAVisited, setIsAxonBVisited} ) {
    return (
            <div id="continuePridePrejudice"
                className="flex flex-col text-center pb-12 gap-6 w-screen px-3 sm:px-[18px] lg:px-[60px] h-screen py-6 xl:py-11">

                <TextBox>

                    <p>
                        <span className={`${isAxonAVisited || isAxonBVisited ? "hidden" : ""}`}>Confused, you are, and understandably so. But what an outstanding militia you are a part of! The squad is making quick work of those Microglia, and you haven’t even fired your gun! However, you notice, at the corner of your malformed cornea, three Axon strand clumps, separated from the rest, drifting toward east, and completely occupied by Microglia.</span> A foe to eliminate, at last.
                    </p>

                </TextBox>

                <div className="flex flex-col flex-1 w-full h-full gap-2.5">

                    <div className={`${isAxonAVisited ? "hidden" : "*:"}`}>
                        <ActionButton onClick={() => {
                            setCurrentPage('attackAxonClumpA');
                            setIsAxonAVisited(true);
                            }} text="Attack Axon Clump A" />
                    </div>
                    
                    <div className={`${isAxonBVisited ? "hidden" : "*:"}`}>

                        <ActionButton onClick={() => {
                            setCurrentPage('attackAxonClumpB');
                            setIsAxonBVisited(true);
                        }} text="Attack Axon Clump B" />

                    </div>
                    
                    <div className={`${isAxonAVisited && isAxonBVisited ? "" : "hidden"}`}>

                        <ActionButton onClick={() => setCurrentPage('attackAxonClumpC')} text="Attack Axon Clump C"/>

                    </div>

                </div>

            </div>
    )
}