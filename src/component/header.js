import React from "react";

function Header({data, increment}) {
    console.log('header component render');

    return (
        <div>HEADER
            <br/>
            <code>{JSON.stringify(data)}</code>
            <br/>
            <br/>
            <button onClick={increment}>Header Click</button>
        </div>
    )
}

export default React.memo(Header);