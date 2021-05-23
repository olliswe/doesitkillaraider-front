import styled from "styled-components";
import {
  flexbox,
  space,
  layout,
  LayoutProps,
  FlexboxProps,
  SpaceProps,
} from "styled-system";

const Row = styled.div<LayoutProps & FlexboxProps & SpaceProps>`
  display: flex;
  flex-direction: row;
  ${flexbox}
  ${space}
  ${layout}
`;

export default Row;
