import { Fragment } from "react";
import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-post";
import { getFeaturedPosts } from "../lib/posts-util";

export const DUMMY_DATA = [
  {
    slug: "getting-started-with-nextjs",
    title: "Getting started with NextJs",
    image: "getting-started-nextjs.png",
    excerpt:
      "Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed.",
    date: "2022-03-10",
  },
  {
    slug: "getting-started-with-nextjs2",
    title: "Getting started with NextJs",
    image: "getting-started-nextjs.png",
    excerpt:
      "Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed.",
    date: "2022-03-10",
  },
  {
    slug: "getting-started-with-nextjs3",
    title: "Getting started with NextJs",
    image: "getting-started-nextjs.png",
    excerpt:
      "Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed.",
    date: "2022-03-10",
  },
  {
    slug: "getting-started-with-nextjs4",
    title: "Getting started with NextJs",
    image: "getting-started-nextjs.png",
    excerpt:
      "Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed.",
    date: "2022-03-10",
  },
];

const HomePage = (props) => {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
};

export const getStaticProps = () => {
  const featuredPosts = getFeaturedPosts();
  return {
    props: {
      posts: featuredPosts,
    },
    revalidate: 60,
  };
};

export default HomePage;
