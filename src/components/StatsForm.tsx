import React, { useState } from "react";
import NumberInput from "../elements/NumberInput";
import styled from "styled-components";
import { FrameBox } from "@arwes/core";
import Col from "../elements/Col";
import Dropdown from "../elements/NumberDropdown";
import Row from "elements/Row";
import CheckBox from "../elements/CheckBox";

const Wrapper = styled.div`
  margin-top: 2rem;
`;

const Box = styled.div`
  height: 500px;
  width: 500px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

const OPTIONS = [
  {
    value: 3,
    label: "3 or less",
  },
  {
    value: 4,
    label: "4",
  },
  {
    value: 5,
    label: "5",
  },
  {
    value: 6,
    label: "6",
  },
  {
    value: 7,
    label: "7",
  },
  {
    value: 8,
    label: "8",
  },
  {
    value: 9,
    label: "9",
  },
  {
    value: 10,
    label: "10",
  },
  {
    value: 11,
    label: "11",
  },
  {
    value: 12,
    label: "12 or more",
  },
];

const StatsForm = () => {
  const [state, setState] = useState("");
  const [error, setError] = useState("");

  const [number, setNumber] = useState("");

  return (
    <Wrapper>
      <FrameBox>
        <Box>
          <Row>
            <Col>
              <NumberInput
                value={state}
                onChange={setState}
                onError={setError}
                label={"Number of shots"}
              />
            </Col>
            <Col>
              <Dropdown value={number} options={OPTIONS} />
            </Col>
          </Row>
          <Row>
            foo
            <CheckBox />
          </Row>
        </Box>
      </FrameBox>
    </Wrapper>
  );
};

export default StatsForm;
