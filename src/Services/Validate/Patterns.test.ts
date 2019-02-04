import React from 'react';
import ReactDOM from 'react-dom';

import PATTERNS from './Patterns';

const emails = {
  valid: ['test@testsson.com'],
  invalid: ['a@a.c', 'abcd2se']
};

const phones = {
  valid: ['06012345', '0700000000'],
  invalid: ['1', '123', 'asfeaasd', '123asd']
};

describe('PATTERNS', () => {
  describe('EMAIL', () => {
    describe('should allow valid emails', () => {
      const pattern = new RegExp(PATTERNS.EMAIL);
      emails.valid.forEach(email =>
        test(email, () => expect(pattern.exec(email)).toBeTruthy())
      );
    });

    describe('should reject invalid emails', () => {
      const pattern = new RegExp(PATTERNS.EMAIL);
      emails.invalid.forEach(email =>
        test(email, () => expect(pattern.exec(email)).toBeFalsy())
      );
    });
  });

  describe('PHONE', () => {
    describe('should allow valid phonenumbers', () => {
      const pattern = new RegExp(PATTERNS.PHONE);
      phones.valid.forEach(phone =>
        test(phone, () => expect(pattern.exec(phone)).toBeTruthy())
      );
    });

    describe('should reject invalid phonenumbers', () => {
      const pattern = new RegExp(PATTERNS.PHONE);
      phones.invalid.forEach(phone =>
        test(phone, () => expect(pattern.exec(phone)).toBeFalsy())
      );
    });
  });
});
