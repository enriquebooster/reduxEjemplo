export class ConstantesClass {

  public IDCOMPRA = 'IDCOMPRA';

  constructor() {
  }

  public setSomeString(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  public getSomeString(key: string): string {
    return localStorage.getItem(key) as string;
  }

  public setSomeInt(key: string, value: number): void {
    localStorage.setItem(key, value.toString());
  }

  public getSomeInt(key: string): number {
    return parseInt(localStorage.getItem(key)  as string, 10 ) ;
  }

  public setSomeBoolean(key: string, value: boolean): void {
    localStorage.setItem(key,  value + '');
  }


  public removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  public  getSomeBoolean(key: string): boolean {
    if (localStorage.getItem(key)){
      // tslint:disable-next-line:triple-equals
      if (localStorage.getItem(key) == 'false'){
        return false;
      }
      // tslint:disable-next-line:triple-equals
      if (localStorage.getItem(key) == 'true'){
        return true;
      }
    }
    return  false;

  }


}
