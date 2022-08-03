import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { PublicRoute } from "./Component/Route/index";
import { SumLayout } from "./Component/Layout/index";
import { Routess } from "./Component/Interface";


function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          {PublicRoute.map((route: Routess, index: number) => {
            const Layout = route.component;
            return (
              <Route
                path={route.path}
                key={index}
                element={
                  <SumLayout>
                    <Layout />
                  </SumLayout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
