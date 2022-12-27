import ReactApexChart from "react-apexcharts";
import { Card } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MatricsComp = () => {
    const series = [44,55,67,83];

    const option = {
        chart: {
            height: 350,
            type: 'radioBar',
        },
        plotOption: {
            radioBar: {
                dataLabels: {
                    name: {
                        fontSize: '22px',
                    },
                    value: {
                        fontSize: '16px',
                    },
                    total: {
                        show: true,
                        label: 'Total',
                        formatter: function (w) {
                            return 249
                        }
                    }
                }
            }
        },
        labels: ['Computer', 'Tablet', 'Laptop', 'Mobile'],
        colors: ["#a855f7", "#A0EADE", "BFD2BF", "#3258F2"]
    }
    return (
        <Card>
            <div className="text-center">
                <h5>Views</h5>
                <div className="d-flex" justify-content-center>
                    <h3 className="m-0">27,000</h3>
                    <div className="d-flex align-items-end px-2">
                        <FontAwesomeIcon icon="fa-solid fa-caret-up" color="green" />
                        <span className="text-success">12%</span>
                    </div>
                </div>
            </div>
            <ReactApexChart options={option} series={series} type="radialBar" height={230} className="apex-charts"/>
        </Card>
    )
}

export default MatricsComp;