import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import './colaborador.css'

const Colaborador = ({ colaborador, corDeFundo, aoDeletar, aoFavoritar }) => {
  const propsFavorito = {
    cursor: 'pointer',
    size: 25,
    onClick: favoritar
  }

  function favoritar() {
    aoFavoritar(colaborador.id)
  }

  return (
    <div className="colaborador">
      <AiFillCloseCircle
        color="red"
        size={25}
        className="deletar"
        onClick={() => aoDeletar(colaborador.id)}
      />
      <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
        <img src={colaborador.imagem} alt={colaborador.nome} />
      </div>
      <div className="rodape">
        <h4>{colaborador.nome}</h4>
        <h5>{colaborador.cargo}</h5>
        <div className="favoritar">
          {colaborador.favorito ? (
            <AiFillHeart {...propsFavorito} color="red" />
          ) : (
            <AiOutlineHeart {...propsFavorito} />
          )}
        </div>
      </div>
    </div>
  )
}

export default Colaborador
