import { Lesson } from '../../types';

const lessonLink = (url: string, label: string, children: any[] = []) => ({
  url,
  label,
  children
});

const activityLink = (url: string, label: string) => ({
  url,
  label,
});

import { lesson1 } from './lesson1/lesson1';
import { lesson2 } from './lesson2/lesson2';
import { lesson3 } from './lesson3/lesson3';
import { lesson4 } from './lesson4/lesson4';
import { lesson5 } from './lesson5/lesson5';
import { lesson6 } from './lesson6/lesson6';

export const lessons: Lesson[] = [
  lesson1,
  lesson2,
  lesson3,
  lesson4,
  lesson5,
  lesson6,
];

export const lessonSidebar = lessons.map((lesson) => {
  return lessonLink(lesson.id, lesson.title,
    lesson.activities.map(activity => {
      return activityLink(activity.id, activity.title);
    })
  );
});
