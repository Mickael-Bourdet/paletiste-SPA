export interface IEvent {
  id: string;
  title: string;
  organizer: string;
  poster: string;
  location: string;
  date: string;
  description: string;
  registration_time: string;
  start_time: string;
  reservation: IReservation[];
  nb_teams: number;
  price: number;
  credit_card: boolean;
  status: string;
  category: ICategory[];
  tags: ITags[];
  author: string;
  slug: string;
}

export type IEvents = IEvent[];

export interface IReservation {
  type: string;
  value: string;
}
export interface ICategory {
  id: string;
  name: string;
}
export interface ITags {
  id: string;
  name: string;
}
