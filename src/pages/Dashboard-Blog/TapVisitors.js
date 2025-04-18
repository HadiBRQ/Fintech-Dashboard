import React from 'react';
import { Link } from "react-router-dom"

import {
  Card,
  CardBody,
  Col,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownToggle,
  Row,
} from "reactstrap"

function TapVisitors(props) {
    return (
        <React.Fragment>
        <Col xl={4}>
          <Card>
            <CardBody>
              <div className="d-flex flex-wrap">
                <div className="ms-2">
                  <h5 className="card-title mb-3">Top Visitors</h5>
                </div>
                <UncontrolledDropdown className="ms-auto">
                  <DropdownToggle
                    className="text-muted font-size-16"
                    tag="a"
                    color="white"
                  >
                    <i className="mdi mdi-dots-horizontal"></i>
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-menu-end">
                    <Link className="dropdown-item" to="#">
                      Action
                    </Link>
                    <Link className="dropdown-item" to="#">
                      Another action
                    </Link>
                    <Link className="dropdown-item" to="#">
                      Something else
                    </Link>
                    <div className="dropdown-divider"></div>
                    <Link className="dropdown-item" to="#">
                      Separated link
                    </Link>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </div>
              <Row className="text-center">
                <Col xs={6}>
                  <div className="mt-3">
                    <p className="text-muted mb-1">Today</p>
                    <h5>0</h5>
                  </div>
                </Col>

                <Col xs={6}>
                  <div className="mt-3">
                    <p className="text-muted mb-1">This Month</p>
                    <h5>
                      0{" "}
                      <span className="text-success font-size-13">
                        0% <i className="mdi mdi-arrow-up ms-1"></i>
                      </span>
                    </h5>
                  </div>
                </Col>
              </Row>

              <hr />

              <div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <div className="py-2">
                      <h5 className="font-size-14">
                        Lagos <span className="float-end">0%</span>
                      </h5>
                      <div className="progress animated-progess progress-sm">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "0%" }}
                          aria-valuenow="0"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </li>
                  <li className="list-group-item">
                    <div className="py-2">
                      <h5 className="font-size-14">
                        Kano <span className="float-end">0%</span>
                      </h5>
                      <div className="progress animated-progess progress-sm">
                        <div
                          className="progress-bar bg-warning"
                          role="progressbar"
                          style={{ width: "0%" }}
                          aria-valuenow="0"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </li>
                  <li className="list-group-item">
                    <div className="py-2">
                      <h5 className="font-size-14">
                        Rivers <span className="float-end">0%</span>
                      </h5>
                      <div className="progress animated-progess progress-sm">
                        <div
                          className="progress-bar bg-success"
                          role="progressbar"
                          style={{ width: "0%" }}
                          aria-valuenow="0"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </CardBody>
          </Card>
        </Col>
      </React.Fragment>
    );
}

export default TapVisitors;
