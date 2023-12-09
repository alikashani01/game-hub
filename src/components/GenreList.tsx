import {
    Button,
    HStack,
    Heading,
    Image,
    List,
    ListItem,
    Skeleton,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
    onSelectGenre: (genre: Genre) => void;
    selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
    const { data, isLoading } = useGenres();
    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    return (
        <>
            <Heading fontSize="x-large" marginBottom="10px">
                Genres
            </Heading>
            <List>
                {isLoading &&
                    skeletons.map((skeleton) => (
                        <Skeleton
                            key={skeleton}
                            width="100%"
                            height="60px"
                            borderRadius="8px"
                            marginY="10px"
                        />
                    ))}
                {data.map((genre) => (
                    <ListItem key={genre.id} gap="5px" paddingY="10px">
                        <HStack>
                            <Image
                                src={getCroppedImageUrl(genre.image_background)}
                                boxSize="60px"
                                objectFit="cover"
                                borderRadius="8px"
                            />
                            <Button
                                whiteSpace="normal"
                                textAlign="left"
                                fontWeight={
                                    genre.id === selectedGenre?.id
                                        ? "bold"
                                        : "normal"
                                }
                                onClick={() => onSelectGenre(genre)}
                                variant="link"
                                fontSize="lg"
                            >
                                {genre.name}
                            </Button>
                        </HStack>
                    </ListItem>
                ))}
            </List>
        </>
    );
};

export default GenreList;
