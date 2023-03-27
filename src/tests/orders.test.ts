import { describe, it, expect } from 'vitest'
import * as OrdersAPI from '../services/ordersAPI'
import { CreateOrder } from '../types/order'

let order: CreateOrder = {
    //id,
    customer_first_name: "baba",
    customer_last_name: "didi",
    customer_address: "1234 lalalland",
    customer_postcode: "12345",
    customer_city: "Malmö",
    customer_email: "baba@didi.com",
    order_total: 24,
    order_items: [
        {
            product_id: 6545,
            qty: 3,
            item_price: 8,
            item_total: 24
        },
    ]
}

describe('OrdersAPI', () => {
    it('should return a list of all orders', async () => {
        // get a list of orders: getOrders
        const orders = await OrdersAPI.getOrders()

        expect(orders.status).toBe("success")
        expect(Array.isArray(orders.data)).toBe(true)
        expect([orders].length).toBeGreaterThan(0)
    })

    it('should create a new order', async () => {
        const newOrder = await OrdersAPI.createOrder(order)

        expect(newOrder.status).toBe("success")
        expect(newOrder.data).toMatchObject({
            id: expect.any(Number),
            customer_first_name: order.customer_first_name,
            customer_last_name: order.customer_last_name,
            customer_address: order.customer_address,
            customer_postcode: order.customer_postcode,
            customer_city: order.customer_city,
            customer_email: order.customer_email,
            order_total: order.order_total,
            Items: order.order_items
        })
        expect([newOrder].length).toBe(1)
    })

    it('should create and then return that order', async () => {

        const newOrder = await OrdersAPI.createOrder(order)
        const createdOrder = await OrdersAPI.getOrder(newOrder.data.id) // need to get the ID from the order, so must include in type

        expect(createdOrder.data).toStrictEqual(newOrder.data)
    })
})