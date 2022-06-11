import Home from "./routes/home/home.component.jsx";
import Header from "./routes/header/header.component.jsx";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        {/* Index makes home the default index */}
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};
export default App;
