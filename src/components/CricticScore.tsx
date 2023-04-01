import { Badge } from '@chakra-ui/react'

interface Props {
    score:number
}

export default function CricticScore({score}:Props) {

        let color = score>75 ? 'green' : score > 60 ? 'yellow' : 'red';

  return (
    <Badge  colorScheme={color}  fontSize='17px' paddingX={2} borderRadius='4px' >{score}</Badge>
  )
}
