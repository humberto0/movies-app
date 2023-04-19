import { Avatar, ShellBar } from "@ui5/webcomponents-react";
import MovieIcon from "../../assets/movieIcon.png";
import ImageAvatar from "../../assets/humbertodev.png"

export const Header = () => {
  return (
    <ShellBar
      logo={<img src={MovieIcon} alt="Logo" />}
      primaryTitle="Movie App"
      show-notifications
      show-product-switch
    >
      <Avatar
        slot="profile"
      >
        <img src={ImageAvatar} alt="Avatar" />
      </Avatar>
      
    </ShellBar>
  );
};