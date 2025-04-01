const DarkTheme = {
  mainColor: '#fff',
  secondaryColor: '#000',
  backgroundColor: '#282a35',
  buttonBackgroundColor: '#fff',
  buttonBackgroundColor2: '#fff',
  edgeColor: '#c1c1c1',
  text: '#f1f1f1' // ✅ novo campo adicionado
}

export default DarkTheme

export type Theme = {
  mainColor: string
  secondaryColor: string
  backgroundColor: string
  buttonBackgroundColor: string
  buttonBackgroundColor2: string
  edgeColor: string
  text: string // ✅ adicione aqui também na tipagem
}
