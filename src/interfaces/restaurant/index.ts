import { TableInterface } from 'interfaces/table';
import { UserInterface } from 'interfaces/user';

export interface RestaurantInterface {
  id?: string;
  name: string;
  description?: string;
  image?: string;
  created_at?: Date;
  updated_at?: Date;
  user_id: string;
  table?: TableInterface[];
  user?: UserInterface;
  _count?: {
    table?: number;
  };
}
