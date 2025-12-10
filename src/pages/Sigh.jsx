import ActionButton from "../components/ActionButton"
import TextBox from "../components/TextBox"
import NextButton from "../components/NextButton"

export function Sigh( {setCurrentPage} ) {
    return (
        <div className="flex flex-col h-screen text-center pb-12 w-screen px-[18px] lg:px-[60px] py-6 xl:py-11">

            <TextBox>

                <p>
                    VAGUS NERVE: “Yes; and kid, your species is Microglia’s polar opposite. By securing seats on Axon strands, you incite joy by systemically sending an electrical signal to our sire; hence, Timmy’s happiness. While Timmy’s emotions typically reset everyday, as sleep is his inhibition’s greatest antidote, when such discomfort succeeds to transition into the next day, disaster occurs. Timmy will be reluctant to think about, let alone understand, his own emotions. Such is the culmination of catastrophe for the sole reason that it will lead to many others: depression, asociality, cognitive rigidity, and more. For you, specifically, the occurrence would leave you nearly purposeless, as at that point, Microglia would have occupied 70% of available Axons according to our estimations. While we are adamant in our perennial dominance over the Microglia, and that we will eventually but confidently reset if such an emergency would happen, <i>anxiety inertia</i> would leave an enormous mark in Timmy’s mentality and in our precious Mesolimbic, especially since he will still need to attend campus for the next three years. The worst outcome would be for him to lose his love for what he studies.”
                    <br /><br />
                    CORTEX SYSTEM: Correct! Thus, my gift to your short life: your glorious purpose!!! There is a part of the Mesolimbic — its furthest right — where all of the residing Axon strands have been entirely encroached by Microglia. It’s gotten so bad, even my brother, Thalamus, started calling it <i>The Inhibition</i>. We started losing control of it not six months ago; and upon witnessing your might firsthand, your unyielding presence, I shall command you, great knight, to combat each and every single one of them!” 
                    <br /><br />
                    <NextButton onClick={() => {
                        setCurrentPage('kickSomeButt')
                    }} text='“What do you say, lad? Kick some butt!"'/>
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