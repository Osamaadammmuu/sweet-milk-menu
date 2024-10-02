import '../style/Land.scss';
//-------------------------------------------------
function Land() {
  return (
    <div className="Land">
      <div className='container'>
        <img className='img-land' src={require('../images/logo.png')} alt='Logo' width="230px" height="230px" />
      </div>
    </div>
  );
}
//-------------------------------------------------
export default Land;