import Breadcrumb from "../../src/components/Common/Breadcrumb";
import { Row, Col, Container, Card, CardBody } from "reactstrap";
import CardComp from './CardComp';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MetricsComp from './MetricsComp';
import ColumnChart from "./ColumnChart";
import { periodData } from '../../src/data';
import AdComp from "./AdComp";
import { ActivityComp } from './ActivityComp';
import { CityRankings } from './CityRankings';

const Dashboard = () => {

    const reports = [
        {
            title: "Orders",
            iconClass: "fa-bag-shopping",
            description: "1,234",
            percent: "+1.2"
        },
        {
            title: "Revenue",
            iconClass: "fa-money-check-dollar",
            description: "$934.948",
            percent: "-5"
        },
        {
            title: "Sales",
            iconClass: "fa-sack-dollar",
            description: "$847.098",
            percent: "+20"
        },
    ];

    return (
        <>
            <Container fluid>
                <Breadcrumb title="Admin" breadcrumbItem="Dashboard" />
                <Row>
                    <Col xl="4">
                        <CardComp />
                        <MetricsComp />
                    </Col>
                    <Col xl="8">
                        <Row>
                            { reports.map((report, key) => {
                                    return (
                                        <Col md="4" key={"_col_" + key}>
                                            <Card className="mini-stats-wid">
                                                <CardBody>
                                                    <div className="d-flex">
                                                        <div className="flex-grow-1">
                                                            <p className="text-muted fw-medium">{report.title}</p>
                                                            <h4 className="mb-0">{report.description}</h4>
                                                        </div>
                                                        <div className="icon-sm rounded-circle bg-primary align-self-center min-stat-icon">
                                                            <span className="icon-container rounded-circle bg-primary">
                                                                <FontAwesomeIcon icon={`fa-solid ${report.iconClass}`}></FontAwesomeIcon>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                    )
                                })
                            }
                        </Row>
                        <Row> 
                            <Col xs='12'>
                                <Card>
                                    <ColumnChart periodData={periodData} dataColors={["#3258F2", "#a855f7", "#A0EADE"]} />
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col xl="4">
                                <AdComp />
                            </Col>
                            <Col xl="4">
                                <ActivityComp />
                            </Col>
                            <Col xl="4">
                                <CityRankings />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Dashboard;