import { fetchShows, fetchSingleShow, fetchShowCrew } from './service'
import Show from '../entities/Show'
import ShowCrew from '../entities/ShowCrew'

class ShowCommunicator {
    getAllShows() {
        return fetchShows().then(results => results.map(s => new Show(s)))
    }

    getById(path) {
        return fetchSingleShow(path).then(result => new Show(result))
    }
    getCrew(path) {
        return fetchShowCrew(path).then(results => results.map(item => new ShowCrew(item.person)))
    }
}

export const showCommunicator = new ShowCommunicator()
