export interface User {
  id: number;
  name: string;
  email: string;
  status: 'active' | 'inactive' | 'banned' | 'deleted';
  createdAt: string;
}
export const USERS: User[] = [
  {
    id: 1,
    name: 'Alice Johnson',
    email: 'alice@example.com',
    status: 'active',
    createdAt: '2024-04-19T10:30:00Z',
  },
  {
    id: 2,
    name: 'Bob Smith',
    email: 'bob@example.com',
    status: 'banned',
    createdAt: '2024-04-18T14:15:00Z',
  },
  {
    id: 3,
    name: 'Daniel NHM',
    email: 'Daniel@example.com',
    status: 'inactive',
    createdAt: '2024-04-20T09:00:00Z',
  },
  {
    id: 4,
    name: 'Jason',
    email: 'jason@example.com',
    status: 'active',
    createdAt: '2024-04-20T07:25:00Z',
  },
  {
    id: 5,
    name: 'Salem',
    email: 'salem@example.com',
    status: 'banned',
    createdAt: '2024-04-17T11:45:00Z',
  },
  {
    id: 6,
    name: 'Ali',
    email: 'Ali@example.com',
    status: 'active',
    createdAt: '2024-04-20T02:00:00Z',
  },
  {
    id: 7,
    name: 'Mohammad',
    email: 'Mohammad@example.com',
    status: 'active',
    createdAt: '2024-04-16T13:00:00Z',
  },
  {
    id: 8,
    name: 'Alaa',
    email: 'Alaa@example.com',
    status: 'active',
    createdAt: '2024-04-20T03:45:00Z',
  },
  {
    id: 9,
    name: 'Alaa',
    email: 'Alaa@example.com',
    status: 'active',
    createdAt: '2024-04-20T01:15:00Z',
  },
  {
    id: 10,
    name: 'Alaa',
    email: 'Alaa@example.com',
    status: 'active',
    createdAt: new Date().toISOString(),
  },
  {
    id: 11,
    name: 'BGk',
    email: 'BGK@example.com',
    status: 'active',
    createdAt: '2024-04-14T10:10:00Z',
  },
  {
    id: 12,
    name: 'KFJ',
    email: 'KFJ@example.com',
    status: 'active',
    createdAt: '2024-04-13T07:50:00Z',
  },
  {
    id: 13,
    name: 'ONM',
    email: 'ONM@example.com',
    status: 'active',
    createdAt: new Date().toISOString(),
  },
  {
    id: 14,
    name: 'KRM',
    email: 'KRM@example.com',
    status: 'active',
    createdAt: '2024-04-14T10:10:00Z',
  },
  {
    id: 15,
    name: 'FNL',
    email: 'OfddM@example.com',
    status: 'active',
    createdAt: new Date().toISOString(),
  },
  {
    id: 16,
    name: 'OGH',
    email: 'OddsM@example.com',
    status: 'active',
    createdAt: new Date().toISOString(),
  },
];
