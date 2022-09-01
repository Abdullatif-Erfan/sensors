import React, { Fragment } from "react";
import "./notFoundPageStyle.css";

const NotFoundPage = () => {
  return (
       <Fragment>
         <main id="main" className="main">
          <section className="section dashboard">
          <div className="col-lg-12 notFoundMessage">
            <h2 className="x-large text-danger">
              <i className="fa fa-exclamation-triangle"></i> Page Not Found
            </h2>
            <p className="large">Sorry, this page does not exist</p>
            
        </div>
        </section>
        </main>
    </Fragment>
  );
};
export default NotFoundPage;
