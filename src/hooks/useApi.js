import { useState } from 'react'
import { useMount } from 'react-use'

export const useApi = (service, path) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    useMount(() => {
        service(path)
            .then(data => setData(data))
            .catch(error => {
                setError(error.message)
            })
            .finally(() => {
                setLoading(false)
            })
    })

    return {
        loading,
        data,
        error
    }
}
