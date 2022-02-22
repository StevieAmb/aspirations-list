import React from "react";
import Aspirations from "./Aspirations";

const AspirationsList = ({aspiration}) => {
  let aspirationList = aspiration.map(aspiration => {
    return (
        <Aspirations
          key={aspiration.id}
          id={aspiration.id}
          goal={aspiration.aspiration}
          reason={aspiration.why}
          />
    )
  })

  return (
    <div>
      {aspirationList}
    </div>
  )
}

export default AspirationsList;