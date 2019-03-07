import React from "react";

import ScoreTable from "../../components/scoreTable";
import { TabsConstant } from "../../constants";

const DashboardView = props => {
  // let competitorsInfo;
  // if (props.competitors.length === 0) {
  //   competitorsInfo = null;
  // } else {
  //   competitorsInfo = props.competitors.map((competitor, index) => {
  //     return (
  //       <tr key={index}>
  //         <td>
  //           <img src={mike} alt="..." className={"user-icon"} />
  //         </td>
  //         <td>{competitor.rank}</td>
  //         <td>{competitor.team_name}</td>
  //         <td>{competitor.num_of_submission}</td>
  //         <td>{competitor.score}</td>
  //       </tr>
  //     );
  //   });
  // }

  const { nlp_users, image_users } = props.competitors;

  if (props.activeTab === TabsConstant.TAB_1) {
    return <ScoreTable competitors={image_users} />;
  } else {
    return <ScoreTable competitors={nlp_users} />;
  }
};

export default DashboardView;
