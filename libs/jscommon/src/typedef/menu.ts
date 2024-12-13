import { BaseLink } from './typedef.common';

export type MenuItem = BaseLink & {
  id: number;
  // icon?: IconDefinition;
  subMenu?: MenuItem[];
};
