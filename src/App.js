import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import store from "./redux/store";
import routes from "./routes/routes";
// https://technicable-server.onrender.com

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <RouterProvider router={routes} />
      </Provider>
    </div>
  );
};

export default App;
