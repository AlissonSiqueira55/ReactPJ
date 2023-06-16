import item from "./item"

function list() {
        return(
            <>
         
         <h1>minha lista</h1>
         <ul>
                <item marca="ferrari" ano_lancamento={1985}/>
                <item marca="fiat"/>
                <item marca="renault"/>
                

                
            </ul>

            </>

        )
    }

    export default list