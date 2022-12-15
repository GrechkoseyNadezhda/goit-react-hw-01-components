import styled from 'styled-components';

export const Item = styled.li`
  box-shadow: 0 1px 4px rgba(0, 0, 0, 1), -23px 0 20px -23px rgba(0, 0, 0, 0.8),
    23px 0 20px -23px rgba(0, 0, 0, 0.8), 0 0 40px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  background: rgba(253, 163, 230, 0.1);
  padding: 15px 0 15px 25px;
  display: flex;
  align-items: center;
  gap: 25px;
  transition-property: background;
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background: rgba(253, 163, 230, 0.3);
  }
`;
export const Status = styled.span`
  width: 16px;
  height: 16px;
  background-color: ${({ status }) => (status ? '#ed3588' : '#25d45b')};
  border-radius: 50%;
  transition-property: transform;
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  ${Item}:hover & {
    transform: scale(1.3);
  }
`;
export const Avatar = styled.img`
  width: 56px;
  height: 56px;
`;

export const Name = styled.p`
  font-size: 32px;
  font-weight: 600;
`;
