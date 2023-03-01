
export const getCardSelector = state => {
    return state.card.card
}

export const getStarterSelector = state => {
    const starters = state.card.card.filter(item => item.type === 'starter')

    return starters
}

export const getMainSelector = state => {
    const mains = state.card.card.filter(item => item.type === 'main')

    return mains
}

export const getDessertSelector = state => {
    const desserts = state.card.card.filter(item => item.type === 'dessert')

    return desserts
}
