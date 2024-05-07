import NavBar from "../components/NavBar";
import Footer from "../components/footer";
import ItemsVeiw from "../components/ItemsVeiw";

export default function DonorBrowser({filter}) {
  return (
    <div>
      <NavBar></NavBar>
      <ItemsVeiw filter={filter}></ItemsVeiw>
      <Footer></Footer>
    </div>
  );
}
