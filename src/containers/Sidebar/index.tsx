import Avatar from '../../components/Avatar'
import Paragraph from '../../components/Paragraph'
import Title from '../../components/Title'

import themeIcon from '../../assets/icons/theme-icon.svg'

import { Description, SidebarContainer, ButtonStyled } from './styles'

type Props = {
  changeTheme: () => void
}

const Sidebar = (props: Props) => (
  <aside>
    <SidebarContainer>
      <Avatar src="https://github.com/ramagla.png" />
      <Title fontSize={20}>Rafael de Almeida</Title>
      <Paragraph type="secondary" fontSize={16}>
        ______
      </Paragraph>

      <Description type="main" fontSize={16}>
        Desenvolvedor FullStack
      </Description>

      <ButtonStyled onClick={props.changeTheme} className="hidden">
        <img src={themeIcon} alt="Trocar tema" />
        Trocar tema
      </ButtonStyled>
    </SidebarContainer>
  </aside>
)

export default Sidebar
