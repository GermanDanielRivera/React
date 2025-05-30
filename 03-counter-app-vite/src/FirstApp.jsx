import PropTypes from 'prop-types';

export const FirstApp = ({title, subTitle, name}) => {

  return ( 
    <>
        {/*<code>{JSON.stringify(newMessage)}</code>*/}
        <h1>{title}</h1>
        <p>{subTitle}</p>
        <p>{name}</p>
    </>
  )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.number.isRequired
}

FirstApp.defaultProps = {
    title: 'No hay título',
    subTitle: 'No hay Subtítulo',
    //name: 'German Rivera'
}


