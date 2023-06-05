import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes, privateRoutes } from './routes/router';
import DefaultLayout from './layouts/DefaultLayout/DefaultLayout';
import { SeatProvider } from './context/SeatContext';

function App() {
    return (
        <SeatProvider>
            <Router>
                <div className="App">
                    <Routes>
                        {publicRoutes.map((route, index) => {
                            const Layout = route.layout || DefaultLayout;
                            const Page = route.component;
                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={
                                        <Layout>
                                            <Page />
                                        </Layout>
                                    }
                                />
                            );
                        })}
                        {privateRoutes.map((route, index) => {
                            const Layout = route.layout || DefaultLayout;
                            const Page = route.component;
                            const ProtectedRoute = route.protected;

                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={
                                        <Layout>
                                            <ProtectedRoute>
                                                <Page />
                                            </ProtectedRoute>
                                        </Layout>
                                    }
                                />
                            );
                        })}
                    </Routes>
                </div>
            </Router>
        </SeatProvider>
    );
}

export default App;
