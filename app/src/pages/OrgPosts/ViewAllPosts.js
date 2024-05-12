import NavBar from "../../components/NavBar";
import Footer from "../../components/footer";
import PostsView from "../../components/PostsView";

export default function ViewAllPosts({ filter }) {
  return (
    <div>
      <NavBar></NavBar>
      <PostsView isAll={true} filter={filter}></PostsView>
      <Footer></Footer>
    </div>
  );
}
