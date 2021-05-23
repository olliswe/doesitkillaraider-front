import React, { useState } from "react";
import NumberInput from "../elements/NumberInput";
import styled from "styled-components";
import { FrameBox } from "@arwes/core";
import Col from "../elements/Col";
import Dropdown from "../elements/NumberDropdown";
import Row from "elements/Row";
import CheckBox from "../elements/CheckBox";
import { STRENGTH_OPTIONS } from "../config/app";
import useFormStore from "../hooks/useFormStore";
import shallow from "zustand/shallow";

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

const StatsForm = () => {
  const { bs, shots, s, ap, d, rerollHit, rerollWound } = useFormStore(
    (state) => ({
      bs: state.bs,
      shots: state.shots,
      s: state.s,
      ap: state.ap,
      d: state.d,
      rerollHit: state.rerollHit,
      rerollWound: state.rerollWound,
    }),
    shallow
  );
  const errors = useFormStore((state) => state.errors);
  const setState = useFormStore((state) => state.setState);
  const setErrors = useFormStore((state) => state.setErrors);

  return (
    <Wrapper>
      <FrameBox>
        <Box>
          <Row>
            <Col>
              <NumberInput
                value={shots}
                onChange={(shots) => setState({ shots })}
                onError={setErrors}
                label={"Number of shots"}
                name="shots"
              />
            </Col>
            <Col>
              <Dropdown
                value={s}
                options={STRENGTH_OPTIONS}
                onChange={(s) => setState({ s })}
                label={"Strength"}
                name="s"
                onError={setErrors}
              />
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
