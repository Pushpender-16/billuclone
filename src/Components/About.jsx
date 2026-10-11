import React from "react";

const About = () => {

  function checkNumber() {
    const mobile = document.getElementById("phone").value.trim();
    const message = document.getElementById("message");

    if (!/^[6-9]\d{9}$/.test(mobile)) {
      message.style.color = "red";
      message.innerText = "Please enter a valid 10-digit mobile number.";
      return;
    }

    message.style.color = "green";
    message.innerText = "Successfully submitted!";
    console.log("Successful");
  }

  return (
    <>
      <section style={{ paddingTop: "60px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          {/* Part 1 */}
          <div>
            <img
              src="https://billu.co.in/wp-content/themes/billu/billuNew/assets/img/stylist.png"
              alt=""
            />
          </div>

          {/* Part 2 */}
          <div
            style={{
              fontSize: "small",
              marginTop: "68px",
              paddingLeft: "10px",
              paddingRight: "10px",
            }}
          >
            <h3 className="ncr2">Get the Billu Customer App</h3>

            <p>
              Get salon services in minutes.
              <br />
              At Home or nearby salon.
            </p>

            <br />

            <div
              style={{
                display: "flex",
                paddingBottom: "10px",
              }}
            >
              <input
                id="phone"
                className="mobile"
                type="tel"
                placeholder="Enter Mobile Number"
              />

              <button
                className="btn"
                onClick={(e) => {
                  e.preventDefault();
                  checkNumber();
                }}
                style={{
                  display: "inline-block",
                  marginLeft: "20px",
                  backgroundColor: "#f1138d",
                  color: "white",

                  textDecoration: "none",
                  padding: "8px 48px",
                  borderRadius: "6px",
                  fontSize: "small",
                  whiteSpace: "nowrap",
                  border:"#f1138d"
                }}
              >
                SHARE APP LINK
              </button>
            </div>

            {/* Validation Message */}
            <p
              id="message"
              style={{
                marginTop: "5px",
                marginBottom: "20px",
                fontWeight: "bold",
              }}
            ></p>

            <p>Download the app from</p>

            <div
              style={{
                display: "flex",
                gap: "11px",
                margin: "12px",
                alignItems: "start",
              }}
            >
              <a href="https://play.google.com/store/apps/details?id=com.billu.care">
                <img
                  style={{
                    height: "38px",
                    objectFit: "contain",
                    borderRadius: "6px",
                  }}
                  src="https://billu.co.in/wp-content/themes/billu/billuNew/assets/img/google-play.svg"
                  alt=""
                />
              </a>

              <a href="https://apps.apple.com/in/app/billu-customer/id1559235086">
                <img
                  style={{
                    height: "38px",
                    objectFit: "contain",
                    borderRadius: "6px",
                  }}
                  src="https://billu.co.in/wp-content/themes/billu/billuNew/assets/img/apple-app-store.svg"
                  alt=""
                />
              </a>
            </div>
          </div>

          {/* Part 3 */}
          <div className="main" style={{ marginTop: "68px" }}>
            <div className="block1">
              <div>
                <h6>Verified Experts</h6>
                <p>
                  All Billu professionals are KYC verified and background
                  <br />
                  checked.
                </p>
              </div>

              <div>
                <img
                  style={{ height: "48px" }}
                  src="https://billu.co.in/wp-content/themes/billu/billuNew/assets/img/get-billu-1.svg"
                  alt=""
                />
              </div>
            </div>

            <div className="block2">
              <div>
                <h6>Experienced Professional</h6>
                <p>
                  All Billu professionals have 1+ years of relevant
                  <br />
                  experience.
                </p>
              </div>

              <div>
                <img
                  style={{ height: "48px" }}
                  src="https://billu.co.in/wp-content/themes/billu/billuNew/assets/img/get-billu-2.svg"
                  alt=""
                />
              </div>
            </div>

            <div className="block3">
              <div className="b3">
                <h6>Dedicated Support</h6>
                <p>
                  The Billu care team is always available to ensure
                  <br />
                  quick resolution of your concerns.
                </p>
              </div>

              <div>
                <img
                  style={{ height: "48px" }}
                  src="https://billu.co.in/wp-content/themes/billu/billuNew/assets/img/git-billu-3.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;