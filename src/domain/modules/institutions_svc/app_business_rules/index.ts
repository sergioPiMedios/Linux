import red from './use_cases/analyze_data';

// Use cases
import { build as buildTrain } from './use_cases/train';
import { build as buildPredict } from './use_cases/predict';
import { XlsxWorkbookHandler } from '@fnd/helpers/xlsx_handler';


const train = buildTrain({
    XlsxHandler: XlsxWorkbookHandler,
    red,
});

const predict = buildPredict({
    red,
});

const service = {
    train,
    predict
}

export default service;

export {
    train,
    predict
}
