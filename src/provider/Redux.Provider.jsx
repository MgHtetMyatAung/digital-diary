import { Provider } from "react-redux";
import { persist, store } from "../redux/store";
import { PersistGate } from "redux-persist/lib/integration/react";

// eslint-disable-next-line react/prop-types
export default function ReduxProvider({ children }) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persist} loading={null}>
        {children}
      </PersistGate>
    </Provider>
  );
}
