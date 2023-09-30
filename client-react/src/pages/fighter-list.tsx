import React, { FunctionComponent } from "react";
import { gql } from "graphql-request";
// import FighterCard from '../components/fighter-card';
// import FighterCard from '../components/fighter-card';
// import FighterService from '../services/fighter-service';
// import { Link } from 'react-router-dom';
import { QueryResultGraphQl, useGqlQuery } from '../utils/UserGqlQuery';
import FighterCard from "../components/fighter-card";
import { Container, Grid } from "@mui/material";

export type Fighter = {
  id: any;
  type: string;
  hp: number;
  cp: number;
  name: string;
  picture: string;
};
const GET_FIGHTERS = gql`
  query {
    getFighters {
      id,
      name,
      type,
      picture
    }
  }
`;

const FighterList: FunctionComponent = () => {

  const {data, error} = useGqlQuery<QueryResultGraphQl<Fighter[]>>('getFighters', GET_FIGHTERS)

  if (error) return <pre>Une erreur est survenue</pre>;
  
  return (
    <div>
      <Container>
        <Grid container spacing={3} alignItems="center" justifyContent="center" className="gridWithMarginTop">
            {data ? (
              data.getFighters.map((fighter) => (
                <Grid item md={4}>
                  <FighterCard key={fighter.id} fighter={fighter}/>
                </Grid>

              ))
            ) : (
              <p>No fighters available</p>
            )}  
        </Grid>
      </Container>
    </div>
  );
};

export default FighterList;
