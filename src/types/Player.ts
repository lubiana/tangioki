export interface Player {
    id: number
    name: string
    boats: number
}

export const generatePlayer = (id: number, name: string, boats: number = 30) : Player => {
    return {
        id: id,
        name: name,
        boats: boats,
    }
}
