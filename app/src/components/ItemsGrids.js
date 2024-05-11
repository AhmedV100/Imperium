import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ItemCard from "../components/ItemCard";

// Import your data
// import bloods from "../Data/Bloods.json";
// import books from "../Data/Books.json";
// import cases from "../Data/Cases.json";
// import clothes from "../Data/Clothes.json";
// import foods from "../Data/Foods.json";
// import meds from "../Data/Meds.json";
// import stationaries from "../Data/Stationaries.json";
// import teaches from "../Data/Teaches.json";
// import toys from "../Data/Toys.json";

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function applyBloodFilters(items, filters) {
  return items.filter((item) => {
    if (
      filters[0].trim() !== "" &&
      item["hospital_name"].toLowerCase() !== filters[0]
    ) {
      return false;
    }
    if (
      filters[1].trim() !== "" &&
      item["governorate"].toLowerCase() !== filters[1]
    ) {
      return false;
    }
    if (
      filters[2].trim() !== "" &&
      item["hospital_area"].toLowerCase() !== filters[2]
    ) {
      return false;
    }
    return true;
  });
}
function applyCasesFilters(items, filters) {
  return items.filter((item) => {
    if (
      filters[6].trim() !== "" &&
      item["medical_specialty"].toLowerCase() !== filters[6]
    ) {
      return false;
    }
    if (
      filters[7].trim() !== "" &&
      item["organization_name"].toLowerCase() !== filters[7]
    ) {
      return false;
    }
    return true;
  });
}
function applyClothesFilters(items, filters) {
  return items.filter((item) => {
    if (filters[0].trim() !== "" && item["age"].toLowerCase() !== filters[0]) {
      return false;
    }
    if (
      filters[1].trim() !== "" &&
      item["gender"].toLowerCase() !== filters[1]
    ) {
      return false;
    }
    if (
      filters[2].trim() !== "" &&
      item["season"].toLowerCase() !== filters[2]
    ) {
      return false;
    }
    return true;
  });
}
function applyFoodsFilters(items, filters) {
  return items.filter((item) => {
    if (!filters.includes(item["type"])) {
      return false;
    }
    return true;
  });
}

function applyMedsFilters(items, filters) {
  return items.filter((item) => {
    if (
      filters[0].trim() !== "" &&
      item["device_type"].toLowerCase() !== filters[0]
    ) {
      return false;
    }
    if (
      filters[1].trim() !== "" &&
      item["equipment_type"].toLowerCase() !== filters[1]
    ) {
      return false;
    }
    if (
      filters[2].trim() !== "" &&
      item["medication_type"].toLowerCase() !== filters[2]
    ) {
      return false;
    }
    if (
      filters[3].trim() !== "" &&
      item["use"].toLowerCase() !== filters[3] &&
      item["type"].toLowerCase() === "medication"
    ) {
      return false;
    }
    return true;
  });
}

function applyTeachesFilters(items, filters) {
  return items.filter((item) => {
    if (
      filters[1].trim() !== "" &&
      !item["subjects_to_be_taught"].toLowerCase().includes(filters[1])
    ) {
      return false;
    }
    if (filters[2].trim() !== "" && item["area"].toLowerCase() !== filters[2]) {
      return false;
    }
    if (
      filters[3].trim() !== "" &&
      item["government"].toLowerCase() !== filters[3]
    ) {
      return false;
    }
    return true;
  });
}
function applyToysFilters(items, filters) {
  return items.filter((item) => {
    if (filters[0].trim() !== "" && item["age"].toLowerCase() !== filters[0]) {
      return false;
    }
    if (
      filters[1].trim() !== "" &&
      item["gender"].toLowerCase() !== filters[1]
    ) {
      return false;
    }
    if (!filters[2].includes(item["type"].toLowerCase())) {
      return false;
    }
    return true;
  });
}

