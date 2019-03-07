import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Row,
  Col,
  Table,
  Button
} from "reactstrap";

import { thead, tbody } from "../../variables/general";
import UploadModal from "../uploadModal";

const ScoreTableView = props => {
  return (
    <div>
      <Row className="text-right table-options">
        <Col>
          <div>
            <Button color="primary" onClick={() => props.toggleUploadModal()}>
              {" "}
              <i className="nc-icon nc-simple-add" /> Upload Model
            </Button>
            {props.showUploadModal && (
              <UploadModal toggleUploadModal={props.toggleUploadModal} />
            )}
          </div>
        </Col>
      </Row>
      {/* <Row> */}
      {/* <Col xs={12} sm={6} md={6} lg={3}>
    <Card className="card-stats">
    <CardBody>
    <Row>
    <Col xs={5} md={4}>
    <div className="icon-big text-center">
    <i className="nc-icon nc-trophy text-warning" />
    </div>
    </Col>
    <Col xs={7} md={8}>
    <div className="numbers">
    <p className="card-category">Capacity</p>
    <CardTitle tag="p">150GB</CardTitle>
    </div>
    </Col>
    </Row>
    </CardBody>
    <CardFooter>
    <hr />
    <Stats>
    {[
      {
        i: "fas fa-sync-alt",
        t: "Update Now"
      }
    ]}
    </Stats>
    </CardFooter>
    </Card>
  </Col> */}
      {/* <Col xs={12} sm={6} md={6} lg={3}>
    <Card className="card-stats">
    <CardBody>
    <Row>
    <Col xs={5} md={4}>
    <div className="icon-big text-center">
    <i className="nc-icon nc-trophy text-success" />
    </div>
    </Col>
    <Col xs={7} md={8}>
    <div className="numbers">
    <p className="card-category">Revenue</p>
    <CardTitle tag="p">$ 1,345</CardTitle>
    </div>
    </Col>
    </Row>
    </CardBody>
    <CardFooter>
    <hr />
    <Stats>
    {[
      {
        i: "far fa-calendar",
        t: "Last day"
      }
    ]}
    </Stats>
    </CardFooter>
    </Card>
  </Col> */}
      {/* <Col xs={12} sm={6} md={6} lg={3}>
    <Card className="card-stats">
    <CardBody>
    <Row>
          <Col xs={5} md={4}>
          <div className="icon-big text-center">
          <i className="nc-icon nc-trophy text-danger" />
          </div>
          </Col>
          <Col xs={7} md={8}>
          <div className="numbers">
          <p className="card-category">Errors</p>
          <CardTitle tag="p">23</CardTitle>
          </div>
          </Col>
          </Row>
          </CardBody>
          <CardFooter>
          <hr />
          <Stats>
          {[
            {
              i: "far fa-clock",
              t: "In the last hour"
            }
          ]}
          </Stats>
          </CardFooter>
    </Card>
  </Col> */}
      {/* <Col xs={3} sm={6} md={2} lg={3}>
    <Card className="card-stats">
    <CardBody>
    <Row>
    <Col xs={5} md={4}>
    <div className="icon-big text-center">
    <i className="nc-icon nc-time-alarm text-primary" />
    </div>
    </Col>
    <Col xs={7} md={8}>
    <div className="numbers">
    <p className="card-category">Followers</p>
    <CardTitle tag="p">+45K</CardTitle>
    </div>
    </Col>
    </Row>
    </CardBody>
    <CardFooter>
    <hr />
    <Stats>
    {[
      {
        i: "fas fa-history",
        t: " Updated 3 minutes ago"
      }
    ]}
    </Stats>
    </CardFooter>
    </Card>
    </Col>
  </Row> */}

      {/* <Row>
  <Col xs={12}>
  <Card>
  <CardHeader>
  <CardTitle>Users Behavior</CardTitle>
  <p className="card-category">24 Hours performance</p>
  </CardHeader>
  <CardBody>
        <Line
        data={dashboard24HoursPerformanceChart.data}
        options={dashboard24HoursPerformanceChart.options}
        width={400}
        height={100}
        />
        </CardBody>
        <CardFooter>
        <hr />
        <Stats>
        {[
          {
            i: "fas fa-history",
            t: " Updated 3 minutes ago"
          }
        ]}
        </Stats>
        </CardFooter>
        </Card>
        </Col>
        </Row>
        <Row>
        <Col xs={12} sm={12} md={4}>
        <Card>
        <CardHeader>
        <CardTitle>Email Statistics</CardTitle>
        <p className="card-category">Last Campaign Performance</p>
        </CardHeader>
        <CardBody>
        <Pie
        data={dashboardEmailStatisticsChart.data}
        options={dashboardEmailStatisticsChart.options}
        />
        </CardBody>
        <CardFooter>
        <div className="legend">
        <i className="fa fa-circle text-primary" /> Opened{" "}
        <i className="fa fa-circle text-warning" /> Read{" "}
        <i className="fa fa-circle text-danger" /> Deleted{" "}
        <i className="fa fa-circle text-gray" /> Unopened
        </div>
        <hr />
        <Stats>
        {[
          {
            i: "fas fa-calendar-alt",
            t: " Number of emails sent"
          }
        ]}
        </Stats>
        </CardFooter>
        </Card>
        </Col>
      </Row> */}

      <Row>
        <Col xs={12}>
          <Card>
            <CardHeader>
              {/* <CardTitle tag="h4">Scores</CardTitle> */}
            </CardHeader>
            <CardBody>
              <Table responsive>
                <thead className="text-primary">
                  <tr>
                    {thead.map((prop, key) => {
                      return <th key={key}>{prop}</th>;
                    })}
                  </tr>
                </thead>
                <tbody>{props.competitorsInfo}</tbody>

                {/* <tbody>
                {tbody.map((prop, key) => {
                  return (
                    <tr key={key}>
                      {prop.data.map((prop, key) => {
                        if (key === 0) {
                          return (
                            <td key={key}>
                              <img
                                src={mike}
                                alt="..."
                                className={"user-icon"}
                              />
                            </td>
                          );
                        }
                        if (key === 3 && prop === "1") {
                          return (
                            <td key={key}>
                              <img src={gold} className={"user-icon"}  alt="..." />
                            </td>
                          );
                        } else {
                          return <td key={key}>{prop}</td>;
                        }
                      })}
                    </tr>
                  );
                })}
              </tbody> */}
              </Table>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ScoreTableView;
