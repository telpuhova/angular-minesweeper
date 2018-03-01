import { Square } from './square.model';

export const SQUARES: Square[] = [
  new Square(0, 0, "*"),
  new Square(0, 1, "2"),
  new Square(0, 2, "1"),

  new Square(1, 0, "1"),
  new Square(1, 1, "2"),
  new Square(1, 2, "*"),

  new Square(2, 0, "0"),
  new Square(2, 1, "1"),
  new Square(2, 2, "1"),
];
