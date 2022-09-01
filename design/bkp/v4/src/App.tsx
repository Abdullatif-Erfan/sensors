import { lazy, Suspense , Fragment} from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { Header } from "./components/header/Header";
import { SidebarMenu } from "./components/sidebar/SidebarMenu";
import { Footer } from "./components/footer/Footer";
import Loader from "./components/loader/Loader";
// import { PageNotFound } from "./pages/notFound/PageNotFound";


const HomePage = lazy(() => import("./pages/home/Home"));
const PageNotFound = lazy(()=> import("./pages/notFound/PageNotFound"));
const SensorDetailsPage  = lazy(()=> import("./pages/sensorDetails/SensorDetails"));

// import {QueryClientProvider, QueryClient } from "react-query";
// import { ReactQueryDevtools } from "react-query/devtools";
// import { HomePage } from './components/Home.page'


// import './pages/commonStyle/style.scss';
// const queryClient = new QueryClient();

function App() {
  return (
    // <QueryClientProvider client={queryClient}>
    <Router>
      <Fragment>
         <Header />
         <SidebarMenu />
      </Fragment>
      <Suspense fallback={<Loader />}>
      <Routes>
        {/* <Route path="/rq-super-heroes/:heroId" element={<RQsuperHeroesDetails />} /> */}
        <Route path="/reports" element={<HomePage />} />
        <Route path="/sensors" element={<HomePage />} />
        <Route path="/sensorDetails/:id" element={<SensorDetailsPage />} />
        <Route path="/settings" element={<HomePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      </Suspense>
      <Footer />
    </Router>
    // <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    // </QueryClientProvider>
  );
}

export default App;
