import React from "react";

const Card = (props) => {
    const {name, email, id} = props
    return (
        <div className="tc bg-light-green dib br3 ma2 grow bw2 shadow-5">
            <img src={`https://robohash.org/${id}?50x50`} alt="robots" />
            <div>
                <h1>{name}</h1>
                <p>{email}</p>
            </div>
        </div>
    );
};

export default Card;
