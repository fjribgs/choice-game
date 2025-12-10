import ActionButton from "../components/ActionButton"
import TextBox from "../components/TextBox"
import NextButton from "../components/NextButton"

export function LookAtThis( {setCurrentPage, isNothingVisited, setIsNothingVisited, isOpenPhoneVisited, setIsOpenPhoneVisited } ) {
    return (
        <div className="flex flex-col h-screen text-center w-screen pb-12 px-3 sm:px-[18px] lg:px-[60px] py-6 xl:py-11">

            <TextBox>

                <p>
                    <i className="text-red-500">[The CORTEX SYSTEM sends an archived signal. The data shown is an assortment of Axon strands many Microglia invaded upon Timmy’s multiple vexations throughout the day before]</i>
                    <br /><br />
                    That same afternoon, the same group of douches stealthily, but still discernibly, giggled at the sight of Timmy conversing cordially with two saliently homosexual males. All they asked for was directions in regard to a Mr. Beau, and all Timmy did was respond with alacrity and provide ample details — as how, I think, it should proceed. This eventually led to a Category Four Microglial Swarm on Sector 5-A, which meant that we had to send 400.000 of your kind to swat them away.  If the attacks were that bad for such a small problem of book-reading habit failure, how hectic do you think yesterday was? Dear Hypothalamus, even the swarm that occurred when some folks stared at him weird for taking a selfie under a defoliating pink tree in a disinhibited way was far worse.
                    <br /><br />
                    In many ways, I’m glad I’m only the brain, and not the human. That way, I don’t have to discern these emotions, I only have to acknowledge them.
                    <br /><br />
                    …
                    <br /><br />
                    In essence, <i>neuron</i>, I’ve thought about this twicefold. What? Yes, of course, I can think that fast, I’m THE BRAIN. I digress; anyway, I think Timmy’s done really well with himself. However, seeing as how well we have operated these past eighteen years, to the point where even the smallest kind of anxiety — such as the preceding event of Timmy fighting the manifested urge to constantly open his phone — is considered a huge deal, <i>The Inhibition</i> will only continue to grow. That is, unless we invade it!
                    <br /><br />
                    Yes! Invade it. Microglia don’t rely on ordnance the same way that we do. They multiply so fast that their evolution process is essentially catalyzed. DN-1 himself made the report, stating that their “arsenal” is their rapid biological growth. While we still outpower them, why don’t we ravage their headquarters? <NextButton text='Am I right or am I correct?”' onClick={() => setCurrentPage('amICorrect')}/> 
                    <div className="h-5"></div>
                </p>

            </TextBox>

            <div className="hidden flex-col flex-1 w-full py-6 gap-2.5">
                <div className={`${isNothingVisited ? "hidden" : ""}`}>

                    <ActionButton onClick={() => {
                        setCurrentPage('nothing');
                        setIsNothingVisited(true);
                    }} 
                    text="Nothing."/>

                </div>
                
                <ActionButton onClick={() => setCurrentPage('readBook')} text="Read a book!" />
                
                <div className={`${isOpenPhoneVisited ? "hidden" : ""}`}>

                    <ActionButton onClick={() => {
                        setCurrentPage('openPhone');
                        setIsOpenPhoneVisited(true);
                    }} 
                    text="Open your phone and watch Instagram Reels." />

                </div>
                

            </div>

        </div>
    )
}