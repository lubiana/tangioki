export interface Beach {
    capacity: number[]
    playerIds: number[]
}

export const generateBeach = (capacity: number): Beach => {
    return {
        capacity: [...Array(capacity).keys()],
        playerIds: []
    }
}

export const beachFunctions = {
    checkCapacity: (beach: Beach): boolean => {
        return beach.playerIds.length < beach.capacity.length
    },

    addSailor: (beach: Beach, playerId: number): boolean => {
        if (beachFunctions.checkCapacity(beach)) {
            return false
        }

        beach.playerIds.push(playerId)

        return true
    },

}