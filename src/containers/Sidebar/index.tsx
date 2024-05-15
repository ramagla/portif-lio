import Avatar from '../../components/Avatar'
import Paragraph from '../../components/Paragraph'
import Title from '../../components/Title'

import { Description, SidebarContainer, Button } from './styles'

type Props = {
  changeTheme: () => void
}

const Sidebar = (props: Props) => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Title fontSize={20}>Rafael de Almeida</Title>
      <Paragraph type="secondary" fontSize={16}>
        ramagla
      </Paragraph>
      <Description type="main" fontSize={16}>
        Engenheiro front-end
      </Description>
      <Button href="/files/curriculo.pdf" target="_blank">
        Baixar Currículo
      </Button>
      <Button onClick={props.changeTheme}>Trocar tema</Button>
    </SidebarContainer>
  </aside>
)

export default Sidebar
