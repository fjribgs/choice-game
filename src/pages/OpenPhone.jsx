import ActionButton from "../components/ActionButton"
import TextBox from "../components/TextBox"

export function OpenPhone( {setCurrentPage} ) {
    return (
            <div id="openPhone"
                className="flex flex-col text-center gap-6 w-screen px-[18px] lg:px-[60px] h-screen py-6 xl:py-11">

                <TextBox>

                    <p>
                        <button onClick={() => setCurrentPage('bedroom')}
                            className="cursor-pointer text-(--normal) underline hover:font-bold transition-all duration-200 text-start">Is that really how you want to savor the day?</button>
                    </p>

                </TextBox>

                <div className="flex flex-col flex-1 w-full h-full gap-2.5">

                </div>

            </div>
    )
}