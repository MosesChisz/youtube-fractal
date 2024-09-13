

export type Category = {
    _id: string;
    name: string;
    link: string;
    slug: string;
    image: string;
    createdAt: string
    submenu: SubCategory[];
};

export type SubCategory = {
    name: string;
    slug: string;
    link: string;
    parent: string;
};

export type Page = {
    _id: string;
    name: string;
    slug: string;
    link: string;
    createdAt?: string;
    subpage?: SubPage[];
};

export type SubPage = {
    _id: string;
    name: string;
    slug: string;
    link: string;
    parent?:string;
    createdAt?: string;
};

export type Product = {
    _id: string;
    name: string;
    feature: boolean;
    slug: string;
    description: string;
    category: string;
    subCategories: SubCategory[];
    brand: Brand;
    content: string;
    details: Detail[];
    questions: Question[];
    reviews: Review[];
    subProducts: SubProduct[];
};

export type Review = {
  rating: number;
    
}

export type Brand = {

}

export type Detail = {
    
}
export type Question = {
    
}
export type Style = {
    name: string;
    color: string;
    image: string;
}
export type Options = {
    images: string[];
    option: string;
    qty: number;
    price: number;
    discount: number;
    _id: string;
    sold: number;
}
export type SubProduct = {
    sku: string;
    style: Style;
    options: Options[];
    _id: string;
}