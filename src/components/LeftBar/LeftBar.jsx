import {
  CameraAlt,
  Home,
  People,
  List,
  SlowMotionVideo,
  Apps,
  Bookmark,
  Storefront,
  Settings,
  Logout,
} from "@mui/icons-material";
import React from "react";
import {
  ItemWrapper,
  LeftBarContainer,
  ItemDescription,
  IconWrapper,
} from "./styles";

export default function LeftBar() {
  return (
    <LeftBarContainer>
      <ItemWrapper>
        <IconWrapper>
          <Home />
        </IconWrapper>

        <ItemDescription>Home Page</ItemDescription>
      </ItemWrapper>
      <ItemWrapper>
        <IconWrapper>
          <People />
        </IconWrapper>

        <ItemDescription>Friends</ItemDescription>
      </ItemWrapper>
      <ItemWrapper>
        <IconWrapper>
          <List />
        </IconWrapper>

        <ItemDescription>Lists</ItemDescription>
      </ItemWrapper>
      <ItemWrapper>
        <IconWrapper>
          <CameraAlt />
        </IconWrapper>

        <ItemDescription>Camera</ItemDescription>
      </ItemWrapper>
      <ItemWrapper>
        <IconWrapper>
          <SlowMotionVideo />
        </IconWrapper>

        <ItemDescription>Videos</ItemDescription>
      </ItemWrapper>
      <ItemWrapper>
        <IconWrapper>
          <Apps />
        </IconWrapper>

        <ItemDescription>Apps</ItemDescription>
      </ItemWrapper>
      <ItemWrapper>
        <IconWrapper>
          <Bookmark />
        </IconWrapper>

        <ItemDescription>Collection</ItemDescription>
      </ItemWrapper>
      <ItemWrapper>
        <IconWrapper>
          <Storefront />
        </IconWrapper>

        <ItemDescription>Market Place</ItemDescription>
      </ItemWrapper>
      <ItemWrapper>
        <IconWrapper>
          <Settings />
        </IconWrapper>

        <ItemDescription>Settings</ItemDescription>
      </ItemWrapper>
      <ItemWrapper>
        <IconWrapper>
          <Logout />
        </IconWrapper>

        <ItemDescription>Logout</ItemDescription>
      </ItemWrapper>
    </LeftBarContainer>
  );
}
