export interface Category {
    id: number;
    name: string;
    icon?: string;
}

export interface Product {
    title: string;
    description: string;
    picture: string;
    price: number;
    categories: Array<Category>;
}

export const categories: Array<Category> = [
    { id: 1, name: "Computadoras", icon: "computer" },
    { id: 2, name: "Tecnologias", icon: "build" },
    { id: 3, name: "Plasmas", icon: "tv" },
    { id: 4, name: "Laptops", icon: "laptop" },
    { id: 5, name: "SmartTV", icon: "tv" },
    { id: 6, name: "Smartphone", icon: "phone_android" },
    { id: 7, name: "Teclados", icon: "keyboard" },
    { id: 8, name: "Celulares", icon: "phone_android" },
    { id: 9, name: "Tablets", icon: "" },
    { id: 10, name: "Auriculares" }
];

function addCategories(items: Array<number>): Array<Category> {
    return categories.filter(category => items.includes(category.id));
}

export const products: Array<Product> = [
    {
        picture: "https://www.techadvisor.com/cmsdata/reviews/3799750/ms_surface_laptop_go_review_12_thumb800.jpg",
        title: "Microsoft Surface",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
        price: 865,
        categories: addCategories([1, 2, 4])
    },
    {
        picture: "https://www.adslzone.net/app/uploads-adslzone.net/2020/10/smarttv.jpg",
        title: "SmartTV Lg",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
        price: 2250.95,
        categories: addCategories([2, 5])
    },
    {
        picture: "https://images.samsung.com/is/image/samsung/p5/mx/monitors/odyssey/images/odyssey_f09_mo_03.jpg?$ORIGIN_JPG$",
        title: "Monitor Samsung Odyssey",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
        price: 1250.99,
        categories: addCategories([2, 1])
    },
    {
        picture: "https://d500.epimg.net/cincodias/imagenes/2019/11/04/tablets/1572889946_893852_1572890179_noticia_normal.jpg",
        title: "Tablet LG Pad 5",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
        price: 465.90,
        categories: addCategories([9, 2])
    },
    {
        picture: "https://images-shoptime.b2w.io/produtos/01/00/img/32934/6/32934698_1GG.jpg",
        title: "Teclado Microsoft",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
        price: 58.75,
        categories: addCategories([7, 2])
    },
    {
        picture: "https://www.casanissei.com/media/catalog/product/cache/16a9529cefd63504739dab4fc3414065/1/6/1607506546_1610234.jpg",
        title: "Apple Airpods Max",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
        price: 45.25,
        categories: addCategories([10])
    }
];
