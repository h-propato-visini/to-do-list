import React from "react"

function Desafios() {
    function findHandler(str) {
        const splitted = str.split(' ')

        // const result = splitted.filter(word => {
        //     return word[0] == '@'
        // })

        // return result[0]

        const result = splitted.find(word => {
            return word[0] == '@'
        })

        return result
    }

    findHandler('hola @Courseit_')
    return(
        <p>Chau</p>
    )
}



export default Desafios