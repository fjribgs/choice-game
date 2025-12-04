import ActionButton from "../components/ActionButton"
import TextBox from "../components/TextBox"

export function Bedroom( {setCurrentPage} ) {
    return (
        <div id="bedroom"
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