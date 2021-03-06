import React from "react";
import "./SwipeButtons.css";
import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import StarRateIcon from "@material-ui/icons/StarRate";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import IconButton from "@material-ui/core/IconButton";

function SwipeButtons() {
  return (
    <div className="swipeButtons">
      <IconButton>
        <ReplayIcon
          fontSize="large"
          className="swipeButtons__repeat"
        ></ReplayIcon>
      </IconButton>
      <IconButton>
        <CloseIcon fontSize="large" className="swipeButtons__left"></CloseIcon>
      </IconButton>
      <IconButton>
        <StarRateIcon
          fontSize="large"
          className="swipeButtons__star"
        ></StarRateIcon>
      </IconButton>
      <IconButton>
        <FavoriteIcon
          fontSize="large"
          className="swipeButtons__right"
        ></FavoriteIcon>
      </IconButton>
      <IconButton>
        <FlashOnIcon
          fontSize="large"
          className="swipeButtons__lightning"
        ></FlashOnIcon>
      </IconButton>
    </div>
  );
}

export default SwipeButtons;
