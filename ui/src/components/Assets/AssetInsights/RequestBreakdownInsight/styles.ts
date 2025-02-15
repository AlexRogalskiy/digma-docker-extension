import styled from "styled-components";

export const ContentContainer = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const PieChartContainer = styled.div`
  padding: 2px;
  border-radius: 50%;
  border: 1px solid
    ${({ theme }) => {
      switch (theme.palette.mode) {
        case "light":
          return "#efeff2";
        case "dark":
          return "#465c6e";
      }
    }};
  background: ${({ theme }) => {
    switch (theme.palette.mode) {
      case "light":
        return "#f9f9f9";
      case "dark":
        return "#36414e";
    }
  }};
`;

export const Legend = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`;

export const LegendItem = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const LegendItemDataColor = styled.div<{ color: string }>`
  height: 4px;
  width: 4px;
  border-radius: 50%;
  background: ${({ color }) => color};
`;

export const LegendItemDataLabel = styled.span`
  font-size: 14px;
  line-height: 17px;
  color: ${({ theme }) => {
    switch (theme.palette.mode) {
      case "light":
        return "#828797";
      case "dark":
        return "#9b9b9b";
    }
  }};
`;

export const LegendItemDataValue = styled.span`
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: ${({ theme }) => {
    switch (theme.palette.mode) {
      case "light":
        return "#4d668a";
      case "dark":
        return "#dadada";
    }
  }};
`;
