export type stilus = 'rock' | 'pop' | 'rap' | 'jazz' | 'metal'

export interface ZeneTipus {
    readonly id: number
    nev: string
    hossz: number
    stilus: stilus
    eloado: string
}

export const ZENELISTA: ZeneTipus[] = [
    {
        id: 1,
        nev: "Billie Jean",
        hossz: 294,
        stilus: "pop",
        eloado: "Michael Jackson"
    },
    {
        id: 2,
        nev: "Smells Like Teen Spirit",
        hossz: 301,
        stilus: "rock",
        eloado: "Nirvana"
    },
    {
        id: 3,
        nev: "Lose Yourself",
        hossz: 326,
        stilus: "rap",
        eloado: "Eminem"
    },
    {
        id: 4,
        nev: "Take Five",
        hossz: 324,
        stilus: "jazz",
        eloado: "Dave Brubeck"
    },
    {
        id: 5,
        nev: "Enter Sandman",
        hossz: 331,
        stilus: "metal",
        eloado: "Metallica"
    },
    {
        id: 6,
        nev: "Blinding Lights",
        hossz: 200,
        stilus: "pop",
        eloado: "The Weeknd"
    },
    {
        id: 7,
        nev: "Bohemian Rhapsody",
        hossz: 355,
        stilus: "rock",
        eloado: "Queen"
    },
    {
        id: 8,
        nev: "God's Plan",
        hossz: 198,
        stilus: "rap",
        eloado: "Drake"
    },
    {
        id: 9,
        nev: "What a Wonderful World",
        hossz: 140,
        stilus: "jazz",
        eloado: "Louis Armstrong"
    },
    {
        id: 10,
        nev: "Master of Puppets",
        hossz: 515,
        stilus: "metal",
        eloado: "Metallica"
    }
];
