import { IsEnum } from 'class-validator';
import { TopLevelCategoryEnum } from '../top-page.model';

export class FindTopPageDto {
  @IsEnum(TopLevelCategoryEnum)
  firstCategory: TopLevelCategoryEnum;
}
