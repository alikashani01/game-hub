import {
    HStack,
    Image,
    List,
    ListItem,
    Skeleton,
    Text,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
    const { data, isLoading } = useGenres();
    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    return (
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
                        <Text fontSize="lg">{genre.name}</Text>
                    </HStack>
                </ListItem>
            ))}
        </List>
    );
};

export default GenreList;
