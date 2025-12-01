import ActionButton from "../components/ActionButton"
import TextBox from "../components/TextBox"

export function ContinuePridePrejudice( {setCurrentPage} ) {
    return (
            <div id="continuePridePrejudice"
                className="flex flex-col text-center gap-6 w-screen px-[18px] lg:px-[60px] h-screen py-6 xl:py-11">

                <TextBox>

                    <p className="text-yellow-100">
                        “Now, where was I? The last time I read this book was two days ago, and the scene where I left off I can’t immediately remember. Oh! Yes! Lydia had just fled with Wickham to marry in Scotland! I remember now. What an unexpected twist, indeed. I am very intrigued in finding out what happens later, especially since Darcy’s politeness during the course has undoubtedly entranced Elizabeth.”
                    </p>

                </TextBox>

                <div className="flex flex-col flex-1 w-full h-full gap-2.5">

                    <ActionButton onClick={() => setCurrentPage('continueReadingPridePrejudice')} text="(continue reading)" />

                </div>

            </div>
    )
}