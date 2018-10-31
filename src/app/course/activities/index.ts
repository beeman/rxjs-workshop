import { Lesson } from '../../types';

import { lesson1 } from './lesson-data/lesson1';
import { lesson2 } from './lesson-data/lesson2';
import { lesson3 } from './lesson-data/lesson3';
import { lesson4 } from './lesson-data/lesson4';
import { lesson5 } from './lesson-data/lesson5';
import { lesson6 } from './lesson-data/lesson6';

export const lessons: Lesson[] = [
  lesson1,
  lesson2,
  lesson3,
  lesson4,
  lesson5,
  lesson6,
];

const lessonLink = (url: string, label: string, children: any[] = []) => ({
  url,
  label,
  children
});

const activityLink = (url: string, label: string) => ({
  url,
  label,
});

export const lessonSidebar = lessons.map((lesson) => {
  return lessonLink(lesson.id, lesson.title,
    lesson.activities.map(activity => {
      return activityLink(activity.id, activity.title);
    })
  );
});
