
const SelectVille = (props) => {
  return (
    <dir className='form-group'>
      <div className='row'>

        <label className='col-form-label col-sm-2 pt-0'>ville :</label>

        <div className="col-sm-10 ">
          <select className="form-control " onChange={(e) => {
            props.setV(e.target.value);
          }}>
            {props.villes.map((option, index) => {
              return <option key={index + 1}
                value={option}>{option}</option>
            })}

          </select>
          {props.show && !props.valid(props.V) ? <p className="form-text  text-danger">{props.V}</p> : <span></span>}
        </div>
      </div>
    </dir>
  )

}
export default SelectVille;