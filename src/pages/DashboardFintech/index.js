import React, {useState, useEffect} from "react"
import { Container, Row, Col, Card, CardBody, Table, CardTitle, CardSubtitle, Spinner } from "reactstrap"

//Import Components
import Section from "./Section"

//Custom Images
import calenderLogo from "../../assets/icons/calendar.png"
import quickAcc1 from "../../assets/icons/Frame-1618867979.png"
import quickAcc2 from "../../assets/icons/Frame-1618867979-1.png"
import quickAcc3 from "../../assets/icons/Frame-1618867979-2.png"
import quickAcc4 from "../../assets/icons/Frame-1618867979-3.png"
import quickAccessArrow from "../../assets/icons/chevron-right.png"

import expandIconLogo from "../../assets/icons/expand-icon.png"

import { fetchCardData } from "common/data/fetchCardData"


import { Link } from "react-router-dom"
import ColumnWithDataLabels from "pages/AllCharts/apex/ColumnWithDataLabels"
import DountChart from "pages/AllCharts/apex/dountchart"
import Spinearea from "pages/AllCharts/apex/SplineArea"


const DashboardFintech = () => {
  document.title = "Fintech Dashboard"

  const [cardData, setCardData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCardData().then((data) => {
      setCardData(data);
      setLoading(false);
    });
  }, []);

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Section />

          {/* Your Quick Access */}
          <Row>
            <Col lg="12">
              <Card className="border-2 border rounded-3" style={{ borderColor: "#D0D5DD", }}>
                <CardBody>
                  <Row>
                    <h5 className="mb-2 card-title">Your Quick Access</h5>
                  </Row>
                  <Row className="g-2 mt-2">
                    <Col lg="3" className="d-lg-block">
                      <Link to={"/#"}> 
                        <div className="rounded p-2" style={{ backgroundColor: "#f1fcfd" }}>
                          <p className="text-muted mb-0">
                            <img src={quickAcc1} height={28} width={28} /> Manage a Card <img src={quickAccessArrow} height={16} width={16} />
                          </p>
                        </div>
                      </Link>
                    </Col>

                    <Col lg="3" className="d-lg-block">
                      <Link to={"/#"}> 
                        <div className="rounded p-2" style={{ backgroundColor: "#f1fcfd" }}>
                          <p className="text-muted mb-0">
                            <img src={quickAcc2} height={28} width={28} /> Issue Instant Card <img src={quickAccessArrow} height={16} width={16} />
                          </p>
                        </div>
                      </Link>
                    </Col>

                    <Col lg="3" className="d-lg-block">
                      <Link to={"/#"}> 
                        <div className="rounded p-2" style={{ backgroundColor: "#f1fcfd" }}>
                          <p className="text-muted mb-0">
                            <img src={quickAcc3} height={28} width={28} /> Issue Personalized Card <img src={quickAccessArrow} height={16} width={16} />
                          </p>
                        </div>
                      </Link>
                    </Col>

                    <Col lg="3" className="d-lg-block">
                      <Link to={"/#"}> 
                        <div className="rounded p-2" style={{ backgroundColor: "#f1fcfd" }}>
                          <p className="text-muted mb-0">
                            <img src={quickAcc1} height={28} width={28} /> Review Card Requests <img src={quickAccessArrow} height={16} width={16} />
                          </p>
                        </div>
                      </Link>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>

          {/* Analtics Heading */}
          <div className="d-flex align-items-center mb-4">
            <span className="fw-bold me-3 fs-5">Analytics</span>
            <div className="flex-grow-1 border-bottom border-2" style={{ borderColor: "#D0D5DD", }}></div>
          </div>

          {/* Card Reports */}
          <Row className="g-1">
            {loading ? (
              <div className="d-flex justify-content-center w-100 mb-5 my-5 ">
                <Spinner animation="border" variant="primary" />
              </div>
            ) : (
              cardData.map((card) => (
                <Col lg="3" key={card.id}>
                  <Card className="border-2 border rounded-3" style={{ borderColor: "#D0D5DD" }}>
                    <CardBody className="p-2">
                      <Row>
                        <p className="text-muted mb-0">
                          <img src={card.logo} height={16} width={16} alt={card.title} />
                          <p className="mt-1 mb-2 card-title fs-6">{card.title}</p>
                        </p>
                      </Row>
                      <Row className="g-1 mt-2">
                        <Col lg="6" className="d-lg-block">
                          <p className="mt-1 mb-2 card-title fs-3">{card.value}</p>
                        </Col>
                        {card.trend && (
                          <Col lg="3" className="d-flex align-items-center">
                            <p className="mt-1 mb-2 card-title fs-6 flex-end">
                              <span className="badge badge-soft-success me-2">
                                <i className={`${card.trendIcon} align-bottom me-1`}></i> {card.trend}
                              </span>
                            </p>
                          </Col>
                        )}
                        {card.timeFrame && (
                          <Col lg="3" className="d-flex align-items-center">
                            <small className="mt-1 mb-2">{card.timeFrame}</small>
                          </Col>
                        )}
                        {card.alert && (
                          <Col lg="6" className="d-flex align-items-center">
                            <small className="mt-1 mb-2" style={{ color: card.alertColor }}>
                              <i className={`${card.alertIcon} me-1`}></i> {card.alert}
                            </small>
                          </Col>
                        )}
                      </Row>
                    </CardBody>
                  </Card>
                </Col>
              ))
            )}
          </Row>

          {/* Graphs, Tables and Charts */}
          <Row className="g-1">
            <Col lg="6">
              <Row>
                <Col lg="12">
                  <Card className="border-2 border rounded-3" style={{ borderColor: "#D0D5DD", }}>
                    <CardBody>
                      <Row className="mb-4">
                        <Col lg="8" className="d-lg-block text-start">
                            <div className="d-flex align-items-center">
                                <div>
                                    {/* Monthly Issuance */}
                                    <p className="mb-2 fs-5">Monthly Issuance</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg="1" className="align-self-center">

                        </Col>
                        <Col lg="3" className="d-lg-block text-end">
                          <Link to="/#">
                            <img src={expandIconLogo} height={14} width={14} />
                          </Link>
                        </Col>
                      </Row>
                      
                      <Row>
                        <ColumnWithDataLabels dataColors='["#004852", "#CCE2FF", "#008FFB"]' />
                      </Row>
                    </CardBody>
                  </Card>
                </Col>
              </Row>

              <Row>
                <Col lg="12">
                  <Card className="border-2 border rounded-3" style={{ borderColor: "#D0D5DD", }}>
                    <CardBody>
                      <Row className="mb-4">
                        <Col lg="8" className="d-lg-block text-start">
                            <div className="d-flex align-items-center">
                                <div>
                                    {/* Monthly Issuance */}
                                    <p className="mb-2 fs-5">This Week's Income</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg="1" className="align-self-center">

                        </Col>
                        <Col lg="3" className="d-lg-block text-end">
                          <Link to="/#">
                            <img src={expandIconLogo} height={14} width={14} />
                          </Link>
                        </Col>
                      </Row>
                      
                      <Row>
                        <Spinearea dataColors='["#4DAF01", "#CCE2FF"]' />
                      </Row>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Col>

            <Col lg="6">
              <Row>
                <Col lg="12">
                  <Card className="border-2 border rounded-3" style={{ borderColor: "#D0D5DD", }}>
                    <CardBody>
                      <Row className="mb-4">
                        <Col lg="8" className="d-lg-block text-start">
                            <div className="d-flex align-items-center">
                                <div>
                                    {/* Monthly Issuance */}
                                    <p className="mb-2 fs-5">Recent Card Requests</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg="1" className="align-self-center">

                        </Col>
                        <Col lg="3" className="d-lg-block text-end">
                          <Link to="/#">
                            <img src={expandIconLogo} height={14} width={14} />
                          </Link>
                        </Col>
                      </Row>
                      
                      <Row>
                        <Col lg={12}>
                          <Card>
                            <CardBody>
                              <div className="table-responsive">
                                <div className="table-responsive">
                                  <Table className="align-middle mb-0 text-center">

                                    <thead>
                                      <tr>
                                        <th>Branch</th>
                                        <th>Card Type</th>
                                        <th>Quantity</th>
                                        <th style={{ alignItems: "center" }}>Status</th>
                                        <th>Action</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <th scope="row">Corporate</th>
                                        <td>Instant</td>
                                        <td>1</td>
                                        <td align="center">
                                          <span className="badge badge-soft-success me-2 rounded-pill p-2">
                                            Ready
                                          </span>
                                        </td>
                                        <td>
                                          <div className="d-flex justify-content-center align-items-center">
                                            <Link to="/#">
                                              <p className="mb-0" style={{ color: "blue", display: "flex", alignItems: "center", height: "100%" }}>View</p>
                                            </Link>
                                          </div>
                                        </td>
                                      </tr>
                                      <tr>
                                        <th scope="row">Corporate</th>
                                        <td>Personalized</td>
                                        <td>1</td>
                                        <td align="center">
                                          <span className="badge badge-soft-warning me-2 rounded-pill p-2">
                                            In Progress
                                          </span>
                                        </td>
                                        <td>
                                          <div className="d-flex justify-content-center align-items-center">
                                            <Link to="/#">
                                              <p className="mb-0" style={{ color: "blue", display: "flex", alignItems: "center", height: "100%" }}>View</p>
                                            </Link>
                                          </div>
                                        </td>
                                      </tr>
                                      <tr>
                                        <th scope="row">Corporate</th>
                                        <td>Personalized</td>
                                        <td>1</td>
                                        <td align="center">
                                          <span className="badge badge-soft-primary me-2 rounded-pill p-2">
                                            Acknowledged
                                          </span>
                                        </td>
                                        <td>
                                          <div className="d-flex justify-content-center align-items-center">
                                            <Link to="/#">
                                              <p className="mb-0" style={{ color: "blue", display: "flex", alignItems: "center", height: "100%" }}>View</p>
                                            </Link>
                                          </div>
                                        </td>
                                      </tr>
                                      <tr>
                                        <th scope="row">Corporate</th>
                                        <td>Instant</td>
                                        <td>1</td>
                                        <td align="center">
                                          <span className="badge badge-soft-secondary me-2 rounded-pill p-2">
                                            Pending
                                          </span>
                                        </td>
                                        <td>
                                          <div className="d-flex justify-content-center align-items-center">
                                            <Link to="/#">
                                              <p className="mb-0" style={{ color: "blue", display: "flex", alignItems: "center", height: "100%" }}>View</p>
                                            </Link>
                                          </div>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </Table>
                                </div>
                              </div>
                            </CardBody>
                          </Card>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </Col>
              </Row>

              <Row>
                <Col lg="12">
                  <Card className="border-2 border rounded-3" style={{ borderColor: "#D0D5DD", }}>
                    <CardBody>
                      <Row className="mb-4">
                        <Col lg="8" className="d-lg-block text-start">
                            <div className="d-flex align-items-center">
                                <div>
                                    {/* Monthly Issuance */}
                                    <p className="mb-2 fs-5">Card Status Distribution</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg="1" className="align-self-center">

                        </Col>
                        <Col lg="3" className="d-lg-block text-end">
                          {/* <Link to="/#">
                            <img src={expandIconLogo} height={14} width={14} />
                          </Link> */}
                        </Col>
                      </Row>
                      
                      <Row>
                        <DountChart dataColors='["#01A4AF", "#FFBA24", "#004852", "#8020E7", "#FF4457"]' />
                        {/* dataColors='["#01A4AF", "#FFBA24", "#004852", "#8020E7", "#FF4457"]' */}
                      </Row>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>


        </Container>
      </div>
    </React.Fragment>
  )
}

export default DashboardFintech
