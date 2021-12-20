import { Api } from "../shared/api";

export const fetchShows = async () => {
  // @ts-ignore
  const {data} =await Api.get();
  console.log(data)
  return data;
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





