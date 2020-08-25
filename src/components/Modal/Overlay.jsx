import styled from "styled-components";
import {Box} from "pcln-design-system";

const Overlay = styled(Box)`
    z-index: 98;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.3);
`

export default Overlay;