import { UserInterface } from 'interfaces/user';
import { ReservationInterface } from 'interfaces/reservation';

export interface PreferenceInterface {
  id?: string;
  user_id: string;
  reservation_id: string;
  name: string;
  value: string;
  created_at?: Date;
  updated_at?: Date;

  user?: UserInterface;
  reservation?: ReservationInterface;
  _count?: {};
}
