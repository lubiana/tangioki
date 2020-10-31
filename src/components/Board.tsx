import React from 'react'
import { Ctx } from 'boardgame.io';
import { GameState } from '../types/GameState';
import { Player } from '../types/Player';
import { Beach } from '../types/Beach';
import BeachView from './BeachView';
import { Moves } from '../types/Moves';
import { createStyles, Grid, makeStyles, Theme } from '@material-ui/core';
import CurrentPlayer from './CurrentPlayer';
import { LandTile } from '../types/LandTile';
import LandTileView from './LandTileView';

interface BoardProps {
    ctx: Ctx
    G: GameState
    moves: any
}

    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            root: {
            flexGrow: 1,
            },
            paper: {
            height: 140,
            width: 100,
            },
            control: {
            padding: theme.spacing(2),
            },
        }),
    );


const Board: React.FC<BoardProps> = ({ctx, G, moves}) => {
    const internalMoves: Moves = moves
    const classes = useStyles()
    return (
        <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12}>
                <Grid container justify="center" spacing={2}>
                    {G.landTiles.map((value: LandTile, index: number) => {
                        return (
                            <Grid item key={index}>
                                <LandTileView land={value} beaches={G.beaches} boatToPlace={G.boatToPlace} moves={internalMoves} key={index} />
                            </Grid>
                        )
                    })}
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Grid container justify="center" spacing={2}>
                    {G.beaches.map((value: Beach, index: number) =>{
                        return (
                            <Grid item key={index}>
                                <BeachView beach={value} beachIndex={index} boatToPlace={G.boatToPlace} moves={internalMoves} />
                            </Grid>
                        )
                    })}
                </Grid>
            </Grid>
            {G.players.map((value: Player, index: number) => {
                return (
                    <CurrentPlayer 
                        player={value}
                        moves={internalMoves} 
                        boatsInHand={G.boatsInHand}
                        boatsPicked={G.boatsPicked} 
                        boatToPlace={G.boatToPlace} 
                        active={index === Number(ctx.currentPlayer)}
                    />
                )
            })}

        </Grid>
    )
}

export default Board