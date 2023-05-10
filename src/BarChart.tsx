//@ts-nocheck
import { 
  Chart as ChartJS, 
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip, 
  Legend 
} from "chart.js";
import ChartSummary from "./ChartSummary";
import data from './assets/data.json'
import { Bar } from "react-chartjs-2"

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)




// interface Data {
//   day: string;
//   amount:number;
// }

const BarChart = () => {

  // get the day values
  const getDay = (weekday) => {
    return [weekday.day]
  }

  // hold the values that will be labels 
  const labels = data.map(getDay)

  // get the amount values
  const getAmount = (cost) => {
    return [cost.amount]
  }

  // what we want to show in the data field (the bars)
  const amountSpent = data.map(getAmount)


  console.log(labels)

  const chartData = {
    labels,
    datasets: [
      {
        label: "",
        data: amountSpent,
        backgroundColor: 'rgba(75, 192, 192,1)'
      }
    ]

  }

  
  return (
    <section className="bg-stone-100">
      <div>
        <h1 className="text-2xl font-bold"> Spending - Last 7 days</h1>
      </div>
      <div>
        <Bar data={chartData} />

      </div>
    
      <br />
      <ChartSummary />
    </section>
  
  );
}

export default BarChart;
