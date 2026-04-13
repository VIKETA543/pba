import { HttpInterceptorFn } from '@angular/common/http';

export const headersizeInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};
