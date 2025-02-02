import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export enum TopLevelCategoryEnum {
  Courses,
  Services,
  Books,
  Products,
}

export class HhDataModel {
  @Prop()
  count: number;

  @Prop()
  juniorSalary: number;

  @Prop()
  middleSalary: number;

  @Prop()
  seniorSalary: number;

  @Prop()
  updatedAt: Date;
}

export class AdvantageModel {
  @Prop()
  title: string;

  @Prop()
  description: string;
}

@Schema()
export class TopPageModel {
  @Prop({ enum: TopLevelCategoryEnum })
  firstCategory: TopLevelCategoryEnum;

  @Prop()
  secondCategory: string;

  @Prop({ unique: true })
  alias: string;

  @Prop()
  title: string;

  @Prop()
  category: string;

  @Prop({ type: () => HhDataModel })
  hh?: HhDataModel;

  @Prop({ type: () => [AdvantageModel] })
  advantages: AdvantageModel[];

  @Prop()
  seoText: string;

  @Prop()
  tagsTitle: string;

  @Prop()
  tags: string[];
}

export const TopPageSchema = SchemaFactory.createForClass(TopPageModel);
export type TopPageDocument = HydratedDocument<TopPageModel>;

TopPageSchema.index({ '$**': 'text' });
