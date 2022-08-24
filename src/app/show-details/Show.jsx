import React from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

import { useApi } from 'hooks/useApi'

import { showCommunicator } from 'service/ShowCommunicator'
import FallbackUI from 'app/components/Card'
import Loader from 'app/components/Loader'
import ShowDetails from './ShowDetails'
import ShowCrewInGrid from './ShowCrewInGrid'
import ShowCrewInListView from './ShowCrewInListView'

import { Box, Spacer, Flex, List, SimpleGrid, Icon } from '@chakra-ui/react'
import { BsFillGrid3X2GapFill, BsListUl } from 'react-icons/bs'

const Show = () => {
    // let location = useLocation()
    // let path = location.pathname
    // @ts-ignore
    const { id } = useParams()
    console.log('id', id)
    let idCrew = id + '/cast'

    const { data: show, loading, error } = useApi(showCommunicator.getById, id)

    const {
        data: crew,
        loading: loadingCrew,
        error: errorFromCrew
    } = useApi(showCommunicator.getCrew, idCrew)

    const [gridView, setGridView] = useState(true)

    const toggleView = () => {
        setGridView(!gridView)
    }

    if (error || errorFromCrew) {
        // @ts-ignore
        return <FallbackUI message={error || errorFromCrew} />
    }
    if (loading || loadingCrew) {
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
                                <ShowCrewInListView actor={actor} index={index} />
                            </List>
                        ))}
                    </Box>
                )}
            </Box>
        </Box>
    )
}

export default Show
