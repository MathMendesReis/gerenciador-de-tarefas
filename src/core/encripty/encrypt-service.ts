import type { Encrypt } from "./encrypt";
import bcrypt from 'bcrypt'

export class EncryptService implements Encrypt {
  async hash(text: string): Promise<string> {
    return await bcrypt.hash(text, 10)
  }
  async compare(text: string, hash: string): Promise<boolean> {
    return await bcrypt.compare(text, hash)

  }
}