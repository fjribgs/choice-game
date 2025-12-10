import ActionButton from "../components/ActionButton"
import TextBox from "../components/TextBox"
import NextButton from "../components/NextButton"

export function KickSomeButt( {setCurrentPage} ) {
    return (
        <div className="flex flex-col h-screen text-center w-screen pb-12 px-[18px] lg:px-[60px] py-6 xl:py-11">

            <TextBox>

                <p>
                    “Our current arsenal, though amply prepared, I feel will be better at your lead. Hence, the lineup of neurons you see here behind me. We need all of you to fight for Axon strands harder than ever.
                    <br /><br />
                    This battle, as epic as I may illustrate, will not consist of Aragorn heroism, however. As the electric signal of one of Timmy’s memories of watching <i>The Lord of The Rings</i> I just sent you would also indicate, it’s more, in a way, practical. To be frank, Microglia will shoo themselves off if Timmy makes a sensible decision himself. He’s been failing in that regard, however, so you neurons have to take punctual actions yourselves. It all trickles down to what decision he ultimately takes. I apologize for the substantial anticlimax; I have a certain way with words. Or, rather, Timmy has such a way with words. 
                    <br /><br />
                    …
                    <br /><br />
                    Oh! I just received a signal from our Optics department. I’ll channel it to you and livestream it for you to internally visualize. Look! He’s sitting on his front porch, drinking his hot cocoa. I think he wants to … nevermind. Go ahead lad, make your first decision as a Dopaminergic Neuron, as today will be a long day indeed! What should he do this fine morning?
                    <br /><br />
                    <div className="h-6"></div>
                </p>

            </TextBox>

            <div className="flex flex-col flex-1 w-full py-6 gap-2.5">

                <ActionButton onClick={() => setCurrentPage('nothing')} text="Nothing." />
                    
                <ActionButton onClick={() => setCurrentPage('readBook')} text="Read a book!" />
                    
                <ActionButton onClick={() => setCurrentPage('openPhone')} text="Open your phone and watch Instagram Reels." />

            </div>

        </div>
    )
}