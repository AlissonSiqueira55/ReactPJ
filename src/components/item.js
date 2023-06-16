import Proptypes from'prop-types'

function item({marca, ano_lancamento}) {
    return(
      <>
      <li>{marca} - {ano_lancamento}</li>
      </>
    )
}

item.proptypesp = {
    marca: Proptypes.string,
    ano_lancamento: Proptypes.number,
}

item.defaultProps={
    marca: 'faltou a marca'

}
export default item