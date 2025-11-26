import { useState } from "react";

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

    if (currentPage === 'bedroom') {
        return (
            <div id="bedroom"
                className="flex flex-col text-center gap-6 w-screen px-[18px] lg:px-[60px] h-screen py-10">

                <div className="flex-1 text-start text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] border-2 border-(--normal) rounded-2xl px-5 py-[26px] h-auto font-light">

                    <p>
                        You have just risen from your bed, and to cherish the beautiful morning, you decide to make your usual hot chocolate drink and sit on the porch of your house. What a serene sensation! The warming hot cocoa accompanying the tranquil rain, which isn’t hard enough that its splatters don’t hit the tip of your feet.
                        <br /><br />
                        <span className="text-yellow-100">“I could probably sit here all day!” 
                        <br /><br /></span>
                        What better way to start an important day like this? Remember, you have a crucial theatrical performance tonight at 7, yesterday (Sunday) was the last day you should’ve practiced the lines and gestures. Today should be entirely focused on <i>clearing your mind</i> and going through the day normally. Try and unwind; you often get nervous when things don’t go your desired way. Otherwise, your <i>shame demon</i> will come to haunt you. You can’t be having that, can you?
                        <br /><br />
                        Now, you have one relaxing hour left before you have to start preparing yourself to go to campus. What will you do?

                    </p>

                </div>

                <div className="flex flex-col flex-1 w-full h-full gap-2.5">

                    <button onClick={() => setCurrentPage('nothing')}
                        className="text-(--bg) text-[18px] xl:text-[22px] bg-(--normal) rounded-2xl px-20 py-2.5 font-semibold hover:bg-(--hover) hover:text-[20px] hover:xl:text-[26px] active:bg-(--active) active:xl:text-[20px] transition-all duration-200 cursor-pointer w-full">
                        Nothing.
                    </button>

                    <button onClick={() => setCurrentPage('readBook')}
                        className="text-(--bg) text-[18px] xl:text-[22px] bg-(--normal) rounded-2xl px-20 py-2.5 font-semibold hover:bg-(--hover) hover:text-[20px] hover:xl:text-[26px] active:bg-(--active) active:xl:text-[20px] transition-all duration-200 cursor-pointer w-full">
                        Read a Book!
                    </button>

                    <button onClick={() => setCurrentPage('openPhone')}
                        className="text-(--bg) text-[18px] xl:text-[22px] bg-(--normal) rounded-2xl px-20 py-2.5 font-semibold hover:bg-(--hover) hover:text-[20px] hover:xl:text-[26px] active:bg-(--active) active:xl:text-[20px] transition-all duration-200 cursor-pointer w-full">
                        Open your phone and watch Instagram Reels.
                    </button>

                </div>

            </div>
        )
    }

    if (currentPage === 'nothing') {
        return (

            <div id="nothing"
                className="flex flex-col text-center gap-6 w-screen px-[18px] lg:px-[60px] h-screen py-10">

                <div className="flex-1 text-start text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] border-2 border-(--normal) rounded-2xl px-5 py-[26px] h-full font-light">

                    <p>
                        Well, while the rain is quite an entertaining sight itself, it will probably become boring within the next hour.
                    </p>

                </div>

                <div className="flex flex-col flex-1 w-full h-full gap-2.5">

                    <button onClick={() => setCurrentPage('bedroom')}
                        className="text-(--bg) text-[18px] xl:text-[22px] bg-(--normal) rounded-2xl px-20 py-2.5 font-semibold hover:bg-(--hover) hover:text-[20px] hover:xl:text-[26px] active:bg-(--active) active:xl:text-[20px] transition-all duration-200 cursor-pointer w-full">
                        Go Back.
                    </button>

                </div>

            </div>

        )
    }

    if (currentPage === 'readBook') {
        return (

            <div id="readBook"
                className="flex flex-col text-center gap-6 w-screen px-[18px] lg:px-[60px] h-screen py-10">

                <div className="flex-1 text-start text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] border-2 border-(--normal) rounded-2xl px-5 py-[26px] h-full font-light">

                    <p>
                        (What book will you read?)
                    </p>

                </div>

                <div className="flex flex-col flex-1 w-full h-full gap-2.5">

                    <button onClick={() => setCurrentPage('continuePridePrejudice')}
                        className="text-(--bg) text-[18px] xl:text-[22px] bg-(--normal) rounded-2xl px-20 py-2.5 font-semibold hover:bg-(--hover) hover:text-[20px] hover:xl:text-[26px] active:bg-(--active) active:xl:text-[20px] transition-all duration-200 cursor-pointer w-full">
                        Continue Pride and Prejudice (currently on chapter 44)
                    </button>

                    <button onClick={() => setCurrentPage('startLePetitPrince')}
                        className="text-(--bg) text-[18px] xl:text-[22px] bg-(--normal) rounded-2xl px-20 py-2.5 font-semibold hover:bg-(--hover) hover:text-[20px] hover:xl:text-[26px] active:bg-(--active) active:xl:text-[20px] transition-all duration-200 cursor-pointer w-full">
                        Start Le Petit Prince!
                    </button>

                </div>

            </div>

        )
    }

    if (currentPage === 'openPhone') {
        return (

            <div id="openPhone"
                className="flex flex-col text-center gap-6 w-screen px-[18px] lg:px-[60px] h-screen py-10">

                <div className="flex-1 text-start text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] border-2 border-(--normal) rounded-2xl px-5 py-[26px] h-full font-light">

                    <p>
                        <button onClick={() => setCurrentPage('bedroom')}
                            className="cursor-pointer text-(--normal) underline hover:font-bold transition-all duration-200">Is that really how you want to savor the day?</button>
                    </p>

                </div>

                <div className="flex flex-col flex-1 w-full h-full gap-2.5">

                </div>

            </div>

        )
    }

    if (currentPage === 'continuePridePrejudice') {
        return (

            <div id="readBook"
                className="flex flex-col text-center gap-6 w-screen px-[18px] lg:px-[60px] h-screen py-10">

                <div className="flex-1 text-start text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] border-2 border-(--normal) rounded-2xl px-5 py-[26px] h-full font-light">

                    <p className="text-yellow-100">
                        “Now, where was I? The last time I read this book was two days ago, and the scene where I left off I can’t immediately remember. Oh! Yes! Lydia had just fled with Wickham to marry in Scotland! I remember now. What an unexpected twist, indeed. I am very intrigued in finding out what happens later, especially since Darcy’s politeness during the course has undoubtedly entranced Elizabeth.”
                    </p>

                </div>

                <div className="flex flex-col flex-1 w-full h-full gap-2.5">

                    <button onClick={() => setCurrentPage('continueReadingPridePrejudice')}
                        className="text-(--bg) text-[18px] xl:text-[22px] bg-(--normal) rounded-2xl px-20 py-2.5 font-semibold hover:bg-(--hover) hover:text-[20px] hover:xl:text-[26px] active:bg-(--active) active:xl:text-[20px] transition-all duration-200 cursor-pointer w-full">
                        (continue reading)
                    </button>

                </div>

            </div>

        )
    }

    if (currentPage === 'continueReadingPridePrejudice') {
        return (

            <div id="continueReadingPridePrejudice"
                className="flex flex-col text-center gap-6 w-screen px-[18px] lg:px-[60px] h-screen py-10">

                <div className="flex-1 text-start text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] border-2 border-(--normal) rounded-2xl px-5 py-[26px] h-full font-light">

                    <p className="text-red-3">
                        [<span className="font-bold">INTERRUPTION</span>] You find yourself opening your phone.
                        <br /> 
                        [<span className="font-bold">CAUTION</span>] YOU BEGIN TO FEEL UNEASY.
                    </p>

                </div>

                <div className="flex flex-col flex-1 w-full h-full gap-2.5">

                    <button onClick={() => setCurrentPage('continuePridePrejudice')}
                        className="text-(--bg) text-[18px] xl:text-[22px] bg-(--normal) rounded-2xl px-20 py-2.5 font-semibold hover:bg-(--hover) hover:text-[20px] hover:xl:text-[26px] active:bg-(--active) active:xl:text-[20px] transition-all duration-200 cursor-pointer w-full">
                        Fight BACK!!!
                    </button>

                    <button onClick={() => setCurrentPage('continueReadingPridePrejudice')}
                        className="text-(--bg) text-[18px] xl:text-[22px] bg-(--normal) rounded-2xl px-20 py-2.5 font-semibold hover:bg-(--hover) hover:text-[20px] hover:xl:text-[26px] active:bg-(--active) active:xl:text-[20px] transition-all duration-200 cursor-pointer w-full">
                        (do i need another option?)
                    </button>

                </div>

            </div>

        )
    }

}

export default App;