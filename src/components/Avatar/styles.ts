//src/components/Avatar/styles.ts

import styled from 'styled-components'

interface AvatarProps {
  size?: string
}

export const ProfilePicture = styled.img<AvatarProps>`
  width: ${(props) => props.size || '128px'};
  height: ${(props) => props.size || '128px'};
  border-radius: 50%;
  margin-bottom: 24px;
  margin-left: 24px;
`
