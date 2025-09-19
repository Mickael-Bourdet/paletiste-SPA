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
  registrationTime: string;
  startTime: string;
  reservation: IReservation[];
  maxTeams: number;
  teamType: number;
  price: number;
  creditCard: boolean;
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
  label?: string;
}
export interface ICategory {
  id: string;
  name: string;
}
export interface ITags {
  id: string;
  name: string;
}
