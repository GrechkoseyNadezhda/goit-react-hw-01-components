import styled from 'styled-components';

export const Table = styled.table`
  margin: 0 auto;
  margin-top: 80px;
  width: 600px;
  border-collapse: collapse;
  border: 2px solid rgb(118, 243, 172, 1);
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 1), -23px 0 20px -23px rgba(0, 0, 0, 0.8),
    23px 0 20px -23px rgba(0, 0, 0, 0.8), 0 0 40px rgba(0, 0, 0, 0.1);
`;

export const Thead = styled.thead`
  background: rgba(50, 225, 125, 0.8);
  border: 3px solid rgba(50, 225, 125, 1);
`;
export const Tbody = styled.tbody``;
export const Tr = styled.tr`
  &: nth-child(even) {
    background: #60ff6042;
  }

  &: nth-child(odd) {
    background: #96f396c2;
  } ;
`;
export const Th = styled.th`
  padding: 10px 0 10px 10px;

  &: nth-child(even) {
    border-right: 3px solid rgba(50, 225, 125, 1);
    border-left: 3px solid rgba(50, 225, 125, 1);
  } ;
`;
export const Td = styled.td`
  padding: 5px 0;
  text-align: center;

  &: nth-child(even) {
    border-right: 1px solid rgba(50, 225, 125, 1);
    border-left: 1px solid rgba(50, 225, 125, 1);
  } ;
`;
