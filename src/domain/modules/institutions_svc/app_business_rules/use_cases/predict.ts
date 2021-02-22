const build = ({
    red
}: any) => {

    const execute = async (pesos: any) => {
        try {         
            console.log('==========================');
            console.log(pesos);  
            const input = [
                pesos.concesion,
                pesos.realiza_seleccion,
                pesos.estudiantes_por_computador,
                pesos.intensidad_horaria_semanal,
                pesos.estudiantes_por_laboratorio,
                pesos.densidad_en_aula,
            ]
            let result = 0;
            for (let i = 0; i < input.length; i++) {
                result += input[i]*red.weights[i];                
            }
            return {res: (result/100)}
        } catch (error) {
            throw error;
        }

    }

    return execute

}

export {
    build
}