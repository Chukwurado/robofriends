import React from "react";

import Card from "./Card";

const Card_List = ({ robots }) => {
    const cardsArray = robots.map((user, i) => (
        <Card
            key={i}
            id={robots[i].id}
            name={robots[i].name}
            email={robots[i].email}
        />
    ));
    return <div>{cardsArray}</div>;
};

export default Card_List;
