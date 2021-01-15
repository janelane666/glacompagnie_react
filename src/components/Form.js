import React from 'react'
import "../form.css"

const Form = () => {
    return (
        <div>

            <form action="" id="form">

                <label for="nom">Nom</label>
                <input type="text" id="nom" placeholder="Insérez votre nom de famille" />

                <label for="prenom">Prénom</label>
                <input type="text" id="prenom" placeholder="Insérez votre prénom" />

                <label for=" date">Date de naissance</label>
                <input type="text" id="date" placeholder="Insérez votre date de naissance" />

                <label for="inputNum">Téléphone</label>
                <input type="text" pattern="^(?:0|\(?\+33\)?\s?|0033\s?)[1-79](?:[\.\-\s]?\d\d){4}$" id="inputNum" value=""
                    placeholder="Insérez votre numéro de télephone" />

                <label type="email">E-mail</label>
                <input type="email" id="email" placeholder="Insérez votre e-mail" />

                <button type="submit">Envoyer</button>
            </form>
        </div>
    )
}

export default Form
