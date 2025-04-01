import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row } from 'reactstrap';

// Default avatar image
import avatar2  from '../../assets/images/users/avatar-3.jpg';

//Custom Images
import calenderLogo from "../../assets/icons/calendar.png"


const Section = () => {
    // Retrieve authUser from localStorage and parse it
    const authUserString = localStorage.getItem('authUser');
    let authUser;

    try {
        authUser = authUserString ? JSON.parse(authUserString) : null;
    } catch (error) {
        console.error("Error parsing authUser from localStorage:", error);
        authUser = null;
    }

    // Extract fullName and profileImageUrl, fallback to default values if necessary
    const fullName = authUser && authUser.data && authUser.data.fullName ? authUser.data.fullName : "Default Name";
    const profileImageUrl = authUser && authUser.data && authUser.data.profileImageUrl ? authUser.data.profileImageUrl : avatar2;

    return (
        <React.Fragment>
            <Row className="mb-4">
                <Col lg="8">
                    <div className="d-flex align-items-center">
                        <div>
                            {/* Display fullName details */}
                            <h1 className="mb-2 card-title fs-4">Welcome Hadi!</h1>
                            <p className="text-muted mb-0">Last login: 01/04/2025  12:39:58</p>
                        </div>
                    </div>
                </Col>
                <Col lg="1" className="align-self-center">

                </Col>
                <Col lg="3" className="d-lg-block text-end">
                    <div className="d-inline-block border border-2 rounded p-2" style={{ borderColor: "#D0D5DD", }}>
                        <p className="text-muted small mb-0">
                            <img src={calenderLogo} height={14} width={14} /> Last Login | 01 Apr 2025
                        </p>
                    </div>
                </Col>
            </Row>
        </React.Fragment>
    );
}

export default Section;
