import { DateTime } from 'luxon';

const getTime = (seconds: number) => {
    const dia = DateTime.fromMillis(seconds);
    return `${dia.year}-${dia.month}-${dia.day} ${dia.hour}:${dia.minute}:${dia.second}.${dia.millisecond}`
}

const service = {
    getTime
};
export default service;
export {
    getTime
};
