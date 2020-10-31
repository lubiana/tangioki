import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { LandTile } from '../types/LandTile';
import { Beach } from '../types/Beach';
import { Moves } from '../types/Moves';
import BeachView from './BeachView';

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

interface LandTileProps {
    land: LandTile
    beaches: Beach[]
    boatToPlace: number
    moves: Moves
}

const LandTileView: React.FC<LandTileProps> = ({land, beaches, boatToPlace, moves}) => {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h2">
          {land.name}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Points: {land.points}
        </Typography>
        {land.beachIds.map((beach: number, index: number) => {
            return (
                <Typography variant="body2" component="p">
                    <BeachView beach={beaches[beach]} beachIndex={beach} boatToPlace={boatToPlace} moves={moves} />
                <br />
                </Typography>
            )
        })}
      </CardContent>
      <CardActions>
        <Button size="small">Select</Button>
      </CardActions>
    </Card>
  );
}

export default LandTileView