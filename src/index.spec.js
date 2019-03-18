import { sensitive } from '.';

test("test sensitive against single word", () => {
  const expected = 'my name is ***, nice to meet you :)';
  expect(sensitive('my name is Avi, nice to meet you :)', 'avi')).toEqual(expected);
});

test("test sensitive against list of words", () => {
  const expected = 'my name is ***, nice to meet *** :)';
  expect(sensitive('my name is Avi, nice to meet you :)', ['avi', 'you'])).toEqual(expected);
})