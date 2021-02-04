import styled from "styled-components";

export const Container = styled.div`
  .reward-button {
    margin-top: 15px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: #fff;
  width: 500px;
  height: 500px;
  margin: 14em auto;
  border-radius: 7px;

  .reward-image {
    width: 150px;
    height: 150px;
    border-radius: 50%;
  }

  .reward-buttons {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 50%;
  }
`;
