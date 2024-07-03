import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@pages/Home";
import DefaultLayout from "@layouts/DefaultLayout";

const routes = [{ path: "/", page: Home, layout: DefaultLayout }];

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    {routes.map((route, index) => {
                        const { path, page: Page, layout: Layout } = route;

                        return (
                            <Route
                                key={index}
                                path={path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
