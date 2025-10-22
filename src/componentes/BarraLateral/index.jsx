import styled from "styled-components"

const BarraLateral = () => {
    const ListaEstilizada = styled.ul`
        list-style: none;
        padding: 0;
        margin: 0;
        width: 212px;
    `

    return ( 
        <aside>
            <nav>
                <ListaEstilizada>
                    <li>
                        <a href="#">Início</a>
                    </li>
                </ListaEstilizada>
            </nav>
        </aside>
    )
}

export default BarraLateral