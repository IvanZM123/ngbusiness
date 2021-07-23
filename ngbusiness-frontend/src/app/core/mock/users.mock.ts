import { createRandomNumber, getValue } from "../helpers/random.helper";

export interface User {
    id: number;
    fullname: string;
    NIT: string | number;
    avatar: string;
    phone: string | number;
    createdAt: Date;
}

const firstNames: Array<string> = [
    "Matt",
    "Dave",
    "Dave",
    "Phil",
    "Sebastian",
    "Alissa",
    "Alice",
    "Marilyn",
    "Anthony",
    "James",
    "Ivan",
    "Chris",
];

const lastNames: Array<string> = [
    "Shadows",
    "Munstaine",
    "Anselmo",
    "Bach",
    "Grohl",
    "White",
    "Cooper",
    "Zaldivar",
    "Manson",
    "Kiedis",
    "Hetfield",
    "Motionless"
];

const phones: Array<number> = [
    22844267,
    26540475,
    25300652,
    26630361,
    22421349,
    22584329,
    22270654,
    26043203,
    23461135,
    24064709,
    22601468,
    26804139,
    22085815,
    22227330,
];

export function createdAt(): Date {
    const year: number = new Date().getFullYear();
    
    return new Date(
        createRandomNumber(2018, year),
        createRandomNumber(0, 11),
        createRandomNumber(1, 31)
    );
}

function generateAvatar(id: number) {
    return `https://i.pravatar.cc/300?img=${ id }`;
}

export function createUser() {
    const firstName: string = getValue(firstNames);
    const lastName: string = getValue(lastNames);
    const avatar: string = generateAvatar(createRandomNumber(0, 70));

    return {
        id: Date.now(),
        fullname: `${ firstName } ${ lastName }`,
        NIT: "0000-0000-0000-0",
        phone: phones[createRandomNumber(0, phones.length)],
        avatar,
        createdAt: createdAt()
    };
}
