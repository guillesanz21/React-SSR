import React from "react";
import { renderToString } from "react-router-dom";

import Home from "../client/components/Home";

export default () => {
  const content = renderToString(<Home />);
  return `
    <html>
      <head></head>
      <body>
        <div id="root">${content}</div>
        <script src="bundle.js></script>
      </body>
    </html>
  `;
};
