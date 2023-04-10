export interface TimelineEvent {
  id: number;
  title: string;
  description: string;
  date: string;
  eventYear: number;
  type: 'movie' | 'series' | 'game' | 'book' | 'comic';
}

export const events: TimelineEvent[] = [
  {
    id: 1,
    title: "The Phantom Menace",
    description: "Star Wars: Episode I – The Phantom Menace is a 1999...",
    date: "1999",
    eventYear: -32,
    type: "movie",
  },
  {
    id: 2,
    title: "The Clone Attack",
    description: "Star Wars: Episode II – Attack of the Clones is a 2002...",
    date: "2002",
    eventYear: -22,
    type: "movie",
  },
  {
    id: 3,
    title: "Revenge of the Sith",
    description: "Star Wars: Episode III – Revenge of the Sith is a 2005...",
    date: "2005",
    eventYear: -19,
    type: "movie",
  },
  {
    id: 4,
    title: "Star Wars: The Mandalorian",
    description: "The Mandalorian is a live-action Star Wars television series...",
    date: "2019",
    eventYear: 9,
    type: "series",
  },
  {
    id: 5,
    title: "Star Wars Jedi: Fallen Order",
    description: "Star Wars Jedi: Fallen Order is a single-player action-adventure game...",
    date: "2019",
    eventYear: 14,
    type: "game",
  },
];
