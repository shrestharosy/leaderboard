import React from "react";
import { connect } from "react-redux";
import { Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";

import DashboardView from "./DashboardView";
import { competitorsService } from "../../service";
import { viewUtils, success } from "../../utils";
import pusherInstance from "../../utils/pusher.utils";
import { TabsConstant } from "../../constants";
import { error } from "../../utils/alert.utils";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      activeTab: TabsConstant.TAB_1,
      competitors: {}
    };
  }

  componentDidMount() {
    pusherInstance.getChannelInstance().bind("my-event", data => {
      console.log("pusherdata", data);
      if (data.message === "hello world") {
        error("Oops..there seems to be some error.");
      } else {
        success("Updating leaderboard");
        this.setState({
          competitors: data.message
        });
      }
    });
    this.setState({
      isLoading: true
    });
    this.props
      .getAllCompetitors()
      .then(result => {
        this.setState({
          competitors: result.data,
          isLoading: false
        });
      })
      .catch(e => {
        this.setState({
          isLoading: false
        });
        console.log(e);
      });
  }

  componentWillMount() {
    pusherInstance.getChannelInstance().unbind("my-event");
  }

  toggleTab = tabName => {
    this.setState({
      activeTab: tabName
    });
  };

  render() {
    const { isLoading, activeTab, competitors } = this.state;

    let view;

    if (isLoading || viewUtils.isEmptyObject(competitors)) {
      view = <div>Loading...</div>;
    } else {
      view = <DashboardView activeTab={activeTab} competitors={competitors} />;
    }

    return (
      <div className="content">
        <Nav tabs>
          <NavItem
            className={`tab-item ${
              activeTab === `${TabsConstant.TAB_1}` ? "active" : ""
            }`}
          >
            <NavLink
              className={"tab-item-link"}
              onClick={() => {
                this.toggleTab(TabsConstant.TAB_1);
              }}
            >
              Automatic Vote Count
            </NavLink>
          </NavItem>
          <NavItem
            className={`tab-item ${
              activeTab === `${TabsConstant.TAB_2}` ? "active" : ""
            }`}
          >
            <NavLink
              className={"tab-item-link"}
              onClick={() => {
                this.toggleTab(TabsConstant.TAB_2);
              }}
            >
              News Classification
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId={TabsConstant.TAB_1}>
            {/* tab1 contents */}
            {view}
          </TabPane>
          <TabPane tabId={TabsConstant.TAB_2}>
            {" "}
            {/* tab2 contents */}
            {view}
          </TabPane>
        </TabContent>
      </div>
    );
  }
}

const mapStateToProps = ({ competitors }) => ({
  competitors: competitors
});

const mapDispatchToProps = dispatch => ({
  getAllCompetitors: () => dispatch(competitorsService.getAllCompetitors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
