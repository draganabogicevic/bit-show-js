import { fetchShows } from "./service";
import Show from "../entities/Show";

class ShowCommunicator {
  static getAllShows() {
    return fetchShows().then(results => results.map(s => new Show(s)))
  }
}

export default ShowCommunicator;