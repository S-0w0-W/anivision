import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import "../css/projects.css"
import Aos from "aos";
import "aos/dist/aos.css";

const useStyles = makeStyles({
  media: {
    height: 140,
  },
});

export default function MediaCard() {
  const classes = useStyles();
  useEffect(()=>{
      Aos.init()
  }, [])

  return (
    <div 
        data-aos="fade-up"
        data-aos-duration="800"
    >
        <Card className="cardStyle">
        <CardActionArea>
            <CardMedia
            className={classes.media}
            image="/static/images/cards/contemplative-reptile.jpg"
            title="Contemplative Reptile"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                Lizard
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
            </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button size="small" color="primary">
            Share
            </Button>
            <Button size="small" color="primary">
            Learn More
            </Button>
        </CardActions>
        </Card>
    </div>
  );
}