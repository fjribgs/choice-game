import ActionButton from "../components/ActionButton"
import TextBox from "../components/TextBox"
import NextButton from "../components/NextButton"

export function BeALad( {setCurrentPage} ) {
    return (
        <div className="flex flex-col h-screen text-center w-screen px-3 sm:px-[18px] lg:px-[60px] pb-12 py-6 xl:py-11">

            <TextBox>

                <p>
                    It is somewhat of a magnificent sight, three hundred thousand Dopaminergic Neurons all in accordance as if sharing the same thinking tissue. It is also terrifying, however, the thought of solo infiltration into an exponentially advancing nerve center. The others seemed to be confident, though — and what use is hesitation at this point anyways?
                    <br /><br />
                    Alas, the bloodshed is to start, as Vagus’ declaration of war is sounded in the midst of the thirty five microsecond travel toward the East Mesolimbic and ultimately to Sector 7-B, where squadron C-8 was devoured.
                    <br /><br />
                    Lo and behold, war at the border of <i><NextButton onClick={() => setCurrentPage('theInhibition')} text='The Inhibition'/></i>
                    <div className="h-5"></div>
                </p>

            </TextBox>

            <div className="flex-col flex-1 w-full py-6 gap-2.5 hidden">

            </div>

        </div>
    )
}