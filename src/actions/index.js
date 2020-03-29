import { SWITCHTABS } from '../constants';

export function switchtabs(payload) {
  return { type: SWITCHTABS, payload: payload };
}
