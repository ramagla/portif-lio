// src/components/Avatar/index.tsx

import React from 'react'
import { ProfilePicture } from './styles'

interface AvatarProps {
  src: string
}

const Avatar: React.FC<AvatarProps> = ({ src }) => <ProfilePicture src={src} />

export default Avatar

// import { ProfilePicture } from './styles'

// const Avatar = () => <ProfilePicture src="https://github.com/ramagla.png" />

// export default Avatar
