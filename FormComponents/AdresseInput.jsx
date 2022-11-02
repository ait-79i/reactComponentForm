

const AdresseTextArea = (props) => {
  return (
    <div className='form-group'>
      <div className='row'>
        <label className='col-form-label col-sm-2 pt-0' htmlFor="add">Adresse:</label>
        <div className=" col-sm-10">
          <textarea className="form-control col-sm-10" cols='40' rows='2'
            placeholder='Tapez votre adresse ici...'
            id="add"
            onChange={(e) => props.setAdresse(e.target.value)}
          />
          {props.show && !props.valid(props.adresse) ? <p className="form-text  text-danger" >{props.adresse}</p> : <span></span>}
        </div>
      </div>
    </div>
  )
}
export default AdresseTextArea;