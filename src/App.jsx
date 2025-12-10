import { useState } from "react";
import ActionButton from "./components/ActionButton";
import TextBox from "./components/TextBox";
import { LandingPage } from "./pages/LandingPage";
import { Bedroom } from "./pages/Bedroom";
import { TerriblySorry } from "./pages/TerriblySorry";
import { Sigh } from "./pages/Sigh";
import { KickSomeButt } from "./pages/KickSomeButt";
import { Nothing } from "./pages/Nothing";
import { ReadBook } from "./pages/ReadBook";
import { OpenPhone } from "./pages/OpenPhone";
import { StartLePetitPrince } from "./pages/StartLePetitPrince";
import { ContinuePridePrejudice } from "./pages/ContinuePridePrejudice";
import { GrowingStronger } from "./pages/GrowingStronger";
import { BreakALeg } from "./pages/BreakALeg";
import { RollOut } from "./pages/RollOut";

const pages = {
    'landingPage': LandingPage,
    'bedroom': Bedroom,
    'terriblySorry': TerriblySorry,
    'sigh': Sigh,
    'kickSomeButt': KickSomeButt,
    'nothing': Nothing,
    'readBook': ReadBook,
    'openPhone': OpenPhone,
    'startLePetitPrince': StartLePetitPrince,
    'continuePridePrejudice': ContinuePridePrejudice,
    'growingStronger': GrowingStronger,
    'breakALeg': BreakALeg,
    'rollOut': RollOut
}

function App() {
    const [currentPage, setCurrentPage] = useState('landingPage');
    const [isLePetitVisited, setIsLePetitVisited] = useState(false);

    if (currentPage === 'readBook') {
        return <ReadBook 
                    setCurrentPage={setCurrentPage}
                    isLePetitVisited={isLePetitVisited}
                    setIsLePetitVisited={setIsLePetitVisited}
        />
    }
    
    const CurrentPage = pages[currentPage]

    if (CurrentPage) {
        return <CurrentPage setCurrentPage={setCurrentPage} />
    }

    

    // from continueReading2
    if (currentPage === 'continueReading3') {
        return (

            <div className="flex flex-col h-screen text-center w-screen px-[18px] lg:px-[60px] py-6 xl:py-11">

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

                <div className="flex h-screen flex-col flex-1 w-full gap-2.5">
                    
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

}

export default App;