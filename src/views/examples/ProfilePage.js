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
                      <p> IBM </p>
                    <span>
          <p>Main objective of the job:</p><p>&nbsp;</p><p>Ensures timely payments of employee salaries and taxes in the countries managed; achieves the quality and response time objectives, accurately resolves issues that affect the timely payment of salaries and fees arising from the payroll process, reported by employees and by other internal departments.</p><p>&nbsp;</p><p>Responsibilities:</p><p>&nbsp;</p><p>·&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Collects on a daily basis data from internal and external partners required for processing the salaries and fees of external suppliers. Uses collection methods specific to the department in order to ensure the collection meets the individual targets imposed by the department.</p><p>·&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Analyzes, investigates and responds within the standard time frame established by the department to all employees’ requirements and to other requirements from internal departments that interact.</p><p>·&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Is the main contact for employees; understands and clarifies concerns raised by employees and uses all available resources to solve these problems. Replies to employee complaints in a polite and professional manner. In this situation, the specialist must have all the information necessary to solve the problems respecting the existent procedures.</p><p>·&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;During the collection process, the analyst must ensure punctual escalation, providing relevant information to managers or directors, of all the problems related to customer accounts and to highlight any issues that may arise and can have a negative impact on the objectives of the department.</p><p>·&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Makes sure that respects and follows the monthly / bi-monthly calendar of the salaries and taxes payroll, in accordance with the responsibilities detailed there.</p><p>·&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The specialist should aim to and make sure that the problems are solved within the time frame agreed by the department.</p><p>·&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Is responsible of the decisions regarding the necessary data for processing salaries and taxes, in accordance with internal procedures agreed at a country level, and maintains collaborative relationships with internal partners, taking into account both business’s objectives and internal partner’s needs.</p><p>·&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Is well aware of the situations, understands and therefore applies department policies, internal procedures and proposes improvements that will increase both the results and the efficiency of the department.</p><p>·&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Works good in teams, sharing his experience and offering constructive feedback whenever needed.</p><p>·&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Is committed to provide quality standards in both internal and external interactions with suppliers and to implement internal policies and procedures.</p><p>·&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ensures compliance with Sarbanes – Oxley and is responsible for providing full support to internal and external audit.</p><p>·&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Knows and understands the policies, procedures and processes of the department.</p><p>·&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Performs any other duties assigned by the Direct Supervisor, in accordance with what the work done in the department agreed time supposes.</p><p>&nbsp;</p><p>&nbsp;</p><p>Abilities and Qualifications of the Payroll Specialist:</p><p>&nbsp;</p><p>·&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Advanced level of English and Russian;</p><p>·&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fluency in any other European language is a plus;</p><p>·&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Excellent oral and written communication skills;</p><p>·&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ability to communicate efficiently and in a calm manner;</p><p>·&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ability to create and maintain strong professional relationships;</p><p>·&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Organized and detail – oriented;</p><p>·&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Result driven and ability to solve problems;</p><p>·&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Excellent computer skills (. MS Word, Access,&nbsp;Excel, Adobe, PowerPoint);</p><p>·&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ability to work in an environment with multiple tasks, including prioritizing and swapping numerous requests at the same time, often given tight deadlines and changes that occur in a brisk;</p><p>·&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ability to maintain the pace of deliveries despite tight deadlines and demanding environment;</p><p>·&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ability to understand and apply the processes and procedures of the EMEA Payroll Operations department;</p><p>·&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;University degree.</p><p>As part of Oracle's employment process candidates will be required to successfully complete a pre-employment screening process. This will involve identity and employment verification, professional references, education verification and professional qualifications and memberships (if applicable)</p><p></p>
       </span>
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
                    <span>
          <p>Adesso Turkey</p><p><br></br>
