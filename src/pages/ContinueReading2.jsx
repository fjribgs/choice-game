import ActionButton from "../components/ActionButton"
import TextBox from "../components/TextBox"

export function ContinueReading2( {setCurrentPage} ) {
    return (
            <div className="flex flex-col text-center gap-6 w-screen px-[18px] lg:px-[60px] h-screen py-6 xl:py-11">

                <TextBox>

                    <p className="text-yellow-100">
                        “What a lovely forenoon, rain and hot cocoa pair<br />
                        Befriending me and my book beneath the frore air
                        <br /><br />
                        If only such a malaise was ascribable —<br />
                        Wontedly checking my phone, as if my own child<br />
                        — My Austen reading time would be inerrable”
                        <br /><br />
                        …
                        <br /><br />
                        <button onClick={() => setCurrentPage('continueReading3')}
                            className="cursor-pointer text-(--normal) underline hover:font-bold transition-all duration-200 text-start">“Ach, no wonder I’ve only gotten through three-fourths of the book in two months!“</button>

                    </p>

                </TextBox>

                <div className="flex flex-col flex-1 w-full h-full gap-2.5">


                </div>

            </div>
    )
}