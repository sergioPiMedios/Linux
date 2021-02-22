import { InstitutionsApi } from 'domain/modules/institutions_svc/enterprise_business_rules/dto/custom_surveys_api';
import { InstitutionsDOM } from 'domain/modules/institutions_svc/enterprise_business_rules/entities/custom_surveys_dom';
import { IMapperAPI } from '@common/interface_adapters/web/controllers/bases/imapperapi';

class InstitutionsMapper implements IMapperAPI<InstitutionsDOM, InstitutionsApi> {

    fromApiToDom(item: any, opts?: any) {
        const object = new InstitutionsDOM(item);
        return object;
    }

    fromDomToApi(item: any, opts?: any) {
        const object = new InstitutionsApi({
            id: item.id,
            type: item.type,
            ticket_id: item.attributes.ticketId,
            ticket_description: item.attributes.ticketDescription,
            ticket_group: item.attributes.ticketGroup,
            ticket_brand: item.attributes.ticketBrand,
            requester_name: item.attributes.requesterName,
            requester_email: item.attributes.requesterEmail,
            requester_language: item.attributes.requesterLanguage,
            ticket_state: item.attributes.ticketTags,
            ticket_tags: item.attributes.ticketState,
            first_question: item.attributes.firstQuestion,
            second_question: item.attributes.secondQuestion,
            third_question: item.attributes.thirdQuestion,
            fourth_question: item.attributes.fourthQuestion,
            fifth_question: item.attributes.fifthQuestion,
            sixth_question: item.attributes.sixthQuestion,
            created_at: item.createdAt,
            updated_at: item.updatedAt
        });
        return object;
    }

}

const institutionsMapper = new InstitutionsMapper();

export { institutionsMapper };
