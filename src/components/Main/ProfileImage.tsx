import styled from '@emotion/styled'
import { FunctionComponent } from 'react'

const MY_GITHUB_PROFILE = 'https://github.com/seungrokyoon.png'

const ProfileImageWrapper = styled.img`
  width: 120px;
  height: 120px;
  margin-bottom: 30px;
  border-radius: 50%;
`

const ProfileImage: FunctionComponent = function () {
  return <ProfileImageWrapper src={MY_GITHUB_PROFILE} alt="Profile Image" />
}

export default ProfileImage
