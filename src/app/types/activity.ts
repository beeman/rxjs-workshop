import { Step } from './step';

export interface Activity {
  id: string;
  title: string;
  description: string[];
  component?: any;
  solution?: string;
  steps?: Step[];
  showContent?: boolean;
  showResult?: boolean;
}
