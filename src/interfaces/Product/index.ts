export interface ProductProps {
    id?:          number;
    title?:       string;
    price?:       number;
    description?: string;
    category?:    string;
    image?:      string;
}


export interface ProductPlatziProps {
    id:          number;
    title:       string;
    price:       number;
    description: string;
    category:    CategoryProductPlatzi;
    images:      string[];
}

export interface CategoryProductPlatzi {
    id:    number;
    name:  string;
    image: string;
}


