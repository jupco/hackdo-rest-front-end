class Address {

  public primarySegmentType: string;
  public firstField: string;
  public secondarySegmentType: string;
  public secondField: string;

  constructor(primarySegmentType: string, firstField: string, secondarySegmentType: string, secondField: string) {
    this.primarySegmentType = primarySegmentType
    this.firstField = firstField
    this.secondarySegmentType = secondarySegmentType
    this.secondField = secondField
  }

  public setPrimarySegmentType(str: string){
    this.primarySegmentType = str
    return this
  }
  public setFirstField(str: string){
    this.firstField = str
    return this
  }
  public setSecondarySegmentType(str: string){
    this.secondarySegmentType = str
    return this
  }
  public setSecondField(str: string){
    this.secondField = str
    return this
  }
}

export default Address