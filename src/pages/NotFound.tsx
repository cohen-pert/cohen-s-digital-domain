import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>404 — Page Not Found | Cohen Pert</title>
        <meta name="description" content="The page you're looking for doesn't exist. Return to Cohen Pert's homepage to explore AI automation and business systems work." />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href={`https://cohenpert.me${location.pathname}`} />
        <meta property="og:title" content="404 — Page Not Found | Cohen Pert" />
        <meta property="og:description" content="The page you're looking for doesn't exist." />
        <meta property="og:url" content={`https://cohenpert.me${location.pathname}`} />
        <meta name="twitter:title" content="404 — Page Not Found | Cohen Pert" />
        <meta name="twitter:description" content="The page you're looking for doesn't exist." />
      </Helmet>
      <div className="flex min-h-screen items-center justify-center bg-muted">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold">404</h1>
          <p className="mb-4 text-xl text-muted-foreground">Oops! Page not found</p>
          <a href="/" className="text-primary underline hover:text-primary/90">
            Return to Home
          </a>
        </div>
      </div>
    </>
  );
};

export default NotFound;
