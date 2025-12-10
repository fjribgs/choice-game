import ActionButton from "../components/ActionButton"
import TextBox from "../components/TextBox"
import NextButton from "../components/NextButton"

export function AttackAxonClump( {currentPage, setCurrentPage} ) {

    if (currentPage === 'attackAxonClumpA') {

        return (
            <div id="continuePridePrejudice"
                className="flex flex-col text-center pb-12 gap-6 w-screen px-3 sm:px-[18px] lg:px-[60px] h-screen py-6 xl:py-11">

                <TextBox>

                    <p>
                        Aha! Acetylcholine ammunition; <NextButton text="truly the best!" onClick={() => setCurrentPage('rollOut')}/>
                    </p>

                </TextBox>

                <div className="hidden flex-col flex-1 w-full h-full gap-2.5">

                </div>

            </div>
        )
    }

    if (currentPage === 'attackAxonClumpB') {
        return (
            <div id="lmao"
                className="flex flex-col text-center pb-12 gap-6 w-screen px-3 sm:px-[18px] lg:px-[60px] h-screen py-6 xl:py-11">

                <TextBox>

                    <p>
                        Oh … Those aren’t Microglia. Those are other Dopaminergic Neurons. OOPS! Thankfully your kin is immune to them. <NextButton text="Not one will notice." onClick={() => setCurrentPage('rollOut')}/>
                    </p>

                </TextBox>

                <div className="hidden flex-col flex-1 w-full h-full gap-2.5">

                </div>

            </div>
        )
    }

    if (currentPage === 'attackAxonClumpC') {
        return (
            <div id="lmao"
                className="flex flex-col text-center pb-12 gap-6 w-screen px-3 sm:px-[18px] lg:px-[60px] h-screen py-6 xl:py-11">

                <TextBox>

                    <p>
                        Oh, no, it’s completely enclosed in Microglia. You are outnumbered … What? They are … running away? With the strands? And not attacking? 
                        <br /><br />
                        DN-1: “Hey! New guy, don’t hide! Go after them! I’ll back you up.”
                        <br /><br />
                        Is he crazy? There are about thirty of them bunched up! It’s too late; at this point, they have noticed DN-1’s approach. <NextButton text="Jump out and shoot your gun." onClick={() => setCurrentPage('ShootGun')}/>
                    </p>

                </TextBox>

                <div className="hidden flex-col flex-1 w-full h-full gap-2.5">

                </div>

            </div>
        )
    }
}