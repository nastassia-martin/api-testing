import axios from "axios"

const BASE_URL = import.meta.env.VITE_API_BASE_URL

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


/**
 * Get a single product
 */

/**
 * Create a product
 */


/**
 * Update a - don't need this?
 */

/**
 * Delete a - don't need this?
 */