import ActionButton from "../components/ActionButton"
import TextBox from "../components/TextBox"
import NextButton from "../components/NextButton"

export function ThroneRoom( {setCurrentPage} ) {
    return (
        <div className="flex flex-col h-screen text-center w-screen px-3 sm:px-[18px] lg:px-[60px] pb-12 py-6 xl:py-11">

            <TextBox>

                <p>
                    Should you knock?? Oh, to hell with niceties!
                    <br /><br />
                    The fancy door — clearly ornate and not for plebeians — is surprisingly not fortified enough. It looks like it was made not long ago. Bust it open?
                    <br /><br />
                    <NextButton onClick={() => setCurrentPage('hellYeah')} text='HELL YEAH!'/>
                    <div className="h-5"></div>
                </p>

            </TextBox>

            <div className="flex-col flex-1 w-full py-6 gap-2.5 hidden">

            </div>

        </div>
    )
}