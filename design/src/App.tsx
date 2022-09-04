import { lazy, Suspense, Fragment } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import { Header } from "./components/header/Header";
import { SidebarMenu } from "./components/sidebar/SidebarMenu";
import { Footer } from "./components/footer/Footer";
import Loader from "./components/loader/Loader";

const HomePage = lazy(() => import("./pages/home/Home"));
const SensorsList = lazy(() =>
  import("./pages/sensors/sensorsList/SensorsList")
);
const NotFoundPage = lazy(() => import("./pages/notFound/NotFoundPage"));
const SensorDetailsPage = lazy(() =>
  import("./pages/sensorDetails/detailsHome/SensorDetails")
);

// Create an object from QueryClient to provide data from cache for all components
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
            <Route path="/sensors" element={<SensorsList />} />
            <Route
              path="/sensorDetails/:device_id"
              element={<SensorDetailsPage />}
            />
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
