import { GameState } from '../types/GameState'
import { Ctx } from 'boardgame.io'
import { beachFunctions } from '../types/Beach';
import { INVALID_MOVE } from 'boardgame.io/core'
export const GlobalMoves = {
    click: (G: GameState, ctx: Ctx) => {
        G.clicks = G.clicks + 1
    },
    placeBoat: (G: GameState, ctx: Ctx, beachIndex: number) => {
        if (!beachFunctions.checkCapacity(G.beaches[beachIndex])) {
            return INVALID_MOVE
        }

        G.beaches[beachIndex].playerIds.push(G.boatToPlace)
        G.boatToPlace = -1
        if (G.beaches[beachIndex].capacity.length === G.beaches[beachIndex].playerIds.length) {
            G.boatsInHand = G.beaches[beachIndex].playerIds.map((x) => x)
            G.beaches[beachIndex].playerIds = []
        }
        if (G.boatsInHand.length === 0 && ctx.events !== undefined && ctx.events.endTurn !== undefined) {
            G.boatsPicked = false
            ctx.events.endTurn()
        }
    },
    selectBoatToPlace: (G: GameState, ctx: Ctx, boatIndex: number) => {
        G.boatToPlace = G.boatsInHand[boatIndex]
        G.boatsInHand.splice(boatIndex, 1)
    },
    pickBoats: (G: GameState, ctx: Ctx, amount: number = 1) => {
        const playerID: number = Number(ctx.currentPlayer)
        const boats = G.players[playerID].boats
        G.players[playerID].boats = boats - amount
        G.boatsInHand = [playerID]
        G.boatsPicked = true
    }
}