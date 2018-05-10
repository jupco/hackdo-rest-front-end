import Box from './Box'
import User from './User'

class Package {

  public owner: User;
  public box: Box;
  public status: string;

  constructor(owner: User, box: Box, status: string){
    this.owner = owner
    this.box = box
    this.status = status
  }


  public setOwner(u: User) {
    this.owner = u
    return this
  }
  public setBox(b: Box) {
    this.box = b
    return this
  }
  public setStatus(status: string) {
    this.status = status
    return this
  }

}

export default Package
