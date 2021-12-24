import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useMount } from 'react-use'

import { showCommunicator } from '../../service/ShowCommunicator'
import FallbackUI from '../components/FallbackUI'
import Loader from '../components/Loader'
import ShowDetails from './ShowDetails'
import ShowCrewInGrid from './ShowCrewInGrid'
import ShowCrewInListView from './ShowCrewInListView'

import { Box, Spacer, Flex, List, SimpleGrid, Icon } from '@chakra-ui/react'
import { BsFillGrid3X2GapFill, BsListUl } from 'react-icons/bs'

const Show = () => {
    let location = useLocation()
    let path = location.pathname
    let pathForCrew = path + '/cast'

    const [show, setShow] = useState([])
    const [crew, setCrew] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [gridView, setGridView] = useState(true)

    const fetchShow = () => {
        showCommunicator
            .getById(path)
            .then(data => setShow(data))
            .catch(error => {
                setError(error.message)
            })
            .finally(() => {
                setLoading(false)
            })
    }

    const fetchCrew = () => {
        showCommunicator
            .getCrew(pathForCrew)
            .then(data => setCrew(data))
            .catch(error => {
                setError(error.message)
            })
            .finally(() => {
                setLoading(false)
            })
    }

    useMount(() => {
        fetchShow()
    })

    useMount(() => {
        fetchCrew()
    })

    const toggleView = () => {
        setGridView(!gridView)
    }

    if (error) {
        return <FallbackUI message={error} />
    }
    if (loading) {
        return <Loader />
    }

    return (
        <Box mb='50px'>
            <ShowDetails show={show} />
            <Box w='70%' m='auto'>
                <Flex mt='20px'>
                    <Box fontSize='24px'>Actors</Box>
                    <Spacer />
                    <Box>
                        {gridView ? (
                            <Icon as={BsListUl} w={10} h={10} onClick={toggleView} />
                        ) : (
                            <Icon as={BsFillGrid3X2GapFill} w={10} h={10} onClick={toggleView} />
                        )}
                    </Box>
                </Flex>
                {gridView ? (
                    <SimpleGrid columns={[2, 3, 6]}>
                        {crew.map((actor, index) => (
                            <Box key={index}>
                                <ShowCrewInGrid key={index} actor={actor} />
                            </Box>
                        ))}
                    </SimpleGrid>
                ) : (
                    <Box mt='30px' mb='50px'>
                        {crew.map((actor, index) => (
                            <List>
                                <ShowCrewInListView actor={actor} />
                            </List>
                        ))}
                    </Box>
                )}
            </Box>
        </Box>
    )
}

export default Show