import { Container } from './styles';

// o rest, significa que esse component pode receber todos os parâmetros existentes  na classe button, e consequentemente esse ...rest permite que coloquemos qualquer outro tipo de parâmetro não préviamente específicado dentro do componente.
export function ButtonText({ title, ...rest }) {
   return (
      <Container
         type="button"
         {...rest}
      >
         {title}
      </Container>
   );
}