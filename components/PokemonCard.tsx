import { formatNumber } from "../utils/FormatNumber";
import { useState } from "react";
// import DrawerComponent from "../pages/Details";
import {Box, Flex, Image, Text, Center} from "native-base";

interface PokemonCardProps {
    pokemon: any;
}

const PokemonCard = ({ pokemon }: PokemonCardProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const onClose = () => setIsOpen(false);

    const onOpen = () => setIsOpen(true);

    return (
        <Flex
            flexDirection="row"
            alignItems="center"
            shadow={2}
            bg="tertiary.50"
            rounded="md"
            key={pokemon.name}
            p={4}
            w={"80%"}
        >
            <Image
                source={{uri: pokemon.imageURLDefault}}
                alt={pokemon.name}
                size={["80px", "120px"]}
            />
            <Flex p={2} flexDirection="column" justify="center" align="center" w={"72%"}>
                    <Text
                        fontSize="2xl"
                        fontWeight="bold"
                        paddingTop={2}
                        letterSpacing={"lg"}
                        lineHeight={"md"}
                    >
                        {pokemon.name}
                    </Text>
                    <Text textAlign="end">#{formatNumber(pokemon.id)}</Text>
            </Flex>
            {/*<DrawerComponent pokemon={pokemon} isOpen={isOpen} onClose={onClose} />*/}
        </Flex>
    );
};

export default PokemonCard;
