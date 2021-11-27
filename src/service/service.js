import { Api } from "../shared/api";

export const fetchShows = async () => {
  // @ts-ignore
  const response = Api.get();
  return (await response).data;
}




