import NavBar from "../../components/NavBarOrg";
import Footer from "../../components/footer";
import PostsView from "../../components/PostsView";

export default function ViewNotificationPosts({ filter }) {
  return (
    <div>
      <NavBar posts = {[]}></NavBar>
      <PostsView isAll = {false} filter={filter}></PostsView>
      <Footer></Footer>
    </div>
  );
}
