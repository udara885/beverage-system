import { create } from "zustand"
import { Beverage } from "../types/types"

type BeverageState = {
  beverages: Beverage[]
  setBeverages: (beverages: Beverage[]) => void
  getBeverages: () => Promise<
    | {
        success: boolean
        message: string
      }
    | undefined
  >
  getBeverage: (id: string) => Promise<
    | {
        success: boolean
        message: string
      }
    | {
        success: boolean
        data: Beverage
      }
  >
  addBeverage: (newBeverage: Beverage) => Promise<{
    success: boolean
    message: string
  }>
  updateBeverage: (
    id: string,
    updatedBeverage: Beverage,
  ) => Promise<{
    success: boolean
    message: string
  }>
  deleteBeverage: (id: string) => Promise<{
    success: boolean
    message: string
  }>
}

export const useBeverageStore = create<BeverageState>((set) => ({
  beverages: [],
  setBeverages: (beverages) => set({ beverages }),
  getBeverages: async () => {
    const res = await fetch("/api/v1/beverages")
    const data = await res.json()
    if (!data.success) return { success: false, message: data.error }
    set({ beverages: data.data })
  },
  getBeverage: async (id) => {
    const res = await fetch(`/api/v1/beverages/${id}`)
    const data = await res.json()
    if (!data.success) return { success: false, message: data.error }
    return { success: true, data: data.data }
  },
  addBeverage: async (newBeverage) => {
    const res = await fetch("/api/v1/beverages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBeverage),
    })
    const data = await res.json()
    if (!data.success) return { success: false, message: data.error }
    set((state) => ({ beverages: [...state.beverages, data.data] }))
    return { success: true, message: "Beverage Added Successfully" }
  },
  updateBeverage: async (id, updatedBeverage) => {
    const res = await fetch(`/api/v1/beverages/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedBeverage),
    })
    const data = await res.json()
    if (!data.success) return { success: false, message: data.error }
    set((state) => ({
      beverages: state.beverages.map((beverage) =>
        beverage._id === id ? data.data : beverage,
      ),
    }))
    return { success: true, message: "Beverage Updated" }
  },
  deleteBeverage: async (id) => {
    const res = await fetch(`/api/v1/beverages/${id}`, {
      method: "DELETE",
    })
    const data = await res.json()
    if (!data.success) return { success: false, message: data.error }
    set((state) => ({
      beverages: state.beverages.filter((beverage) => beverage._id === id),
    }))
    return { success: true, message: data.message }
  },
}))
