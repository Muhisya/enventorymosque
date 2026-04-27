import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import InventoryForm from "./components/InventoryForm";
import InventoryList from "./components/InventoryList";
import "./index.css";

function App() {
  return (
    <div className="min-h-screen bg-emerald-50/50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-extrabold text-emerald-900 tracking-tight">
            E-Inventory <span className="text-emerald-600">Masjid</span>
          </h1>
          <p className="mt-2 text-emerald-700/70 font-medium">Sistem Pendataan Inventaris Barang Masjid</p>
        </header>

        <InventoryForm />
        <InventoryList />
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);