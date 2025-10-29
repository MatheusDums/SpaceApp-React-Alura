import styled from "styled-components"
import Imagem from "../Galeria/imagem"

const Overlay = styled.div`
    background-color: rgba(0, 0, 0, 0.7);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
`

const DialogEstilizado = styled.dialog`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60%;
    background: transparent;
    border: none;
    padding: 0;
    z-index: 1001;
`

const ContainerModal = styled.div`
    position: relative;
    width: 100%;
`
const BotaoFecharEstilizado = styled.button`
    position: absolute;
    top: 20px;
    right: 120px;
    background: transparent;
    color: white;
    font-size: 32px;
    font-weight: bold;
    border: none;
    cursor: pointer;
    z-index: 1002;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
    &:hover {
        color: #ff4444;
        transform: scale(1.1);
    }
`

const ModalZoom = ({ foto, aoFechar, aoAlternarFavorito }) => {
    return (<>
        {foto && <>
            <Overlay onClick={aoFechar} />
            <DialogEstilizado open={!!foto}>
                <ContainerModal>
                    <Imagem foto={foto} expandida={true} aoAlternarFavorito={aoAlternarFavorito} />
                    <BotaoFecharEstilizado onClick={aoFechar}>
                        X
                    </BotaoFecharEstilizado>
                </ContainerModal>
            </DialogEstilizado>
        </>}
    </>)
}

export default ModalZoom