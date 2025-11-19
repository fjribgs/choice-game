const scenes = {
    start: {
        text: "Kamu terbangun di hutan gelap...",
        choices: [
            { text: "Pergi ke kiri", next: "left" }
        ]
    },
    
    left: {
        text: "Kamu mati hh",
        choices: [
            { text: "Kembali ke halaman awal", next:"start"}
        ]
    }
}

export default scenes;