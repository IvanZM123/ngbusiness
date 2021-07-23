import { Product, products } from "./products.mock";
import { createUser, User } from "./users.mock";

import { createRandomNumber, getValue } from "../helpers/random.helper";

export interface Order {
    id: number;
    user: User;
    date: Date;
    product: Product;
    total: number | string;
    address: string;
    status: string;
    quantity: number;
}

export enum Status {
    Pending = "PENDING",
    Progress = "PROGRESS",
    Complete = "COMPLETE"
}

const addresses: Array<string> = [
    "Resid Buenavista I Políg V Pje 12 No 32 Sta Tecla",
    "Resid Sta Teresa Cl El Jabalí No 29-H",
    "C C Plaza Suiza 2O Nvl Loc B-57",
    "Urb Metrópolis I Cl Las Rosas No 29-D Mejic",
    "Bo San Pedro 4 Av Sur Y 2 Cl Ote",
    "Cl José Mariano Méndez Y 8 Av Sur",
    "Carrt Litoral Km 112 Bo El Calvario, Usulutan",
    "Col Costa Rica Cl Limón No 2051",
    "57 Cl Pte Ent 18 Y 20 Av Sur",
    "Carrt Al Puerto De La Libertad",
    "Comu Rosa Virginia I Cl Ppal No 21, Soyapango",
    "Ps Gral Escalón Col Escalón Edif 4357 Loc 50",
    "Resid Peña Blanca Sda Madre Selva No 1019",
    "Col Campestre Av Víctor Manuel Mejía Lara No 59",
    "Blvd Del Hipódromo Edif Skyligth Center Loc 252",
    "Col Miramonte C C Metro Sur Loc 6 Rancho Alegre",
];

export const items: Array<string> = [
    Status.Pending,
    Status.Progress,
    Status.Complete
];

export function createOrder(): Order {
    const product: Product = getValue(products);
    const address: string = getValue(addresses);
    const status: string = items[createRandomNumber(0, 3)];
    const amount: number = createRandomNumber(1, 6);

    return {
        id: Date.now(),
        user: createUser(),
        total: Math.round(product.price * amount),
        product,
        quantity: amount,
        status,
        address,
        date: new Date()
    };
}
