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
  const [originalItems, setOriginalItems] = useState([]);
  
  
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
  
  const [currentItems, setCurrentItems] = useState(shuffleArray(all));
  
  const pageSize = 9;

  useEffect(() => {
    fetchItems(category.toLowerCase());
  }, [category]);

  useEffect(() => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    setCurrentItems(originalItems.slice(startIndex, endIndex));
  }, [currentPage, originalItems]);

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
          response = shuffleArray(combinedData_all);
          break;
        case "blood":
        case "blood donation":
        case "blood donations":
          response = bloods;
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
          response = cases;
          break;
        case "cloth":
        case "clothes":
        case "cloth donation":
        case "clothes donations":
          response = clothes;
          break;
        case "food":
        case "food donations":
        case "food donation":
          response = foods;
          break;
        case "medical":
        case "medical donations":
        case "medical supplies":
          const response_meds = meds;
          const response_cases = cases;
          const combinedData_medical = [...response_meds, ...response_cases];
          response = shuffleArray(combinedData_medical);
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
          response = shuffleArray(combinedData_school);
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

  // console.log(filterOptionsForClothes);
  // console.log(filterOptionsForToys);
  // console.log(filterOptionsForFoods);
  // console.log(filterOptionsForMedicalSupplies);
  // console.log(filterOptionsForSchoolSupplies);
  // console.log(filterOptionsForBloodDonations);

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
