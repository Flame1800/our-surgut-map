import React, { memo } from "react";
import styled from "styled-components";
import useMapbox from "./useMapbox";

const Map = () => {
  useMapbox();

  return <Wrapper id="map"></Wrapper>;
};

const Wrapper = styled.div`
  height: 92vh;
`;

export default memo(Map);
