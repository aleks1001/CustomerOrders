import styled from "styled-components";
import {Flex} from "pcln-design-system";

export default styled(Flex)`
    background-color: ${props => props.theme.colors.blue};
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
`