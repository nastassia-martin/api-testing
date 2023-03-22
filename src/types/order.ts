export type Order = {
    id: number,
    order_date: Date,
    customer_first_name: string,
    customer_last_name: string,
    customer_address: string,
    customer_postcode: string,
    customer_city: string,
    customer_email: string,
    customer_phone?: number | null
    order_total: number,
    created_at: Date,
    updated_at: Date
}

export type Item = {
    id: number,
    order_id: number,
    product_id: number,
    qty: number,
    item_price: number,
    item_total: number
}