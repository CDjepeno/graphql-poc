import React, { FunctionComponent } from "react";
import formatType from "../helpers/format-type";
import { Fighter } from "./fighter-list";
import { useParams } from "react-router-dom";
import { QueryResultGraphQl, useGqlQuery } from "../utils/UserGqlQuery";
import request, { gql } from "graphql-request";
import { useQuery } from "react-query";
import { Box, Card, CardActionArea, Container, Grid } from "@mui/material";

const GET_FIGHTERS_BY_Id = gql`
  query GetFighiterById($id: Int!) {
    getFighterById(id: $id) {
      id
      name
      type
      picture
      cp
      hp
    }
  }
`;

const FightersDetail: FunctionComponent = () => {
  let { id: routeId } = useParams();
  const parsedId = routeId ? parseInt(routeId, 10) : undefined;
  console.log(parsedId);
  const { data, error } = useGqlQuery<QueryResultGraphQl<Fighter>>(
    "getFighterById",
    GET_FIGHTERS_BY_Id,
    { id: parsedId }
  );

  console.log(data);

  if (error) return <pre>Une erreur est survenue</pre>;

  return (
    <div>
      {data ? (
        <Container>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="100vh"
          >
            <Card sx={{ width: 600, height: 500 }}>
              <CardActionArea
                sx={{ maxWidth: 600, height: 500 }}
                className="hoverRed"
              >
                <Grid container>
                  {/* Partie gauche : Image */}
                  <Grid item lg={8}>
                    <img
                      src={data.getFighterById.picture}
                      alt={data.getFighterById.name}
                      style={{ maxWidth: 300, maxHeight: 500 }}
                    />
                  </Grid>
                  {/* Partie droite : Contenu */}
                  <Grid item sm={4}>
                    {data.getFighterById.name}
                    <table className="bordered striped">
                      <tbody>
                        <tr>
                          <td>Points de vie</td>
                          <td>
                            <strong>{data.getFighterById.hp}</strong>
                          </td>
                        </tr>
                        <tr>
                          <td>Dégâts</td>
                          <td>
                            <strong>{data.getFighterById.cp}</strong>
                          </td>
                        </tr>
                        <tr>
                          <td>Types</td>
                          <td>
                            <span
                              className={formatType(data.getFighterById.type)}
                            >
                              {data.getFighterById.type}
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    {/* Mettez en œuvre les liens ou autres actions ici si nécessaire */}
                  </Grid>
                </Grid>
              </CardActionArea>
            </Card>
          </Box>
        </Container>
      ) : (
        <h4 className="center">....</h4>
      )}
    </div>
  );
};

export default FightersDetail;
