import { lazy, Suspense, Fragment } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import { Header } from "./components/header/Header";
import { SidebarMenu } from "./components/sidebar/SidebarMenu";
import { Footer } from "./components/footer/Footer";
import Loader from "./components/loader/Loader";

const HomePage = lazy(() => import("./pages/home/Home"));
const NotFoundPage = lazy(() => import("./pages/notFound/NotFoundPage"));
const SensorDetailsPage = lazy(() =>
  import("./pages/sensorDetails/SensorDetails")
);

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Fragment>
          <Header />
          <SidebarMenu />
        </Fragment>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/reports" element={<HomePage />} />
            <Route path="/sensors" element={<HomePage />} />
            <Route path="/sensorDetails/:id" element={<SensorDetailsPage />} />
            <Route path="/settings" element={<HomePage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
        <Footer />
      </Router>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
