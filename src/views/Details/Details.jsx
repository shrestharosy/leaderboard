import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  Row,
  Col,
  CardBody,
  CardFooter,
  Table
} from "reactstrap";
import { connect } from "react-redux";

import Stats from "../../components/Stats/Stats";
import { dataHeader, dataBody } from "../../variables/general";
import { downloadService } from "../../service";
import { warn } from "../../utils/alert.utils";

class Details extends React.Component {
  downloadDataAnalysisModel = value => {
    this.props.downloadDataAnalysisModel().then(result => {
      // const data_link = result.data.data_link;
      // const model_link = result.data.model_link;
      if (result && result.data) {
        window.location.assign(result.data);
      } else {
        warn("There seems to be some error");
      }
    });
  };

  downloadNLPModel = value => {
    this.props.downloadNLPModel().then(result => {
      const data_link = result.data.data_link;
      const model_link = result.data.model_link;
      if (data_link || model_link) {
        if (value === "data") {
          window.location.assign(data_link);
        } else if (value === "model") {
          window.location.assign(model_link);
        } else {
          warn("There seems to be some error");
        }
      } else {
        warn("There seems to be some error");
      }
    });
  };

  downloadImageModel = value => {
    this.props.downloadImageModel().then(result => {
      const data_link = result.data.data_link;
      const model_link = result.data.model_link;
      if (data_link || model_link) {
        if (value === "data") {
          window.location.assign(data_link);
        } else if (value === "model") {
          window.location.assign(model_link);
        } else {
          warn("There seems to be some error");
        }
      } else {
        warn("There seems to be some error");
      }
    });
  };

