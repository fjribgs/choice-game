import ActionButton from "../components/ActionButton"
import TextBox from "../components/TextBox"
import NextButton from "../components/NextButton"

export function Bedroom( {setCurrentPage} ) {
    return (
        <div id="bedroom"
            className="flex flex-col h-screen text-center w-screen px-[18px] lg:px-[60px] py-6 xl:py-11">

            <TextBox>

                <p>
                    CORTEX SYSTEM: “Welcome, Dopaminergic Neuron! I am the brain of this human’s, Timmy, vessel. This is Timmy’s Mesolimbic System. Quite the sight, ey? Thank Hypothalamus that Timmy takes good care of his physical health by eating and drinking well. As a result, our Astrocytes and Pyramidal Neurons are in prime working form! Eh, sure the other cells are doing well too, but they aren’t as cool looking, HAHA! As for his mental well-being, however, umm … Vagus! How is he doing?”
                    <br /><br />
                    VAGUS NERVE: “He's doing surprisingly well, sire.”
                    <br /><br />
                    CORTEX SYSTEM: “Yes … Good … We’re still going to need YOUR special help though. Ah, I bet you have some questions, do you? Well, as I was, Dopaminergic Neuron No. 556,246, and as you can see, we have been running quite a system here. With Timmy now in college, he seems to be more stressed out. [COMMOTION]. That sound that you just heard, is Timmy waking up. He will probably wash his face and make some hot chocolate, seeing that the boys from Auditory just sent a report that it’s raining. 
                    <br /><br />
                    You might be wondering, out of nearly 600.000 of your kin that you see around, why you look the most different. To say it gently, your mere birth was an anomaly. The Genetic Department appeared to have triggered a certain systemic error, and you were mutated as a result — you used to be inanimate not four hours ago. Sloppy department, they are. Oh, I wish I could admonish them directly and not through electric signals. 
                    <br /><br />
                    Anyways, when you were born, you were unconscious, with weird bumps at the side of your sphere. I checked you out personally, and it turned out that … how do I say this … unlike your kin, you only have a day to live; about twenty one hours left at the moment. Our experts also say that you also have a considerably severe case of hypokinetic dysarthria — your vocal system partly covered by your exoskeleton.
                    <br /><br />
                    <NextButton onClick={() => {
                        setCurrentPage('terriblySorry')
                    }} text="I am terribly sorry."/>
                    <div className="h-6"></div>
                </p>

            </TextBox>

            <div className="flex-col flex-1 w-full py-6 gap-2.5 hidden">

            </div>

        </div>
    )
}