import { Button, HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props{
  onSeletedGenre: (genre : Genre)=> void;
  selectedGenre : Genre | null;

}


export default function GenreList({selectedGenre,onSeletedGenre}:Props) {
  const { data,isLoading,error } = useGenres();
  if(error) return null;
  if(isLoading) return <Spinner/>
  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY='5px' >
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            ></Image>
            <Button fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'} onClick={()=>onSeletedGenre(genre)} variant={'link'}  fontSize={'lg'} >{genre.name}</Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
}
