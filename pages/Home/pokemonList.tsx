import {ScrollView, VStack} from "native-base";
import React from "react";
import PokemonCard from "../../components/PokemonCard";

interface Pokemon {
    name: string
    id?: number
    type?: string
}

const PokemonList = ({ pokemons, refScroll }: { pokemons: ({ name: string, type: string })[], refScroll: React.Ref<unknown> | undefined }) => {
    return (
        <ScrollView h={"20%"} ref={refScroll}>
            <VStack space={4} alignItems="center" paddingY={4}>
                {pokemons.map((pokemon: any) => <PokemonCard key={pokemon.name} pokemon={pokemon}/>)}
            </VStack>
        </ScrollView>
    )
}

export default PokemonList