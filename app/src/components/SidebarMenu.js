import React, { useState } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";

import BloodDonationsComponent from "./FilterOptions/BloodDonationsComponent";
import ClothesComponent from "./FilterOptions/ClothesComponent";
import FoodComponent from "./FilterOptions/FoodComponent";
import MedicalSuppliesComponent from "./FilterOptions/MedicalSuppliesComponent";
import SchoolSuppliesComponent from "./FilterOptions/SchoolSuppliesComponent";
import ToysComponent from "./FilterOptions/ToysComponent";

export default function SidebarMenu({
  handleValueClothesAgeChange,
  handleValueClothesGenderChange,
  handleValueClothesSeasonChange,

  handleValueToysAgeChange,
  handleValueToysGenderChange,
  handleValueToysCategoryChange,

  handleValueFoodsCategoryChange,

  handleValueMedicalDevicesChange,
  handleValueMedicalEquipmentChange,
  handleValueMedicalMedicationChange,
  handleValueMedicalUseChange,
  handleValueMedicalGovernorateChange,
  handleValueMedicalAreaChange,
  handleValueMedicalSpecialtyChange,
  handleValueMedicalOrganizationNameChange,

  handleValueSchoolTypeChange,
  handleValueSchoolSubjectChange,
  handleValueSchoolAreaChange,
  handleValueSchoolgovernorateChange,

  handleValueBloodHospitalNameChange,
  handleValueBloodAreaChange,
  handleValueBloodGovernorateChange,
}) {
  const [activeFilter, setActiveFilter] = useState("All");
  const renderFilterComponent = () => {
    switch (activeFilter) {
      case "Clothes":
        return (
          <ClothesComponent
            onValueClothesAgeChange={handleValueClothesAgeChange}
            onValueClothesGenderChange={handleValueClothesGenderChange}
            onValueClothesSeasonChange={handleValueClothesSeasonChange}
          />
        );
      case "Toys":
        return (
          <ToysComponent
            onValueToysAgeChange={handleValueToysAgeChange}
            onValueToysGenderChange={handleValueToysGenderChange}
            onValueToysCategoryChange={handleValueToysCategoryChange}
          />
        );
      case "Food":
        return (
          <FoodComponent
            onValueFoodsCategoryChange={handleValueFoodsCategoryChange}
          />
        );
      case "Medical Supplies":
        return (
          <MedicalSuppliesComponent
            onValueMedicalDevicesChange={handleValueMedicalDevicesChange}
            onValueMedicalEquipmentChange={handleValueMedicalEquipmentChange}
            onValueMedicalMedicationChange={handleValueMedicalMedicationChange}
            onValueMedicalUseChange={handleValueMedicalUseChange}
            onValueMedicalGovernorateChange={
              handleValueMedicalGovernorateChange
            }
            onValueMedicalAreaChange={handleValueMedicalAreaChange}
            onValueMedicalSpecialtyChange={handleValueMedicalSpecialtyChange}
            onValueMedicalOrganizationNameChange={
              handleValueMedicalOrganizationNameChange
            }
          />
        );
      case "School Supplies":
        return (
          <SchoolSuppliesComponent
            onValueSchoolTypeChange={handleValueSchoolTypeChange}
            onValueSchoolSubjectChange={handleValueSchoolSubjectChange}
            onValueSchoolAreaChange={handleValueSchoolAreaChange}
            onValueSchoolgovernorateChange={handleValueSchoolgovernorateChange}
          />
        );
      case "Blood Donations":
        return (
          <BloodDonationsComponent
            onValueBloodHospitalNameChange={handleValueBloodHospitalNameChange}
            onValueBloodAreaChange={handleValueBloodAreaChange}
            onValueBloodGovernorateChange={handleValueBloodGovernorateChange}
          />
        );
      default:
        return null;
    }
  };

  return (
    <Container>
      <Row>
        Select Filter Category
        <ListGroup>
          <ListGroup.Item
            onClick={() => setActiveFilter("All")}
            active={activeFilter === "All"}
          >
            All
          </ListGroup.Item>
          <ListGroup.Item
            onClick={() => setActiveFilter("Clothes")}
            active={activeFilter === "Clothes"}
          >
            Clothes
          </ListGroup.Item>
          <ListGroup.Item
            onClick={() => setActiveFilter("Toys")}
            active={activeFilter === "Toys"}
          >
            Toys
          </ListGroup.Item>
          <ListGroup.Item
            onClick={() => setActiveFilter("Food")}
            active={activeFilter === "Food"}
          >
            Food
          </ListGroup.Item>
          <ListGroup.Item
            onClick={() => setActiveFilter("Medical Supplies")}
            active={activeFilter === "Medical Supplies"}
          >
            Medical Supplies/Cases
          </ListGroup.Item>
          <ListGroup.Item
            onClick={() => setActiveFilter("School Supplies")}
            active={activeFilter === "School Supplies"}
          >
            School Supplies
          </ListGroup.Item>
          <ListGroup.Item
            onClick={() => setActiveFilter("Blood Donations")}
            active={activeFilter === "Blood Donations"}
          >
            Blood Donations
          </ListGroup.Item>
        </ListGroup>
      </Row>

      <Row>
        FILTER DETAILS
        {renderFilterComponent()}
      </Row>
    </Container>
  );
}
