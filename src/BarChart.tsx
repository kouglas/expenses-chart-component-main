//@ts-nocheck
import { 
  Chart as ChartJS, 
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,  
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
    ],
    // options: {
    //   scales: {
    //     x: {
    //       grid: {
    //         drawOnChartArea: false, 
    //       }
    //     },
    //     y: {
    //       grid: {
    //         display: false,
    //       }
    //     }
    //   }
    // }

    //need to remove gridlines...
  }

  
  return (
    <section className="bg-stone-100 border-2 rounded-xl px-8">
      <div>
        <h1 className="text-2xl font-bold pt-4"> Spending - Last 7 days</h1>
      </div>
      <div>
        <Bar data={chartData} />

      </div>
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
    
      <br />
      <ChartSummary />
    </section>
  
  );
}

export default BarChart;
