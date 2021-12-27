import React from 'react'

import { ListItem, Avatar, Box } from '@chakra-ui/react'

const ShowCrewInListView = ({ actor, index }) => {
    return (
        <ListItem key={index}>
            <Avatar src={actor.image.medium} alt="actor" />
            <Box as="span">&nbsp;&nbsp;{actor.name}</Box>
        </ListItem>
    )
}

export default ShowCrewInListView
