import test from 'ava';
import add from './';

test('empty test', t => {
	t.pass();
});

test('async test', async t => {
	const bar = Promise.resolve('bar');

	t.is(await bar, 'bar');
});

test('add', t => {
	t.is(add(1, 2), 4);
});
