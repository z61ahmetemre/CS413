/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function DarkFooter() {
  return (
    <footer className="footer" data-background-color="black">
      <Container>
          <nav>
            <ul>
              <li>
                <a
                >
                  Project HERA
                </a>
              </li>
              <li>
                <a
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                >
                  Blog
                </a>
              </li>
            </ul>
          </nav>
          <div className="copyright" id="copyright">
            © {new Date().getFullYear()}, Designed by{" "}
            <a
            >
              Project HERA Team
            </a>
            . Coded by{" "}
            <a
            >
              Project HERA
            </a>
            
          </div>
        </Container>
      
    </footer>
  );
}

export default DarkFooter;
