"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../../public/assets/logo.png";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import Image from "next/image";
import { BsArrowUp } from "react-icons/bs";

const Navbars = () => {
  const pathname = usePathname();
  const [isTop, setIsTop] = useState(true);
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      setIsTop(scrolled === 0);
    };

    const handleHashChange = () => {
      const { hash } = window.location;
      const id = hash.substring(1);
      if (id) {
        const element = document.getElementById(id);
        if (element) {
          // const navbar = document.querySelector("#header");
          // const navbarHeight = navbar ? navbar.offsetHeight : 0;
          const yOffset = -94;
          const yPosition =
            element.getBoundingClientRect().top + window.scrollY + yOffset;

          window.scrollTo({ top: yPosition, behavior: "smooth" });
        }
      }
    };

    const handleClick = (e) => {
      if (e.target.hash) {
        setTimeout(() => {
          handleHashChange();
        }, 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("hashchange", handleHashChange);
    document
      .querySelectorAll("a")
      .forEach((a) => a.addEventListener("click", handleClick));

    handleHashChange();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("hashchange", handleHashChange);
      document
        .querySelectorAll("a")
        .forEach((a) => a.removeEventListener("click", handleClick));
    };
  }, []);

  useEffect(() => {
    const highlightCurrentSection = () => {
      document.querySelectorAll("section").forEach((section) => {
        const sectionTop = section.offsetTop - 114;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");
        const navLink = document.querySelector(`.nav-link[href*=${sectionId}]`);
        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
        ) {
          navLink?.classList.add("active");
        } else {
          navLink?.classList.remove("active");
        }
      });
    };

    window.addEventListener("scroll", highlightCurrentSection);

    return () => {
      window.removeEventListener("scroll", highlightCurrentSection);
    };
  }, []);

  const handleOffcanvasClose = () => {
    setShowOffcanvas(false);
  };

  const handleOffcanvasShow = () => {
    setShowOffcanvas(true);
  };

  return (
    <>
      <Navbar
        id="header"
        key="md"
        expand="md"
        className={`bg-body-tertiary ${isTop ? "" : "header-scrolled"}`}
        fixed="top"
      >
        <Container>
          <Navbar.Brand href="/" className="logo">
            <Image className="nav-image" src={logo} alt="Logo" />
            <span className="name-logo">AKESHYA</span>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls={`offcanvasNavbar-expand-md`}
            onClick={handleOffcanvasShow}
          />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-md`}
            aria-labelledby={`offcanvasNavbarLabel-expand-md`}
            placement="end"
            show={showOffcanvas}
            onHide={handleOffcanvasClose}
          >
            <Offcanvas.Header closeButton></Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 navbar">
                <Nav.Link
                  href="/"
                  className={pathname === "/" && isTop ? "active" : ""}
                >
                  Home
                </Nav.Link>
                <Nav.Link
                  href="/about"
                  className={pathname === "/about" ? "active" : ""}
                >
                  About
                </Nav.Link>
                <Nav.Link
                  href="/#services"
                  className={pathname === "/#services" ? "active" : ""}
                  onClick={handleOffcanvasClose}
                >
                  Services
                </Nav.Link>
                <a href="/contact" className="getstarted">
                  Contact us
                </a>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      <a
        href="#"
        id="back-to-top"
        className={`d-flex align-items-center justify-content-center ${
          isTop ? "" : "bttActive"
        }`}
      >
        <BsArrowUp />
      </a>
    </>
  );
};

export default Navbars;
