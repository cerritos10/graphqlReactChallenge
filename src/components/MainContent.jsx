import React from "react";
import styled from "styled-components";
import InProgress from "./InProgress";
import Navbar from "./Navbar";
// import JoinSlack from "./JoinSlack";
// import ProjectRecommendation from "./ProjectRecommendation";
// import Projects from "./Projects";
// import Invoices from "./Invoices";

function MainContent() {
  return (
    <Container>
      <Navbar />
      <SubContainer>
        <SectionOne>
            
          <ColumnOne1>
          <Status>Working (3)</Status>
          <InProgress/>
          <InProgress/>
          <InProgress/>
          <InProgress/>
          </ColumnOne1>
          <ColumnTwo1>
          <Status>In Progress (3)</Status>
          <InProgress/>
          </ColumnTwo1>
          <ColumnThree1>
          <Status>Cancelled (3)</Status>
          <InProgress/>
          </ColumnThree1>
          <ColumnFour1>
          <Status>Backlog (3)</Status>
          <InProgress/>
          </ColumnFour1>
        </SectionOne>
        {/* <SectionTwo>
          <ColumnOne2>
          <InProgress/>
            <InvoiceContainer>
            </InvoiceContainer>
          </ColumnOne2>
          <ColumnTwo2>
          </ColumnTwo2>
        </SectionTwo> */}
      </SubContainer>
    </Container>
  );
}

const Status = styled.div`
    color:#fff;
    margin-left:10px;
    margin-bottom:10px;
`;

const Container = styled.div`
  width: 100%;
  height:100%;
  background: #222528;
  border-bottom-right-radius: 2rem;
  border-top-right-radius: 2rem;
  margin: 1rem 2rem 1rem 0.5rem;

  @media screen and (min-width: 320px) and (max-width: 1080px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 1rem 0 0 0;
  }
`;

const SubContainer = styled.div`
  margin: 0.5rem 5px;
  height: 80%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    height: 100%;
  }
`;
const SectionOne = styled.div`
  display: flex;
  justify-content: space-between;
  height: 40%;
  gap: 1.5rem;
  width: 100%;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    align-items: center;
    height: max-content;
  }
`;
const ColumnOne1 = styled.div`
    display: flex;
    flex-direction: column;
    height: 115%;
    width: 100%;
    @media screen and (min-width: 320px) and (max-width: 1080px) {
    height: max-content;
    justify-content: center;
    align-items: center;
    }
`;

const ColumnTwo1 = styled.div`
  display: flex;
  flex-direction: column;
  height: 115%;
  width: 100%;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    height: max-content;
    justify-content: center;
    align-items: center;
  }
`;

const ColumnThree1 = styled.div`
  display: flex;
  flex-direction: column;
  height: 115%;
  width: 100%;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    height: max-content;
    justify-content: center;
    align-items: center;
  }
`;

const ColumnFour1 = styled.div`
  display: flex;
  flex-direction: column;
  height: 115%;
  width: 100%;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    height: max-content;
    justify-content: center;
    align-items: center;
  }
`;

// const TitleText = styled.h3`
//   height: 20%;
//   /* padding-top */
// `;

// const SectionTwo = styled.div`
//   display: flex;
//   gap: 2rem;
//   height: 26vh;
//   @media screen and (min-width: 320px) and (max-width: 1080px) {
//     flex-direction: column;
//     height: max-content;
//     width: 100%;
//   }
// `;
// const ColumnOne2 = styled.div`
//   @media screen and (min-width: 320px) and (max-width: 1080px) {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     flex-direction: column;
//     width: 100%;
//   }
// `;
// const InvoiceContainer = styled.div`
//   height: 60%;
//   @media screen and (min-width: 320px) and (max-width: 1080px) {
//     height: max-content;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     flex-direction: column;
//     width: 100%;
//   }
// `;

// const ColumnTwo2 = styled.div`
//   @media screen and (min-width: 320px) and (max-width: 1080px) {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     flex-direction: column;
//   }
// `;

export default MainContent;