</p><p>With more than 300 adessi creating and delivering digital solutions for both Turkish and global markets, we are unique among adesso Group companies with our nearshore capability branded as SmartShore and our Research&amp;Development Center.</p><p><br></br>
</p><p>We focus on the core business processes of companies and develop innovative and tailored IT solutions from idea to end-product, strategy to continuity. With our diverse multidisciplinary teams including adesso Lime (UX/UI), adesso agile Lab and adesso mobile Factory, we combine global engineering standards with local agility and innovation to lead successful transformation journeys.</p><p><br></br>
</p><p>adesso Turkey is a fully-owned subsidiary of adesso SE, a leading IT service provider in Central Europe. We offer an outstanding opportunity to collaborate with adesso Group colleagues –&nbsp;<strong>a pool of 4,200 employees on 33 sites</strong>&nbsp;with sector-specific expertise.</p><p>&nbsp;</p><p>Join the crew!</p><p>Act now to join our team and become an adessi — enjoy a Great Place to Work!</p><p>&nbsp;</p><p><strong><u>What You’ll Do</u></strong></p><p><br></br>
</p><ul><li>Translating product requirements &amp; user stories or epics to maintainable, testable, and performant software in collaboration with the team</li><li>Collaborating with backend teams to determine technical specifications and API design details</li><li>Working closely with UX/UI team to translate the virtual design into actual implementation</li><li>Participating in code review and performing extensive testing to ensure high quality software</li><li>Feeling responsible for the quality of the mobile project you are working on and take action to fix it when you notice a bug or error</li><li>Continually migrating solutions to newer technologies to stay up to date with industry best practices</li><li>Researching new technology and tools and sharing those findings with the team at our tech talks</li></ul><p><br></br>
</p><p><strong><u>What We’re Looking For</u></strong></p><p>&nbsp;</p><ul><li>Bachelor’s Degree in Computer Science, Computer Engineering or equivalent work experience</li><li>Experience with iOS and/or Android native development</li><li>A rock-solid understanding of object-oriented design patterns and SOLID principles</li><li>Experience working on different architecture patterns like MVP, VIPER and MVVM</li><li>Strong knowledge of platform specific mobile UI design principles, patterns, and best practices</li><li>Experience consuming RESTful/GraphQL APIs and working with WebSockets</li><li>Proficiency with GIT</li><li>Experience working in Scrum or Agile based environment</li><li>Strong communication skills with the ability to work well on a team</li></ul><p>&nbsp;</p><p>Experience with the following technologies will be a bonus!</p><ul><li>Reactive programming</li><li>CI/CD pipelines</li><li>Bluetooth</li><li>AI/ML/VR</li><li>Wearables</li></ul><p><br></br>
</p><p><strong><u>What You’ll Love About Working Here</u></strong></p><p>&nbsp;</p><ul><li>Warm, friendly, and welcoming atmosphere</li><li>Flexible working hours &amp; remote working</li><li>Opportunity to improve yourself by sharing their experiences with over 60 mobile developers working on over 15 well known apps</li><li>Continuing professional development with training &amp; language courses opportunities</li><li>Lean &amp; agile organization</li></ul><p>&nbsp;</p>
      </span>
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
                      <p>Peak</p>
                    <span>
          <p>Are you passionate about gaming and want gamers everywhere to enjoy your work? If so, we’ve got something in common! We are thrilled to be able to create mobile games which are enjoyed by millions around the world. We’re looking to expand our team and this could be the opportunity you’ve been looking for to join a dynamic company and leave your mark on the world of gaming.&nbsp;</p><p><br></br>
