import { Container } from "@mui/material";
import React from "react";
import { Post } from "../Post/Post";

export default function Feed() {
  return (
    <Container sx={{ paddingTop: 10 }}>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </Container>
  );
}
