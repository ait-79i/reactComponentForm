const CheckBoxBtns = (props) => {
  return (
    <div className='form-group'>
      <div className='row'>
        <label className='col-form-label col-sm-2 pt-0' htmlFor="">Loisirs:</label>
        <div className='col-sm-10'>
          <div className='row'>
            <div className='col-10'>
              <input type="checkbox" name="loisir" value='info' checked={props.lois[0]} id={0} onChange={(e) => props.chosen(e)} />
              <label className='ms-2'>info</label>
            </div>
            <div className='col-sm-10'>
              <input type="checkbox" name="loisir" value='sport' checked={props.lois[1]} id={1} onChange={(e) => props.chosen(e)} />
              <label className='ms-2'>sport</label>
            </div>
            <div className='col-sm-10'>
              <input type="checkbox" name="loisir" value='lecture' checked={props.lois[2]} id={2} onChange={(e) => props.chosen(e)} />
              <label className='ms-2'>lecture</label>
            </div>
            {props.show && !props.validateLois(props.lois) ? <p className="form-text  text-danger">You have to choose a habit !!!</p> : <span></span>}
          </div>
        </div>
      </div>
    </div>

  )
}
export default CheckBoxBtns;