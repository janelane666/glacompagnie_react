import React from 'react';

class PostalCode extends React.Component {
    componentDidMount() {
        let codePostal = 93100;
        const apiUrl = `https://vicopo.selfbuild.fr/cherche/${codePostal}`;
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => (this.city = data.cities[1].city));
    }

    render() {
        return <h1>{this.city}</h1>;
    }
}
export default PostalCode;

// // var codePostal = 77400;
// // let city = "Paris";

// //         fetch(`https://vicopo.selfbuild.fr/cherche/${codePostal}`).then(response => response.json())
// //     .then(r => {

// //         city = r.cities[1].city
// //         console.log("city: " + city)
// //         console.log(city)
// //         codePostal = 94200;
// //         return city
// //     });

// //     // getCity()

// //     return (
// //         <div>
// //         <button>Click</button>
// //             {city}
// //             {codePostal}
// //         </div>
// //     )
// }

// export default CodePostal
