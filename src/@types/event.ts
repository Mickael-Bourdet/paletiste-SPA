export interface IEvent {
  id: string;
  eventType: string;
  title: string;
  organizer: string;
  organizerType: string;
  poster: string;
  streetAddress: string;
  postalCode: string;
  city: string;
  date: string;
  dateFormatted: string;
  description: string;
  registration_time: string;
  start_time: string;
  reservation: IReservation[];
  maxTeams: number;
  teamType: number;
  price: number;
  credit_card: boolean;
  status: string;
  category: ICategory;
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
