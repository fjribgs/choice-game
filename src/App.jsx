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

                <div className="flex-1 text-start text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] border-2 border-(--normal) rounded-2xl px-5 py-[26px] h-full font-light">

                    <p>
                        You have just risen from your bed, and to cherish the beautiful morning, you decide to make your usual hot chocolate drink and sit on the porch of your house. What a serene sensation! The warming hot cocoa accompanying the tranquil rain (that is not hard enough for its splatters to not hit the tip of your feet).
                        <br /> <br />
                        “I can probably sit here all day!” 
                        <br /> <br />
                        Now, you have an hour left before you have to start preparing yourself to go to campus. What will you do?
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

                </div>

            </div>
        )
    }

}

export default App;