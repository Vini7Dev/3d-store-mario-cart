import { BsBag, BsSearch } from 'react-icons/bs'

import { Container, ContainerIcons, Logo } from "./styles";

const LOGO_URL = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1bfa4bc4-c814-4063-a05b-edbe700c5ba2/demy9lo-be374f5f-180b-473a-8ca6-666bb5474abe.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzFiZmE0YmM0LWM4MTQtNDA2My1hMDViLWVkYmU3MDBjNWJhMlwvZGVteTlsby1iZTM3NGY1Zi0xODBiLTQ3M2EtOGNhNi02NjZiYjU0NzRhYmUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.D2UMfaNVw5EblDdc_fQWQZD2hQFsPf-l5yC4Ue7hAYg'

const Header = () => {
  return (
    <Container>
      <Logo src={LOGO_URL} />

      <ContainerIcons>
        <BsSearch size={25} color="whitesmoke" />
        <BsBag size={25} color="whitesmoke" />
      </ContainerIcons>
    </Container>
  )
}

export default Header;