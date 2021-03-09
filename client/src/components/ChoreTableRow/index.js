import React, { useRef } from "react";

export default function ChoreTableRow(props) {
    
      return (
        <tr>
          <td>{props.choreName}</td>
          <td>{props.choreDescription}</td>
          <td>{props.choreFrequency}</td>
          <td>{props.assignee}</td>
        </tr>
      );
  }
  