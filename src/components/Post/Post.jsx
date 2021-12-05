import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { PostWrapper } from "./styles";

export const Post = () => {
  return (
    <PostWrapper>
      <CardMedia
        component="img"
        height="240"
        image="https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Fluffy
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos nihil
          consectetur aliquam cupiditate optio. Fugit delectus necessitatibus
          maiores minima, velit quos natus, inventore accusamus consectetur odit
          tempora cupiditate. Ex, aut. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quod unde fugit, cupiditate culpa vero illo,
          molestias, dignissimos corrupti aut atque delectus asperiores cum
          minima porro modi tenetur dolore eum hic.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </PostWrapper>
  );
};
