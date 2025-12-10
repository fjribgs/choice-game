export function LandingPage( {setCurrentPage} ) {
    return (
        <div id="landingPage"
            className="flex flex-col items-center justify-center text-center gap-10 w-screen px-3 sm:px-[18px] lg:px-[60px]">

            <h1 className="font-normal text-[26px] xl:text-[37px] sm:text-[34px]">Electronic Literature <br />Final Project</h1>

            <button onClick={() => setCurrentPage('start')}
                className="text-(--bg) text-[18px] xl:text-[22px] bg-(--normal) rounded-2xl px-20 py-2.5 font-semibold hover:bg-(--hover) hover:text-[20px] hover:xl:text-[26px] active:bg-(--active) active:xl:text-[20px] transition-all duration-200 cursor-pointer">                    
                Start
            </button>
        </div>
    )
}