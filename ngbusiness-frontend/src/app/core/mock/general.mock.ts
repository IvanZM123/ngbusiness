export function createListItems<T>(
    creator: () => T,
    quantity: number = 15
) {
    const items: Array<T> = [];

    for (let i = 0; i < quantity; i++) {
        items.push({ ...creator(), id: items.length });
    }

    return items;
};
