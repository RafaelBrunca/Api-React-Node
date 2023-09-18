export const roupas = {
    async listarRoupas() {
        try {
            const response = await fetch('http://localhost:3050/roupas', { //pega as roupas do back-end
                method:'GET',
                headers:{
                    'Content-type': 'application/json'
                }
            })
            console.log(response)
        } catch (error) {
            console.log('Erro encontrado: ', error)
        }
    }
}