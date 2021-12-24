import React from 'react'

import { ListItem, Avatar, Box } from '@chakra-ui/react'

const ShowCrewInListView = ({ actor }) => {
    return (
        <ListItem key={actor.id}>
            <Avatar src={actor.image.medium} alt='actor' />
            <Box as='span'>&nbsp;&nbsp;{actor.name}</Box>
        </ListItem>
    )
}

export default ShowCrewInListView
