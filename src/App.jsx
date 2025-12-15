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
import { Start } from "./pages/Start";
import { AttackAxonClump } from "./pages/AttackAxonClump";
import { ShootGun } from "./pages/ShootGun";
import { HaughtyCortex } from "./pages/HaughtyCortex";
import { LookAtThis } from "./pages/LookAtThis";
import { AmICorrect } from "./pages/AmICorrect";
import { Thump } from "./pages/Thump";
import { Why } from "./pages/Why";
import { NukeThem } from "./pages/NukeThem";
import { TrippleDots } from "./pages/TripleDots";
import { HaveAPlan } from "./pages/HaveAPlan";
import { WhereWasI } from "./pages/WhereWasI";
import { BeALad } from "./pages/BeALad";
import { TheInhibition } from "./pages/TheInhibition";
import { UrThrough } from "./pages/UrThrough";
import { WhatHappened } from "./pages/WhatHappened";
import { What } from "./pages/What";
import { YouClimb } from "./pages/youClimb";
import { ThroneRoom } from "./pages/ThroneRoom";
import { HellYeah } from "./pages/HellYeah";
import { ThrowTheBomb } from "./pages/ThrowTheBomb";
import { OpenTheDoor } from "./pages/OpenTheDoor";
import { OhGreatQuest } from "./pages/OhGreatQuest";

const pages = {
    'landingPage': LandingPage,
    'start': Start,
    'ohGreatQuest': OhGreatQuest,
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
    'rollOut': RollOut,
    'attackAxonClumpA': AttackAxonClump,
    'shootGun': ShootGun,
    'haughtyCortex': HaughtyCortex,
    'why': Why,
    'lookAtThis': LookAtThis,
    'amICorrect': AmICorrect,
    'thump': Thump,
    'nukeThem': NukeThem,
    'threeDots': TrippleDots,
    'haveAPlan': HaveAPlan,
    'whereWasI': WhereWasI,
    'beALad': BeALad,
    'theInhibition': TheInhibition,
    'urThrough': UrThrough,
    'whatHappened': WhatHappened,
    'what': What,
    'youClimb': YouClimb,
    'throneRoom': ThroneRoom,
    'hellYeah': HellYeah
}

function App() {
    const [currentPage, setCurrentPage] = useState('openTheDoor4');

    const [isNothingVisited, setIsNothingVisited] = useState(false);
    const [isOpenPhoneVisited, setIsOpenPhoneVisited] = useState(false);
    const [isLePetitVisited, setIsLePetitVisited] = useState(false);

    const [isAxonAVisited, setIsAxonAVisited] = useState(false);
    const [isAxonBVisited, setIsAxonBVisited] = useState(false);

    const [isDriftUpwardVisited, setIsDriftUpwardVisited] = useState(false);
    const [isDriftDownwardVisited, setIsDriftDownwardVisited] = useState(false);
    const [isDriftLaterallyVisited, setIsDriftLaterallyVisited] = useState(false);

    const [isLeftVisited, setIsLeftVisited] = useState(false);
    const [isRightVisited, setIsRightVisited] = useState(false);
    const [isForwardVisited, setIsForwardVisited] = useState(false);

    if (currentPage === 'kickSomeButt') {
        return <KickSomeButt
                    setCurrentPage={setCurrentPage}
                    isNothingVisited={isNothingVisited}
                    setIsNothingVisited={setIsNothingVisited}
                    isOpenPhoneVisited={isOpenPhoneVisited}
                    setIsOpenPhoneVisited={setIsOpenPhoneVisited} 
        />
    }

    if (currentPage === 'readBook') {
        return <ReadBook 
                    setCurrentPage={setCurrentPage}
                    isLePetitVisited={isLePetitVisited}
                    setIsLePetitVisited={setIsLePetitVisited}
        />
    }

    if (currentPage === 'rollOut') {
        return <RollOut 
                    setCurrentPage={setCurrentPage}
                    isAxonAVisited={isAxonAVisited}
                    isAxonBVisited={isAxonBVisited}
                    setIsAxonAVisited={setIsAxonAVisited}
                    setIsAxonBVisited={setIsAxonBVisited}
        />
    }

    if (currentPage === 'attackAxonClumpA') {
        return <AttackAxonClump 
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage}    
        />
    }

    if (currentPage === 'attackAxonClumpB') {
        return <AttackAxonClump 
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage}    
        />
    }

    if (currentPage === 'attackAxonClumpC') {
        return <AttackAxonClump 
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage}    
        />
    }

    if (currentPage === 'theInhibition' ||
        currentPage === 'theInhibition2' ||
        currentPage === 'driftUpward' ||
        currentPage === 'driftDownward' ||
        currentPage === 'zoom' ||
        currentPage === 'driftLaterally' ||
        currentPage === 'driftAhead' ||
        currentPage === 'areYouSure' ||
        currentPage === 'slipPast'
    ) {
        return <TheInhibition 
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage}
                    isDriftUpwardVisited={isDriftUpwardVisited}
                    setIsDriftUpwardVisited={setIsDriftUpwardVisited}
                    isDriftDownwardVisited={isDriftDownwardVisited}
                    setIsDriftDownwardVisited={setIsDriftDownwardVisited}
                    isDriftLaterallyVisited={isDriftLaterallyVisited}
                    setIsDriftLaterallyVisited={setIsDriftLaterallyVisited}
        />
    }

    if (currentPage === 'whatHappened' ||
        currentPage === 'goLeft' ||
        currentPage === 'goRight' ||
        currentPage === 'goForward'
    ) {
        return <WhatHappened 
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage}
                    isLeftVisited={isLeftVisited}
                    isRightVisited={isRightVisited}
                    isForwardVisited={isForwardVisited}
                    setIsLeftVisited={setIsLeftVisited}
                    setIsRightVisited={setIsRightVisited}
                    setIsForwardVisited={setIsForwardVisited}/>
    }

    if (currentPage === 'throwTheBomb' ||
        currentPage === 'throwTheBomb2' ||
        currentPage === 'throwTheBomb3'
    ) {
        return <ThrowTheBomb setCurrentPage={setCurrentPage}
                    currentPage={currentPage}/>
    }

    if (currentPage === 'openTheDoor' ||
        currentPage === 'openTheDoor2' ||
        currentPage === 'openTheDoor3' ||
        currentPage === 'openTheDoor4' ||
        currentPage === 'openTheDoor5' ||
        currentPage === 'openTheDoor6' ||
        currentPage === 'openTheDoor7'
    ) {
        return <OpenTheDoor setCurrentPage={setCurrentPage}
                    currentPage={currentPage}/>
    }
    
    const CurrentPage = pages[currentPage]

    if (CurrentPage) {
        return <CurrentPage setCurrentPage={setCurrentPage} />
    }
}

export default App;