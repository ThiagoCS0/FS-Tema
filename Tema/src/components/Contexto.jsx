import { useState, createContext } from "react";
export const ContextoTema = createContext({ tema: 'Claro', mudarTema: () => { } })

export const MeuFornecedor = (props) => {
	const [tema, defTema] = useState('Claro')
	const mudarTema = () => { defTema(atualTema => atualTema == 'Claro' ? 'Escuro' : 'Claro') }
	return (
		<ContextoTema.Provider value={{ tema, mudarTema }}>
			{props.children}
		</ContextoTema.Provider>)
}