declare namespace Express {
  export interface Request {
    user?: { sub: string; email: string }; // sub = userId
  }
}
