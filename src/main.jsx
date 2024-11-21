import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { QueryClientProvider } from "react-query";
import { client } from "./config/QueryClient.js";

createRoot(document.getElementById("root")).render(
  <BrowserRouter
    future={{ v7_relativeSplatPath: true, v7_startTransition: true }}
  >
    <QueryClientProvider client={client}>
      <App />
    </QueryClientProvider>
  </BrowserRouter>
);
