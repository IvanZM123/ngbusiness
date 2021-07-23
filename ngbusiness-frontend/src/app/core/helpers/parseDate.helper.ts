const months: Array<string> = [
    "Ene", "Feb", "Mar", "Abr",
    "May", "Jun", "Jul", "Ago",
    "Sep", "Oct", "Nov", "Dic"
];

export function parseDate(date: Date): string {
    const currentDate: number = date.getDate();
    const month: string = months[date.getMonth()];
    const year: number = date.getFullYear();

    return `${ currentDate }.${ month }.${ year }`;
}
