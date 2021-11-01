// /posts

import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/posts-util";
import { Fragment } from "react";
import Head from "next/head";

const AllPostPage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>All Posts</title>
        <meta name="description" content="All posts about programming" />
      </Head>
      <AllPosts posts={props.posts} />;
    </Fragment>
  );
};

export const getStaticProps = () => {
  const allPosts = getAllPosts();
  return {
    props: {
      posts: allPosts,
    },
  };
};

export default AllPostPage;
