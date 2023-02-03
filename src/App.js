import { useState } from 'react';
import './App.css';
import BarChart from './components/Chart';
import { orderList } from './const/orderData';
import { CategoryScale } from 'chart.js';
import Chart from "chart.js/auto"
Chart.register(CategoryScale)

function App() {
  const [chartData, setChartData] = useState({
    labels:   orderList.map((data) => data.date),
    datasets: [
      {
        label: "data penjualan bulan agustus",
        data: orderList.map((data) => data.totalOrder),
        backgroundColor: '#586B90',
      }
    ]
  })
  return (
    <div className="App">
       <BarChart chartData={chartData}/> {/*name and age is props send to BarChart Componenet */}
    </div>
  );
}

export default App;
