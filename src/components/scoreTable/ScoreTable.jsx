import * as React from "react";

import ScoreTableView from "./ScoreTableView";
import gold from "assets/img/gold-medal.png";
import { userUtils } from "../../utils/user.utils";

class ScoreTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showUploadModal: false
    };
  }

  toggleUploadModal = () => {
    this.setState({
      showUploadModal: !this.state.showUploadModal
    });
  };

  render() {
    const { showUploadModal } = this.state;

    const { competitors } = this.props;

    const goldenBadge = <img src={gold} className={"user-icon"} alt="..." />;
    const username = userUtils.getLoggedInUsername();

    let competitorsInfo;
    if (competitors.length === 0) {
      competitorsInfo = null;
    } else {
      competitorsInfo = competitors.map((competitor, index) => {
        const getUserIcon = userUtils.getUserIcon(competitor.team_name)
        return (
          <tr
            key={index}
            className={
              username === competitor.team_name ? "highlight-user" : ""
            }
          >
            <td>
              <img src={getUserIcon} alt="..." className={`user-icon `} />
            </td>
            <td>{competitor.team_name}</td>
            <td>{competitor.num_of_submission}</td>
            <td>{competitor.rank === 1 ? goldenBadge : competitor.rank}</td>
            <td>{competitor.score}</td>
          </tr>
        );
      });
    }
    return (
      <ScoreTableView
        competitorsInfo={competitorsInfo}
        showUploadModal={showUploadModal}
        toggleUploadModal={this.toggleUploadModal}
      />
    );
  }
}

export default ScoreTable;
