// /posts/anything-url-match => slug

import PostContent from "../../components/posts/post-detail/post-content";
import { getPostData, getPostsFiles } from "./../../lib/posts-util";

const PostDetailPage = (props) => {
  // 1. hero => present our self
  // 2. Featured section posts
  return <PostContent post={props.post} />;
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const { slug } = params;
  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
};

export const getStaticPaths = () => {
  const postFilenames = getPostsFiles();
  const slugs = postFilenames.map((fileName) => fileName.replace(/\.md$/, ""));
  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
};

export default PostDetailPage;
