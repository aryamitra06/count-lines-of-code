import {
    Card,
    CardBody,
    Container,
    SimpleGrid,
    RadioGroup,
    Radio,
    Stack,
    FormControl,
    FormLabel,
    Input,
    FormHelperText,
    Button,
    Flex,
    Text
} from '@chakra-ui/react'
import React, { Fragment, useState } from 'react'

export default function FormCard() {
    const [value, setValue] = useState('github')
    
    const Form = () => {
        return (
            <Card variant={"outline"}>
                <CardBody>
                    <RadioGroup onChange={setValue} value={value}>
                        <Stack direction='row'>
                            <Radio value='github'>GitHub</Radio>
                            <Radio value='gitlab'>GitLab</Radio>
                        </Stack>
                    </RadioGroup>
                    <FormControl mt={2} isRequired>
                        <FormLabel>Username</FormLabel>
                        <Input type='text' />
                        <FormHelperText>Could be your {value} username</FormHelperText>
                    </FormControl>
                    <FormControl mt={2} isRequired>
                        <FormLabel>Repository</FormLabel>
                        <Input type='text' />
                        <FormHelperText>Could be your {value} repository name</FormHelperText>
                    </FormControl>
                    <FormControl mt={2}>
                        <FormLabel>Branch</FormLabel>
                        <Input type='text' />
                        <FormHelperText>Mention your branch name (master by default)</FormHelperText>
                    </FormControl>
                    <FormControl mt={2}>
                        <FormLabel>Ignore Files/Dirs</FormLabel>
                        <Input type='text' />
                        <FormHelperText>Mention the file name/directory which you want to ignore (Eg. /client, App.jsx)</FormHelperText>
                    </FormControl>
                    <Flex justifyContent={"flex-end"}>
                        <Button colorScheme={"blue"} mt={3}>Submit</Button>
                    </Flex>
                </CardBody>
            </Card>
        )
    }
    return (
        <Fragment>
            <Container maxW={"7xl"} mt={5}>
                <SimpleGrid columns={{ base: 1, sm: 1, md: 1, lg: 2, xl: 2 }} spacing={5}>
                    <Form />
                </SimpleGrid>
            </Container>
        </Fragment>
    )
}
