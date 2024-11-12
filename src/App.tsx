import Home from "./pages/Home";
import Groups from "./pages/Groups";
import MyGroups from "./pages/MyGroups";
import Messages from "./pages/Messages";
import OpenGroup from "./pages/OpenGroup";
import Profile from "./pages/Profile";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Navbar from "./Navbar";
import PageNotFound from "./PageNotFound";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AuthProvider, useAuth } from "./Authentication";

const AuthenticatedRoutes = () => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/groups" element={<Groups />} />
        <Route path="/mygroups" element={<MyGroups />} />

        <Route path="/messages" element={<Messages />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/opengroup" element={<OpenGroup />} />
          <Route path="*" element={<AuthenticatedRoutes />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;
