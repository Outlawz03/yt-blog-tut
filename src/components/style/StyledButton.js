import styled from 'styled-components';

const handleTheme = btnTheme => {
  switch(btnTheme) {
  case 'outline':
    return({
      backgroundColor: 'rgba(0, 0, 0, 0)',
      hoverBackgroundColor: 'rgba(0, 0, 0, 0.04)',
      color: 'rgba(0, 0, 0, 0.8)',
      border: '1px solid rgba(0, 0, 0, 0.8)',
      padding: '5px 15px'
    })
  default:
    return({
      backgroundColor: '#007bff',
      hoverBackgroundColor: '#0069d9',
      color: 'rgba(255, 255, 255, 1)',
      border: '1px solid transparent',
      padding: '6px 16px'
    })
  }
};

export const StyledButton = styled.button`
  cursor: pointer;
  user-select: none; 
  padding: ${({btnTheme}) => handleTheme(btnTheme).padding};
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.75;
  letter-spacing: 0.02857em;
  border-radius: .25rem;
  color: ${({btnTheme}) => handleTheme(btnTheme).color};
  background-color: ${({btnTheme}) => handleTheme(btnTheme).backgroundColor};
  border: ${({btnTheme}) => handleTheme(btnTheme).border};
  text-align: center;
  vertical-align: middle;
  min-width: 150px;
  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;  

  &:hover {
    background-color: ${({btnTheme}) => handleTheme(btnTheme).hoverBackgroundColor};
  }

  &:active {
    box-shadow: 0px 5px 5px -3px rgba(0,0,0,0.2), 0px 8px 10px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(0,0,0,0.12);
  } 
`;