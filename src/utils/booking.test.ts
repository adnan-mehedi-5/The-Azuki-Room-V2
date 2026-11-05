import test from 'node:test';
import assert from 'node:assert/strict';
import {
  generateOpenTableUrl,
  calculateSushiClubTotal,
  isSushiClubDay,
  getOpeningStatus,
  validateReservation,
  OPENTABLE_RID
} from './booking';

test('generateOpenTableUrl creates standard URL without params', () => {
  const url = generateOpenTableUrl();
  assert.equal(url, 'https://www.opentable.co.uk/restaurant/profile/541284');
});

test('generateOpenTableUrl creates parameterised booking URL', () => {
  const url = generateOpenTableUrl({ date: '2026-11-14', time: '19:30', covers: 4 });
  assert.ok(url.startsWith('https://www.opentable.co.uk/restaurant/profile/541284'));
  assert.ok(url.includes('covers=4'));
  assert.ok(url.includes('dateTime=2026-11-14T19%3A30'));
});

test('calculateSushiClubTotal calculates standard and paired prices', () => {
  assert.equal(calculateSushiClubTotal(2, false), 98); // 2 * 49
  assert.equal(calculateSushiClubTotal(4, false), 196); // 4 * 49
  assert.equal(calculateSushiClubTotal(2, true), 150); // 2 * 75
  assert.equal(calculateSushiClubTotal(0, false), 0);
});

test('isSushiClubDay accurately identifies Saturdays', () => {
  // 2026-11-07 is Saturday
  assert.equal(isSushiClubDay('2026-11-07'), true);
  // 2026-11-06 is Friday
  assert.equal(isSushiClubDay('2026-11-06'), false);
  // 2026-11-08 is Sunday
  assert.equal(isSushiClubDay('2026-11-08'), false);
});

test('getOpeningStatus handles Sunday closure', () => {
  // Sunday at 14:00
  const sunday = new Date('2026-11-08T14:00:00');
  const status = getOpeningStatus(sunday);
  assert.equal(status.isOpen, false);
  assert.ok(status.statusText.includes('Closed'));
});

test('getOpeningStatus detects weekday lunch service', () => {
  // Wednesday at 13:00
  const wednesdayLunch = new Date('2026-11-11T13:00:00');
  const status = getOpeningStatus(wednesdayLunch);
  assert.equal(status.isOpen, true);
  assert.ok(status.statusText.includes('Lunch'));
});

test('validateReservation validates inputs accurately', () => {
  const validData = {
    name: 'Eleanor Vance',
    email: 'eleanor@example.co.uk',
    phone: '07123456789',
    covers: 2,
    date: '2026-11-14',
    time: '19:00',
    experience: 'dining' as const,
  };
  const result = validateReservation(validData);
  assert.equal(result.valid, true);
  assert.equal(Object.keys(result.errors).length, 0);

  // Missing email & Sunday check
  const invalidData = {
    ...validData,
    email: 'bad-email',
    date: '2026-11-08', // Sunday
  };
  const invalidResult = validateReservation(invalidData);
  assert.equal(invalidResult.valid, false);
  assert.ok(invalidResult.errors.email);
  assert.ok(invalidResult.errors.date.includes('Sunday'));
});
