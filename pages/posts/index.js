// /posts

import AllPosts from "../../components/posts/all-posts";
import { DUMMY_DATA } from "../index";

const AllPostPage = () => {
  return <AllPosts posts={DUMMY_DATA} />;
};

export default AllPostPage;
