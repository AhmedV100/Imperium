import { useState } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

import SidebarMenu from "../components/SidebarMenu";
import MyPagination from "../components/MyPagination";
import PostsGrid from "./PostsGrid";

export default function OrgPosts({ filter , isAll}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentCategory, setCurrentCategory] = useState(
    "Type Category to Browse..."
  );

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterClick = () => {
    setCurrentCategory(searchTerm ? searchTerm : "Type Category to Browse...");
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  //CLOTHES_ FILTER OPTIONS
  const [CLOTHES_ageFilter, CLOTHES_setAgeFilter] = useState("");
  const [CLOTHES_genderFilter, CLOTHES_setGenderFilter] = useState("");
  const [CLOTHES_seasonFilter, CLOTHES_setSeasonFilter] = useState("");
  const handleValueClothesAge = (newValue) => {
    CLOTHES_setAgeFilter(newValue);
  };
  const handleValueClothesGender = (newValue) => {
    CLOTHES_setGenderFilter(newValue);
  };
  const handleValueClothesSeason = (newValue) => {
    CLOTHES_setSeasonFilter(newValue);
  };
  //TOYS_ FILTER OPTIONS
  const [TOYS_ageFilter, TOYS_setAgeFilter] = useState("");
  const [TOYS_genderFilter, TOYS_setGenderFilter] = useState("");
  const [TOYS_categoriesFilter, TOYS_setCategoriesFilter] = useState([
    "board game",
    "stuffed toy",
    "dolls",
    "sports",
    "cars",
    "outdoor",
  ]);
  const handleValueToysAge = (newValue) => {
    TOYS_setAgeFilter(newValue);
  };
  const handleValueToysGender = (newValue) => {
    TOYS_setGenderFilter(newValue);
  };
  const handleValueToysCategories = (newValue) => {
    TOYS_setCategoriesFilter(newValue);
  };
  //FOODS_ FILTER OPTIONS
  const [FOODS_categoriesFilter, FOODS_setCategoriesFilter] = useState([
    "fruits and vegetables",
    "canned",
    "fresh",
    "baked",
  ]);
  const handleValueFoodsCategories = (newValue) => {
    FOODS_setCategoriesFilter(newValue);
  };
  //MEDICAL_ FILTER OPTIONS
  const [MEDICAL_medicalDevices, MEDICAL_setMedicalDevices] = useState("");
  const [MEDICAL_medicalEquipment, MEDICAL_setMedicalEquipment] = useState("");
  const [MEDICAL_medication, MEDICAL_setMedication] = useState("");
  const [MEDICAL_medicalUse, MEDICAL_setMedicalUse] = useState("");
  const [MEDICAL_governorate, MEDICAL_setGovernorate] = useState("");
  const [MEDICAL_area, MEDICAL_setArea] = useState("");
  const [MEDICAL_medicalSpecialty, MEDICAL_setMedicalSpecialty] = useState("");
  const [MEDICAL_organizationName, MEDICAL_setOrganizationName] = useState("");
  const handleValueMedicalDevices = (newValue) => {
    MEDICAL_setMedicalDevices(newValue);
  };
  const handleValueMedicalEquipment = (newValue) => {
    MEDICAL_setMedicalEquipment(newValue);
  };
  const handleValueMedicalMedication = (newValue) => {
    MEDICAL_setMedication(newValue);
  };
  const handleValueMedicalUse = (newValue) => {
    MEDICAL_setMedicalUse(newValue);
  };
  const handleValueMedicalGovernorate = (newValue) => {
    MEDICAL_setGovernorate(newValue);
  };
  const handleValueMedicalArea = (newValue) => {
    MEDICAL_setArea(newValue);
  };
  const handleValueMedicalSpecialty = (newValue) => {
    MEDICAL_setMedicalSpecialty(newValue);
  };
  const handleValueMedicalOrganizationName = (newValue) => {
    MEDICAL_setOrganizationName(newValue);
  };
  //SCHOOL_ FILTER OPTIONS
  const [SCHOOL_categoryType, SCHOOL_setCategoryType] = useState("");
  const [SCHOOL_subject, SCHOOL_setSubject] = useState("");
  const [SCHOOL_area, SCHOOL_setArea] = useState("");
  const [SCHOOL_governorate, SCHOOL_setGovernorate] = useState("");
  const handleValueSchoolType = (newValue) => {
    SCHOOL_setCategoryType(newValue);
  };
  const handleValueSchoolSubject = (newValue) => {
    SCHOOL_setSubject(newValue);
  };
  const handleValueSchoolArea = (newValue) => {
    SCHOOL_setArea(newValue);
  };
  const handleValueSchoolgovernorate = (newValue) => {
    SCHOOL_setGovernorate(newValue);
  };
  //BLOOD_ FILTER OPTIONS
  const [BLOOD_hospitalName, BLOOD_setHospitalName] = useState("");
  const [BLOOD_area, BLOOD_setArea] = useState("");
  const [BLOOD_governorate, BLOOD_setGovernorate] = useState("");

  const handleValueBloodHospitalName = (newValue) => {
    BLOOD_setHospitalName(newValue);
  };
  const handleValueBloodArea = (newValue) => {
    BLOOD_setArea(newValue);
  };
  const handleValueBloodGovernorate = (newValue) => {
    BLOOD_setGovernorate(newValue);
  };
  return (
    <Container fluid style={{ margin: "0" }}>
      <Row>
        <Col xs={3} style={{ backgroundColor: "var(--bs-gray-500)" }}>
          <SidebarMenu
            filter={filter}
            handleValueClothesAgeChange={handleValueClothesAge}
            handleValueClothesGenderChange={handleValueClothesGender}
            handleValueClothesSeasonChange={handleValueClothesSeason}
            handleValueToysAgeChange={handleValueToysAge}
            handleValueToysGenderChange={handleValueToysGender}
            handleValueToysCategoryChange={handleValueToysCategories}
            handleValueFoodsCategoryChange={handleValueFoodsCategories}
            handleValueMedicalDevicesChange={handleValueMedicalDevices}
            handleValueMedicalEquipmentChange={handleValueMedicalEquipment}
            handleValueMedicalMedicationChange={handleValueMedicalMedication}
            handleValueMedicalUseChange={handleValueMedicalUse}
            handleValueMedicalGovernorateChange={handleValueMedicalGovernorate}
            handleValueMedicalAreaChange={handleValueMedicalArea}
            handleValueMedicalSpecialtyChange={handleValueMedicalSpecialty}
            handleValueMedicalOrganizationNameChange={
              handleValueMedicalOrganizationName
            }
            handleValueSchoolTypeChange={handleValueSchoolType}
            handleValueSchoolSubjectChange={handleValueSchoolSubject}
            handleValueSchoolAreaChange={handleValueSchoolArea}
            handleValueSchoolgovernorateChange={handleValueSchoolgovernorate}
            handleValueBloodHospitalNameChange={handleValueBloodHospitalName}
            handleValueBloodAreaChange={handleValueBloodArea}
            handleValueBloodGovernorateChange={handleValueBloodGovernorate}
          />
        </Col>
        <Col>
          <Navbar expand="lg" style={{ backgroundColor: "var(--bs-gray-500)" }}>
            <Container fluid>
              <Navbar.Brand>{currentCategory}</Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: "100px" }}
                  navbarScroll
                ></Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    value={searchTerm}
                    onChange={handleSearchChange}
                  />
                  <Button variant="outline-success" onClick={handleFilterClick}>
                    Filter
                  </Button>
                </Form>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <Row xl={"auto"}>
            <PostsGrid
            isAll ={ isAll}
              filterOptionsForClothes={[
                CLOTHES_ageFilter,
                CLOTHES_genderFilter,
                CLOTHES_seasonFilter,
              ]}
              filterOptionsForToys={[
                TOYS_ageFilter,
                TOYS_genderFilter,
                TOYS_categoriesFilter,
              ]}
              filterOptionsForFoods={[FOODS_categoriesFilter]}
              filterOptionsForMedicalSupplies={[
                MEDICAL_medicalDevices,
                MEDICAL_medicalEquipment,
                MEDICAL_medication,
                MEDICAL_medicalUse,
                MEDICAL_governorate,
                MEDICAL_area,
                MEDICAL_medicalSpecialty,
                MEDICAL_organizationName,
              ]}
              filterOptionsForSchoolSupplies={[
                SCHOOL_categoryType,
                SCHOOL_subject,
                SCHOOL_area,
                SCHOOL_governorate,
              ]}
              filterOptionsForBloodDonations={[
                BLOOD_hospitalName,
                BLOOD_governorate,
                BLOOD_area,
              ]}
              category={currentCategory}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
          </Row>
          <Row>
            <MyPagination
              onPageChange={handlePageChange}
              currentPage={currentPage}
            />
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
