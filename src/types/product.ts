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
    status: "success" | "fail" | "error",
    data: Product[]
}

export type ProductResponse = {
    status: "success" | "fail" | "error",
    data: Product
}

export type CreateProduct = {
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