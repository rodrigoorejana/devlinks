import styled from "styled-components"
import { GlobalStyle } from "./styles/global"
import { links } from "./data/links"
import { LinkCard } from "./components/LinkCard"

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

function App() {
  return (
    <>
      <GlobalStyle />

      <Container>
        <h1>Rodrigo Orejana</h1>

        {links.map(link => (
          <LinkCard
            key={link.name}
            name={link.name}
            url={link.url}
          />
        ))}
      </Container>
    </>
  )
}

export default App