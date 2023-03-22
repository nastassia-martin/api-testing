export type Product = {
    id: number,
    name: string,
    description: string,
    price: number,
    on_sale: boolean,
    images: {
        thumbnail: string,
        large: string
    },
    stock_status: string,
    stock_quantity: number
}

export type ProductsResponse = {
    status: string,
    data: Product[]
}

export type ProductResponse = {
    status: string,
    data: Product
}

export type CreateProduct = {
    id: number,
    name: string,
    description: string,
    price: number,
    on_sale: boolean,
    images: {
        thumbnail: string,
        large: string
    },
    stock_status: string,
    stock_quantity: number
}