import ActionButton from "../components/ActionButton"
import TextBox from "../components/TextBox"
import NextButton from "../components/NextButton"

export function HaughtyCortex( {setCurrentPage} ) {
    return (
        <div id="haughtyCortex"
            className="flex flex-col h-screen text-center w-screen px-3 sm:px-[18px] lg:px-[60px] pb-12 py-6 xl:py-11">

            <TextBox>

                <p>
                    <span className="text-red-500">[INTERRUPTION] [INTERRUPTION] [INTERRUPTION]
                    <br /><br />
                    [CAUTION]</span> MICROGLIA SWARM ON Sector 13-B … TIMMY IS OPENING HIS PHONE AGAIN.
                    <br /><br />
                    CORTEX SYSTEM: “DN-1, would you be a lad and deal with that please?”
                    <br /><br />
                    DN-1: “Yes, sire.”
                    <br /><br />
                    CORTEX SYSTEM: “You, however, should stay here. Do you think that … Oh dear Hypothalamus … the Microglia seek to bring all available Axons to <i>The Inhibition</i>? Oh, what a horror!” 
                    <br /><br />
                    Timmy:  “What a lovely forenoon, rain and hot   cocoa pair
                    <br />
                    Befriending me and my book beneath the frore air
                    <br /><br />
                    If only such a malaise was ascribable —
                    <br />
                    Wontedly checking my phone, as if my own child
                    <br />
                    — My Austen reading time would be inerrable”
                    <br /><br />
                    CORTEX SYSTEM: “Oh, poor Timmy. 
                    <br /><br />
                    Alright, I’ll brief you on the situation, DN. Two days ago, Auditory told me that Timmy was to play as Romeo in a Romeo and Juliet play. Hence, his idiosyncratic diction. He strives for these things. In a sense, he also considers it practice. Speaking of practice, he’s been practicing lines 24/7 for the past two days. However, the schedule was rushed, and the play is to start this dusk. The report just came in last night, not long before you were born. I sense that he will not rehearse today, seeing as he feels that he needs to calm himself down, and that he’s already quite good enough with the lines of the play. Still, he feels anxious. I can feel it.
                    <br /><br />
                    The reason why the situation is so critical is that The Inhibition is unexaggeratedly eating him alive. The other day, some douches from his faculty’s football team looked at him while smirking for simply performing a standard leg cross while reading a book. It’s why he’s experiencing anxiety right now. He feels that if he cannot, simply, read a book without self-inflicted disturbances, like checking his phone even though he doesn’t truly want to. Additionally, it’s even more severe with the upcoming play, knowing that he’s, although not prone to, scared of failures of even the smallest extent. It really is unfair that one should even worry about such insignificant lunacy.
                    <br /><br />
                    Although Timmy, and presumably many others of his kind, experiences these things every day, when compounded with the urgency of such agendas, he notices it more — he takes it more to heart. To make things worse, Timmy’s Hippocampus wrote to me, this morning, a lengthy log regarding the Microglia attacks yesterday. <NextButton onClick={() => setCurrentPage('lookAtThis')} text="Here, look at this."/>
                    <div className="h-5"></div>
                </p>

            </TextBox>

            <div className="flex-col flex-1 w-full py-6 gap-2.5 hidden">

            </div>

        </div>
    )
}