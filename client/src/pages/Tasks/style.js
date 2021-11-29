import styled from "styled-components";

export const Header=styled.div`
  margin-Top: 9vh;
text-align:center
`;
export const Form = styled.form`
  background-color:white;
  display: flex;
  flex-direction: column;
  gap: 25px;
  max-width: 400px;
   padding: 2vw;
    border-radius:8px;
 width:50vw; 
  margin-bottom: 2vh;
  margin-left: auto;  
  margin-right: auto;  
`;
export const Task = styled.div`
max-width:19vw;
overflow-wrap: break-word
`;
export const Tasks = styled.div`
display: grid;
grid-template-columns: repeat(5, 5fr);
grid-gap: 1rem;
`
