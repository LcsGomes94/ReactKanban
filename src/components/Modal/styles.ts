import ReactTooltip from "react-tooltip";
import styled from "styled-components";

export const ModalContainer = styled.form`
    flex-grow: 1;
    display: flex;
    flex-flow: column;
    align-items: center;
`

export const StyledReactTooltip = styled(ReactTooltip)`
    box-shadow: 0px 2px 20px lightgray;
    opacity: 0.6 !important;
`