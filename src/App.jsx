import "./App.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Homepage from "./components/Homepage/Homepage";
import TopHeader from "./components/Header/TopHeader";

function App() {

  const Layout = () => {
    return (
      <>
        <div className="flex gap-8 ">
          <div className="w-[20%]">
            <Header></Header>
          </div>
          <div className="flex flex-col w-[80%]">
            <TopHeader></TopHeader>
            <Outlet></Outlet>
          </div>
        </div>

        <Footer></Footer>
      </>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children: [
        { path: "/", element: <Homepage></Homepage> },
        // { path: "/marketing", element: <Marketing></Marketing> },
      ],
    },
  ]);

  return (
    <div className="App ">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
