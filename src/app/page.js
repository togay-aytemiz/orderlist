"use client";

// import Hook from "@/hooks/CustomHooks";
import App from "@/Components/App";
import { AppProvider } from "@/context/foods";

const HomePage = () => {
  return (
    <AppProvider>
      <App />
    </AppProvider>
  );
};
export default HomePage;
