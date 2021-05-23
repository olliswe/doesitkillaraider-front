import styled from "styled-components";
import {
  flexbox,
  space,
  layout,
  LayoutProps,
  FlexboxProps,
  SpaceProps,
} from "styled-system";

const Col = styled.div<LayoutProps & FlexboxProps & SpaceProps>`
  display: flex;
  flex-direction: column;
  ${flexbox}
  ${space}
  ${layout}
`;

export default Col;
