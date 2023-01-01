import {
    Box,
    Flex,
    useColorModeValue,
    Stack,
    useColorMode,
    Container,
    IconButton,
    Text,
    HStack
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import {BsFileEarmarkCodeFill} from "react-icons/bs"

export default function Navbar() {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <>
            <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
                <Container maxW={"7xl"}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <HStack>
                    <BsFileEarmarkCodeFill size={"30px"}/>
                    <Text fontSize={"lg"} fontWeight={"bold"}>Lines of Code Counter</Text>
                    </HStack>
                    <Flex alignItems={'center'}>
                        <Stack direction={'row'} spacing={7}>
                            <IconButton onClick={toggleColorMode}>
                                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                            </IconButton>
                        </Stack>
                    </Flex>
                </Flex>
                </Container>
            </Box>
        </>
    );
}