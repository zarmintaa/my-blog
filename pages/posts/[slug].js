// /posts/anything-url-match => slug

import { Fragment } from "react";

const SingleDetailPage = () => {
  // 1. hero => present our self
  // 2. Featured section posts
  return (
    <Fragment>
      <Hero />
      <FeaturedPost />
    </Fragment>
  );
};

export default SingleDetailPage;
