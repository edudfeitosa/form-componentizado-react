import React from "react";
import { TitleInputFormStyle } from './style';

interface TitleInputProps {
    children: React.ReactNode
}

const TitleInputForm = ({ children }: TitleInputProps) => (
    <TitleInputFormStyle>
        { children }
    </TitleInputFormStyle>
);

export default TitleInputForm;