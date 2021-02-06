import styled from "styled-components";

interface ContentProps {
  displayReward: boolean;
}

export const Container = styled.div<ContentProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;

  .content {
    display: ${(props) => (props.displayReward ? "flex" : "none")};
    flex-direction: column;
    justify-content: space-between;
    width: 500px;
    min-height: 330px;
    max-height: 450px;
    font-weight: 300;
    background-color: #fff;
    align-items: center;
    border-radius: 15px;
    padding: 8px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    position: relative;
    @media (max-width: 830px) {
      width: 400px;
    }

    .modal-button {
      display: flex;
      align-items: center;

      svg {
        margin-right: 5px;
      }
    }

    .avatar {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      margin-top: -40px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
        0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

    .reward-info {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      border: 2px solid #3f51b5;
      width: 95%;
      line-height: 20px;
      padding: 10px 0;
      border-radius: 7px;
      font-weight: 500;

      p {
        font-weight: 400;
      }

      span {
        font-weight: 700;
      }

      p:last-child {
        margin-top: 5px;
      }
    }

    .close-button {
      position: absolute;
      cursor: pointer;

      top: 1.5%;
      right: 1%;
    }

    form {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      width: 95%;
      height: 80px;
      margin-bottom: 10px;

      .input {
        width: 95%;
      }
    }
  }
`;
