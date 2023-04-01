import { Card, CardBody, Heading, HStack, Image,Text } from '@chakra-ui/react'

import React from 'react'
import { Game } from '../hooks/useGames'
import CricticScore from './CricticScore'
import PlatformIconList from './PlatformIconList'

interface Props{
    game:Game
}


export default function GameCard({game}:Props) {
  return (
    <Card borderRadius={10} overflow='hidden'>
        <Image src={game.background_image} />
        <CardBody>
            <Heading fontSize='2xl' >
                {game.name}
            </Heading>
            <HStack justifyContent={'space-between'} >
                <PlatformIconList platforms={game.parent_platforms.map(p=>p.platform)}  />
                <CricticScore score={game.metacritic} />
            </HStack>
        </CardBody>
    </Card>
  )
}