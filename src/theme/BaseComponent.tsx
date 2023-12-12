import React from "react";
import styled from "styled-components";
import { StyleSheet } from "@src/theme/StyleSheet";
import { parseStyleSheet } from "@displaykit/responsive_styles"

interface StyledBaseComponet{
    styleSheet?: StyleSheet;
}
const StyledBaseComponet = styled.div<StyledBaseComponet>`
display: flex;
flex-direction: column;
align-items: flex-start;
flex-shrink: 0;
    ${({styleSheet}) => parseStyleSheet(styleSheet) }
`;

export const BaseComponent = (props) =>{
    return(
        <StyledBaseComponet{...props}/>
    )
}
BaseComponent.defaultProps = {
    styleSheet:{},
}