import "./../style/global.scss";
import { Header } from "./Components/Header";
import { Dashboard } from "./pages/dashboard";
import { persistor, store } from "./redux/store";
import { PersistGate } from 'redux-persist/integration/react';
import { Provider as ReduxProvider } from "react-redux";

function App() {
  return (
    <div className="App">
      <ReduxProvider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Header />
          <Dashboard />
        </PersistGate>
      </ReduxProvider>
    </div>
  );
}

export default App;
