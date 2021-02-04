import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #121214;
  height: 100vh;

  .content {
    display: flex;
    flex-direction: column;
    width: 500px;
    height: 200px;
    background-color: #fff;
    align-items: center;
    border-radius: 15px;

    .avatar {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      margin-top: -40px;
    }

    .reward-info {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border: 1px solid #d5d5d5;
      height: 60px;
      width: 90%;
      margin-top: 15px;
      padding: 5px;
      border-radius: 7px;

      p:last-child {
        margin-top: 5px;
      }
    }
  }
`;
