import styled from "styled-components";
import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";
import BoxWithStyledComponents from "@/components/BoxWithClassName/BoxWithStyledComponents.js";

const WrapBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;

export default function HomePage() {
  return (
    <WrapBox>
      <BoxWithClassName />
      <BoxWithClassName isBlack />
      <BoxWithStyledComponents />
      <BoxWithStyledComponents isBlack />
    </WrapBox>
  );
}
