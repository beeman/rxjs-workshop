export const LessonModel = {
  icon: 'fa fa-fw fa-university',
  id: 'Lessons',
  name: 'Lessons',
  properties: {
    id: {
      required: true,
      type: 'string',
    },
    title: {
      id: 'title',
      type: 'string',
    },
    description: {
      id: 'description',
      type: 'string',
    },
  },
  fields: [
    {
      key: 'title',
      type: 'string',
      link: true,
    },
    {
      key: 'created',
      type: 'date',
      headerClass: 'w-25 text-right',
      columnClass: 'text-right',
    },
  ],
}
