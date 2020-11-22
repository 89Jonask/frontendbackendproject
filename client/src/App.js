import "./App.css";
import { NavigationBar } from "./components/navigationbar/NavigationBar";
import { Routing } from "./routes/Routing.js";
import { UserProvider } from "./shared/global/provider/UserProvider.js";

function App() {
  return (
    <UserProvider>
      <Routing>
        <div className="App">
          <NavigationBar />
        </div>
      </Routing>
    </UserProvider>
  );
}

export default App;
