import React from "react";

// reactstrap components
import {
  Button,
  CardBody,
  Card,
  CardText,
  CardTitle,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";
import SignUp from "views/index-sections/SignUp";

function ProfilePage() {
  const [pills, setPills] = React.useState("2");
  const [iconTabs, setIconTabs] = React.useState("1");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("profile-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  return (
    <>
      <ExamplesNavbar />
      <div className="wrapper">
        <ProfilePageHeader />
        <div className="section">
          <Container>
            <h3 className="title">About me</h3>
            <h5 className="description">
              An artist of considerable range, Ryan — the name taken by
              Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs
              and records all of his own music, giving it a warm, intimate feel
              with a solid groove structure. An artist of considerable range.
            </h5>
            <Row>
              <Col className="ml-auto mr-auto" md="12">
                <div className="nav-align-center">
                <Nav className="justify-content-center" role="tablist" tabs>
            <NavItem>
              <NavLink
                className={iconTabs === "1" ? "active" : ""}
                href="#pablo"
                onClick={e => {
                  e.preventDefault();
                  setIconTabs("1");
                }}
              >
                Job Search
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={iconTabs === "2" ? "active" : ""}
                href="#pablo"
                onClick={e => {
                  e.preventDefault();
                  setIconTabs("2");
                }}
              >
                Search Employee
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={iconTabs === "3" ? "active" : ""}
                href="#pablo"
                onClick={e => {
                  e.preventDefault();
                  setIconTabs("3");
                }}
              >
                Messages
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={iconTabs === "4" ? "active" : ""}
                href="#pablo"
                onClick={e => {
                  e.preventDefault();
                  setIconTabs("4");
                }}
              >
                About
              </NavLink>
            </NavItem>
          </Nav>
          <CardBody>
          <TabContent
            className="text-center"
            activeTab={"iconTabs" + iconTabs}
          >
            <TabPane tabId="iconTabs1">
                <Card>
                  <CardBody>
                    <CardTitle tag="h4"> Full-Stack Developer</CardTitle>
                    <CardText> 
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </CardText>
                    <Button 
                      color="primary"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      Apply
                    </Button>
                  </CardBody>
                </Card>
                <Card>
                  <CardBody>
                    <CardTitle tag="h4"> Sales Manager</CardTitle>
                    <CardText> 
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </CardText>
                    <Button 
                      color="primary"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      Apply
                    </Button>
                  </CardBody>
                </Card>
                <Card>
                  <CardBody>
                    <CardTitle tag="h4"> UI/UX Designer</CardTitle>
                    <CardText> 
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </CardText>
                    <Button 
                      color="primary"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      Apply
                    </Button>
                  </CardBody>
                </Card>
                <Card>
                  <CardBody>
                    <CardTitle tag="h4"> Backend Developer</CardTitle>
                    <CardText> 
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </CardText>
                    <Button 
                      color="primary"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      Apply
                    </Button>
                  </CardBody>
                </Card>
            </TabPane>
            <TabPane tabId="iconTabs2">
            <Card>
                  <CardBody>
                    <CardTitle tag="h4"> Backend Developer</CardTitle>
                    <CardText> 
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </CardText>
                    <Button 
                      color="primary"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      Offer
                    </Button>
                  </CardBody>
                </Card>
                <Card>
                  <CardBody>
                    <CardTitle tag="h4"> Project Manager</CardTitle>
                    <CardText> 
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </CardText>
                    <Button 
                      color="primary"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      Offer
                    </Button>
                  </CardBody>
                </Card>
                <Card>
                  <CardBody>
                    <CardTitle tag="h4"> Senior Engineer</CardTitle>
                    <CardText> 
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </CardText>
                    <Button 
                      color="primary"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      Offer
                    </Button>
                  </CardBody>
                </Card>
                <Card>
                  <CardBody>
                    <CardTitle tag="h4"> Data Analyst</CardTitle>
                    <CardText> 
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </CardText>
                    <Button 
                      color="primary"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      Offer
                    </Button>
                  </CardBody>
                </Card>
            </TabPane>
            <TabPane tabId="iconTabs3">
              <p>
               <h4>Under development</h4>
              </p>
            </TabPane>
            <TabPane tabId="iconTabs4">
              <div>
                <h4> User name: </h4>
                <p id="userName">Ahmet Emre Zengin</p>
                <h4> Occupation: </h4>
                <p id="occupation"></p>
                <h4> City: </h4>
                <p id="city"></p>
                <h4> Account Type: </h4>
                <p id="accountType"></p>
              </div>

            </TabPane>
          </TabContent>
        </CardBody>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <DefaultFooter />
      </div>
    </>
  );
}

export default ProfilePage;
