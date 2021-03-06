import { Api } from "../shared/api";

export const fetchShows = async () => {
  // @ts-ignore
  const response = Api.get();
  console.log((await response).data)
  return (await response).data;
}

export const fetchSingleShow = async (path) => {
  // @ts-ignore
  const response = Api.get(path);
  return (await response).data;
}

export const fetchShowCrew = async (path) => {
  // @ts-ignore
  const response = Api.get(path);
  return (await response).data;
}





