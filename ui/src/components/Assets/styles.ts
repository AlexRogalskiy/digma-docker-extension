import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import styled from "styled-components";

export const Circle = styled.div`
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: ${({ theme }) => {
    switch (theme.palette.mode) {
      case "light":
        return "#e1e2e6";
      case "dark":
        return "#333c42";
    }
  }};
`;

export const GettingStartedButton = styled(Button)`
  font-weight: 500;
  background: ${({ theme }) => {
    switch (theme.palette.mode) {
      case "light":
        return "#086dd7";
      case "dark":
        return "#3391ee";
    }
  }};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow: auto;
  padding-bottom: 28px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 96px;
  flex-shrink: 0;
  gap: 12px;
`;

export const SearchTextField = styled(TextField)`
  margin: 0;
  margin-left: auto;
  width: 244px;

  & .MuiOutlinedInput-notchedOutline {
    border: 1.5px solid
      ${({ theme }) => {
        switch (theme.palette.mode) {
          case "light":
            return "#e1e2e6";
          case "dark":
            return "#364754";
        }
      }};
  }

  & .MuiInputBase-root {
    height: 40px;

    &.Mui-focused,
    &:hover {
      .MuiOutlinedInput-notchedOutline {
        border: 1.5px solid
          ${({ theme }) => {
            switch (theme.palette.mode) {
              case "light":
                return "#677285";
              case "dark":
                return "#7794ab";
            }
          }};
      }
    }
  }

  & .MuiInputAdornment-root {
    color: #677285;
  }

  & .MuiInputBase-input {
    ::placeholder {
      color: ${({ theme }) => {
        switch (theme.palette.mode) {
          case "light":
            return "#677285";
          case "dark":
            return "#7794ab";
        }
      }};
    }
  }
`;