export default function ItemsGrid({
  category,
  currentPage,
  onPageChange,
  filterOptionsForClothes,
  filterOptionsForToys,
  filterOptionsForFoods,
  filterOptionsForMedicalSupplies,
  filterOptionsForSchoolSupplies,
  filterOptionsForBloodDonations,
}) {
  const [bloods, setBloods] = useState();
  const [books, setBooks] = useState();
  const [cases, setCases] = useState();
  const [clothes, setClothes] = useState();
  const [foods, setFoods] = useState();
  const [meds, setMeds] = useState();
  const [stationaries, setStationaries] = useState();
  const [teaches, setTeaches] = useState();
  const [toys, setToys] = useState();

  const all = [
    ...bloods,
    ...books,
    ...cases,
    ...clothes,
    ...foods,
    ...meds,
    ...stationaries,
    ...teaches,
    ...toys,
  ];

  const shuffledAll = shuffleArray(all);
  const [originalItems, setOriginalItems] = useState(shuffledAll);
  const [currentItems, setCurrentItems] = useState([]);

  useEffect(() => {
    const storedDataPosts = JSON.parse(localStorage.getItem("data")).posts;
    setBloods(storedDataPosts.filter((post) => post.object_type === "bloods"));
    setBooks(storedDataPosts.filter((post) => post.object_type === "books"));
    setCases(storedDataPosts.filter((post) => post.object_type === "cases"));
    setClothes(
      storedDataPosts.filter((post) => post.object_type === "clothes")
    );
    setFoods(storedDataPosts.filter((post) => post.object_type === "foods"));
    setMeds(storedDataPosts.filter((post) => post.object_type === "meds"));
    setStationaries(
      storedDataPosts.filter((post) => post.object_type === "stationaries")
    );
    setTeaches(
      storedDataPosts.filter((post) => post.object_type === "teaches")
    );
    setToys(storedDataPosts.filter((post) => post.object_type === "toys"));
  }, []);

  console.log("bloods: ", bloods);
  console.log("books: ", books);
  console.log("cases: ", cases);
  console.log("clothes: ", clothes);
  console.log("foods: ", foods);
  console.log("meds: ", meds);
  console.log("stationaries: ", stationaries);
  console.log("teaches: ", teaches);
  console.log("toys: ", toys);

  const pageSize = 9;

  useEffect(() => {
    const fetchItems = async (category) => {
      try {
        let response;
        switch (category) {
          case "all":
          case "All":
            const combinedData_all = [
              ...bloods,
              ...books,
              ...cases,
              ...clothes,
              ...foods,
              ...meds,
              ...stationaries,
              ...teaches,
              ...toys,
            ];
            // response = shuffleArray(combinedData_all);
            response = combinedData_all;
            break;
          case "blood":
          case "blood donation":
          case "blood donations":
            response = applyBloodFilters(
              bloods,
              filterOptionsForBloodDonations
            );
            // response = bloods;
            break;
          case "book":
          case "books":
          case "book donation":
          case "books donations":
            response = books;
            break;
          case "case":
          case "cases":
          case "case donation":
          case "cases donations":
          case "medical cases donations":
          case "medical case donations":
            response = applyCasesFilters(
              cases,
              filterOptionsForMedicalSupplies
            );
            // response = cases;
            break;
          case "cloth":
          case "clothes":
          case "cloth donation":
          case "clothes donations":
            response = applyClothesFilters(clothes, filterOptionsForClothes);
            // response = clothes;
            break;
          case "food":
          case "food donations":
          case "food donation":
            response = applyFoodsFilters(foods, filterOptionsForFoods[0]);
            // response = foods;
            break;
          case "medical":
          case "medical donations":
          case "medical supplies":
            const response_meds = applyMedsFilters(
              meds,
              filterOptionsForMedicalSupplies
            );
            response = response_meds;
            break;
          case "stationaries":
          case "stationary":
          case "school":
          case "school supplies":
            const response_teaches = applyTeachesFilters(
              teaches,
              filterOptionsForSchoolSupplies
            );
            const response_stationaries = stationaries;
            const response_books = books;
            var combinedData_school = [
              ...response_teaches,
              ...response_stationaries,
              ...response_books,
            ];
            if (filterOptionsForSchoolSupplies[0] === "books") {
              combinedData_school = response_books;
            } else if (filterOptionsForSchoolSupplies[0] === "stationaries") {
              combinedData_school = response_stationaries;
            }
            // response = shuffleArray(combinedData_school);
            response = combinedData_school;
            break;
          case "teach":
          case "teaching":
            response = applyTeachesFilters(
              teaches,
              filterOptionsForSchoolSupplies
            );
            break;
          case "toys":
          case "toy":
            // response = toys;
            response = applyToysFilters(toys, filterOptionsForToys);
            break;
          default:
            console.error("Invalid category:", category);
            return;
        }
        setOriginalItems(response);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };

    fetchItems(category.toLowerCase());
  }, [
    category,
    filterOptionsForClothes,
    filterOptionsForToys,
    filterOptionsForFoods,
    filterOptionsForMedicalSupplies,
    filterOptionsForSchoolSupplies,
    filterOptionsForBloodDonations,
    bloods,
    books,
    cases,
    clothes,
    foods,
    meds,
    stationaries,
    teaches,
    toys,
  ]);

  useEffect(() => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    setCurrentItems(originalItems.slice(startIndex, endIndex));
  }, [currentPage, originalItems]);

  return (
    <Container>
      <Row>
        {currentItems.map((item, index) => (
          <Col key={index} sm={4}>
            <ItemCard item={item} index={index}></ItemCard>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
