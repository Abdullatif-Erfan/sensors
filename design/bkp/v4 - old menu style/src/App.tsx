// import React from 'react';
// import './App.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { HomePage } from "./pages/Home.page";
// import {QueryClientProvider, QueryClient } from "react-query";
// import { ReactQueryDevtools } from "react-query/devtools";
// import { HomePage } from './components/Home.page'

// import { lazy, Suspense } from "react";

// import './pages/commonStyle/style.scss';

// const queryClient = new QueryClient();

function App() {
  return (
    // <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        {/* <Route path="/rq-super-heroes/:heroId" element={<RQsuperHeroesDetails />} /> */}
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
    // <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    // </QueryClientProvider>
  );
}

export default App;
