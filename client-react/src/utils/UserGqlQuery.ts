import { request } from "graphql-request";
import { UseQueryOptions, useQuery } from "react-query";

const endpoint = 'http://localhost:3001/graphql';

// Définissez un type générique pour les données que vous attendez de la requête
export type QueryResultGraphQl<T> = {
  getFighters: T;
  getFighterById: T;
};


interface GqlQueryConfig<T> extends UseQueryOptions<T> {
  // Ajoutez d'autres options de configuration que vous souhaitez rendre optionnelles ici
  id?: number;
}

export const useGqlQuery = <T>(
  key: any,
  query: any,
  config: GqlQueryConfig<T> = {}
) => {

  const { id, ...restConfig } = config
  const variables = id ? {id, ...restConfig} : restConfig
  const fetchData = async (): Promise<T> => await request(endpoint,query, variables)
  console.log(variables);
  
  return useQuery<T>(key, fetchData, variables)
};
