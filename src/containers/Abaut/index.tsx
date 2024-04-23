import Title from '../../components/Title'
import Paragraph from '../../components/Paragraph'
import { GithubSection, Languages, SocialMedia } from './styles'

const Abaut = () => (
  <section>
    <Title fontSize={16}>Sobre</Title>
    <Paragraph type="secondary">
      Oiii eu sou o Rafael Almeida, desenvolvedor Full Stack Pyrhon e gestor de
      tecnologia e inovação!
    </Paragraph>
    <GithubSection>
      <img
        height="180em"
        src="https://github-readme-stats.vercel.app/api?username=ramagla&show_icons=true&theme=dracula&include_all_commits=true&count_private=true"
      />

      <img
        height="180em"
        src="https://github-readme-stats.vercel.app/api/top-langs/?username=ramagla&layout=compact&langs_count=7&theme=dracula"
      />
    </GithubSection>
    <Languages>
      <img
        alt="Rafa-Js"
        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg"
      />
      <img
        alt="Rafa-Ts"
        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-plain.svg"
      />
      <img
        alt="Rafa-React"
        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
      />
      <img
        alt="Rafa-HTML"
        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"
      />
      <img
        alt="Rafa-CSS"
        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"
      />
      <img
        alt="Rafa-Python"
        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
      />
      <img
        alt="Rafa-Python"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg"
      />
      <img
        alt="Rafa-Python"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"
      />
      <img
        alt="Rafa-PowerBi"
        src="https://logohistory.net/wp-content/uploads/2023/05/Power-BI-Logo-2013.png"
      />
    </Languages>
    <SocialMedia>
      <a href="https://github.com/ramagla" rel="noreferrer" target="blank">
        <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" />
      </a>
      <a
        href="https://instagram.com/rafael.almeida.33"
        rel="noreferrer"
        target="blank"
      >
        <img src="https://img.shields.io/badge/-Instagram-%23E4405F?style=for-the-badge&logo=instagram&logoColor=white" />
      </a>
      <a
        href="https://www.facebook.com/ramagla"
        target="_blank"
        rel="noreferrer"
      >
        <img src="https://img.shields.io/badge/Facebook-1877F2?style=for-the-badge&logo=facebook&logoColor=white" />
      </a>
      <a href="mailto:ramagla2@gmail.com" target="blank">
        <img src="https://img.shields.io/badge/-Gmail-%23333?style=for-the-badge&logo=gmail&logoColor=white" />
      </a>
      <a
        href="https://www.linkedin.com/in/dealmeida"
        rel="noreferrer"
        target="blank"
      >
        <img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" />
      </a>
    </SocialMedia>
  </section>
)

export default Abaut
