import axios from "axios"
import { CreateOrder, OrderResponse, OrdersResponse } from "../types/order"

const BASE_URL = "http://localhost:3000"

/**
 * Generic get request
 */

export const get = async <T>(endpoint: string) => {
    const res = await axios.get<T>(BASE_URL + endpoint)
    return res.data
}
/**
 * Generic post request
 */
export const post = async <T>(endpoint: string, data: any) => {
    const res = await axios.post<T>(BASE_URL + endpoint, data)
    return res.data
}

/**
 * Generic patch request - don't need ths?
 */
export const patch = async <T>(endpoint: string, data: any) => {
    const res = await axios.patch<T>(BASE_URL + endpoint, data)
    return res.data
}

/**
 * Generic delete request - don't need this?
 */
export const del = async (endpoint: string) => {
    const res = await axios.delete(BASE_URL + endpoint)
    return res.data
}

/**
 * Get all orders
 */
export const getOrders = async () => {
    return get<OrdersResponse>(`/orders`)
}
/**
 * Get a single order
 */
export const getOrder = async (id: number) => {
    return get<OrderResponse>(`/orders/${id}`)
}

/**
 * Create an order
 */
export const createOrder = (order: CreateOrder) => {
    return post<OrderResponse>(`/orders`, order)
}
/**
 * Update a  - don't need ths?
 */

/**
 * Delete a - don't need ths?
 */