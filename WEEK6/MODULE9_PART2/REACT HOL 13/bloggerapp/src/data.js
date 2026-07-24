// ── Data file ─────────────────────────────────────────────
// All shared data arrays used by the three components

export const books = [
  { id: 101, bname: 'Master React', price: 670 },
  { id: 102, bname: 'Deep Dive into Angular 11 ', price: 800 },
  { id: 103, bname: 'Mongo Essentials', price: 450 },
];

export const blogs = [
  {
    id: 1,
    title: 'React Learning',
    author: 'Stephen Biz',
    description: 'Welcome to learning React!',
    published: true,
  },
  {
    id: 2,
    title: 'Installation',
    author: 'Schewzdenier',
    description: 'You can install React from npm.',
    published: true,
  },
  {
    id: 3,
    title: 'Draft Post',
    author: 'Unknown',
    description: 'This is an unpublished draft.',
    published: false,
  },
];

export const courses = [
  { id: 1, cname: 'Angular', date: '4/5/2021', active: true },
  { id: 2, cname: 'React', date: '6/3/2021', active: true },
  { id: 3, cname: 'Vue', date: '9/1/2022', active: false },
];
