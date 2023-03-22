import axios from "axios"
import { CreateProduct, ProductResponse } from "../types/product"

const BASE_URL = import.meta.env.VITE_API_BASE_URL
console.log(BASE_URL)

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
 * Generic patch request - don't need this?
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
 * Get all products
 */
export const getProducts = async () => {
    return get<ProductResponse>(`/products`)
}

/**
 * Get a single product
 */
export const getProduct = async (id: number) => {
    return get<ProductResponse>(`/products/${id}`)
}
/**
 * Create a product
 */
export const createProduct = (product: CreateProduct) => {
    return post<ProductResponse>(`/products`, product)
}

/**
 * Update a - don't need this?
 */

/**
 * Delete a - don't need this?
 */