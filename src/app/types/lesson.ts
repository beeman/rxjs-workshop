import { Activity } from './activity';

export interface Lesson {
  id: string;
  title: string;
  activities?: Activity[];
}