</p><p>As a UI Designer, you will be involved in all aspects of the game development circle, executing all UI design stages from initial concept to the final hand-off to engineering. You’ll cooperate with product designers, artists and engineers to define and implement innovative solutions for the improvement of product directions, visuals, and experience.</p><p><br></br>
</p><p>As one of the key members of the team, you will create a smooth, functional, intuitive, and entertaining user experience for our games.</p><p><br></br>
</p><p><strong>Here’s what you’ll be doing</strong></p><p><br></br>
</p><ul><li>Designing user interface elements of our games to effectively communicate interaction and design ideas</li><li>Creating clear and attractive interface assets such as buttons, icons, widgets, and other game elements</li><li>Developing typography, palette, illustration, and iconography systems for products</li><li>Conceptualizing designs and visual prototypes that bring simplicity and user-friendliness to complex design roadblocks</li><li>Working closely with product teams, engineering teams, and all artists</li><li>Conducting layout adjustments based on changing requirements and user feedback</li><li>Promoting the continuous use of feedback to drive and polish features to a high-quality state</li><li>Refining game design through rigorous testing in order to ensure improvement and optimization</li><li>Keeping your understanding and knowledge up to date with the latest UI trends, techniques, and technologies</li></ul><p><br></br>
</p><p><strong>Desired skills and experiences</strong></p><p><br></br>
</p><ul><li>University Degree in a related field</li></ul><p><br></br>
</p><p><strong>Areas in which you'll continue to grow</strong></p><p><br></br>
</p><ul><li>Wireframes, storyboards, user flows, process flows and sitemaps</li><li>Photoshop, Illustrator or other visual design and wire-framing tools</li><li>Visual design with sensitivity to user-system interaction</li><li>Typography, composition, colour theory</li></ul><p><br></br>
</p><p><strong>Working at Peak</strong></p><p><br></br>
</p><ul><li>Fast-paced environment with a tight-knit and collaborative culture</li><li>Never-ending learning and development opportunities</li><li>Relevant conferences abroad to stay up to date with the latest industry trends</li><li>Team events and trips</li><li>We support your personal and professional development with challenging projects and regular feedback</li><li>Full health benefits</li></ul>
       </span>
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
                    <span>
          <p><strong>Organization Name</strong>: Oracle Applications Labs (OAL) - New Initiatives </p> <p>&nbsp; </p> <p><strong>Department Description:</strong> </p> <p>“Oracle Applications Lab" provides solutions for Oracle's internal business units. </p> <p>Come join our team as we provide solutions for Oracle's internal business units, customers, and partners, As we take Oracle to the next level and proudly service an employee-user population greater than 100,000 with a global single instance supporting a wide variety of Oracle applications. </p> <p>&nbsp; </p> <p><strong>Brief Description:</strong> </p> <p>Work with Oracle’s world class technology to develop, implement, and support Oracle’s global Marketing infrastructure. </p> <p>&nbsp; </p> <p><strong>Detailed Description:</strong> </p> <p>As a member of the IT organization, assist with the analysis of existing complex programs and formulate logic for new complex internal systems. Prepare design, perform coding, and test/debug programs. Develop conversion and system implementation plans. Recommend changes to development, maintenance, and system standards. </p> <p>&nbsp; </p> <p><strong>Job Requirements:</strong>&nbsp; </p> <p>Job duties are varied and complex utilizing independent judgment. BS or equivalent experience in programming on enterprise or department servers or systems. </p> <p>&nbsp; </p> <p><strong>Preferred Skills:</strong> </p> <p>-- Development skills with apps using JavaScript libraries. Typescript is an advantage </p> <p>-- HTML, CSS </p> <p>-- Knowledge of REST standards are also preferable </p> <p>-- Git experience is also an advantage </p> <p>-- Good communication, organizational and interpersonal skills </p> <p>-- Ability to present ideas in business &amp; user friendly language </p> <p>-- Ability to deliver effectively in a team setting as well as independently </p> <p>-- Ability to work in a fast paced environment that demands co-ordination across time-zones. </p> <p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </p> <p><strong>Amount of Travel</strong>: None </p> <p>&nbsp; </p> <p>Please apply if you have the passion and drive to work in an environment where challenges are a norm, where individual brilliance is valued and goes hand in hand with team performance, where being proactive is a way of life!!!</p>
       </span>
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
                    <div>
                      <p>Admongrel</p>
                    </div>
                    <CardText> 
                    <span>
          <p>Admongrel is an end-to-end service provider for the fast growing Connected TV industry based in London and Istanbul. We are building Addressable TV &amp; TV Analytics solutions and our platform manages billions of messages from the devices. We are looking for a backend engineer to join our team to develop and maintain our platform in our Istanbul office.Our Advanced TV Analytics solution analyzes millions of devices for data driven decision making to help predict viewer behaviour and improve scheduling and content recommendation. You will have a key role in our technology team and help us work with “big data” and newer technologies in broadcast/media space.</p><p><br></br>
