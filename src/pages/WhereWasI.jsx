import ActionButton from "../components/ActionButton"
import TextBox from "../components/TextBox"
import NextButton from "../components/NextButton"

export function WhereWasI( {setCurrentPage} ) {
    return (
        <div className="flex flex-col h-screen text-center w-screen px-3 sm:px-[18px] lg:px-[60px] pb-12 py-6 xl:py-11">

            <TextBox>

                <p>
                    CORTEX SYSTEM: “Oh, yes; by this time, the word of your existence has probably spread almost entirely. Such is why I want YOU to personally pay the Microglian Leader a visit. Of course, you would have to navigate through <i>The Inhibition</i>, but out of our entire army, I would trust one of you more than a sextillion of your <i>inferiors</i>, given the favorable outcome of your very first probe. 
                    <br /><br />
                    As you may have guessed, I want you to implode their throne room alone. Don’t worry, you’ll be fine, you’re specially resistant to Excitotoxicity; I’m not misanthropic.
                    <br /><br />
                    Chop, chop, then! DN-1 is to rest for now. As for the rest of you, I need you all to yield <span className="text-yellow-100">DN-556,246</span> a gap for him to go through. I will command Vagus to announce a global broadcast  that we are to declare war against the Microglia so that their base will be left more empty. Understood?”
                    <br /><br />
                    NEURON ARMY: “YES, Sire.”
                    <br /><br />
                    CORTEX SYSTEM: “Oh, and while you’re there, occupy some Axons — your influence will help Timmy greatly. Also, report the inscriptions engraved on them to find out what’s causing The Inhibition to grow. There are typically symbols on each Axon if you flip them over that signifies their contribution to Timmy’s emotion. <NextButton onClick={() => setCurrentPage('lookAtThis')} text='Be a lad, will you?"'/>
                    <div className="h-5"></div>
                </p>

            </TextBox>

            <div className="flex-col flex-1 w-full py-6 gap-2.5 hidden">

            </div>

        </div>
    )
}