import { Outlet } from "react-router-dom";
import "./App.css";
import MainLayout from "./components/layouts/MainLayout";


function App() {

  return (
    <>
      <MainLayout>
        <Outlet></Outlet>
      </MainLayout>
    </>
  );
}

export default App;
