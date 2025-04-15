"use client";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";

const features = [
  {
    title: "Affordable Fares",
    description:
      "Book affordable fares with Deltaflyhub and save extra on air travel bookings.",
    icon: "/images/icons/fare.png", // Replace with actual path
  },
  {
    title: "24-Hour Assistance",
    description:
      "Our team is available to assist you 24/7 with any concerns related to flights and more.",
    icon: "/images/icons/support.png",
  },
  {
    title: "Safe & Secure Bookings",
    description:
      "We guarantee a 100% safe and secure booking experience at Deltaflyhub.",
    icon: "/images/icons/secure.png",
  },
  {
    title: "Easy-to-use Platform",
    description:
      "Our platform is easy-to-use and navigate for quick, hassle-free bookings.",
    icon: "/images/icons/platform.png",
  },
];

const CustomerHelp = () => {
  return (
    <Container className="text-center my-5">
      <div className="d-flex justify-content-center align-items-center gap-3 mb-4">
        <div
          style={{ height: "2px", background: "#0d6efd", width: "80px" }}
        ></div>
        <h3
          className="fw-bold px-4 py-2 rounded-pill text-white"
          style={{
            background: "linear-gradient(to right, #0d6efd, #6ea8fe)",
            marginBottom: 0,
          }}
        >
          Travel the World on a Budget
        </h3>
        <div
          style={{ height: "2px", background: "#0d6efd", width: "80px" }}
        ></div>
      </div>
      <Row>
        {features.map((feature, idx) => (
          <Col key={idx} md={6} lg={3} className="mb-4">
            <div className="mb-3">
              <Image
                src={feature.icon}
                alt={feature.title}
                width={80}
                height={80}
                className="img-fluid"
              />
            </div>
            <h5 className="fw-bold">{feature.title}</h5>
            <p className="text-muted small">{feature.description}</p>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CustomerHelp;
