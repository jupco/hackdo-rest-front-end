import Address from './Address'

class User {

  public id: string;
  public name: string;
  public lastName: string;
  public address: Address;
  public telephone: string;
  
  constructor(id: string, name: string, lastName: string, address: Address, telephone: string) {
    this.id = id
    this.name = name
    this.lastName = lastName
    this.address = address
    this.telephone = telephone
  }

  public setId(id: string) {
    this.id = id
    return this
  }

  public setName(name: string) {
    this.name = name
    return this
  }

  public setLastName(lastName: string) {
    this.lastName = lastName
    return this
  }

  public setAddress(address: Address) {
    this.address = address
    return this
  }

  public setTelephone(telephone: string) {
    this.telephone = telephone
    return this
  }
}

export default User