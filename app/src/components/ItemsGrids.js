import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ItemCard from "../components/ItemCard";

// Import your data
import bloods from "../Data/Bloods.json";
import books from "../Data/Books.json";
import cases from "../Data/Cases.json";
import clothes from "../Data/Clothes.json";
import foods from "../Data/Foods.json";
import meds from "../Data/Meds.json";
import stationaries from "../Data/Stationaries.json";
import teaches from "../Data/Teaches.json";
import toys from "../Data/Toys.json";

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
    if (filters[0].trim() !== "" && 
    item["age"].toLowerCase() !== filters[0]) {
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
            // const response_cases = applyCasesFilters(
            //   cases,
            //   filterOptionsForMedicalSupplies
            // );
            // const combinedData_medical = [...response_meds, ...response_cases];
            // response = shuffleArray(combinedData_medical);
            response = response_meds;
            break;
          case "stationaries":
          case "stationary":
          case "school":
          case "school supplies":
            const response_teaches = teaches;
            const response_stationaries = stationaries;
            const response_books = books;
            const combinedData_school = [
              ...response_teaches,
              ...response_stationaries,
              ...response_books,
            ];
            // response = shuffleArray(combinedData_school);
            response = combinedData_school;
            break;
          case "teach":
          case "teaching":
            response = teaches;
            break;
          case "toys":
            response = toys;
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
  ]);

  useEffect(() => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    setCurrentItems(originalItems.slice(startIndex, endIndex));
  }, [currentPage, originalItems]);

  // console.log(filterOptionsForClothes);
  // console.log(filterOptionsForToys);
  // console.log(filterOptionsForFoods[0]);
  console.log(filterOptionsForMedicalSupplies);
  // console.log(filterOptionsForSchoolSupplies);
  // console.log(filterOptionsForBloodDonations);
  console.log(currentItems);
  return (
    <Container>
      <Row>
        {currentItems.map((item, index) => (
          <Col key={index} sm={4}>
            <ItemCard item={item}></ItemCard>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
