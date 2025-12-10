import ActionButton from "../components/ActionButton"
import TextBox from "../components/TextBox"
import NextButton from "../components/NextButton"

export function AmICorrect( {setCurrentPage} ) {
    return (
        <div id="AmIMuted?"
            className="flex flex-col h-screen text-center w-screen px-3 sm:px-[18px] lg:px-[60px] pb-12 py-6 xl:py-11">

            <TextBox>

                <p>
                    Imprudent? No. I say it’s positively responsive. Thus, seeing as Timmy is about to go to campus, we shall wait until DN-1 returns until we commence, which should not take much longer given that there’s no commotion alert.”
                    <br /><br />
                    <NextButton onClick={() => {
                        setCurrentPage('thump')
                    }} text="THUMP!"/>
                </p>

            </TextBox>

            <div className="flex-col flex-1 w-full py-6 gap-2.5 hidden">

            </div>

        </div>
    )
}