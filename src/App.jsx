import "./App.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Homepage from "./components/Homepage/Homepage";
import TopHeader from "./components/Header/TopHeader";
import Courses from "./Courses";
import About from "./About";
import Members from "./Members";
import Course from "./Course";


function App() {

  const Layout = () => {
    return (
      <>
        <div className="flex gap-8 h-svh">
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
        { path: "/courses", element: <Courses></Courses> },
        { path: "/about", element: <About></About> },
        { path: "/members", element: <Members></Members> },
        { path: "courses/1", element: <Course></Course> },
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
