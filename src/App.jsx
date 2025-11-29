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

                <div className="flex flex-col flex-1 w-full py-6 gap-2.5">

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
                            className="cursor-pointer text-(--normal) underline hover:font-bold transition-all duration-200 text-start">Is that really how you want to savor the day?</button>
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
                            className="cursor-pointer text-(--normal) underline hover:font-bold transition-all duration-200 text-start">“Eh, I don’t think I’d want to start something new today..”</button>
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

    // from continueReading2
    if (currentPage === 'continueReading3') {
        return (

            <div className="flex flex-col text-center gap-6 w-screen px-[18px] lg:px-[60px] h-screen py-6 xl:py-11">

                <TextBox>

                    <p>

                        At this point, nearly forty-five minutes had passed.
                        <br /><br />
                        <span className="text-yellow-100">“Oh, bugger, one pointless hour for what was supposed to be a holistically beautiful day. But what does an unsuccessful one twenty-fourths of the day foretell? Possibly, I hope, a most successful rest-of-the-day.“</span>
                        <br /><br />
                        Since your own motorcycle is still being repaired, you, for the very first time, borrow your father’s Harley-Davidson to campus. Fortunately, riding it doesn’t require much special training; even a couple months’ of riding a normal motorcycle experience would suit one up conducive enough. 
                        <br /><br />
                        About twenty minutes into the usual half-hour ride to your destination, however, you start to notice an unsettling pattern. Although you don’t bear the common personality of speeding — or, at the very least, driving fast — despite under no urgency (and partially because you didn’t want a hectic ride), you still receive some weird glances, as if you did just that. Is it because of the boujee vehicle? Is it because of your overly formal outfit? Is it because you’re wearing basketball shoes to campus solely for the look and not to play the sport? Is it because of all those three things combined? 
                        <br /><br />
                        <span className="text-yellow-100">“Ach!!! Why do these thoughts get in my head?!” </span>
                        <br /><br />
                        …
                        <br /><br />
                        At last, and at the very least, thankfully, you arrive safely at your university. You park the motorcycle in the northwest corner of the parking space, to the left of a large tree, unwittingly covering the sight of you and the motorcycle together from open public space. <button onClick={() => setCurrentPage('continueReading4')}
                            className="cursor-pointer text-(--normal) underline hover:font-bold transition-all duration-200 text-start">Perhaps, fate will go easy on me from now on.</button>

                    </p>

                </TextBox>

                <div className="flex flex-col flex-1 w-full gap-2.5">

                </div>

            </div>

        )
    }

    // from continueReading3
    if (currentPage === 'continueReading4') {
        return (

            <div className="flex flex-col text-center gap-6 w-screen px-[18px] lg:px-[60px] h-screen py-6 xl:py-11">

                <TextBox>

                    <p>
                        When walking to class, you notice that a pink kind of tree across the building is defoliating. 
                        <br /><br />
                        <span className="text-yellow-100">“Oh, what a beautiful sight!”</span>
                        <br /><br />
                        It is somewhat of an anomaly, however, seeing as most, if not all, the neighboring trees are not also (falling). But, oh, who cares? If anything, it adds to the aesthetic of it, right? You approach the tree to take a closer look at it. 
                        <br /><br />
                        <span className="text-yellow-100">“Wow, it is somehow more beautiful up close!”</span>
                    </p>

                </TextBox>

                <div className="flex flex-col flex-1 w-full h-full gap-2.5">

                    <ActionButton onClick={() => setCurrentPage('takeASelfie')} text="Take a selfie under the tree!" />

                    <ActionButton onClick={() => setCurrentPage('kindlyAskSomeone')} text="Kindly ask someone near to take an aesthetic picture of you in front of the tree." />

                </div>

            </div>

        )
    }

    // from continueReading4
    if (currentPage === 'kindlyAskSomeone') {
        return (

            <div className="flex flex-col text-center gap-6 w-screen px-[18px] lg:px-[60px] h-screen py-6 xl:py-11">

                <TextBox>

                    <p className="text-yellow-100">
                        “Aw, shucks, there is no one around. That does mean, however, that I can be freer when taking the pictures.”
                    </p>

                </TextBox>

                <div className="flex flex-col flex-1 w-full h-full gap-2.5">

                    <ActionButton onClick={() => setCurrentPage('takeASelfie')} text="Take a selfie under the tree!" />

                </div>

            </div>

        )
    }

    // from continueReading4
    if (currentPage === 'takeASelfie') {
        return (

            <div className="flex flex-col text-center gap-6 w-screen px-[18px] lg:px-[60px] h-screen py-6 xl:py-11">

                <TextBox>

                    <p>
                        You took around four identical pictures of yourself under the tree. Oh, well, what matters is that you took them. 
                        <br /> <br />
                        When, just a second ago, no sign of human life appeared to be in close proximity, suddenly, from behind the tree, emerges a group of four male students of the same faculty — you know they attend some of the classes as you, but you don’t know their names. Consecutively, as they walk ahead in a line, they all look at you weird, not much unlike the ones you received on your way here. One even looked at you from (up and down and up again (eye to foot to eye)), ugh….
                        <br /> <br />
                        <span className="text-yellow-100">“Why, oh, why must they give such an unsettling stare?! I was simply taking pictures underneath a falling tree. Why must that trigger such disgust!”</span>
                        <br /> <br />
                        …
                        <br /> <br />
                        … He is here, isn’t he…? You have fought him many times, and won many times over — you shall not falter! 
                        <br /> <br />
                        <span className="text-red-400">“YOU ARE WEIRD. YOU ARE OUT OF PLACE. YOU ARE ANAMOLOUS, AND UNWORTHY OF CONFORMITY.”</span>
                        <br /> <br />
                        You must counter. <button onClick={() => setCurrentPage('mustCounter')}
                            className="cursor-pointer text-(--normal) underline hover:font-bold transition-all duration-200 text-start">You CAN’T have this last until nightfall. </button>
                    </p>

                </TextBox>

                <div className="flex flex-col flex-1 w-full h-full gap-2.5">

                </div>

            </div>

        )
    }
}

export default App;