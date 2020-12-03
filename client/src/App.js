import "./App.css";
import { NavigationBar } from "./components/navigationbar/NavigationBar";
import { Routing } from "./routes/Routing.js";
import { UserProvider } from "./shared/global/provider/UserProvider.js";
import Form from "../src/components/form/Form.js";

function App() {
  return (
    <UserProvider>
      <Routing>
        <div className="App">
          <NavigationBar />
        </div>
        <div className="usercontainer">
          <Form />
        </div>
      </Routing>
    </UserProvider>
  );
}

export default App;
