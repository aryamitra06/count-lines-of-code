import {
    Box,
    Flex,
    useColorModeValue,
    Stack,
    useColorMode,
    Container,
    IconButton,
    Text
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

export default function Navbar() {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <>
            <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
                <Container maxW={"7xl"}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <Text fontSize={"lg"} fontWeight={"bold"}>Count Lines of Code</Text>
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