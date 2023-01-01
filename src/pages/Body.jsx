import React, { Fragment } from 'react'
import FormCard from '../components/FormCard'
import {
    Container,
    SimpleGrid
} from '@chakra-ui/react'
import StatCard from '../components/StatCard'

export default function Body() {
    return (
        <Fragment>
            <Container maxW={"7xl"} mt={5} mb={5}>
                <SimpleGrid columns={{ base: 1, sm: 1, md: 1, lg: 2, xl: 2 }} spacing={5}>
                    <FormCard />
                    <StatCard/>
                </SimpleGrid>
            </Container>
        </Fragment>
    )
}
