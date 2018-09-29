export interface Step {
  step: string;
  code: string;
  lang?: string;
}

export interface Activity {
  title: string;
  description: string[];
  solution?: string[];
  steps?: Step[];
}
