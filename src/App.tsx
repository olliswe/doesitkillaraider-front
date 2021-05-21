import ArwesLayout from "./components/ArwesLayout";
import Scene from "./components/Scene";
import styled from "styled-components";
import { FrameUnderline, Text } from "@arwes/core";
import Layout from "./components/Layout";

const SceneWrapper = styled.div`
  height: 500px;
  width: 500px;
  position: absolute;
  top: 0;
  right: 0;
`;

const Header = styled(Text)`
  font-size: 2rem;
`;

const App = () => {
  return (
    <ArwesLayout>
      <Layout>
        <FrameUnderline>
          <Header>+++ DOES IT KILL A RAIDER +++</Header>
        </FrameUnderline>
        <SceneWrapper>
          <Scene />
        </SceneWrapper>
      </Layout>
    </ArwesLayout>
  );
};

export default App;
