class Box {
  public length: number;
  public width: number;
  public height: number;
  public weight: number;

  constructor(lenght: number, width: number, height: number, weight: number) {
    this.length = lenght
    this.width = width
    this.height = height
    this.weight = weight
  }

  public setLength(n: number){
    this.length = n
    return this
  }
  public setWidth(n: number){
    this.width = n
    return this
  }
  public setHeight(n: number){
    this.height = n
    return this
  }
  public setWeight(n: number){
    this.weight = n
    return this
  }
}

export default Box