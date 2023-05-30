import PokemonList from "./pokemonList";
import Header from "./headerBox";
import getPokemons from "../../services/getPokemons";
import {useEffect, useRef, useState} from "react";
import {ArrowUpIcon, Button, Fab, Icon, View} from "native-base";
import {ScrollView} from "react-native";

const Home = () => {
    const [pokemons, setPokemons] = useState([]);
    const [limit, setLimit] = useState(10);
    const [offset, setOffset] = useState(0);
    const [filter, setFilter] = useState("");
    const scrollViewRef = useRef<
        ScrollView | null
    >();

    const scrollToTop = () => {
        if (scrollViewRef.current) {
            scrollViewRef.current.scrollTo({y: 0, animated: true});
        }
    };
    useEffect(() => {
        getPokemons({filter, limit, offset}).then((response) => {
                setPokemons(response);
            }
        ).catch((error) => {
            console.log(error);
        });
    }, [filter, limit, offset]);

    return (
        <View style={{flex: 1}}>
            <Header/>
            {pokemons && <PokemonList refScroll={scrollViewRef} pokemons={pokemons}/>}
            <Button colorScheme={"tertiary"} onPress={() => setLimit(limit + 10)}>Load more</Button>
            <Fab
                renderInPortal={false} shadow={2} size="sm"
                bottom={16} right={6} zIndex={1}
                icon={<Icon color="white" as={
                    <ArrowUpIcon />
                } name="plus" size="sm"/>}/>
        </View>
    );
};

export default Home;