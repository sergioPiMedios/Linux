export class InstitutionsApi {

    id?: string;
    type: string;
    attributes: {
        ticket_id: string;
        ticket_tags: string;
        ticket_description: string;
        ticket_group: string;
        ticket_brand: string;
        requester_name: string;
        requester_email: string;
        requester_language: string;
        ticket_state: string;
        first_question: number;
        second_question: number;
        third_question: number;
        fourth_question: number;
        fifth_question: number;
        sixth_question: number;
    };
    created_at?: Date;
    updated_at?: Date;

    constructor(item: any) {
        this.id = item.id;
        this.type = item.type;
        this.attributes = {
            ticket_id: item.ticket_id,
            ticket_tags: item.ticket_tags,
            ticket_description: item.ticket_description,
            ticket_group: item.ticket_group,
            ticket_brand: item.ticket_brand,
            requester_name: item.requester_name,
            requester_email: item.requester_email,
            requester_language: item.requester_language,
            ticket_state: item.ticket_state,
            first_question: item.first_question || 0,
            second_question: item.second_question || 0,
            third_question: item.third_question || 0,
            fourth_question: item.fourth_question || 0,
            fifth_question: item.fifth_question || 0,
            sixth_question: item.sixth_question || 0,
        }
        this.created_at = item.created_at;
        this.updated_at = item.updated_at;
    }
}
