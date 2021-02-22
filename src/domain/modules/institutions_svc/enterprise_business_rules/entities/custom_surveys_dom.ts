import { ErrorBadRequest } from "@common/enterprise_business_rules/dto/errors/bad_request";

interface IInstitutionsurvey {
    id: string;
    type: string;
    attributes: {
        ticketId: string;
        ticketTags: string;
        ticketDescription: string;
        ticketGroup: string;
        ticketBrand: string;
        requesterName: string;
        requesterEmail: string;
        requesterLanguage: string;
        ticketState?: string;
        firstQuestion: number;
        secondQuestion: number;
        thirdQuestion: number;
        fourthQuestion: number;
        fifthQuestion: number;
        sixthQuestion: number;
    };
    createdAt: Date;
    updatedAt: Date;
}
export class InstitutionsDOM implements IInstitutionsurvey {

    id: string;
    type: string;
    attributes: {
        ticketId: string;
        ticketTags: string;
        ticketDescription: string;
        ticketGroup: string;
        ticketBrand: string;
        requesterName: string;
        requesterEmail: string;
        requesterLanguage: string;
        ticketState?: string;
        firstQuestion: number;
        secondQuestion: number;
        thirdQuestion: number;
        fourthQuestion: number;
        fifthQuestion: number;
        sixthQuestion: number;
    };
    createdAt: Date;
    updatedAt: Date;

    constructor(item: IInstitutionsurvey) {
        this.type = item.type
        this.id = item.id
        this.attributes = {
            ticketId: item.attributes.ticketId,
            ticketTags: item.attributes.ticketTags,
            ticketDescription: item.attributes.ticketDescription,
            ticketGroup: item.attributes.ticketGroup,
            ticketBrand: item.attributes.ticketBrand,
            requesterName: item.attributes.requesterName,
            requesterEmail: item.attributes.requesterEmail,
            requesterLanguage: item.attributes.requesterLanguage,
            ticketState: item.attributes.ticketState,
            firstQuestion: item.attributes.firstQuestion,
            secondQuestion: item.attributes.secondQuestion,
            thirdQuestion: item.attributes.thirdQuestion,
            fourthQuestion: item.attributes.fourthQuestion,
            fifthQuestion: item.attributes.fifthQuestion,
            sixthQuestion: item.attributes.sixthQuestion
        };
        this.createdAt = item.createdAt
        this.updatedAt = item.updatedAt
    }

}

const QUESTIONS = [
    "firstQuestion",
    "secondQuestion",
    "thirdQuestion",
    "fourthQuestion",
    "fifthQuestion",
    "sixthQuestion"
]


const build = ({
    idGen,
    validatorId,
}: any) => {

    const execute = (item: any) => {
        const entity = new InstitutionsDOM(validateData(item));
        return Object.freeze(entity);
    }

    const validateData = (item: IInstitutionsurvey) => {
        /**Validate ID's */
        if (!item.id) item.id = idGen()
        else validateId(item.id, "id");
        /**Charge defaults values to questions */
        loadDefaultQuestionsValue(item)             
        return item
    }

    const validateId = (id: any, resource: string): any => {
        if (!validatorId(id)) throw new ErrorBadRequest(`${resource} not valid`)
    }

    const loadDefaultQuestionsValue = (item: any) => {
        QUESTIONS.forEach(question => {
            if (!item[question]) {
                item[question] = 0                
            }
        });             
    }

    return execute
}

export {
    build
}

