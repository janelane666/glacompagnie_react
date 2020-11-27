import React from 'react'

const Glacons = ({ glacons }) => {
    return (
        <div>
            <center><h1>Glaçons List</h1></center>
            {glacons.map((glacon) => (
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">{glacon.name}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">{glacon.price}</h6>
                        <p class="card-text">{glacon.description}</p>
                        <p class="card-text">{glacon.quantity}</p>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default Glacons