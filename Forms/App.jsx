import { useState } from 'react';

const App = () => {
  const [name, setName] = useState('')

  const [adresse, setAdresse] = useState('')

  const [sexe, setSexe] = useState('')

  const [V, setV] = useState('')

  const [submit, setSubmit] = useState(true)

  const [show, setShow] = useState(false)

  const villes = ['Select ur city !', 'Marrakech', 'Rabat', 'Casa Blanca', 'Tanger'];

  const [lois, setLois] = useState([false, false, false])

  const [Error, setError] = useState(
    {
      nom: [`La Nom doit etre saisie.`,
        `La Nom doit etre une chine de caractere`,
        `La longueur du nom doit entre :3 et 20`
      ],
      adresse: [`L'adresse doit etre saisie.`,
        `L'adresse doit etre une chine de caractere`,
        `La longueur de l'adresse doit entre :10 et 20`
      ],
      ville: ['Vous devez choisir la ville !!!'],
      sexe: ['Vous devez choisir le sexe !!!'],
    }
  )

  const GestionErreurs = () => {
    //             Le nom
    // if position problem 
    if (!isNaN(name)) setName(Error.nom[1]);
    if (name.length < 3 || name.length > 20) setName(Error.nom[2]);
    if (name.trim() === "") setName(Error.nom[0]);
    //            L'adresse
    if (!isNaN(adresse)) setAdresse(Error.adresse[1]);
    if (adresse.length < 10 || name.length > 20) setAdresse(Error.adresse[2]);
    if (adresse.trim() === "") setAdresse(Error.adresse[0]);
    //            Sex
    if (sexe.trim() === "") setSexe(Error.sexe[0]);
    //            Ville
    if (V.trim() === "") setV(Error.ville[0]);
  }

  const gendre = (e) => {
    setSexe(e.target.value)
  }

  const chosen = (e) => {

    var arr = lois.map((val, index) => {

      if (index === Number(e.target.id)) { return !val }
      else {
        return val
      }
    })
    setLois(arr);

  }
  const valid = (P) => {
    if (P.trim() !== '' && isNaN(P) && P.length > 3 && P.length < 20) {
      return true;
    } else {
      return false;
    }
  }

  const validateLois = (arr) => {
    if (arr[0] || arr[1] || arr[2] || (arr[0] && arr[1] && arr[2])) return true

    return false
  }
  const choices = (arr) => {
    const charr = [];
    if (arr[0]) charr.push('Info')
    if (arr[1]) charr.push('Sport')
    if (arr[2]) charr.push('Lecture')

    return charr;
  }

  return (
    submit ?
      <form onSubmit={(e) => e.preventDefault()} className="container">

        <div className="form-group" >
          <div className='row'>
            <label className='col-form-label col-sm-2 pt-0' htmlFor="student">Nom Etudient: </label>
            <div className='col-sm-10'>
              <input type="text" className="form-control" name="studentName" id="student" placeholder={'Votre nom ?'}
                onChange={e => setName(e.target.value)}
              />
              {show && !valid(name) ? <p className="form-text  text-danger" >{name}</p> : <></>}
            </div>
          </div>
        </div>

        <div className='form-group'>

          <div className='row'>
            <label className='col-form-label col-sm-2 pt-0' htmlFor="add">Adresse:</label>
            <div className=" col-sm-10">
              <textarea className="form-control col-sm-10" cols='40' rows='2'
                placeholder='Tapez votre adresse ici...'
                id="add"
                onChange={(e) => setAdresse(e.target.value)}
              />
              {show && !valid(adresse) ? <p className="form-text  text-danger" >{adresse}</p> : <></>}
            </div>
          </div>
        </div>


        <div className='form-group'>
          <div className="row">
            <legend className="col-form-label col-sm-2 pt-0">sexe:</legend>

            <div className='col-sm-10'>
              <div className="form-check">
                <label className="form-check-label" htmlFor="M">M</label>
                <input className="form-check-input" type="radio" name="sexe" value='Male' checked={sexe === 'Male'} onChange={(e) => gendre(e)} />
              </div>
              <div className="col-sm-10 form-check">
                <label className="form-check-label" htmlFor="F">F</label>
                <input className="form-check-input" type="radio" name="sexe" value='Female' checked={sexe === 'Female'} onChange={(e) => gendre(e)} />
              </div>
              {show && !valid(sexe) ? <p className="form-text  text-danger" style={{ color: 'red' }}>{sexe}</p> : <></>}</div>
          </div>
        </div>


        <div className='form-group'>
          <div className='row'>
            <label className='col-form-label col-sm-2 pt-0' htmlFor="">Loisirs:</label>
            <div className='col-sm-10'>
              <div className='row'>
                <div className='col-10'>
                  <input type="checkbox" name="loisir" value='info' checked={lois[0]} id={0} onChange={(e) => chosen(e)} />
                  <label className='ms-2'>info</label>
                </div>
                <div className='col-sm-10'>
                  <input type="checkbox" name="loisir" value='sport' checked={lois[1]} id={1} onChange={(e) => chosen(e)} />
                  <label className='ms-2'>sport</label>
                </div>
                <div className='col-sm-10'>
                  <input type="checkbox" name="loisir" value='lecture' checked={lois[2]} id={2} onChange={(e) => chosen(e)} />
                  <label className='ms-2'>lecture</label>
                </div>
                {show && !validateLois(lois) ? <p className="form-text  text-danger" style={{ color: 'red' }}>You have to choose a habit !!!</p> : <></>}
              </div>
            </div>
          </div>
        </div>

        <dir className='form-group'>
          <div className='row'>

            <label className='col-form-label col-sm-2 pt-0'>ville :</label>

            <div className="col-sm-10 ">
              <select className="form-control " onChange={(e) => {
                setV(e.target.value);
              }}>
                {villes.map((option, index) => {
                  return <option key={index + 1}
                    value={option}>{option}</option>
                })}

              </select>
              {show && !valid(V) ? <p className="form-text  text-danger" style={{ color: 'red' }}>{V}</p> : <></>}
            </div>
          </div>
        </dir>




        {/* inpit button */}
        <input className="btn btn-primary" type="button" value="Envoyer" onClick={() => {
          console.log(validateLois(lois));
          setShow(true);
          GestionErreurs();
          if (valid(name) & valid(adresse) && valid(sexe) && valid(V)) setSubmit(false)

        }}
        />

      </form>
      :
      <>
        <div>nom De stagiaire :<span style={{ color: 'blue' }}>{name}</span> </div>
        <div>sexe : <span style={{ color: 'blue' }}>{sexe}</span> </div>
        <div>Ville : <span style={{ color: 'blue' }}>{V}</span></div>
        <div>Adresse : <span style={{ color: 'blue' }}>{adresse}</span></div>
        <div>Loisirs : <span style={{ color: 'blue' }}>{choices(lois).join('-')}</span></div>
      </>
  )


}
export default App;