import { useState } from "react";
import ActionButton from "./components/ActionButton";
import TextBox from "./components/TextBox";
import { LandingPage } from "./pages/LandingPage";
import { Bedroom } from "./pages/Bedroom";
import { Nothing } from "./pages/Nothing";
import { ReadBook } from "./pages/ReadBook";
import { OpenPhone } from "./pages/OpenPhone";
import { StartLePetitPrince } from "./pages/StartLePetitPrince";
import { ContinuePridePrejudice } from "./pages/ContinuePridePrejudice";
import { ContinueReadingPridePrejudice } from "./pages/ContinueReadingPridePrejudice";
import { CheckMessages } from "./pages/CheckMessage";
import { FindYourselfOpeningPhone } from "./pages/FindYourselfOpeningPhone";
import { ContinueReading2 } from "./pages/ContinueReading2";

function App() {
    const [currentPage, setCurrentPage] = useState('landingPage');
    
    if (currentPage === 'landingPage') {
        return <LandingPage setCurrentPage={setCurrentPage} />
    }

    // from landingPage
    if (currentPage === 'bedroom') {
        return <Bedroom setCurrentPage={setCurrentPage} />
    }

    // from bedroom
    if (currentPage === 'nothing') {
        return <Nothing setCurrentPage={setCurrentPage} />
    }

    // from bedroom
    if (currentPage === 'readBook') {
        return <ReadBook setCurrentPage={setCurrentPage} />
    }

    // from bedroom
    if (currentPage === 'openPhone') {
        return <OpenPhone setCurrentPage={setCurrentPage} />
    }

    // from readBook
    if (currentPage === 'startLePetitPrince') {
        return <StartLePetitPrince setCurrentPage={setCurrentPage} />
    }

    // from readBook
    if (currentPage === 'continuePridePrejudice') {
        return <ContinuePridePrejudice setCurrentPage={setCurrentPage} />
    }

    // from continuePridePrejudice
    if (currentPage === 'continueReadingPridePrejudice') {
        return <ContinueReadingPridePrejudice setCurrentPage={setCurrentPage} />
    }

    // from continueReadingPridePrejudice
    if (currentPage === 'checkMessages') {
        return <CheckMessages setCurrentPage={setCurrentPage} />
    }

    // from checkMessages
    if (currentPage === 'findYourselfOpeningPhone') {
        return <FindYourselfOpeningPhone setCurrentPage={setCurrentPage} />
    }

    // from findYourselfOpeningPhone
    if (currentPage === 'continueReading2') {
        return <ContinueReading2 setCurrentPage={setCurrentPage} />
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

    // from takeASelfie
    if (currentPage === 'mustCounter') {
        return (

            <div className="flex flex-col text-center gap-6 w-screen px-[18px] lg:px-[60px] h-screen py-6 xl:py-11">

                <TextBox>

                    <p>
                        You go to class, hoping the fun subject of English Literature frees you of your weighty inhibition. Surprisingly, by good hap, the intricate discussion of Terry Eagleton’s works serves as a semi-effective antidote for the disturbance.
                        <br /><br />
                        <span className="text-yellow-100">“Perhaps I should take note of this in my head, while it lasts.”</span>
                        <br /><br />
                        As it transpires, the second class of the day is cancelled and you are now at leisure to do anything you want. You decide to hit the faculty canteen before contemplating the rest of the day.
                        <br /><br />
                        Just by the wide threshold of the canteen room, two students, male, wearing striking androgynous outfits — though more hyperfeminine than the typical — approach you. One is wearing a crop top, belly button showing, and the other one is wearing an Armani cashmere shirt with half of the buttons opened (and no inside tshirt (indicating that chest is showing)). They look like a couple, or maybe just friends. They say they are from Business and are looking for a Mr. Beau. They seem to be completely lost, and in dire need of specific descriptions.
                        <br /><br />
                        Your temporary happiness, along with your smile, instantly fades. A stealthy wave of hatred and contempt swashes your air. 
                        <br /><br />
                        [Student 1]: “We are sorry, but surely, you understand how it is in our campus, right? Where every building looks exactly like the next? Plus, this Mr. Beau barely gave us any details.”
                        <br /><br />
                        (person 2 adds something insignificant that is sassier)
                        <br /><br />
                        <span className="text-yellow-100">“Oh, they ask so nicely! Why do I consist of such haughtiness?! They haven’t done a single bad thing to me. <button onClick={() => setCurrentPage('betrayedPrinciples')}
                            className="cursor-pointer text-(--normal) underline hover:font-bold transition-all duration-200 text-start">I have betrayed my own principles…”</button></span>
                    </p>

                </TextBox>

                <div className="flex flex-col flex-1 w-full h-full gap-2.5">

                </div>

            </div>

        )
    }

    // from mustCounter
    if (currentPage === 'betrayedPrinciples') {
        return (

            <div className="flex flex-col text-center gap-6 w-screen px-[18px] lg:px-[60px] h-screen py-6 xl:py-11">

                <TextBox>

                    <p>
                        You realize that you have been such a terrible and unfair interlocutor even though you haven’t spoken one word! Unbelievable; years of (digital and way-too-intimate duologues accumulating rhetorical poison) have created such an evil spirit! “And, oh, to think that I was stupid enough to let it show … what can I ever say to compensate…?” 
                        <br /><br />
                        <button onClick={() => setCurrentPage('betrayedPrinciples2')}
                            className="cursor-pointer text-(--normal) underline hover:font-bold transition-all duration-200 text-start">The Shame Demon stares glaringly.</button>
                        <br /><br />
                        
                    </p>

                </TextBox>

                <div className="flex flex-col flex-1 w-full h-full gap-2.5">

                </div>

            </div>

        )
    }

    // from betrayedPrinciples
    if (currentPage === 'betrayedPrinciples2') {
        return (

            <div className="flex flex-col text-center gap-6 w-screen px-[18px] lg:px-[60px] h-screen py-6 xl:py-11">

                <TextBox>

                    <p>
                        [Student 1 seems to notice your haze within the split second and adds]: “Or, perhaps, you can point us to somebody who does know, I realize that this may be a very awkward spot to talk.”
                        <br /><br />
                        <span className="text-yellow-100">“Oh, how considerate… If I wasn’t so CONCEITED and not immediately PETULATE I might weep a tear or two.’</span>
                        <br /><br />
                        Ten very long seconds have passed, and a group of friends from outside the canteen — though still far away — appear to walk toward your party and inside. The three of you instinctively step aside. 
                        <br /><br />
                        <span className="text-yellow-100">“Now, I must say something.”</span>
                        <br /><br />
                        To ease the interaction and, above all, your state of mind, <button onClick={() => setCurrentPage('shouldCompensate')}
                            className="cursor-pointer text-(--normal) underline hover:font-bold transition-all duration-200 text-start">you should compensate!</button>
                    </p>

                </TextBox>

                <div className="flex flex-col flex-1 w-full h-full gap-2.5">

                </div>

            </div>

        )
    }

    // from betrayedPrinciples2
    if (currentPage === 'shouldCompensate') {
        return (

            <div className="flex flex-col text-center gap-6 w-screen px-[18px] lg:px-[60px] h-screen py-6 xl:py-11">

                <TextBox>

                    <p>
                        You begin to tell an overly and unnecessarily detailed description of Mr. Beau’s office, along with where he usually hangs out, what brand of shirt he likes, what type of coffee he likes, and even the last five digits of social security number. In addition to merely pointing, you wholly narrate the account of walking toward his room, with your speech inadvertently loud and nimble.
                        <br /><br />
                        For conversing with them with such enthusiasm, it seems, caught the attention of a group of students sitting not far from your left. What a surprise, it’s the same dudes that stared at you under the pink tree. 
                        <br /><br />
                        <span className="text-yellow-100">“How small is this faculty??” </span>
                        <br /><br />
                        This time, however, they were wearing basketball gears, presumably preparing themselves to play in the gym, seeing as they’re not sweating.
                        <br /><br />
                        <button onClick={() => setCurrentPage('doneHorrificJob')}
                            className="cursor-pointer text-red-300 underline hover:font-bold transition-all duration-200 text-start">You’ve done a horrific job of keeping yourself in check.</button> 
                    </p>

                </TextBox>

                <div className="flex flex-col flex-1 w-full h-full gap-2.5">

                </div>

            </div>

        )
    
    }

    // from shouldCompensate
    if (currentPage === 'doneHorrificJob') {
        return (

            <div className="flex flex-col text-center gap-6 w-screen px-[18px] lg:px-[60px] h-screen py-6 xl:py-11">

                <TextBox>

                    <p>
                        <span className="text-yellow-100">“YEAH! YOU’RE TELLING ME.”</span>
                        <br /><br />
                        The two students both thank you with civility like no other for giving clear directions.
                        <br /><br />
                        <span className="text-yellow-100">“Oh, how undeserving am I to even stand before these people…”</span>
                    </p>

                </TextBox>

                <div className="flex flex-col flex-1 w-full h-full gap-2.5">

                    <ActionButton onClick={() => setCurrentPage('standStill')} text=" Stand still and excessively dwell on what just happened." />

                    <ActionButton onClick={() => setCurrentPage('goToCanteen')} text="Go inside the canteen as you were." />

                </div>

            </div>

        )
    
    }
    
    // from doneHorrificJob
    if (currentPage === 'standStill') {
        return (

            <div className="flex flex-col text-center gap-6 w-screen px-[18px] lg:px-[60px] h-screen py-6 xl:py-11">

                <TextBox>

                    <p>
                        <button onClick={() => setCurrentPage('doneHorrificJob')}
                            className="cursor-pointer text-(--normal) underline hover:font-bold transition-all duration-200 text-start">Why would you do that?</button>
                    </p>

                </TextBox>

                <div className="flex flex-col flex-1 w-full h-full gap-2.5">

                </div>

            </div>

        )
    
    }

    // from doneHorrificJob
    if (currentPage === 'goToCanteen') {
        return (

            <div className="flex flex-col text-center gap-6 w-screen px-[18px] lg:px-[60px] h-screen py-6 xl:py-11">

                <TextBox>

                    <p>
                        What do?
                    </p>

                </TextBox>

                <div className="flex flex-col flex-1 w-full h-full gap-2.5">

                    <ActionButton onClick={() => setCurrentPage('findASeat')} text="Find a seat before ordering and sit still and excessively dwell on what just happened." />

                    <ActionButton onClick={() => setCurrentPage('approachMainCounter')} text="Approach the main counter and order (something) to eat and drink." />

                </div>

            </div>

        )
    
    }

    // from goToCanteen
    if (currentPage === 'findASeat') {
        return (

            <div className="flex flex-col text-center gap-6 w-screen px-[18px] lg:px-[60px] h-screen py-6 xl:py-11">

                <TextBox>

                    <p>
                        <button onClick={() => setCurrentPage('goToCanteen')}
                            className="cursor-pointer text-(--normal) underline hover:font-bold transition-all duration-200 text-start">Why would you do that (because, he kinda says to himself, he cannot get it out his mind!)</button>
                    </p>

                </TextBox>

                <div className="flex flex-col flex-1 w-full h-full gap-2.5">

                </div>

            </div>

        )
    
    }

    // from goToCanteen
    if (currentPage === 'approachMainCounter') {
        return (

            <div className="flex flex-col text-center gap-6 w-screen px-[18px] lg:px-[60px] h-screen py-6 xl:py-11">

                <TextBox>

                    <p className="text-yellow-100">
                        “Hmm … What should I eat for lunch?”
                    </p>

                </TextBox>

                <div className="flex flex-col flex-1 w-full h-full gap-2.5">

                    <ActionButton onClick={() => setCurrentPage('onCashier')} text="Teriyaki Chicken and Rice with Stir-Fried Broccoli." />

                    <ActionButton onClick={() => setCurrentPage('onCashier')} text="Bolognese Fusilli." />

                    <ActionButton onClick={() => setCurrentPage('clubSandwich')} text="Club Sandwich." />

                </div>

            </div>

        )
    
    }

    // from approachMainCounter
    if (currentPage === 'clubSandwich') {
        return (

            <div className="flex flex-col text-center gap-6 w-screen px-[18px] lg:px-[60px] h-screen py-6 xl:py-11">

                <TextBox>

                    <p>
                        You don’t like lettuce. <button onClick={() => setCurrentPage('clubSandwich2')}
                            className="cursor-pointer text-(--normal) underline hover:font-bold transition-all duration-200 text-start">Just … take out the lettuce?</button>
                    </p>

                </TextBox>

                <div className="flex flex-col flex-1 w-full h-full gap-2.5">

                </div>

            </div>

        )
    
    }

    // from clubSandwich
    if (currentPage === 'clubSandwich2') {
        return (

            <div className="flex flex-col text-center gap-6 w-screen px-[18px] lg:px-[60px] h-screen py-6 xl:py-11">

                <TextBox>

                    <p className="text-yellow-100">
                        “But many others are ordering beside and behind me. What will they think of the weird request? Maybe I should just order it as usual and take the lettuce out manually.”
                        <br /><br />
                        “......”
                    </p>

                </TextBox>

                <div className="flex flex-col flex-1 w-full h-full gap-2.5">

                    <ActionButton onClick={() => setCurrentPage('onCashier')} text="“Do just that.”" />

                    <ActionButton onClick={() => setCurrentPage('clubSandwich3')} text="“Oh, who cares?! Be a lad and just order without it!”" />

                </div>

            </div>

        )
    
    }

    // from clubSandwich2
    if (currentPage === 'clubSandwich3') {
        return (

            <div className="flex flex-col text-center gap-6 w-screen px-[18px] lg:px-[60px] h-screen py-6 xl:py-11">

                <TextBox>

                    <p>
                        “Ahh….. What a glorious sensation. <button onClick={() => setCurrentPage('onCashier')}
                            className="cursor-pointer text-(--normal) underline hover:font-bold transition-all duration-200 text-start">Take THAT, DEMON!”</button>
                    </p>

                </TextBox>

                <div className="flex flex-col flex-1 w-full h-full gap-2.5">

                </div>

            </div>

        )
    
    }

    // from clubSandwich3 and approachMainCounter
    if (currentPage === 'onCashier') {
        return (

            <div className="flex flex-col text-center gap-6 w-screen px-[18px] lg:px-[60px] h-screen py-6 xl:py-11">

                <TextBox>

                    <p>
                        The cashier tells you that the food will probably take longer than usual since the place is crowded. Since you plan to eat alone anyways, and have no obligation urgently due, 
                        <br /><br />
                        <span className="text-yellow-100">“Eh, whatever, it’s fine.”</span>
                        <br /><br />
                        You buy a cold bottle of water and walk around the large room to try and find an empty seat.
                        <br /><br />
                        Fortunately, almost at the very south corner of the canteen is an entirely empty bench, isolated, and with the neighboring being unoccupied as well. After walking unnecessarily fast, you excitedly occupy it. Since your very favorable position muffles the surrounding commotion, you decide to try and read a book again to try and prove yourself that you, indeed, are MORE THAN CAPABLE to fend your <i>demon</i> off.
                    </p>

                </TextBox>

                <div className="flex flex-col flex-1 w-full h-full gap-2.5">

                    <ActionButton onClick={() => setCurrentPage('onCanteen')} text="Continue Pride and Prejudice (currently on chapter 46)" />

                    <ActionButton onClick={() => setCurrentPage('onCanteen')} text="Start Le Petit Prince!" />

                </div>

            </div>

        )
    
    }

    // from onCashier
    if (currentPage === 'onCanteen') {
        return (

            <div className="flex flex-col text-center gap-6 w-screen px-[18px] lg:px-[60px] h-screen py-6 xl:py-11">

                <TextBox>

                    <p>
                        Curiously, for some mysterious reason, despite how many would view the atmosphere as uncomfortable for reading, you find more success in the process. Perhaps it’s because of the consideration that the discomfort would be more profound when opening the phone to watch short-form videos compared to that when reading a book.
                        <br /><br />
                        <span className="text-yellow-100">“Oh, who cares? If anything, it is good news.”</span>
                        <br /><br />
                        Just on the corner of your vision is the sight of that same group of students from outside. Due to the gestating rain, they migrate inside the building to seek shelter. For some godforsaken reason, they still occasionally stare at you weird.
                        <br /><br />
                        <button onClick={() => setCurrentPage('?!?!?')}
                            className="cursor-pointer text-(--normal) underline hover:font-bold transition-all duration-200 text-start">?!?!??!?!!?!?!?!</button>
                    </p>

                </TextBox>

                <div className="flex flex-col flex-1 w-full h-full gap-2.5">

                </div>

            </div>

        )
    
    }

    // from onCanteen
    if (currentPage === '?!?!?') {
        return (

            <div className="flex flex-col text-center gap-6 w-screen px-[18px] lg:px-[60px] h-screen py-6 xl:py-11">

                <TextBox>

                    <p className="text-yellow-100">
                        “What now?! Is it because … Oh, the way I sit?? Could it be? This is a STANDARD LEG CROSS. I wish to gain, at this very moment, the trait of omnipotence so that I can banish this enmity from all of your minds! You all must be dull souls; this is a perfectly comfortable position to read. SHAME ON YOU.”
                        <br /><br />
                        <button onClick={() => setCurrentPage('shameOnYou')}
                            className="cursor-pointer text-(--normal) underline hover:font-bold transition-all duration-200 text-start">“No, shame on you…”</button>
                    </p>

                </TextBox>

                <div className="flex flex-col flex-1 w-full h-full gap-2.5">

                </div>

            </div>

        )
    
    }

    // from ?!?!?
    if (currentPage === 'shameOnYou') {
        return (

            <div className="flex flex-col text-center gap-6 w-screen px-[18px] lg:px-[60px] h-screen py-6 xl:py-11">

                <TextBox>

                    <p>
                        You open your phone, but this time with a clear purpose. You ask your buddy Fick to ask him where he’s at. For all one knows, maybe the company of an authentic personality is all you need to calm down. And, fortunately, his tendency to respond to text messages jiffy quick makes it all better.
                        <br /><br />
                        Fick tells you that he’s currently waiting for his Beef Fried Rice … Oh, he’s here!
                        <br /><br />
                        <button onClick={() => setCurrentPage('shouldITextFick')}
                            className="cursor-pointer text-(--normal) underline hover:font-bold transition-all duration-200 text-start">“Should I text him where I’m at, or should I just approach him?”</button>
                    </p>

                </TextBox>

                <div className="flex flex-col flex-1 w-full h-full gap-2.5">

                </div>

            </div>

        )
    
    }

    // from shameOnYou
    if (currentPage === 'shouldITextFick') {
        return (

            <div className="flex flex-col text-center gap-6 w-screen px-[18px] lg:px-[60px] h-screen py-6 xl:py-11">

                <TextBox>

                    <p>
                        <button onClick={() => setCurrentPage('doneHorrificJob')}
                            className="cursor-pointer text-(--normal) underline hover:font-bold transition-all duration-200 text-start">Why would you do that?</button>
                    </p>

                </TextBox>

                <div className="flex flex-col flex-1 w-full h-full gap-2.5">

                    <ActionButton onClick={() => setCurrentPage('findASeat')} text="Find a seat before ordering and sit still and excessively dwell on what just happened." />

                    <ActionButton onClick={() => setCurrentPage('approachMainCounter')} text="Approach the main counter and order (something) to eat and drink." />

                </div>

            </div>

        )
    
    }

    if (currentPage === 'goToCanteen') {
        return (

            <div className="flex flex-col text-center gap-6 w-screen px-[18px] lg:px-[60px] h-screen py-6 xl:py-11">

                <TextBox>

                    <p>
                        <button onClick={() => setCurrentPage('doneHorrificJob')}
                            className="cursor-pointer text-(--normal) underline hover:font-bold transition-all duration-200 text-start">Why would you do that?</button>
                    </p>

                </TextBox>

                <div className="flex flex-col flex-1 w-full h-full gap-2.5">

                    <ActionButton onClick={() => setCurrentPage('findASeat')} text="Find a seat before ordering and sit still and excessively dwell on what just happened." />

                    <ActionButton onClick={() => setCurrentPage('approachMainCounter')} text="Approach the main counter and order (something) to eat and drink." />

                </div>

            </div>

        )
    
    }

}

export default App;