</p><p>Responsibilities:</p><ul><li>Assist designing, building and maintaining models and algorithms that align with feature requirements and constantly improve and refine accuracy.</li><li>Use various data storage facilities to support data access patterns.</li><li>Design, develop and maintain APIs to expose data to planning, ordering and reporting systems</li><li>Use and promote software engineering standard methodologies across the team.</li></ul><p><br></br>
</p><p>Qualifications:</p><ul><li>Development experience (min. 3 years) preferably Javascript(NodeJS).</li><li>Experience with big data pipeline tools and techniques.</li><li>Production level experience with Golang.</li><li>Production level experience with Redis and MongoDB</li><li>Excellent analytical skills and ability to work independently.</li><li>Strong sense of ownership and track record of quality work.</li><li>Good communication and teamwork skills.</li></ul><p><br></br>
</p>
        </span>
                    </CardText>
                    <Button 
                      color="primary"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      Delete
                    </Button>
                  </CardBody>
                </Card>
                <Card>
                  <CardBody>
                    <CardTitle tag="h4"> Project Manager</CardTitle>
                    <div>
                      <p>Mobven</p>
                    </div>
                    <CardText> 
                    <span>
          <p>Do you want to be part of a global team?</p><p>&nbsp;</p><p>At Mobven, we are passionate about creating exceptional mobile solutions. Established in 2012, our company has evolved from a startup into an award-winning mobile technology company with offices in Istanbul. Mobven has been awarded as Turkey’s fastest growing top 50 tech companies by Deloitte, 3 years in a row.</p><p><br></br>
</p><p>We continue our operations as a subsidiary of Payten, the payment solutions arm of Asseco, the 6th largest software house in Europe.</p><p>&nbsp;</p><p>If you are self-motivated and constantly bear in mind how to add value to a company’s future and its products and services, then, we are looking for individuals like you with the ambition to be game changers in the industry and to create cutting edge mobile solutions for our multinational clients.</p><p><br></br>
</p><p><br></br>
</p><p>RESPONSIBILITIES</p><p>&nbsp;</p><ul><li>Drive cross-functional execution of multiple projects working directly with designers, developers and test engineers to conceptualize, build, test and realize product,</li><li>Manage execution of plan and scope of the project(s),</li><li>Coordinate activities of functional groups in compliance to the company goals,</li><li>Effectively contribute to project management process, including, but not limited to project scope management, project organization, resourcing, plan development and risk management,</li><li>Proactively track and communicate schedule and scope changes and escalation of project issues to internal and external stakeholders,</li><li>Work with leading corporate clients across various industries and start-up,</li><li>Craft business plans, strategic analysis, benchmarking and presentations on prospect projects.</li></ul><p>&nbsp;</p><p>KEY PERSONAL QUALITIES</p><p>&nbsp;</p><ul><li>Strong business acumen,</li><li>Entrepreneurial spirit,</li><li>Self-starter,</li><li>Multi-tasker,</li><li>Result-oriented,</li><li>Team player,</li></ul><p>&nbsp;</p><p>&nbsp;</p><p>REQUIRED SKILLS</p><p>&nbsp;</p><ul><li>5+ years experience in software product experience preferably in mobile, fintech and/or SaaS,</li><li>BS or MS degree in engineering or relevant fields,</li><li>Effective presenter, negotiator and collaborator,</li><li>Strong quantitative, analytical, and problem solving skills,</li><li>Excellent verbal, written and social communication skills,</li><li>Ability to coordinate multiple initiatives simultaneously in ever-changing environment,</li><li>A learner mindset with willingness to try new approaches, innovate, and improve,</li><li>Knowledge for analyze, process and project management tools (Visio, MS Project, Jira etc.),</li><li>Excellent use of spreadsheets and presentation tools.</li></ul><p>&nbsp;</p><p>&nbsp;</p><p>BENEFITS</p><p><br></br>
</p><ul><li>Good opportunities to work with remarkable teams from all over the world,</li><li>Inspiring and open company culture,</li><li>Opportunities to experience various projects at various client sites.</li></ul>
        </span>
                    </CardText>
                    <Button 
                      color="primary"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      Delete
                    </Button>
                  </CardBody>
                </Card>
                <Card>
                  <CardBody>
                    <CardTitle tag="h4"> Senior Test Engineer</CardTitle>
                    <div>
                      <p>Udemy</p>
                    </div>
                    <CardText> 
                    <span>
          Udemy Test Automation team is looking for new teammates to join our team. As a test automation engineer, you will be responsible for a variety of test automation projects, including developing e2e test solutions for our web and mobile applications, managing test fixtures and finding innovative ways to keep systems quality high. You will build and integrate scalable frameworks and tools which will help us achieve our mission of improving lives through learning. Join us to share the success!<br></br>
