import React, { FunctionComponent, useState } from "react";
import formatType from "../helpers/format-type";
import { Fighter } from "../pages/fighter-list";
import { useNavigate } from "react-router-dom";
import { Card, CardActionArea, Grid } from "@mui/material";

type Props = {
  fighter: Fighter;
  borderColor?: string;
};

const FighterCard: FunctionComponent<Props> = ({
  fighter,
  borderColor = "#ff2600",
}) => {
  const [color, setColor] = useState<string>();
  const navigate = useNavigate();

  const showBorder = () => {
    setColor(borderColor);
  };

  const hideBorder = () => {
    setColor("#f5f5f5"); // Ont remet la bordure initiale
  };

  const goToFighter = (_id: any) => {
    navigate(`/fighters/${_id}`);
  };

  return (
      <Card 
        sx={{ maxWidth: 400, height: 300 }}
        >
        <CardActionArea
            style={{ borderColor: color, maxWidth: 400, height: 300}}
            onMouseEnter={showBorder}
            onMouseLeave={hideBorder}
            onClick={() => goToFighter(fighter.id)}
            className={"hoverRed"}
        >
        <Grid container>
          {/* Partie gauche : Image */}
          <Grid item lg={8}>
            <img
              src={fighter.picture}
              alt=""
              style={{ maxWidth: 300 , maxHeight: 300 }}
            />
          </Grid>
          {/* Partie droite : Contenu */}
          <Grid item sm={4}>
            <span className={formatType(fighter.type)}>{fighter.type}</span>
            <p>{fighter.name}</p>
          </Grid>
        </Grid>
        </CardActionArea>
    </Card>
  );
};

export default FighterCard;
