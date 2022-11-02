import { useState } from 'react';
import AdresseTextArea from './AdresseInput';
import CheckBoxBtns from './CheckBoxBtns';
import NameInput from './InputName';
import RadioBtns from './RadioBtns';
import SelectVille from './SelectVille';

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
      if (index === Number(e.target.id)) return !val
      return val
    })
    setLois(arr);
  }

  const valid = (P) => {
    if (P.trim() !== '' && isNaN(P) && P.length > 3 && P.length < 20) return true
    return false
  }

  const validateLois = (arr) => {
    if (arr[0] || arr[1] || arr[2] || (arr[0] && arr[1] && arr[2])) return true
    return false
  }

  const choices = (arr) => {
    const newArr = [];
    if (arr[0]) newArr.push('Info')
    if (arr[1]) newArr.push('Sport')
    if (arr[2]) newArr.push('Lecture')
    return newArr;
  }

  return (
    submit ?
      <form onSubmit={(e) => e.preventDefault()} className="container">

        <NameInput
          name={name}
          setName={setName}
          valid={valid}
          show={show}
        />

        <AdresseTextArea
          adresse={adresse}
          setAdresse={setAdresse}
          show={show}
          valid={valid}
        />

        <RadioBtns
          sexe={sexe}
          gendre={gendre}
          show={show}
          valid={valid}
        />

        <CheckBoxBtns
          lois={lois}
          chosen={chosen}
          show={show}
          validateLois={validateLois}
        />

        <SelectVille
          V={V}
          setV={setV}
          villes={villes}
          show={show}
          valid={valid}
        />

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

      <div className='Container m-5'>
        <div>nom de stagiaire :
          <span className='text-success'> {name}</span>
        </div>
        <div>sexe :
          <span className='text-success'> {sexe}</span>
        </div>
        <div>Ville :
          <span className='text-success'> {V}</span>
        </div>
        <div>Adresse :
          <span className='text-success'> {adresse}</span>
        </div>
        <div>Loisirs :
          <span className='text-success'> {choices(lois).join('-')}</span>
        </div>
      </div>
  )
}

export default App;