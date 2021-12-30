import React from 'react'
import PropTypes from 'prop-types'

import ShowCrew from 'entities/ShowCrew'

import { ListItem, Avatar, Box } from '@chakra-ui/react'

const ShowCrewInListView = ({ actor, index }) => {
    return (
        <ListItem key={index}>
            <Avatar src={actor.image.medium} alt='actor' />
            <Box as='span'>&nbsp;&nbsp;{actor.name}</Box>
        </ListItem>
    )
}

ShowCrewInListView.propTypes = {
    actor: PropTypes.instanceOf(ShowCrew),
    index: PropTypes.number
}
export default ShowCrewInListView
