import React from 'react';

function UselocalStorage({ itemName, valueInit }) {
    let rta
    const itemLocal = localStorage.getItem(itemName)

    if (!itemLocal ) {
        const itemRta = JSON.stringify(valueInit)
        localStorage.setItem(itemName, itemRta)
        rta = valueInit
    }
    else {
        rta = JSON.parse(itemLocal)
        if (rta.length === 0) rta = valueInit
    }

    const [item, setItem] = React.useState(rta)

    const updateItem = (newItem) => {
        const itemRta = JSON.stringify(newItem)
        localStorage.setItem(itemName, itemRta)
        setItem(newItem)
    }
    return [item, updateItem]
}

export { UselocalStorage }
