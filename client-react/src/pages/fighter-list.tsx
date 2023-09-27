import React, { FunctionComponent } from "react";
import { gql } from "graphql-request";
// import FighterCard from '../components/fighter-card';
// import FighterCard from '../components/fighter-card';
// import FighterService from '../services/fighter-service';
// import { Link } from 'react-router-dom';
import { QueryResultGraphQl, useGqlQuery } from '../utils/UserGqlQuery';
import FighterCard from "../components/fighter-card";

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
      hp,
      cp,
      picture
    }
  }
`;

const FighterList: FunctionComponent = () => {

  const {data, error} = useGqlQuery<QueryResultGraphQl<Fighter[]>>('getFighters', GET_FIGHTERS)
  console.log(data);

  // if (isLoading) return "Loading...";
  if (error) return <pre>Une erreur est survenue</pre>;
  
  return (
    <div>
      <div className="container">
        <div className="row">
          {data ? (
            data.getFighters.map((fighter) => (
              <FighterCard key={fighter.id} fighter={fighter} />
            ))
          ) : (
            <p>No fighters available</p>
          )}  

           {/* {data ? data.map((fighter: any) => (
            <FighterCard key={fighter._id} fighter={fighter} />
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default FighterList;
