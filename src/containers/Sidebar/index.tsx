import Avatar from '../../components/Avatar'
import Paragraph from '../../components/Paragraph'
import Title from '../../components/Title'

import downloadIcon from '../../assets/icons/cv-icon.png'
import themeIcon from '../../assets/icons/theme-icon.svg'
import blogIcon from '../../assets/icons/blog-icon.svg'

import {
  Description,
  SidebarContainer,
  Button,
  ButtonStyled // <-- aqui está o novo botão correto
} from './styles'

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

      {/* Botão 1: Currículo */}
      <Button href="/files/curriculo.pdf" target="_blank">
        <img src={downloadIcon} alt="Baixar currículo" />
        Baixar CV
      </Button>

      {/* Botão 3: Blog */}
      <Button href="/blog">
        <img src={blogIcon} alt="Blog" />
        Acessar Blog
      </Button>

      {/* Botão 2: Trocar tema (agora com botão correto!) */}
      <ButtonStyled onClick={props.changeTheme} className="hidden">
        <img src={themeIcon} alt="Trocar tema" />
        Trocar tema
      </ButtonStyled>
    </SidebarContainer>
  </aside>
)

export default Sidebar
