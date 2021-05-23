import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 1rem;
`;

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Layout;
