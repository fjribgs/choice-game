import ActionButton from "../components/ActionButton"
import TextBox from "../components/TextBox"
import NextButton from "../components/NextButton"

export function TerriblySorry( {setCurrentPage} ) {
    return (
        <div id="bedroom"
            className="flex flex-col h-screen text-center w-screen px-[18px] lg:px-[60px] py-6 xl:py-11">

            <TextBox>

                <p>
                    HOWEVER! You bear a special trait! Your influence is like a white blood cell itself, yours is. Your genetic mutation, there’s something so special about it. When you were drifting alone across the Mesolimbic, our Astrocytes noticed that you were able to, though inadvertently, fend off Microglia from Axons like no other! 
                    <br /><br />
                    Allow me to explain. The war for spots — or as your kind would call it, seats — on Axon strands against Microglia has been going on as long as I’ve known. For the longest time, our dopaminergic neurons have always outgunned those pesky Microglia from inciting anxiety and fear within our precious Timmy. Apparently, before Timmy’s memory was fully developed, therefore without much of my knowledge, all those under Axon feudalism, Microglia and Dopaminergic Neurons alike, used to live in peace. We occupied Axon seats accordingly, depending on Timmy’s true emotions. However, as of late, unjust mockery from other humans incited in Timmy’s Microglia an insatiable urge for seats — namely, <i>manifestation</i>. It was unlike anything we’ve seen before, what used to be automated cells taking its own action. 
                    <br /><br />    
                    As a form of precaution, I have conceived a compensating abulia, which involves forcingly spreading GABAergic Neurons that will, in a sense, sedate Timmy, as it will reduce his brainpower in order to subsequently reduce the <i>manifestation</i> of his negative thoughts. In short, while Timmy will become lazy, at the very least, he won’t be depressed. While Vagus also has access to its activation, we came to a mutual decision that I should always be the first option. I don’t trust such a significant volatility to be in anyone else’s hands AS LONG AS I’M WELL, <i>AHA</i>!
                    <br /><br />
                    *cough* 
                    <br /><br />
                    Although the same dismay applied for your kind as well when they began to act autonomously, I found out that it was for a different reason, which was Timmy’s subconscious, but deathless telos of mental prosperity, which is the only thing keeping him neutral. 
                    <br /><br />
                    <NextButton onClick={() => {
                        setCurrentPage('sigh')
                    }} text='sigh."'/>
                    <div className="h-6"></div>
                </p>

            </TextBox>

            <div className=" flex-col flex-1 w-full py-6 gap-2.5 hidden">

                <ActionButton onClick={() => setCurrentPage('nothing')} text="Nothing." />
                    
                <ActionButton onClick={() => setCurrentPage('readBook')} text="Read a book!" />
                    
                <ActionButton onClick={() => setCurrentPage('openPhone')} text="Open your phone and watch Instagram Reels." />

            </div>

        </div>
    )
}