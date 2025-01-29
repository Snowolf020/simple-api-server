import express from 'express';
const middleware = (req, res, next) => {
  next();
};
export default middleware;