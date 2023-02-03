import PropTypes from "prop-types"
import { Bar } from "react-chartjs-2";

const BarChart = (props) => {
    return(
        <div>
            <h1>BarChart</h1>
            <Bar data={props.chartData} />
        </div>
    )
}


// PropTypes is use to lock data type from props or from other place like API
BarChart.propTypes = {
    chartData: PropTypes.object
}

export default BarChart;