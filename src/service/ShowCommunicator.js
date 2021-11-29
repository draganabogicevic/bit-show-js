import { fetchShows, fetchSingleShow, fetchShowCrew } from "./service";
import Show from "../entities/Show";
import ShowCrew from "../entities/ShowCrew";

class ShowCommunicator {
  static getAllShows() {
    return fetchShows().then(results => results.map(s => new Show(s)))
  }

  static getById(path) {
    return fetchSingleShow(path).then(result => new Show(result))
  }
  static getCrew(path) {
    return fetchShowCrew(path).then(results => results.map(item => new ShowCrew(item.person)))
  }  
}

export default ShowCommunicator;