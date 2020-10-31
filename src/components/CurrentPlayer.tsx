import { Chip } from '@material-ui/core'
import React from 'react'
import { Player } from '../types/Player'
import { Moves } from '../types/Moves'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

interface CurrentPlayerProps {
    player: Player
    boatsInHand: number[]
    boatsPicked: boolean
    boatToPlace: number
    moves: Moves
    active: boolean
}

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

const CurrentPlayer: React.FC<CurrentPlayerProps> = ({ player, boatsInHand, boatsPicked, boatToPlace, moves, active }) => {
    const classes = useStyles();

    return (
        <Card className={classes.root} variant="outlined">
            <CardContent>
                <Typography variant="h5" component="h2">
                    {player.name}
                </Typography>
                <Typography variant="body2" component="p">
                    Boats: {player.boats}
                </Typography>
                {active &&
                    <div>
                        <Typography variant="body2" component="p">
                            BoatToPlace: {boatToPlace !== -1 &&
                                <Chip label={boatToPlace} color='primary' />
                            }
                        </Typography>
                        <Typography variant="body2" component="p">
                            BoatsInHand: {boatsInHand.map((item: number, index: number) => {
                            return (
                                <Chip label={item} key={index} onClick={() => { moves.selectBoatToPlace(index) }} color='primary' />
                            )
                        })}
                        </Typography>

                    </div>
                }
            </CardContent>
            <CardActions>
                {active && 
                    <Button size="small" onClick={() => { moves.pickBoats(1) }} disabled={boatsPicked}>
                        Pick boats
                    </Button>
                }
            </CardActions>
        </Card>
    )
}

export default CurrentPlayer