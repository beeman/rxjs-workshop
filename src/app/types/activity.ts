import { Step } from './step';

export class Activity {
  id: string;
  title: string;
  description: string[];
  component?: any;
  solution?: string;
  steps?: Step[];
  hideResult ? = false;
  hideSolutionLink ? = false;
  showSolution ? = false;
  isExercise ? = false;
}
