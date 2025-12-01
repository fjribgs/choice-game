import ActionButton from "../components/ActionButton"
import TextBox from "../components/TextBox"

export function Nothing( {setCurrentPage} ) {
    return (
        <div id="nothing"
                className="flex flex-col text-center gap-6 w-screen px-[18px] lg:px-[60px] h-screen py-6 xl:py-11">

                <TextBox>

                    <p>
                        Well, while the rain is quite an entertaining sight itself, it will probably become boring within the next hour.
                    </p>

                </TextBox>

                <div className="flex flex-col flex-1 w-full h-full gap-2.5">

                    <ActionButton onClick={() => setCurrentPage('bedroom')} text="(Go back)" />

                </div>

            </div>
    )
}