import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { Trip } from './Trip'
import { WeatherDay } from './Weather';

export type TripsListProps = {
  trips: Trip[];
};

export type AddButtonProps = {
  onClick: Dispatch<SetStateAction<boolean>>;
};

export type WeatherCardProps = {
  weatherInfo: WeatherDay;
};

export type ModalProps = {
  open: boolean;
  onClose: Dispatch<SetStateAction<boolean>>;
  trips: Trip[];
  addTrip: (v: Trip[]) => void;
};

export type DatePickerProps = {
  formData: Trip;
  handleInputData: (event: ChangeEvent<HTMLInputElement>) => void;
};

export type CountdownProps = {
  targetDate: string;
};

export type TimeLeft = {
  days: number,
  hours: number,
  minutes: number,
  seconds: number,
};