import Board from './Board'
import { Client } from 'boardgame.io/react'
import { GameState } from '../types/GameState';
import { Ctx } from 'boardgame.io'
import { Player } from '../types/Player';
import { GlobalMoves } from '../utils/GlobalMoves';
import { Beach } from '../types/Beach';
import { LandTile } from '../types/LandTile';
import lands from '../utils/LandTiles';

const createGame = (numberOfPlayers: number) => {
    return {
        name: "Tangioki",
        setup: () => {
            const players: Player[] = []
            for (let p = 0; p < numberOfPlayers; p++) {
                players.push({
                    id: p,
                    name: "Player " + (p+1),
                    boats: 30
                })
            }

            const beaches: Beach[] = []
            const landTiles: LandTile[] = lands(beaches)


            return ({
                players: players,
                beaches: beaches,
                clicks: 0,
                boatsInHand: [],
                boatToPlace: -1,
                boatsPicked: false,
                landTiles: landTiles
            })


        },
        moves: GlobalMoves,
        endIf: (G: GameState, ctx: Ctx) => {}
    }
}



const createClient = (numberOfPlayers: number) => {
    return Client({
        game: createGame(numberOfPlayers),
        numPlayers: numberOfPlayers,
        board: Board,
    })
}

export default createClient