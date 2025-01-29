import { Prop, Schema } from '@nestjs/mongoose';

@Schema()
export class AuthModel {
  @Prop({ unique: true })
  email: string;

  @Prop()
  passwordHash: string;
}
