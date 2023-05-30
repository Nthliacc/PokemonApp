import {Box, Button, Flex, HStack, Icon, IconButton, Input, useToast} from "native-base";
import {useState} from "react";
import { Feather } from '@expo/vector-icons';

const Filter = () => {
    const [value, setValue] = useState("");
    const toast = useToast();

    const handleChange = () => {
        if (value === "") {
            toast.show({
                title: "Please enter a value",
                placement: "top"
            });
            return;
        }
        console.log(value);
    };
    return (
        <HStack space={2} py={4}>
            <Input
                flex={1}
                placeholder="Search"
                variant={"filled"}
                size={"md"}
                onChangeText={setValue}
                _focus={{
                    borderColor: "none",
                    backgroundColor: "white"
                }}
                _hover={{
                    borderColor: "none",
                }}
            />
            <IconButton
                borderRadius={"sm"}
                variant={"solid"}
                colorScheme={"primary"}
                icon={<Icon as={Feather} name={"search"} size={4} color={"white"} />}
                onPress={handleChange}
            />
        </HStack>
    )

}

export default Filter