"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type CartItem = {
    id: string | number;
    name: string;
    price: number;
    image?: string;
    type: "product" | "event";
    quantity: number;
    metadata?: {
        packageType?: string;
        team?: string;
        athlete?: string;
        date?: string;
    };
};

type CartContextType = {
    cart: CartItem[];
    addItem: (item: CartItem) => void;
    removeItem: (id: string | number, packageType?: string) => void;
    updateQuantity: (id: string | number, quantity: number, packageType?: string) => void;
    clearCart: () => void;
    cartTotal: number;
    itemCount: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
    const [cart, setCart] = useState<CartItem[]>([]);

    // Load cart from localStorage on mount
    useEffect(() => {
        const savedCart = localStorage.getItem("undrdawg-cart");
        if (savedCart) {
            try {
                setCart(JSON.parse(savedCart));
            } catch (e) {
                console.error("Failed to parse cart", e);
            }
        }
    }, []);

    // Save cart to localStorage on change
    useEffect(() => {
        localStorage.setItem("undrdawg-cart", JSON.stringify(cart));
    }, [cart]);

    const addItem = (item: CartItem) => {
        setCart((prevCart) => {
            // Check if item with same ID and packageType already exists
            const existingItemIndex = prevCart.findIndex(
                (i) => i.id === item.id && i.metadata?.packageType === item.metadata?.packageType
            );

            if (existingItemIndex > -1) {
                const newCart = [...prevCart];
                newCart[existingItemIndex].quantity += item.quantity;
                return newCart;
            }
            return [...prevCart, item];
        });
    };

    const removeItem = (id: string | number, packageType?: string) => {
        setCart((prevCart) =>
            prevCart.filter((i) => !(i.id === id && i.metadata?.packageType === packageType))
        );
    };

    const updateQuantity = (id: string | number, quantity: number, packageType?: string) => {
        if (quantity <= 0) {
            removeItem(id, packageType);
            return;
        }
        setCart((prevCart) =>
            prevCart.map((i) =>
                i.id === id && i.metadata?.packageType === packageType ? { ...i, quantity } : i
            )
        );
    };

    const clearCart = () => setCart([]);

    const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    const itemCount = cart.reduce((total, item) => total + item.quantity, 0);

    return (
        <CartContext.Provider
            value={{
                cart,
                addItem,
                removeItem,
                updateQuantity,
                clearCart,
                cartTotal,
                itemCount,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
}
