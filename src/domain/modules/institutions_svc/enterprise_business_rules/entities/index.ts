import { idGen, validatorIds } from '@fnd/external_interfaces/uuid_factory';
import { build as buildMakeCustomSurvey } from './custom_surveys_dom';

const validators = {
    validatorIds,
};

const makeCustomSurvey = buildMakeCustomSurvey({
    idGen,
    validatorIds,
});

const service = {
    makeCustomSurvey,
};
export default service;
export {
    makeCustomSurvey,
};
