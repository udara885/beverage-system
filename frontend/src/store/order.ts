import { create } from "zustand"
import { Order } from "../types/types"

type OrderState = {
  orders: Order[]
  setOrders: (orders: Order[]) => void
  getOrders: () => Promise<
    | {
        success: boolean
        message: string
      }
    | undefined
  >
  getOrder: (id: string) => Promise<
    | {
        success: boolean
        message: string
      }
    | {
        success: boolean
        data: Order
      }
  >
  createOrder: (newOrder: Order) => Promise<{
    success: boolean
    message: string
  }>
  updateOrder: (
    id: string,
    updatedOrder: Order,
  ) => Promise<{
    success: boolean
    message: string
  }>
  cancelOrder: (id: string) => Promise<{
    success: boolean
    message: string
  }>
}

export const useOrderStore = create<OrderState>((set) => ({
  orders: [],

  setOrders: (orders) => set({ orders }),

  getOrders: async () => {
    const res = await fetch("/api/v1/orders")
    const data = await res.json()
    if (!data.success) return { success: false, message: data.error }
    set({ orders: data.data })
  },

  getOrder: async (id) => {
    const res = await fetch(`/api/v1/orders/${id}`)
    const data = await res.json()
    if (!data.success) return { success: false, message: data.error }
    return { success: true, data: data.data }
  },

  createOrder: async (newOrder) => {
    const res = await fetch("/api/v1/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newOrder),
    })
    const data = await res.json()
    if (!data.success) return { success: false, message: data.error }
    set((state) => ({ orders: [...state.orders, data.data] }))
    return { success: true, message: "Order placed successfully" }
  },

  updateOrder: async (id, updatedOrder) => {
    const res = await fetch(`/api/v1/orders/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedOrder),
    })
    const data = await res.json()
    if (!data.success) return { success: false, message: data.error }
    set((state) => ({
      orders: state.orders.map((order) =>
        order._id === id ? data.data : order,
      ),
    }))
    return { success: true, message: "Order updated" }
  },

  cancelOrder: async (id) => {
    const res = await fetch(`/api/v1/orders/${id}`, {
      method: "DELETE",
    })
    const data = await res.json()
    if (!data.success) return { success: false, message: data.error }
    set((state) => ({
      orders: state.orders.filter((order) => order._id === id),
    }))
    return { success: true, message: data.message }
  },
}))
