import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const HomelightthemeDesktop1440pxanddown = React.lazy(() =>
  import("pages/HomelightthemeDesktop1440pxanddown"),
);
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route
            path="/homelightthemedesktop1440pxanddown"
            element={<HomelightthemeDesktop1440pxanddown />}
          />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
