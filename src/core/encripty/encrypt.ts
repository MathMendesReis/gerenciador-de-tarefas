export interface Encrypt {
  hash(password:string):Promise<string>
  compare(text:string,hash:string):Promise<boolean>
}