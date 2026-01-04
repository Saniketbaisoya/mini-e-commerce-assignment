import { useEffect, useReducer } from "react";

function reducer(state, action) {
    switch (action.type) {
        case "ADD":
        const item = state[action.payload.id];
        return {
            ...state,
            [action.payload.id]: {
                ...action.payload,
                quantity: item ? item.quantity + 1 : 1
            }
        };

        case "REMOVE":
        const copy = { ...state };
        delete copy[action.payload];
        return copy;

        case "UPDATE":
        return {
            ...state,
            [action.payload.id]: {
            ...state[action.payload.id],
            quantity: action.payload.qty
            }
        };

        case "INIT":
        return action.payload;

        default:
        return state;
    }
}

export function useCart() {
    const [cart, dispatch] = useReducer(reducer, {});

    useEffect(() => {
        const saved = localStorage.getItem("cart");
        if (saved) dispatch({ type: "INIT", payload: JSON.parse(saved) });
    }, []);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    },    [cart]);

    return {
        cart,
        addToCart: product => dispatch({ type: "ADD", payload: product }),
        removeFromCart: id => dispatch({ type: "REMOVE", payload: id }),
        updateQty: (id, qty) =>
        dispatch({ type: "UPDATE", payload: { id, qty } })
    };
}
