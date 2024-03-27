import { FiPlus, FiX } from 'react-icons/fi'

import { Container } from './styles'

// Aqui recebemos uma propriedade chamada isNew para sabermos qual dos 2 tipos de estetilização que o Input irá receber.
export function NoteItem({ isNew, value, onClick, ...rest }) {
   return (
      <Container isNew={isNew}>
         <input
            type="text"
            value={value}
            readOnly={!isNew}

            {...rest}
         />

         <button
            type='button'
            onClick={onClick}
            className={isNew ? "button-add" : 'button-delete'}
         >

            {isNew ? <FiPlus /> : <FiX />}
         </button>
      </Container>
   );
}