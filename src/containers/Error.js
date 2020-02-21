import React from "react";
import "./Error.css";

function querystring(names, url = window.location.href) {
  let keys = Object.keys(names);
  names = Object.values(names);

  names = names.map(name => {
    return name.replace(/[[]]/g, "\\$&");
  });

  const regex = new RegExp(
    `[?&]${names[0]}(=([^&#]*)|&|#|$)[?&]${names[1]}(=([^&#]*)|&|#|$)[?&]${names[2]}(=([^&#]*)|&|#|$)[?&]${names[3]}(=([^&#]*)|&|#|$)`,
    "i"
  );

  const results = regex.exec(url);

  if (!results) {
    return null;
  }
  if (!results[2] && !results[4] && !results[6] && !results[8]) {
    return "";
  }

  let interestResults = [results[2], results[4], results[6], results[8]];

  let cleanResults = interestResults.map(result =>
    decodeURIComponent(result.replace(/\+/g, " "))
  );

  let objsErrors = keys.map((key, i) =>
    Object.assign({}, { [key]: cleanResults[i] })
  );

  return objsErrors.reduce((obj, item) => {
    return { ...obj, [Object.keys(item)[0]]: Object.values(item)[0] };
  });
}

export default function Error(props) {
  const errorExplanation = querystring({
    status: "status",
    statusText: "statustext",
    error: "error",
    id: "id"
  });

  return (
    <div className="Error">
      {errorExplanation &&
      errorExplanation.status &&
      errorExplanation.statusText &&
      errorExplanation.error ? (
        <>
          <h2>Sorry, Request failed!</h2>
          <div>
            <h2>{`ERROR ${errorExplanation.status}`}</h2>
            <h3>
              <b>{`${errorExplanation.statusText}`}</b>
            </h3>
            <p>{`${errorExplanation.error}`}</p>
            {errorExplanation.id && (
              <p>{`Note ${errorExplanation.id} don't exist!`}</p>
            )}
          </div>
        </>
      ) : (
        <h2>Sorry, Indefined Error!</h2>
      )}
    </div>
  );
}
