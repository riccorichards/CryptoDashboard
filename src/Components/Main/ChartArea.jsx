import styled from "styled-components";
import { Chart, RadialLinearScale, ArcElement, Title, Tooltip } from "chart.js";
import { PolarArea } from "react-chartjs-2";
import { useContext } from "react";
import DataContext from "../DataContext";
import _ from "lodash";

Chart.register(
	RadialLinearScale,
	ArcElement,
	Title,
	Tooltip
)
const StyleChartArea = styled.div`
background-color: #d0f9e2;
flex: 3;
border-radius: 5px;
box-shadow: 0 0 5px black;
display: flex;
flex-direction: column;
align-items: center;
position: relative;
overflow: hidden;

& h2 {
	font-family: 'Raleway', sans-serif;
	text-align: center;
	letter-spacing: 1.5px;
	-webkit-box-reflect: below 1px linear-gradient(transparent, #0009);
  line-height: 25px;
  text-shadow: 0 0.2px 2px #ace1c0;
	margin-top: 7px;
}
`;

const DisplayPolarArea = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
	width: 100%;
  max-height: 100%;
	margin-top: 20px;
`;

const ChartArea = () => {

	const getTopFive = useContext(DataContext);

	const sortedTopList = getTopFive.topList.sort((a, b) => b.volumeUsd24Hr - a.volumeUsd24Hr)
	let topFiveArr = _.take(sortedTopList, 5)
	const volumeUsd24Hr = topFiveArr.map(el => el.volumeUsd24Hr);
	const symbol = topFiveArr.map(el => el.symbol);
  
	const data = {
		labels: [symbol[0], symbol[1], symbol[2], symbol[3], symbol[4]],
		datasets: [
			{
				label: "#",
				data: [volumeUsd24Hr[0], volumeUsd24Hr[1], volumeUsd24Hr[2], volumeUsd24Hr[3], volumeUsd24Hr[4]],
				backgroundColor: ["#00b06da2", "#6be56dac", "#d8c81db7", "#eb6c14", "#ee1715"],
				borderWidth: 0.5,
			}
		]
	}
	const options = {
		responsive: true,
		scales: {
			r: {
				suggestedMin: 1,
				suggestedMax: 10,
				grid: {
					circular: true,
					color: "black"
				},
				angleLines: {
					display: true,
					color: "black",
					lineWidth: 0.5,
				},
				pointLabels: {
					display: true,
					font: {
						size: 25,
					},
					padding: 0,
					centerPointLabels: true
				},
				ticks: {
					stepSize: 1000000000,
					font: {
						size: 10
					},
					color: "#000"
				}
			}
		}
	}
	return (
		<StyleChartArea>
			<h2>Top 5 daily volume</h2>
			<DisplayPolarArea>
				{symbol && volumeUsd24Hr ? (<PolarArea data={data} options={options}></PolarArea>) : <div>Loading chart...</div>
				}

			</DisplayPolarArea>
		</StyleChartArea>
	)
}

export default ChartArea;