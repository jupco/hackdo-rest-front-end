class ServiceError{

  public code: string;
  public message: string;

  constructor(code: string, message: string){
    this.code = code
    this.message = message
  }

  public setCode(code: string){
    this.code = code
    return this
  }

  public setMessage(message: string){
    this.message = message
    return this
  }
}

export default ServiceError