export function createRandomNumber(min: number, max: number): number {
    return Math.floor(min + Math.random() * (max - min));
}

export function getValue(items: Array<any>) {
    return items[createRandomNumber(0, items.length)];
}
