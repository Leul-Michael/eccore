import { createContext, ReactNode, useContext, useState } from "react"
import { useLocalStorage } from "../hooks/useLocalStorage"

type CartItems = {
  id: number
  quantity: number
}

type ShoppingCartContextProps = {
  cartQty: number
  getItemQty: (id: number) => number
  increaseItemQty: (id: number) => void
  decreaseItemQty: (id: number) => void
  removeItem: (id: number) => void
  cartItems: CartItems[]
  isOpen: boolean
  closeCart: () => void
  openCart: () => void
}

type ShoppingProviderProps = {
  children: ReactNode
}

const ShoppingCartContext = createContext({} as ShoppingCartContextProps)

export function useShoppingCart() {
  return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({ children }: ShoppingProviderProps) {
  const [cartItems, setCartItems] = useLocalStorage<CartItems[]>(
    "shoppping-cart",
    []
  )
  const [isOpen, setIsOpen] = useState(false)

  function closeCart() {
    setIsOpen(false)
  }

  function openCart() {
    setIsOpen(true)
  }

  const cartQty = cartItems.reduce((quantity, item) => {
    return item.quantity + quantity
  }, 0)

  function getItemQty(id: number) {
    return cartItems.find((item) => item.id === id)?.quantity || 0
  }

  function increaseItemQty(id: number) {
    setCartItems((currentItems) => {
      if (currentItems.find((item) => item.id === id) == null) {
        return [...currentItems, { id, quantity: 1 }]
      } else {
        return currentItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 }
          } else {
            return item
          }
        })
      }
    })
  }

  function decreaseItemQty(id: number) {
    setCartItems((currentItems) => {
      if (currentItems.find((item) => item.id === id)?.quantity === 1) {
        return currentItems.filter((item) => item.id !== id)
      } else {
        return currentItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 }
          } else {
            return item
          }
        })
      }
    })
  }

  function removeItem(id: number) {
    setCartItems((currentItems) => {
      return currentItems.filter((item) => item.id !== id)
    })
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQty,
        increaseItemQty,
        decreaseItemQty,
        removeItem,
        cartQty,
        cartItems,
        closeCart,
        openCart,
        isOpen,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}
