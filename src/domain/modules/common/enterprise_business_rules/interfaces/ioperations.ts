export interface IRead<T> {

    getAll(url: string, opts?: any): Promise<T[]>;
    getOne(url: string, opts?: any): Promise<T | null>;    

}
export interface IWrite<T> {

    post(url: string, data: any, opts?: any) : Promise<T | null>
    patch(url: string, data: any, opts?: any) : Promise<T | null>
    put(url: string, data: any, opts?: any) : Promise<T | null>

}
export interface ICheckOptions {
    checkOptions(options?: any): any;
}