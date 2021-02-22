export interface IWrapper<TDom, TDal> {
    fromDomToDal(item: TDom): TDal;
    fromDalToDom(item: TDal): TDom
}