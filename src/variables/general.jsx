// ##############################
// // // table head data and table body data for Tables view
// #############################

import mike from "assets/img/logo-small.png";

const thead = ["User", "Team Name", "Submission Count", "Rank", "Score"];
const tbody = [
  {
    data: [mike, "Dakota Rice", "1", "1", "36,738"]
  },
  {
    className: "",
    data: [mike, "Minerva Hooper", "1", "2", "23,789"]
  },
  {
    className: "table-info",
    data: [mike, "Sage Rodriguez", "1", "4", "56,142"]
  },
  {
    className: "",
    data: [mike, "Philip Chaney", "1", "3", "38,735"]
  },
  {
    className: "table-danger",
    data: [mike, "Doris Greene", "1", "4", "63,542"]
  },
  { className: "", data: [mike, "Mason Porter", "1", "4", "78,615"] },
  {
    className: "table-warning",
    data: [mike, "Jon Porter", "1", "1", "98,615"]
  },
  { className: "", data: [mike, "Mason Porter", "1", "4", "78,615"] },
  { className: "", data: [mike, "Mason Porter", "1", "4", "78,615"] },
  { className: "", data: [mike, "Mason Porter", "1", "4", "78,615"] },
  { className: "", data: [mike, "Mason Porter", "1", "4", "78,615"] },
  { className: "", data: [mike, "Mason Porter", "1", "4", "78,615"] },
  { className: "", data: [mike, "Mason Porter", "1", "4", "78,615"] },
  { className: "", data: [mike, "Mason Porter", "1", "4", "78,615"] }
];

const dataHeader = [
  "Contract No.",
  "Stock Symbol",
  "Buyer Broker",
  "Seller Broker",
  "Quantity",
  "Rate",
  "Amount"
];

const dataBody = [
  "Unique id of each transaction. It also consists of date of the transaction. ",
  "Unique symbol given to company",
  "Id of broker buying the stock",
  "Id of broker selling the stock",
  "Number of transacted shares.",
  "Price of each transacted share.",
  "Total transaction amount."
];

export { thead, tbody, dataHeader, dataBody };
