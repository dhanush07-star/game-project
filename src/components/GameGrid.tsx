import {SimpleGrid, Text } from '@chakra-ui/react' 
import useGames from '../hooks/useGames'
import GameCard from './GameCard';
import GameCardContainer from './GameCardContainer';
import GameCardSkeleton from './GameCardSkeleton';

export default function GameGrid() {
  const{data,error,isLoading} = useGames();
  const Skeletons = [1,2,3,4,5,6];
  return (
    <>
      {error && <Text>{error}</Text>}
      
      <SimpleGrid columns={{sm:1,md:3,lg:3,xl:5}} padding='10px' spacing={10} >
        {isLoading && Skeletons.map(skeleton => <GameCardContainer><GameCardSkeleton key={skeleton}  /></GameCardContainer>)}
        {data.map(game => <GameCardContainer>
          <GameCard key={game.id} game={game} />
        </GameCardContainer>)}
    </SimpleGrid>
    </>
  )
}
