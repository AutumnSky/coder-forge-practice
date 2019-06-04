import React from "react";
import styled from "styled-components";
import { Card } from "react-bootstrap";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const WelcomeContainer = styled.div`
  width: 100%;
  height: 50vh;
  background-color: #bdc3c7;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ScheduleContainer = styled.div`
  display: flex;
  padding: 2rem;
  position: relative;
`;

const ScheduleList = styled.ul`
  margin-right: 1rem;
`;

const ScheduleItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

const Calendar = styled.div`
  min-width: 200px;
  height: 200px;
  background-color: lightgray;
  position: sticky;
`;

class Home extends React.Component {
  render() {
    return (
      <HomeContainer>
        <WelcomeContainer>
          <p>Coder-Forge</p>
        </WelcomeContainer>
        <ScheduleContainer>
          <ScheduleList>
            <ScheduleItem>
              <Card bg="light" style={{ width: "100%" }}>
                <Card.Header>Header</Card.Header>
                <Card.Body>
                  <Card.Title>Light Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </ScheduleItem>
            <ScheduleItem>
              <Card bg="light" style={{ width: "100%" }}>
                <Card.Header>Header</Card.Header>
                <Card.Body>
                  <Card.Title>Light Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </ScheduleItem>
            <ScheduleItem>
              <Card bg="light" style={{ width: "100%" }}>
                <Card.Header>Header</Card.Header>
                <Card.Body>
                  <Card.Title>Light Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </ScheduleItem>
          </ScheduleList>
          <Calendar>Calendar Area</Calendar>
        </ScheduleContainer>
      </HomeContainer>
    );
  }
}

export default Home;
