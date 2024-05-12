import React from "react";

export default function footer() {
  return (
    <div>
      <footer
        class="text-center text-lg-start text-white"
        style={{ "background-color": "#1c2331" }}
      >
        <section
          class="d-flex justify-content-between p-4"
          style={{ "background-color": "#6351ce" }}
        >
          <div class="me-5">
            <span>Get connected with us on social networks :</span>
          </div>

          <div>
            <a class="text-white me-4">
              <i class="fab fa-linkedin">LinkedIn</i>
            </a>
            <a class="text-white me-4">
              <i class="fab fa-github">Facebook</i>
            </a>
          </div>
        </section>

        <section class="">
          <div class="container text-center text-md-start mt-5">
            <div class="row mt-3">
              <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold">Imperium</h6>
                <hr
                  class="mb-4 mt-0 d-inline-block mx-auto"
                  style={{
                    width: "60px",
                    "background-color": "#7c4dff",
                    height: "2px",
                  }}
                />
                <p>
                  <p>
                    Welcome to our Non-Monetary Donation Platform! Our NGO's
                    mission is to bridge the gap between those in need and
                    generous donors like you.
                  </p>
                </p>
                <p>
                  <p>
                    Through our user-friendly application, donors can easily
                    connect with individuals and organizations requesting
                    donations of essential items such as clothes, medical
                    supplies, school supplies, furniture, toys, and more.
                  </p>
                  With streamlined communication tools, we facilitate direct
                  interaction between donors and beneficiaries, ensuring that
                  donations reach those who need them most efficiently. Join us
                  in making a difference today!
                </p>
              </div>

              <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold">Channel Partners</h6>
                <hr
                  class="mb-4 mt-0 d-inline-block mx-auto"
                  style={{
                    width: "60px",
                    "background-color": "#7c4dff",
                    height: "2px",
                  }}
                />
                <p>Reasla</p>
                <p>Masr Alkhair</p>
              </div>

              <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold">Useful Actions</h6>
                <hr
                  class="mb-4 mt-0 d-inline-block mx-auto"
                  style={{
                    width: "60px",
                    "background-color": "#7c4dff",
                    height: "2px",
                  }}
                />
                <p>Browse Donation Requests!</p>
                <p>Donate Now!</p>
                <p>Enjoy!</p>
              </div>

              <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 class="text-uppercase fw-bold">Contact</h6>
                <hr
                  class="mb-4 mt-0 d-inline-block mx-auto"
                  style={{
                    width: "60px",
                    "background-color": "#7c4dff",
                    height: "2px",
                  }}
                />

                <p>
                  <i class="fas fa-envelope mr-3"></i>{" "}
                  imperiumDonate@hotmail.com
                </p>
                <p>
                  <i class="fas fa-phone mr-3"></i> +20122
                </p>
                <p>
                  <i class="fas fa-print mr-3"></i> Egypt
                </p>
              </div>
            </div>
          </div>
        </section>

        <div
          class="text-center p-3"
          style={{ "background-color": "rgba(0, 0, 0, 0.2)" }}
        >
          © {new Date().getFullYear()} Copyright: Imperium
        </div>
      </footer>
    </div>
  );
}
