import ChartSummary from "./ChartSummary";

const BarChart = () => {
  return (

    <section className="      bg-stone-100">
      <div>
        <h1 className="text-2xl font-bold"> Spending - Last 7 days</h1>
      </div>
      <div className="bar-chart">
        mon
        tue
        wed
        thu
        fri
        sat
        sun
      </div>
      <br />
      <ChartSummary />
    </section>
  
  );
}

export default BarChart;