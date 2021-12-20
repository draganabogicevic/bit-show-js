import { truncate } from "lodash"

export default class Show {
  constructor({id, name, image, rating, genres, summary}) {
    this.id = id
    this.name = name
    this.image = image
    this.rating = rating.average ? rating.average : "NA"
    this.genres = genres
    this.summary = summary
    // this.bookmarked = false;
  }
  toggleBookmark() {
    this.bookmarked = !this.bookmarked;
  }
  get truncatedTitle() {
    return truncate(this.name, {length: 20})
  }
}