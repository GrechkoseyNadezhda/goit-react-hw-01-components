import styled from 'styled-components';

export const Wrap = styled.div`
  width: 270px;
  padding-top: 15px;
  margin: 0 auto;
  border-radius: 10px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 1), -23px 0 20px -23px rgba(0, 0, 0, 0.8),
    23px 0 20px -23px rgba(0, 0, 0, 0.8), 0 0 40px rgba(0, 0, 0, 0.1) inset;
  background: rgba(89, 239, 239, 0.15);
  transition-property: background;
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background: rgba(89, 239, 239, 0.5);
  }
`;

export const Description = styled.div`
  margin: 0 auto;
  margin-bottom: 25px;
  text-align: center;
`;
export const Avatar = styled.img`
  margin: 0 auto;
  margin-bottom: 15px;
  width: 150px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.5),
    -23px 0 20px -23px rgba(0, 0, 0, 0.8), 23px 0 20px -23px rgba(0, 0, 0, 0.8),
    0 0 40px rgba(0, 0, 0, 0.1) inset;
  border-radius: 50%;
  background: white;
  transition-property: background;
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  ${Wrap}:hover & {
    background: rgba(110, 125, 125, 0.4);
  }
`;
export const Username = styled.p`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const Tag = styled.p`
  font-size: 18px;
`;

export const Location = styled.p`
  font-size: 18px;
`;

export const Stats = styled.ul`
  display: flex;
  background: rgba(110, 125, 125, 0.4);
`;

export const Item = styled.li`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  width: 90px;
`;

export const Label = styled.span`
  display: flex;
  flex-direction: column;
  font-size: 16px;
`;

export const Quantity = styled.span`
  font-size: 18px;
  font-weight: bold;
`;
