import NavBar from "../../components/NavBar";
import Footer from "../../components/footer";
import PostsView from "../../components/PostsView";

export default function ViewNotificationPosts({ filter }) {
  return (
    <div>
      <NavBar></NavBar>
      <PostsView isAll = {false} filter={filter}></PostsView>
      <Footer></Footer>
    </div>
  );
}
