import styled from 'styled-components'

type BadgeProps = {
  type: 'AWS + Django' | 'PowerBI' | 'React + Styled Components'
}

const StyledBadge = styled.span<{ type: BadgeProps['type'] }>`
  display: inline-block;
  background-color: ${({ type }) =>
    type === 'AWS + Django'
      ? '#FF9900' // laranja da AWS
      : type === 'PowerBI'
        ? '#F2C811' // amarelo Power BI
        : '#61DAFB'}; // azul claro do React
  color: ${({ type }) =>
    type === 'React + Styled Components' ? '#000' : '#fff'};
  font-size: 12px;
  font-weight: bold;
  padding: 4px 10px;
  border-radius: 20px;
  margin: 8px 0;
  transition: all 0.3s ease-in-out;
  transform: scale(1);

  &:hover {
    transform: scale(1.05);
    opacity: 0.9;
  }
`

const Badge = ({ type }: BadgeProps) => {
  return <StyledBadge type={type}>{type}</StyledBadge>
}

export default Badge
