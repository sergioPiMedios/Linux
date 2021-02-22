const activationFunction = (value: any) => {
    if (value > 0) {
        // indicamos que la neurona puede activarse
        return 1
    }

    // aqui la neurona no se activará
    return -1
}

const random = () => {
    const max = 1
    const min = -1
    return Math.random() * (max - min) + min
}

// los pesos deben estar asociados a la cantidad de entradas
const weights = [random(), random(), random(), random(), random(), random()]
// ritmo de aprendizaje pequeño para "acercarse" lentamente a la respuesta correcta
const learningRate = 0.5


const predict = (input: any) => {

    // ahora multiplicamos el peso corrrespondiente a cada elemento
    // esta va a ser la entrada que utilizará la neurona para procesar
    const weightedInput = []

    // la suma total de todos los pesos con las entradas
    let sum = 0
    // realizar la operación
    input.forEach((field: any, index: any) => {
        sum += field * weights[index];
    })
    return activationFunction(sum)
}


const train = (trainingData: any) => {
    trainingData.forEach((observation: any) => {
        // solo el input
        const input = observation.slice(0,6)
        // tomar la predicción inicial
        const guess = predict(input)
        // calcular el error (de forma muy básica, que tan "alejados" estamos)
        const error = observation[6] - guess

        for (let index = 0; index < weights.length; index++) {
            weights[index] += error * input[index] * learningRate
        }
    })
}

const service = {
    train,
    predict,
    weights,
}

export default service;

export {
    train,
    predict,
    weights,
}
