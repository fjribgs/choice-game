import { useState } from "react";
import ActionButton from "./components/ActionButton";
import TextBox from "./components/TextBox";

function App() {
    const [currentPage, setCurrentPage] = useState('landingPage');
    
    if (currentPage === 'landingPage') {
        return (
            <div id="landingPage"
                className="flex flex-col items-center justify-center text-center gap-10 w-screen px-[18px] lg:px-[60px]">

                <h1 className="font-normal text-[26px] xl:text-[37px] sm:text-[34px]">Electronic Literature <br />Final Project</h1>

                <button onClick={() => setCurrentPage('bedroom')}
                    className="text-(--bg) text-[18px] xl:text-[22px] bg-(--normal) rounded-2xl px-20 py-2.5 font-semibold hover:bg-(--hover) hover:text-[20px] hover:xl:text-[26px] active:bg-(--active) active:xl:text-[20px] transition-all duration-200 cursor-pointer">
                    Start
                </button>

            </div>
        )
    }

    // from landingPage
    if (currentPage === 'bedroom') {
        return (
            <div 
                className="flex flex-col h-screen text-center w-screen px-[18px] lg:px-[60px] py-6 xl:py-11">

                <TextBox>

                    <p>
                        You have just risen from your bed, and to cherish the beautiful morning, you decide to make your usual hot chocolate drink and sit on the porch of your house. What a serene sensation! The warming hot cocoa accompanying the tranquil rain, which isn’t hard enough that its splatters don’t hit the tip of your feet.
                        <br /><br />
                        “I could probably sit here all day!” 
                        <br /><br />
                        What better way to start an important day like this? Remember, you have a crucial theatrical performance tonight at 7, yesterday (Sunday) was the last day you should’ve practiced the lines and gestures. Today should be entirely focused on clearing your mind and going through the day normally. Try and unwind; you often get nervous when things don’t go your desired way. Otherwise, your shame demon will come to haunt you again. You can’t be having that, can you?
                        <br /><br />
                        Now, you have one relaxing hour left before you have to start preparing yourself to go to campus. What will you do?
                    </p>

                </TextBox>

                <div className="flex flex-col w-full my-6 h-full gap-2.5">

                    <ActionButton onClick={() => setCurrentPage('nothing')} text="Nothing." />
                    
                    <ActionButton onClick={() => setCurrentPage('readBook')} text="Read a book!" />
                    
                    <ActionButton onClick={() => setCurrentPage('openPhone')} text="Open your phone and watch Instagram Reels." />

                </div>

            </div>
        )
            
    }

    // from bedroom
    if (currentPage === 'nothing') {
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

    // from bedroom
    if (currentPage === 'readBook') {
        return (

            <div id="readBook"
                className="flex flex-col text-center gap-6 w-screen px-[18px] lg:px-[60px] h-screen py-6 xl:py-11">

                <TextBox>

                    <p>
                        (What book will you read?)
                    </p>

                </TextBox>

                <div className="flex flex-col flex-1 w-full h-full gap-2.5">

                    <button onClick={() => setCurrentPage('startLePetitPrince')}
                        className="text-(--bg) text-[18px] xl:text-[22px] bg-(--normal) rounded-2xl px-20 py-2.5 font-semibold hover:bg-(--hover) hover:text-[20px] hover:xl:text-[26px] active:bg-(--active) active:xl:text-[20px] transition-all duration-200 cursor-pointer w-full">

                        Start <i>Le Petit Prince</i>!

                    </button>

                    <button onClick={() => setCurrentPage('continuePridePrejudice')}
                        className="text-(--bg) text-[18px] xl:text-[22px] bg-(--normal) rounded-2xl px-20 py-2.5 font-semibold hover:bg-(--hover) hover:text-[20px] hover:xl:text-[26px] active:bg-(--active) active:xl:text-[20px] transition-all duration-200 cursor-pointer w-full">

                        Continue <i>Pride and Prejudice</i> (currently on chapter 46)

                    </button>

                </div>

            </div>

        )
    }

    // from bedroom
    if (currentPage === 'openPhone') {
        return (

            <div id="openPhone"
                className="flex flex-col text-center gap-6 w-screen px-[18px] lg:px-[60px] h-screen py-6 xl:py-11">

                <TextBox>

                    <p>
                        <button onClick={() => setCurrentPage('bedroom')}
                            className="cursor-pointer text-(--normal) underline hover:font-bold transition-all duration-200">Is that really how you want to savor the day?</button>
                    </p>

                </TextBox>

                <div className="flex flex-col flex-1 w-full h-full gap-2.5">

                </div>

            </div>

        )
    }

    // from readBook
    if (currentPage === 'startLePetitPrince') {
        return (

            <div id="startLePetitPrince"
                className="flex flex-col text-center gap-6 w-screen px-[18px] lg:px-[60px] h-screen py-6 xl:py-11">

                <TextBox>

                    <p>
                        <button onClick={() => setCurrentPage('readBook')}
                            className="cursor-pointer text-(--normal) underline hover:font-bold transition-all duration-200">“Eh, I don’t think I’d want to start something new today..”</button>
                    </p>

                </TextBox>

                <div className="flex flex-col flex-1 w-full h-full gap-2.5">

                </div>

            </div>

        )
    }

    // from readBook
    if (currentPage === 'continuePridePrejudice') {
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

    // from continuePridePrejudice
    if (currentPage === 'continueReadingPridePrejudice') {
        return (

            <div id="continueReadingPridePrejudice"
                className="flex flex-col text-center gap-6 w-screen px-[18px] lg:px-[60px] h-screen py-6 xl:py-11">

                <TextBox>

                    <p className="text-red-400">
                        [<span className="font-bold">INTERRUPTION</span>] You find yourself opening your phone.
                        <br /> 
                        [<span className="font-bold">CAUTION</span>] YOU BEGIN TO FEEL UNEASY.
                    </p>

                </TextBox>

                <div className="flex flex-col flex-1 w-full h-full gap-2.5">

                    <ActionButton onClick={() => setCurrentPage('findYourselfOpeningPhone')} text="Fight BACK!!!" />

                    <ActionButton onClick={() => setCurrentPage('checkMessages')} text="Just check for text messages." />

                </div>

            </div>

        )
    }

    // from continueReadingPridePrejudice
    if (currentPage === 'checkMessages') {
        return (

            <div id="checkMessages"
                className="flex flex-col text-center gap-6 w-screen px-[18px] lg:px-[60px] h-screen py-6 xl:py-11">

                <TextBox>

                    <p>
                        You have received none.
                    </p>

                </TextBox>

                <div className="flex flex-col flex-1 w-full h-full gap-2.5">

                    <ActionButton onClick={() => setCurrentPage('findYourselfOpeningPhone')} text="(continue reading)" />

                </div>

            </div>
        )
    }

    // from checkMessages
    if (currentPage === 'findYourselfOpeningPhone') {
        return (

            <div id="checkMessages"
                className="flex flex-col text-center gap-6 w-screen px-[18px] lg:px-[60px] h-screen py-6 xl:py-11">

                <TextBox>

                    <p className="text-red-400">
                        [<span className="font-bold">ERROR</span>] [<span className="font-bold">INTERRUPTION</span>] You find yourself opening your phone.
                    </p>

                </TextBox>

                <div className="flex flex-col flex-1 w-full h-full gap-2.5">

                    <ActionButton onClick={() => setCurrentPage('continueReading2')} text="(continue reading)" />

                </div>

            </div>

        )
    }

    // from findYourselfOpeningPhone
    if (currentPage === 'continueReading2') {
        return (

            <div className="flex flex-col text-center gap-6 w-screen px-[18px] lg:px-[60px] h-screen py-6 xl:py-11">

                <TextBox>

                    <p>
                        “What a lovely forenoon, rain and hot cocoa pair
                        Befriending me and my book beneath the frore air
                        <br /><br />
                        If only such a malaise was ascribable
                        Wontedly checking my phone, as if my own child
                        My Austen reading time would be inerrable”
                    </p>

                </TextBox>

                <div className="flex flex-col flex-1 w-full h-full gap-2.5">

                    <ActionButton onClick={() => setCurrentPage('findYourselfOpeningPhone')} text="(continue reading)" />

                </div>

            </div>

        )
    }

}

export default App;