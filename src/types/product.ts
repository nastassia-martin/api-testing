export type Product = {
    id: number,
    name: string,
    description: string,
    price: number,
    on_sale: boolean,
    images: object,
    stock_status: string,
    stock_quantity: number
}

export type CreateProduct = {
    id: number,
    name: string,
    description: string,
    price: number,
    on_sale: boolean,
    images: object,
    stock_status: string,
    stock_quantity: number
}