<br></br>
<strong><u>Here’s What You’ll Be Doing<br></br>
</u></strong><ul><ul><li>Ensure your team delivers extraordinary output</li><li>Identify and evaluate new technologies that improves quality of our apps and create proof-of-concepts as appropriate</li><li>Own relationships with other engineering teams and collaborate with other functions within Udemy</li><li>Serve as a test lead for various projects/tasks as needed. Demonstrate a working understanding of planning, developing and coordinating. Testing activities including Test Plan creation, Test Case creation, Debugging, Execution and Test analysis. This requires driving and performing best test practices in a combination of manual and automated testing.</li><li>Mentor junior engineers</li><li>Implementing solutions from data-driven perspective<br></br>
<br></br>
</li></ul></ul><strong><u>We’re Excited About You Because You Have<br></br>
</u></strong><ul><ul><li>4+ years of full-time engineering experience</li><li>Expertise in one or more programming languages (e.g. Python, Java, Kotlin, JS)</li><li>Deep knowledge of testing mobile and web applications</li><li>Experience with Testing methods, including unit,integration,service integration and e2e tests</li><li>Should be familiar with code reviews, design patterns, and implementing best practices in test automation</li><li>Familiarity with automated testing of complex software systems</li><li>Familiarity with Linux and shell scripting<br></br>
<br></br>
</li></ul></ul><strong><u>Nice To Have<br></br>
</u></strong><ul><ul><li>Familiarity with CodeceptJS, Puppeteer, Espresso and XCTest</li><li>Familiarity with containerization technologies (e.g. Docker)<br></br>
<br></br>
</li></ul></ul><strong><u>About Udemy<br></br>
<br></br>
</u></strong>We believe anyone can build the life they imagine through online learning. Today, more than 35 million students around the world are advancing their careers and passions by exploring and mastering new skills on Udemy, and expert instructors are able to share their knowledge with the world. Through our global marketplace and our solutions for businesses and governments, we connect people everywhere with the skills they need for success in work and life. We’re a close-knit bunch that enjoys problem-solving and collaboration, and we share a serious belief in the power of learning and teaching to change lives. Udemy’s culture encourages innovation, creativity, passion, and teamwork. We also celebrate our milestones and support each other every day.<br></br>
<br></br>
Founded in 2010, Udemy is privately owned and headquartered in San Francisco’s SOMA neighborhood with offices in Denver (Colorado), Dublin (Ireland), Ankara (Turkey), Gurugram (India), and São Paulo (Brazil).<br></br>
<br></br>
<strong>Udemy in the News<br></br>
<br></br>
</strong>Udemy Adds More than $1 Billion To Its Valuation in New Funding Round<br></br>
<br></br>
Udemy’s Workplace Learning Tool Just Surpassed $100M in ARR<br></br>
<br></br>
Paid Paternity Leave Should be the Norm in the U.S.<br></br>
<br></br>
Breakdown of Most In-Demand Skills for 2020—Finance, Marketing, Sales and Engineering<br></br>
<br></br>
How Investing in Yourself Today Will Set You Up for Career Success Tomorrow<br></br>
<br></br>
Feedback Isn’t the Problem, but the Way That We Deliver It Is Broken
        </span>
                    </CardText>
                    <Button 
                      color="primary"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      Delete
                    </Button>
                  </CardBody>
                </Card>
                <Card>
                  <CardBody>
                    <CardTitle tag="h4"> Data Analyst</CardTitle>
                    <div>
                      <p>Yemeksepeti</p>
                    </div>
                    <CardText> 
                    <span>
          <p><strong><u>QUALIFICATIONS</u></strong></p><p><br></br>
