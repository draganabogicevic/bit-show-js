import { Api } from 'shared/api'

export const fetchShows = async () => {
    const { data } = await Api.get('/shows')
    return data
}

export const fetchSingleShow = async path => {
    const response = Api.get('/shows' + path)
    return (await response).data
}

export const fetchShowCrew = async path => {
    const response = Api.get('/shows' + path)
    return (await response).data
}
