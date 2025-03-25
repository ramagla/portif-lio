import { GithubSection, Languages, SocialMedia } from './styles'
import { P } from '../../components/Paragraph/styles'
import Icon from '../../components/Icon' // Importando componente de ícone

const Abaut = () => (
  <section>
    <P>
      <div>
        <h2>Gestor de Projetos de TI | Desenvolvedor Full Stack Python</h2>
        <br />
        Olá! Sou o Rafael Almeida, especialista em liderar projetos de
        tecnologia que transformam processos e geram valor. Com sólida
        experiência em desenvolvimento Full Stack (Python, Django, React),
        automação, análise de dados e infraestrutura, atuo como ponte entre as
        necessidades do negócio e soluções inovadoras. Vamos juntos impulsionar
        resultados com tecnologia!
      </div>
    </P>

    <GithubSection>
      <Icon
        src="https://github-readme-stats.vercel.app/api?username=ramagla&show_icons=true&theme=dracula&include_all_commits=true&count_private=true"
        alt="GitHub Stats"
      />
      <Icon
        src="https://github-readme-stats.vercel.app/api/top-langs/?username=ramagla&layout=compact&langs_count=7&theme=dracula"
        alt="Top Languages"
      />
    </GithubSection>
    <Languages>
      <Icon
        alt="Rafa-Js"
        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg"
      />
      <Icon
        alt="Rafa-Ts"
        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-plain.svg"
      />
      <Icon
        alt="Rafa-React"
        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
      />
      <Icon
        alt="Rafa-HTML"
        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"
      />
      <Icon
        alt="Rafa-CSS"
        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"
      />
      <Icon
        alt="Rafa-Python"
        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
      />
      <Icon
        alt="Rafa-Bootstrap"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg"
      />
      <Icon
        alt="Rafa-Figma"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"
      />
      <Icon
        alt="Rafa-Redux"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg"
      />
      <Icon
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
        href="https://www.linkedin.com/in/dealmeidasilva"
        rel="noreferrer"
        target="blank"
      >
        <img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" />
      </a>
    </SocialMedia>
  </section>
)

export default Abaut
