import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from 'react-hot-loader'
import App from "./App";
import "./index.css";

ReactDOM.render(<App />, document.getElementById("root"));

/*
  The below is for react-static.
  The CSS modules are not working with react-static at the moment.
  TODO: fix CSS packaging for react-static and uncomment below code.
*/

// // Export your top level component as JSX (for static rendering)
// export default App

// // Render your app
// if (typeof document !== 'undefined') {
//   const target = document.getElementById('root')

//   const renderMethod = target.hasChildNodes()
//     ? ReactDOM.hydrate
//     : ReactDOM.render

//   const render = Comp => {
//     renderMethod(
//       <AppContainer>
//         <Comp />
//       </AppContainer>,
//       target
//     )
//   }

//   // Render!
//   render(App)

//   // Hot Module Replacement
//   if (module && module.hot) {
//     module.hot.accept('./App', () => {
//       render(App)
//     })
//   }
// }