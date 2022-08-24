import { truncate } from 'lodash'

import Show from './Show'

export default class ShowFromLs extends Show {
    constructor({ id, name, image, rating, genres, summary }) {
        super({ id, name, image, rating, genres, summary })
        this.rating = rating
        this.bookmarked = true
    }
    get truncatedTitle() {
        return truncate(this.name, { length: 20 })
    }
}
