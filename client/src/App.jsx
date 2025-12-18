import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectRoute from "./components/auth/ProtectRoute.jsx";
const Home = lazy(() => import("./pages/Home.jsx"));
const About = lazy(() => import("./pages/About.jsx"));
const Chat = lazy(() => import("./pages/Chat.jsx"));
const Group = lazy(() => import("./pages/Group.jsx"));
const Login = lazy(() => import("./pages/Login.jsx"));

let user = false;

function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route
              path="/"
              element={
                <ProtectRoute user={user}>
                  <Home />
                </ProtectRoute>
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/chat/:chatId" element={<Chat />} />
            <Route path="/group" element={<Group />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
