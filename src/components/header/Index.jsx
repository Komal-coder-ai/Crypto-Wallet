import React, { useState, useEffect, useRef } from "react";
import { HashLink } from "react-router-hash-link";

// import Button from "../Button";
import { Container, Navbar as BootstrapNavbar, Nav } from "react-bootstrap";
// import logo from "../../assets/logo.png";
import "./index.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Use useRef to capture the navbar-container element
  const navbarRef = useRef(null);

  // Close the menu when clicking outside of it
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  // Function to handle scroll event
  const handleScroll = () => {
    const navbarHeight = navbarRef.current.clientHeight;
    const offsetTop = navbarRef.current.offsetTop;

    if (window.scrollY > offsetTop + navbarHeight) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };
  // Add scroll event listener on mount and clean up on unmount
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div className={`navbar-container ${isSticky ? "sticky" : ""}`}>
        <BootstrapNavbar
          expand="lg"
          className="navbar-container"
          ref={navbarRef}
        >
          <Container className="containernav">
            <BootstrapNavbar.Brand href="#home">
              {/* <img src={logo} alt="" className="logoimg" /> */}
            </BootstrapNavbar.Brand>
            <BootstrapNavbar.Toggle
              aria-controls="basic-navbar-nav"
              onClick={toggleMenu}
            />
            <BootstrapNavbar.Collapse
              id="basic-navbar-nav"
              className={`${menuOpen ? "show" : ""}`}
            >
              <Nav className="ml-auto justify-content-between align-items-center  LinkForMobile">
                <Nav.Link
                  as={HashLink}
                  smooth
                  to="#home"
                  onClick={() => setMenuOpen(false)}
                >
                  Home
                </Nav.Link>
                <Nav.Link
                  as={HashLink}
                  smooth
                  to="#services"
                  onClick={() => setMenuOpen(false)}
                >
                  Services
                </Nav.Link>
                <Nav.Link
                  as={HashLink}
                  smooth
                  to="#how-we-work"
                  onClick={() => setMenuOpen(false)}
                >
                  How we work?
                </Nav.Link>
                <Nav.Link
                  as={HashLink}
                  smooth
                  to="#about"
                  onClick={() => setMenuOpen(false)}
                >
                  About Us
                </Nav.Link>
                <Nav.Link
                  className="ContactUS"
                  as={HashLink}
                  smooth
                  to="#about"
                >
                  {/* <Button
                    xs="auto"
                    name="Contact us"
                    bgcolor="#2A6877"
                    color="#FFFFFF"
                    onClick={() => setMenuOpen(false)}
                  /> */}
                </Nav.Link>
              </Nav>
            </BootstrapNavbar.Collapse>
          </Container>
        </BootstrapNavbar>
      </div>
      {/* *********************** */}
      <div
        id="home"
        style={{
          visibility: "hidden",
        }}
      >
        fdss
      </div>
      <div>
      <h1>Aboutr</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero, eum! Nobis magnam voluptatum dolore nulla unde, repudiandae modi ea ab impedit quos repellendus veritatis saepe maiores quibusdam inventore doloribus reiciendis sint architecto quia praesentium.</p>
    <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio sapiente non tenetur assumenda asperiores laborum at beatae quisquam eum excepturi reiciendis eligendi, incidunt quis sit autem nulla debitis? Mollitia quam est iste earum inventore accusamus odio atque perspiciatis quos alias voluptates architecto nesciunt debitis obcaecati, voluptatibus fugit dicta nobis. Odit, culpa. Veniam, voluptatibus? Corporis porro facere ea eaque est ex cumque, temporibus voluptatem quas laboriosam voluptates, qui ipsam quisquam, illum dolores! Ratione ipsam reiciendis sint saepe iure minus et delectus fugiat laborum! Maiores amet eaque quisquam earum necessitatibus asperiores tenetur fugit iusto, debitis ad totam adipisci omnis quo quibusdam natus dicta error ratione consectetur suscipit quia excepturi rerum incidunt dolorum. Adipisci, cupiditate ducimus. Ad voluptatibus blanditiis natus voluptates consequatur ipsum dolore minima assumenda nihil id? Voluptas earum possimus nostrum hic quod fuga fugiat odio sed, id repellat quas veniam vel aut ut excepturi. Dicta adipisci eligendi sint, dolores porro minus. Dolor ratione ut delectus? Deleniti corporis voluptatum cumque doloremque, laborum animi pariatur assumenda? Iusto quisquam omnis tempore praesentium dolor voluptatibus obcaecati deserunt totam similique earum fugiat distinctio illum officia nam inventore harum numquam, eos autem ratione nobis impedit doloribus, recusandae quae a. Commodi velit odit sit veniam, aliquam quod beatae ea deleniti assumenda minus error modi cupiditate incidunt, laudantium id qui. Rerum dignissimos quisquam iusto saepe consequatur quasi, eligendi nemo quis voluptas eveniet iste voluptatibus minima aperiam fugit tempore facilis quam ipsa fugiat veritatis?</h1>
      </div>
      <div
        id="services"
        style={{
          visibility: "hidden",
        }}
      >
        fdss
      </div>
      <div>
      <h1>Aboutr</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero, eum! Nobis magnam voluptatum dolore nulla unde, repudiandae modi ea ab impedit quos repellendus veritatis saepe maiores quibusdam inventore doloribus reiciendis sint architecto quia praesentium.</p>
    
      </div>
      <div
        id="how-we-work"
        style={{
          visibility: "hidden",
        }}
      >
        fdss
      </div>

      <div id="">
        
      </div>
      <h1>Aboutr</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero, eum! Nobis magnam voluptatum dolore nulla unde, repudiandae modi ea ab impedit quos repellendus veritatis saepe maiores quibusdam inventore doloribus reiciendis sint architecto quia praesentium.</p>
    
      <div
        id="about"
        style={{
          visibility: "hidden",
        }}
      >
        fdss
      </div>
      <div >
        <h1>Aboutr</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero, eum! Nobis magnam voluptatum dolore nulla unde, repudiandae modi ea ab impedit quos repellendus veritatis saepe maiores quibusdam inventore doloribus reiciendis sint architecto quia praesentium.</p>
      </div>
    </>
  );
};

export default Navbar;