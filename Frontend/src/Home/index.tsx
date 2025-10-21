import { HomeContainer, Header, Main } from "./styles"
import { CardForm } from "../components/CardForm"
import { Cards } from "../components/Cards"

export function Home() {
  return (
    <HomeContainer>
      <Header>
        <h1>Meus lembretes</h1>
      </Header>

      <Main>
        <CardForm />

        <span className="sub-title">Lista de lembretes</span>

        <Cards />
      </Main>
    </HomeContainer>
  )
}
