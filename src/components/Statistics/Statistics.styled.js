import styled from 'styled-components';
export const Section = styled.section`
  margin: 80px auto;
  padding-top: 30px;
  text-align: center;
  width: 400px;
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
`;

export const Title = styled.h2`
  font-size: 32px;
  margin-bottom: 30px;
`;

export const List = styled.ul`
  margin: 0 auto;
  display: flex;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  background-color: ${({ color }) => color};
`;

export const Label = styled.span`
  font-size: 16px;
`;

export const Percentage = styled.span`
  font-size: 20px;
  font-weight: 500;
`;