</p><ul><li>Tasty educational background with a degree in Industrial Engineering, Engineering Mathematics, Computer Engineering, MIS, Statistics or similar,</li><li>Minimum 1 year of experience in Business Intelligence or related fields,</li><li>Strong knowledge of SQL and ability of writing complex queries is required,</li><li>ETL Tool knowledge is preferable,</li><li>Strong appetite for creating reports using Microsoft SSRS is a big plus,</li><li>Data visualization and Tableau knowledge is advantageous,</li><li>Top-notch communication skills in English/Turkish is a must.</li></ul><p><br></br>
</p><p><strong><u>JOB DESCRIPTION</u></strong></p><p><br></br>
</p><p>We are looking for a <strong>Data Analyst&nbsp;</strong>for<strong> </strong>our<strong> Marketing Technologies Team</strong>, with the following responsibilities;</p><p><br></br>
</p><ul><li>Assisting to data mining and data science projects about marketing customers,</li><li>Brainstorming with marketing stakeholders to understand their data and analysis needs, challenges and problems,</li><li>Working with complex queries; using specialized business technologies and applications,</li><li>Being responsible for automatisation of marketing reports with tableau</li><li>Solving adhocs with help of SQL and Tableau</li><li>Planing and executing multiple marketing intelligence projects,&nbsp;</li><li>Creating and customizing easily comprehensible reports,</li><li>Designing and presenting clear, concise interactive dashboards.</li></ul><p><br></br>
</p><p><strong><u>WHAT YOU SHOULD EXPECT</u></strong></p><p><br></br>
</p><ul><li>A career in Turkey’s largest online food and grocery delivery platform and one of our country’s strongest corporate brands that has proudly been producing executives and leaders for the future for the last 20 years</li><li>Chance to work and cooperate with colleagues in Delivery Hero, our parent company, in various projects and benefit from know-how and idea exchanges to pursue global industry leadership</li><li>Flexible working hours for you to plan your day as you wish – you can start the day between 08:00 - 10:00 am</li><li>Various online education platforms for you to sustain your professional development</li><li>A much comprehensive private health insurance</li><li>Colleagues with warm smiles and good communication skills</li><li>An orientation program for you to capture Yemeksepeti spirit with full extent and always feel like home – along with an assigned Buddy to assist you on anything you might need</li><li>A paid birthday leave to use on the day after, for you to have fun and party without any worries!</li></ul>
       </span>
                    </CardText>
                    <Button 
                      color="primary"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      Delete
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
                <p id="userName">Emre Yılmaz</p>
                <h4> Occupation: </h4>
                <p id="occupation">Student</p>
                <h4> City: </h4>
                <p id="city">Ankara</p>
                <h4> Account Type: </h4>
                <p id="accountType">Job Seeker</p>
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
