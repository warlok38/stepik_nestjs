import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

class ProductCharacteristic {
  @Prop()
  name: string;

  @Prop()
  value: string;
}

@Schema()
export class ProductModel {
  @Prop()
  image: string;

  @Prop()
  title: string;

  @Prop()
  price: number;

  @Prop()
  oldPrice?: number;

  @Prop()
  credit: number;

  @Prop()
  description: string;

  @Prop()
  advantages: string;

  @Prop()
  disAdvantages: string;

  @Prop()
  categories: string[];

  @Prop()
  tags: string[];

  @Prop({ type: () => [ProductCharacteristic], _id: false })
  characteristics: ProductCharacteristic[];
}

export const ProductSchema = SchemaFactory.createForClass(ProductModel);
export type ProductDocument = HydratedDocument<ProductModel>;
