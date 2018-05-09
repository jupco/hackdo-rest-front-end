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
}