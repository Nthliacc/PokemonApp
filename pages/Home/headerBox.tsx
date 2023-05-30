import {Box, Text, Image, Flex, Container} from "native-base";
import React from "react";
import Pokebola from '/assets/Pokebola.png';
import Filter from "./filter";

const HeaderBox = () => {
    return (
    <Flex bg="tertiary.500" p={4} >
        <Flex
            flexDirection={"row"}
            alignItems={"center"}
        >
            <Image source={Pokebola} alt="Pokebola" height={6} w={6}/>
            <Text color="white" fontSize="xl" fontWeight="bold" marginLeft={4}>
                Pokédex
            </Text>
        </Flex>
        <Filter />
    </Flex>
    );
};

export default HeaderBox;