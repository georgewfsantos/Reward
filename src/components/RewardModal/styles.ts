import styled from "styled-components";

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  color: #000000de;
  font-weight: 700;
  background-color: #fff;
  width: 800px;
  height: 500px;
  border-radius: 7px;
  margin: auto;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  .reward-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
    height: 340px;
    align-items: center;
    background-color: #f5f5f5;
    border-radius: 8px;

    > h1 {
      border-radius: 7px;
      padding: 10px;
    }

    > h2 {
      font-weight: 700;
    }

    .reward-image {
      width: 150px;
      height: 150px;
      border-radius: 50%;
    }
  }

  .reward-buttons {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 50%;
  }
`;
