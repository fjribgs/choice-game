import ActionButton from "../components/ActionButton"
import TextBox from "../components/TextBox"

export function ReadBook( {setCurrentPage, isLePetitVisited, setIsLePetitVisited} ) {
    return (
            <div id="readBook"
                className="flex flex-col text-center gap-6 pb-12 w-screen px-[18px] lg:px-[60px] h-screen py-6 xl:py-11">

                <TextBox>

                    <p className="text-yellow-100">
                        {isLePetitVisited
                        ? ""
                        : "BINGO!!!!!!!!!!"}
                        <br /><br />
                        <span className="text-white">(What book will you read?)</span>
                    </p>

                </TextBox>

                <div className="flex flex-col flex-1 w-full h-full gap-2.5">

                    <button onClick={() => {
                        setCurrentPage('startLePetitPrince');
                        setIsLePetitVisited(true);
                        console.log(isLePetitVisited);
                    }}
                        className={`text-(--bg) text-[18px] xl:text-[22px] bg-(--normal) rounded-2xl px-20 py-2.5 font-semibold hover:bg-(--hover) hover:text-[20px] hover:xl:text-[26px] active:bg-(--active) active:xl:text-[20px] transition-all duration-200 cursor-pointer w-full
                        ${isLePetitVisited ? "hidden" : ""}`}>

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