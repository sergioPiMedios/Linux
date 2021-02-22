import { Request, Response, NextFunction } from 'express';
import { getTime } from '@fnd/external_interfaces/datetime';

export default function filter(req: Request, res: Response, next: NextFunction) {
    const query: any = req.query;
    const mapFilter: any = {
        query: {
            _type: {
                $eq: "survey"
            }
        },
        _created_at: {},
        sort: {
            _created_at: "desc"
        }
    };
    for (const key in query) {
        switch (key) {
            case "ticket_id":
                mapFilter.query = {
                    $and: [
                        { ticket_id: { $contains: `${query[key]}` } },
                        {
                            _type: {
                                $eq: "survey"
                            }
                        }
                    ]
                }
                break;
            case "start":
            case "end":
                mapFilter._created_at[key] = getTime(query[key]);
            default:
                break;
        }
    }
    req.query.filter = mapFilter;
    next();
}
