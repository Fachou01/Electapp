import React from 'react'
import Container from '../../../components/container/Container'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

function Overview() {

    ChartJS.register(ArcElement, Tooltip, Legend);
    
    return (
        <Container>
            
            <Doughnut data={{labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]}} />
        </Container>
    )
}

export default Overview