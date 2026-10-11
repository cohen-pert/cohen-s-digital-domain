import { describe, expect, test } from 'bun:test';
import { INVESTMENT_MEMBERS, PERSONAL_PHONE, leadership } from './data';

describe('Approved portfolio facts', () => {
  test('Investment Club membership is 100+', () => {
    expect(INVESTMENT_MEMBERS).toBe(100);
  });
  test('Personal telephone uses the corrected number', () => {
    expect(PERSONAL_PHONE).toEqual({ display: '+1 (470) 323-2832', href: 'tel:+14703232832' });
  });
  test('Leadership contains exactly the four requested organizations', () => {
    expect(leadership.map(item => item.title)).toEqual([
      'Lambert Investment Club', 'Lambert Entrepreneurship Club', 'Junior Law Society', "Young Men's Service League",
    ]);
  });
});