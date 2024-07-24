import styled from 'styled-components';

export const InputStyle = styled.input`
    padding: 10px;
    margin-bottom: 10px;
    color: ${props => props.inputColor || '#f60'};
    font-size: 1rem;
    border: 1px solid #333;
    border-radius: 5px;
    width: 200px;
`;