  render() {
    return (
      <div className="content details-page">
        <Row>
          <Col md={12}>
            <Card className="demo-icons">
              <CardHeader>
                <CardTitle>Program Details</CardTitle>
                {/* <p className="card-category">
                  Please read the following for more information
                </p> */}
                <p>
                  <text className={"text-primary"}>
                    Fusemachines AI Competition
                  </text>{" "}
                  is a competition for students and developers to come up with
                  artificial intelligence (AI) solutions. The participants will
                  have to build up the models for two different datasets and
                  also do data analysis and visualization for another dataset.
                </p>
              </CardHeader>
            </Card>
          </Col>
          <Col md={12}>
            <Card className="demo-icons">
              <CardHeader>
                <h5>Timeline</h5>
              </CardHeader>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col xs={12} sm={8} md={8} lg={4}>
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col xs={5} md={12}>
                    {/* <div className="icon-big text-center">
                              <i className="nc-icon nc-trophy text-warning" />
                            </div> */}
                    <text>8:30am-9am - Teams registration</text>
                    <br />
                    <text>9:15am-9:30am - Competition details</text>
                    <br />
                    <text>9:30am-5pm - Teams work on the tasks</text>
                    <br />
                  </Col>
                  {/* <Col xs={7} md={8}>
                            <div className="numbers">
                              <p className="card-category">Capacity</p>
                              <CardTitle tag="p">150GB</CardTitle>
                            </div>
                          </Col> */}
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <Stats>
                  {[
                    {
                      i: "far fa-calendar",
                      t: "Friday, December 28 , 2018"
                    }
                  ]}
                </Stats>
              </CardFooter>
            </Card>
          </Col>
          <Col xs={12} sm={8} md={10} lg={5}>
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col xs={5} md={12} className={'text-justify'}>
                    {/* <div className="icon-big text-center">
                              <i className="nc-icon nc-trophy text-warning" />
                            </div> */}
                    9am - Teams resume work
                    <br />
                    11am- Deadline for Model submission and Data insights/visualization task 
                    <br />
                    11am-12:00pm - Presentation of Data insights/visualization task
                    <br />
                    12pm - 12:30pm - Result announcement and prize distribution<br/>

                   
                  </Col>
                  {/* <Col xs={7} md={8}>
                            <div className="numbers">
                              <p className="card-category">Capacity</p>
                              <CardTitle tag="p">150GB</CardTitle>
                            </div>
                          </Col> */}
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <Stats>
                  {[
                    {
                      i: "far fa-calendar",
                      t: "Saturday, December 29 , 2018"
                    }
                  ]}
                </Stats>
              </CardFooter>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col md={12}>
            <Card className="demo-icons">
              <CardHeader>
                <CardTitle>Judging Criteria</CardTitle>
                <ol>
                  <li>
                    For NLP and Image task
                    <ol type={"a"}>
                      <li>
                        The team with highest performance score will win. In
                        case of tie, the prize money will be divided within the
                        teams.
                      </li>
                    </ol>
                  </li>
                </ol>
                <ol>
                  <li>
                    For data visualization and analysis task, teams will judge
                    based on:
                    <ol type={"a"}>
                      <li>
                        The information/insights generated. How valuable,
                        creative and well, insightful are they? So, this
                        includes the formulation of good questions, approaches
                        used to answer those questions, etc.
                      </li>
                      <li>
                        How that information is conveyed. After all, presenting
                        and describing the insights properly is also important.
                        So, this includes things like use of appropriate
                        visualizations, clarity of the discussion, etc.
                      </li>
                    </ol>
                  </li>
                </ol>
              </CardHeader>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col md={12}>
            <Card className="demo-icons">
              <CardHeader>
                <CardTitle>Rules of the competition</CardTitle>
                <ol>
                  <li>Python is compulsory in this event.</li>
                  <li>Dataset will be provided at the event.</li>
                  <li>
                    Prohibited to put the data into the public platform during
                    and after event.{" "}
                  </li>
                  <li>
                    Teams are free to use open source tools and libraries.
                  </li>
                  <li>Resources for model training will not be provided.</li>
                  <li>
                    Any kind of plagiarism would result in disqualification.
                  </li>
                  <li>Any kind of misbehavior will not be accepted.</li>
                </ol>
              </CardHeader>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col md={12}>
            <Card className="demo-icons">
              <CardHeader>
                <CardTitle>Task Details</CardTitle>
              </CardHeader>
              <CardHeader>
                <h6>Data Analysis and Visualization</h6>
              </CardHeader>

              <CardBody>
                <li type={"none"}>Description: </li>
                <p>
                  The data is downloaded from NEPSE [Nepal Stock Exchange]
                  website [
                  <a
                    href="http://www.nepalstock.com/floorsheet"
                    target="_blank"
                  >
                    http://www.nepalstock.com/floorsheet{" "}
                  </a>{" "}
                  ] . It consist of each and every transactions of stocks since
                  2001.
                </p>

                <p>
                  <p
                    className={"download-link"}
                    onClick={() => this.downloadDataAnalysisModel()}
                  >
                    <i className="nc-icon nc-cloud-download-93 text-primary" />{" "}
                    Download Data <br />
                  </p>
                  {/* <p
                    className={"download-link"}
                    onClick={() => this.downloadDataAnalysisModel("model")}
                  >
                    <i className="nc-icon nc-cloud-download-93 text-primary" />{" "}
                    Download Model <br />
                  </p> */}
                </p>

                <li type={"none"}>Data Details: </li>
                <p>Each csv file contains the transaction details.</p>

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
                              {dataHeader.map((prop, key) => {
                                return <th key={key}>{prop}</th>;
                              })}
                            </tr>
                          </thead>

                          <tbody>
                            <tr>
                              {dataBody.map((prop, key) => {
                                return <td key={key}>{prop}</td>;
                              })}
                            </tr>
                          </tbody>
                        </Table>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
                <li type={"none"}>Task: </li>
                <p>Generate and properly convey the information/insights.</p>
                <li type={"none"}>Submission Details: </li>
                <ol>
                  <li>
                    You have to submit a pdf (same name as your team name)
                    report detailing your findings along with any other
                    supplementary materials.
                  </li>
                  <li>
                    Email the pdf report and other materials to :
                    <b>info@fusemachines.com </b>
                    with the subject as “Data Analysis Submission-
                    &lt;Team-Name&gt;”
                  </li>
                </ol>
              </CardBody>

              <CardHeader>
                <h6>Automatic Vote Counting</h6>
                <li type={"none"}>Description: </li>
                <p>
                  The data is generated synthetically which consists of valid as
                  well as invalid voted ballot papers.
                </p>

                <p>
                  <p
                    className={"download-link"}
                    onClick={() => this.downloadImageModel("data")}
                  >
                    <i className="nc-icon nc-cloud-download-93 text-primary" />{" "}
                    Download Data <br />
                  </p>
                  <p
                    className={"download-link"}
                    onClick={() => this.downloadImageModel("model")}
                  >
                    <i className="nc-icon nc-cloud-download-93 text-primary" />{" "}
                    Download Model <br />
                  </p>
                </p>

                <li type={"none"}>Data Details: </li>
                <p>
                  There are 48 classes where 0 class corresponds to the invalid
                  voted ballot papers whereas 1-47 class corresponds to valid
                  ballot papers voted to each political party.
                </p>
                <li type={"none"}>Task: </li>
                <p>
                  Create a classifier that classifies a given voted ballot paper
                  to the corresponding class.
                </p>
                <li type={"none"}>Evaluation Metric: </li>
                <p>Accuracy of the classifier.</p>
              </CardHeader>

              <CardHeader>
                <h6>News Classification</h6>
                <li type={"none"}>Description: </li>
                <p>The nepali news is collected from various news portals.</p>

                <p>
                  <p
                    className={"download-link"}
                    onClick={() => this.downloadNLPModel("data")}
                  >
                    <i className="nc-icon nc-cloud-download-93 text-primary" />{" "}
                    Download Data <br />
                  </p>
                  <p
                    className={"download-link"}
                    onClick={() => this.downloadNLPModel("model")}
                  >
                    <i className="nc-icon nc-cloud-download-93 text-primary" />{" "}
                    Download Model <br />
                  </p>
                </p>

                <li type={"none"}>Data Details: </li>
                <p>
                  There are 6 classes where each class corresponds to the news
                  category.
                </p>
                <li type={"none"}>Task: </li>
                <p>
                  Create a classifier that classifies a given news to the
                  corresponding category.
                </p>
                <li type={"none"}>Evaluation Metric: </li>
                <p>Accuracy of the classifier.</p>
              </CardHeader>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col md={12}>
            <Card className="demo-icons">
              <CardHeader>
                <CardTitle>Instructions</CardTitle>
              </CardHeader>
              <CardHeader>
                <h6>Using project template</h6>
              </CardHeader>
              <CardBody>
                <ol>
                  <li>
                    Download the template project structure and data from the
                    website and unzip it.
                  </li>
                  <li>
                    Override the model directory data folder with the recently
                    downloaded data.
                  </li>
                  <li>
                    Rename the model directory name as your team name with task.
                    [Eg. sagar_thapa_NLP].{" "}
                  </li>
                  <li>
                    Create and start a virtual environment with python 3.5 and
                    download required libraries from the requirements.txt
                    present inside the model directory by “python install -r
                    requirements.txt”
                  </li>
                  <li>
                    Modify the main.py present inside the model directory. Be
                    sure that you follow the instruction.
                  </li>
                </ol>
              </CardBody>

              <CardHeader>
                <h6>Model Evaluation on val set and Model submission</h6>
              </CardHeader>
              <CardBody>
                <ol>
                  <li>
                    Update requirements.txt present inside the model directory:
                    pip freeze > requirements.txt
                  </li>
                  <li>Exit your virtual environment if you are using any.</li>
                  <li>
                    Run evaluate.py as “python3.5 evaluate.py --team_name
                    &lt;team_name_task&gt;“ [Eg. python evaluate.py --team_name
                    sagar_thapa_NLP] present inside the evaluation directory.
                    This will evaluate in the given validation set and will
                    create zip file inside the evaluation directory.{" "}
                  </li>
                  <li>
                    Upload the zip file present inside evaluation direction
                    [That is automatically created after running evaluate.py] in
                    the website with corresponding task type.
                  </li>
                </ol>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  downloadDataAnalysisModel: () => dispatch(downloadService.getAnalysisModel()),
  downloadNLPModel: () => dispatch(downloadService.getNLPModel()),
  downloadImageModel: () => dispatch(downloadService.getImageModel())
});

export default connect(
  null,
  mapDispatchToProps
)(Details);
