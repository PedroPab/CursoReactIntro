import React from 'react';

function UselocalStorage({ itemName, valueInit }) {
    const [item, setItem] = React.useState(valueInit)
    const [loading, setLoading] = React.useState(true)
    const [error, setError] = React.useState(false)

    React.useEffect(() => {
        try {

            let rta
            const itemLocal = localStorage.getItem(itemName)

            if (!itemLocal) {
                const itemRta = JSON.stringify(valueInit)
                localStorage.setItem(itemName, itemRta)
                rta = valueInit
                setItem(rta)
            }
            else {
                rta = JSON.parse(itemLocal)
                if (rta.length === 0) rta = valueInit
            }

            setLoading(false)
        } catch (error) {
            setError(true)
            setLoading(false)
        }
    })



    const updateItem = (newItem) => {
        const itemRta = JSON.stringify(newItem)
        localStorage.setItem(itemName, itemRta)
        setItem(newItem)
    }
    console.log(`rta hola`, item)

    return { item, updateItem, loading, error }
}

export { UselocalStorage }
