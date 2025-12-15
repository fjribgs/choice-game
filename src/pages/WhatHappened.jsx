import ActionButton from "../components/ActionButton"
import TextBox from "../components/TextBox"
import NextButton from "../components/NextButton"

export function WhatHappened( {
    currentPage, 
    setCurrentPage, 
    isLeftVisited, 
    isRightVisited, 
    isForwardVisited,
    setIsLeftVisited,
    setIsRightVisited,
    setIsForwardVisited
    } ) {

        if (currentPage === 'whatHappened') {
            return (
                <div className="flex flex-col h-screen text-center w-screen px-3 sm:px-[18px] lg:px-[60px] pb-12 py-6 xl:py-11">

                    <TextBox>

                        <p className={`${isForwardVisited && isLeftVisited && isRightVisited ? "hidden" : ""}`}>
                            <span className={`${isLeftVisited || isRightVisited || isForwardVisited ? "hidden" : ""}`}>
                                You come across an intersection, each path full of Microglian trash, and full of Axon clumps in critical condition. It is probably the place where Microglia stashed and occupied these Axons. But why is everything dead? Aren’t the Microglia supposed to thrive here? Oh, well, a boring and enigmatic quest, it may turn out, but a safe one it fortunately is. 
                            </span>
                            There must be a way to the throne room of the Microglian Leader here somewhere.
                            <div className="h-5"></div>
                        </p>

                        <p className={`${isForwardVisited && isLeftVisited && isRightVisited ? "" : "hidden"}`}>
                            What?
                        </p>

                    </TextBox>

                    <div className="flex-col flex-1 w-full py-6 gap-2.5 flex">

                        <div className={`${isLeftVisited ? "hidden" : ""}`}>
                            <ActionButton text='Go left.' onClick={() => {
                                setCurrentPage('goLeft');
                                setIsLeftVisited(true)
                            }}/>
                        </div>

                        <div className={`${isRightVisited ? "hidden" : ""}`}>
                            <ActionButton text='Go right.' onClick={() => {
                                setCurrentPage('goRight');
                                setIsRightVisited(true)
                            }}/>
                        </div>

                        <div className={`${isForwardVisited ? "hidden" : ""}`}>
                            <ActionButton text='Go forward.' onClick={() => {
                                setCurrentPage('goForward');
                                setIsForwardVisited(true)
                            }}/>
                        </div>

                        <div className={`${isForwardVisited && isLeftVisited && isRightVisited ? "" : "hidden"}`}>
                            <ActionButton text='What?' onClick={() => {
                                setCurrentPage('what');
                            }}/>
                        </div>

                    </div>

                </div>
            )
        }

        if (currentPage === 'goLeft') {
            return (
                <div className="flex flex-col h-screen text-center w-screen px-3 sm:px-[18px] lg:px-[60px] pb-12 py-6 xl:py-11">

                    <TextBox>

                        <p>
                            Thank Hypothalamus that this one is still salvageable. Occupying the Axon seats shouldn’t take longer than a couple seconds. This specific clump appears to be taken on the account of Timmy’s terrible memory with his friends while playing basketball not two weeks ago. Timmy slapped his friend’s, TJ’s, butt after a score as a sign of respect. The others immediately dubbed him “Timmy Long Hands.” Although the slap was clearly respectful, the nickname persisted because the context of it as a normal occurrence was abandoned, leaving only an embarrassing joke. 
                            <br /><br />
                            Wow … How unfun is life to take these things so to heart? 
                            <br /><br />
                            How did such an insignificant memory result in that large of an Axon clump? Oh, no one can be certain. What IS certain, however, is that this path may just lead straight to the throne room — there are no signs of a dead end anytime soon.
                            <br /><br />
                            …
                            <br /><br />
                            <NextButton text='Oh, shucks, a jinx. ' onClick={() => setCurrentPage('whatHappened')}/>
                            <div className="h-5"></div>
                        </p>

                    </TextBox>

                    <div className="flex-col flex-1 w-full py-6 gap-2.5 hidden">

                    </div>

                </div>
            )
        }

        if (currentPage === 'goRight') {
            return (
                <div className="flex flex-col h-screen text-center w-screen px-3 sm:px-[18px] lg:px-[60px] pb-12 py-6 xl:py-11">

                    <TextBox>

                        <p>
                            Oops, a short dead end. You just drifted into a wall. There is a big Axon clump resting at the bottom, though.
                            <br /><br />
                            It’s … just … Timmy going to the wrong class for five minutes and receiving weird stares…? Why is the clump this huge? And how significant of an aversion does Timmy have to mere glances?? <NextButton text='Odd lad, he is.' onClick={() => setCurrentPage('whatHappened')}/>
                            <div className="h-5"></div>
                        </p>

                    </TextBox>

                    <div className="flex-col flex-1 w-full py-6 gap-2.5 hidden">

                    </div>

                </div>
            )
        }

        if (currentPage === 'goForward') {
            return (
                <div className="flex flex-col h-screen text-center w-screen px-3 sm:px-[18px] lg:px-[60px] pb-12 py-6 xl:py-11">

                    <TextBox>

                        <p>
                            While the dead end is visible from the intersection, there is a clump to salvage! This one looks to be the biggest ever recorded. What could have possibly caused this behemoth? 
                            <br /><br />
                            This one seems to tell a very fresh and familiar story — it’s Jasper’s scolding. How lucky that you can find out for yourself? By the looks of it, Jasper was mad at Timmy for the matter of rash improvisation. Jasper seemed to not have been very fond of Timmy’s independent decision to arrange the spice rack by chemical compound name — deeming it “unnecessarily idiotic” and that such stupidity is so quintessential of Timmy. Since Timmy doesn’t cook, and Jasper loves to, the scolding was protracted. Jasper’s voice was so loud and angry that Timmy kept stuttering and couldn’t even talk back much. The sensory symbols also indicate that Timmy was shaking for a long time even after Jasper was finished.  
                            <br /><br />
                            Well, it would seem that the size of this clump proved <NextButton text='understandable.' onClick={() => setCurrentPage('whatHappened')}/>
                            <div className="h-5"></div>
                        </p>

                    </TextBox>

                    <div className="flex-col flex-1 w-full py-6 gap-2.5 hidden">

                    </div>

                </div>
            )
        }
    
}