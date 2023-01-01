import {
    Card,
    CardBody,
    TableContainer,
    Table,
    Thead,
    Td,
    Th,
    Tbody,
    Tr,
    Text
} from '@chakra-ui/react'
import React, { Fragment } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

export default function StatCard() {
    ChartJS.register(ArcElement, Tooltip, Legend);
    const data = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
            {
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1
            },
        ],
    };
    return (
        <Fragment>
            <Card variant={"outline"} height={"max-content"}>
                <CardBody>
                    <Card variant={"elevated"} height={"450px"} mb={4} shadow={"md"}>
                        <CardBody>
                            <Pie data={data} options={{ maintainAspectRatio: false }} width={100} height={100} />
                        </CardBody>
                    </Card>
                    <Text mb={2} fontSize={"lg"}>Summary</Text>
                    <Card variant={"outline"}>
                        <CardBody>
                            <TableContainer>
                                <Table size='sm'>
                                    <Thead>
                                        <Tr>
                                            <Th>Files</Th>
                                            <Th>Lines</Th>
                                            <Th>Blanks</Th>
                                            <Th>Comments</Th>
                                            <Th>Total LOC</Th>
                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                        <Tr>
                                            <Td>21</Td>
                                            <Td>4665</Td>
                                            <Td>34</Td>
                                            <Td>12</Td>
                                            <Td>5476534</Td>
                                        </Tr>
                                    </Tbody>
                                </Table>
                            </TableContainer>
                        </CardBody>
                    </Card>
                </CardBody>
            </Card>
        </Fragment>
    )
}
