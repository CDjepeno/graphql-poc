import { request } from "graphql-request";
import { useQuery } from "react-query";
import { Fighter } from "../pages/fighter-list";

const endpoint = 'http://localhost:3001/graphql';

// Définissez un type générique pour les données que vous attendez de la requête
export type QueryResultGraphQl<T> = {
  data: T;
};

export const useGqlQuery = <T>(
  key: any,
  query: any,
  config = {}
) => {

  const fetchData = async (): Promise<T> => await request(endpoint,query)

  return useQuery<T>(key, fetchData, config)
};
