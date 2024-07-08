import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import AdminHomepage from "./pages/AdminHomepage";
import Task from "./pages/Task";
import Tasks from "./pages/Tasks";
import AdminHomepage1 from "./pages/AdminHomepage1";
import UserHomepage from "./pages/UserHomepage";
import LogIn from "./pages/LogIn";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/task":
        title = "";
        metaDescription = "";
        break;
      case "/tasks":
        title = "";
        metaDescription = "";
        break;
      case "/users":
        title = "";
        metaDescription = "";
        break;
      case "/user-homepage":
        title = "";
        metaDescription = "";
        break;
      case "/log-in":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<AdminHomepage />} />
      <Route path="/task" element={<Task />} />
      <Route path="/tasks" element={<Tasks />} />
      <Route path="/users" element={<AdminHomepage1 />} />
      <Route path="/user-homepage" element={<UserHomepage />} />
      <Route path="/log-in" element={<LogIn />} />
    </Routes>
  );
}
export default App;
