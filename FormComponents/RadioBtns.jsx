const RadioBtns = (props) => {
  return (
    <div className='form-group'>
      <div className="row">
        <legend className="col-form-label col-sm-2 pt-0">sexe:</legend>

        <div className='col-sm-10'>
          <div className="form-check">
            <label className="form-check-label" htmlFor="M">M</label>
            <input className="form-check-input" type="radio" name="sexe" value='Male' checked={props.sexe === 'Male'} onChange={(e) => props.gendre(e)} />
          </div>
          <div className="col-sm-10 form-check">
            <label className="form-check-label" htmlFor="F">F</label>
            <input className="form-check-input" type="radio" name="sexe" value='Female' checked={props.sexe === 'Female'} onChange={(e) => props.gendre(e)} />
          </div>
          {props.show && !props.valid(props.sexe) ? <p className="form-text  text-danger" >{props.sexe}</p> : <span></span>}
        </div>
      </div>
    </div>
  )
}

export default RadioBtns;
