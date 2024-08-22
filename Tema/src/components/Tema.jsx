import { useContext } from "react"
import { ContextoTema } from "./Contexto"

const TemaDaDiv = () => {
	const { tema, mudarTema } = useContext(ContextoTema)
	return (
		<div style={{
			color: tema == 'Escuro' ? '#FFF' : '#000',
			background: tema == 'Escuro' ? '#000' : '#AAA',
			padding: '20px', borderRadius: '4px', margin: '8px',
			display: 'flex', justifyContent: 'space-around', userSelect: 'none'
		}}>
			Tema utilizado - {tema}
			<button onClick={mudarTema}>Alterar Tema</button>
		</div>
	)
}
export default TemaDaDiv