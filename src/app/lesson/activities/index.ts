const lessonLink = (url: string, label: string, children: any[] = []) => ({
  url,
  label,
  children
});

const activityLink = (url: string, label: string) => ({
  url,
  label,
});

import { lesson1 } from './lesson1';
import { lesson2 } from './lesson2';
import { lesson3 } from './lesson3';
import { lesson4 } from './lesson4';
import { lesson5 } from './lesson5';
import { lesson6 } from './lesson6';

export const lessons = [
  {
    id: 'lesson1',
    title: 'Introduction',
    activities: [...lesson1],
  },
  {
    id: 'lesson2',
    title: 'Handling events',
    activities: [...lesson2],
  },
  {
    id: 'lesson3',
    title: 'Drawing on canvas',
    activities: [...lesson3],
  },
  {
    id: 'lesson4',
    title: 'Network Request',
    activities: [...lesson4],
  },
  {
    id: 'lesson5',
    title: 'Text Input',
    activities: [...lesson5],
  },
  {
    id: 'lesson6',
    title: 'Creating Observables',
    activities: [...lesson6],
  },
];

export const lessonSidebar = lessons.map((lesson) => {
  return lessonLink(lesson.id, lesson.title,
    lesson.activities.map(activity => {
      return activityLink(activity.id, activity.title);
    })
  );
});
