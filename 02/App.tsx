import { Provider } from "jotai";

import AppInner from "./AppInner";

const App = () => {
  return (
    <Provider>
      <AppInner />
    </Provider>
  );
};

export default App;
