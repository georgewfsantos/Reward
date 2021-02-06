import styled from "styled-components";
import { colors } from "../../styles/colorVariables";
export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100vh;
  justify-content: space-between;
  background-color: #d5d5d5;

  aside {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 15%;
    background-color: #fff;
    height: 100vh;
    padding: 20px;
    border-radius: 0 16px 16px 0;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    .menu {
      display: flex;
      width: 100%;
      flex-direction: column;
      align-items: center;
      height: 500px;
      justify-content: space-between;

      .menu-item {
        display: flex;
        align-items: center;
        height: 40px;
        width: 100%;
        color: ${colors.primary};
        background-color: #3f51b533;
        border-radius: 0 8px 8px 0;
        padding: 10px;
        transition: background-color 0.2s;

        &.active {
          background-color: ${colors.secondary};
          color: #fff;

          svg {
            color: #fff;
          }
        }

        &:hover {
          background-color: ${colors.secondary};
          color: #fff;
          cursor: pointer;

          svg {
            color: #fff;
          }
        }

        svg {
          margin-right: 10px;
        }
      }
    }

    .note {
      display: flex;
      align-items: center;
      background-color: #f5f5f5;
      padding: 30px;
      width: 100%;
      font-size: 12px;
      line-height: 14px;
      font-weight: 500;
      color: ${colors.primary};
      border-radius: 0 8px 8px 0;
    }
  }
`;

export const MainContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
