const build = ({
    XlsxHandler,
    red
}: any) => {

    const execute = async (fileData: any,) => {
        try {
            const dataFromXLSX: any[] = await getDataFromXlsx(fileData, "data");
            let training = [];
            for (let i = 0; i < dataFromXLSX.length; i++) {
                let row = []
                row.push(dataFromXLSX[i].CONCESION);
                row.push(dataFromXLSX[i].SELECCIONA);
                row.push(dataFromXLSX[i].COM_EST);
                row.push(dataFromXLSX[i].INT_HOR);
                row.push(dataFromXLSX[i].LABS);
                row.push(dataFromXLSX[i].DENSIDAD);
                row.push(dataFromXLSX[i].TOTAL);
                training.push(row);
            }
            red.train(training);
            let total=0;
            for (let i = 0; i < red.weights.length; i++) {
                total += red.weights[i]/100;
            }
            red.weights[0] = red.weights[0]/total;
            red.weights[1] = red.weights[1]/total;
            red.weights[2] = red.weights[2]/total;
            red.weights[3] = red.weights[3]/total;
            red.weights[4] = red.weights[4]/total;
            red.weights[5] = red.weights[5]/total;
            const res = {
                concesion: (red.weights[0]).toFixed(2) + '%',
                realiza_seleccion: (red.weights[1]).toFixed(2) + '%',
                estudiantes_por_computador: (red.weights[2]).toFixed(2) + '%',
                intensidad_horaria_semanal: (red.weights[3]).toFixed(2) + '%',
                estudiantes_por_laboratorio: (red.weights[4]).toFixed(2) + '%',
                densidad_en_aula: (red.weights[5]).toFixed(2) + '%' ,
            }
            return res;
        } catch (error) {
            throw error;
        }

    }

    function getDataFromXlsx(fileData: any, sheetname: string): string[] {
        try {
            const xlsxBook = new XlsxHandler();
            xlsxBook.readBuffer(fileData.buffer);
            const sheet = xlsxBook.getSheet(sheetname);
            if (!sheet) {
                throw new Error(`Invalid format excel file, sheet name must be: ${sheetname}`);
            }
            const data: string[] = xlsxBook.convertSheetInJSON(sheet);
            return data;
        } catch (error) {
            throw error;
        }
    }

    return execute

}

export {
    build
}