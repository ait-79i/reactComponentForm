const NameInput = (props) => {
  return (
    <div className="form-group" >
      <div className='row'>
        <label className='col-form-label col-sm-2 pt-0' htmlFor="student">Nom Etudient: </label>
        <div className='col-sm-10'>
          <input type="text" className="form-control" name="studentName" id="student" placeholder={'Votre nom ?'}
            onChange={e => props.setName(e.target.value)}
          />
          {props.show && !props.valid(props.name) ? <p className="form-text  text-danger" >{props.name}</p> : <span></span>}
        </div>
      </div>
    </div>
  )
}
export default NameInput;