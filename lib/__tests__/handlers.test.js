const handlers = require('../handlers');

test('home page renders', () => {
    const req = {};
    const res = { render: jest.fn() };
    handlers.home(req, res);
    expect(res.render.mock.calls.length).toBe(1);
    expect(res.render.mock.calls[0][0]).toBe('home');
});

test('about page renders', () => {
    const req = {};
    const res = { render: jest.fn() };
    handlers.about(req, res);
    expect(res.render.mock.calls.length).toBe(1);
    expect(res.render.mock.calls[0][0]).toBe('about'); //배열 첫 0 render 0 인자 넘어온 값
    expect(res.render.mock.calls[0][1]).toEqual(
        expect.objectContaining({
            fortune: expect.stringMatching(/\W/),
        }),
    );
});

test('404 page renders', () => {
    const req = {};
    const res = { render: jest.fn() };
    handlers.notFound(req, res);
    expect(res.render.mock.calls.length).toBe(1);
    expect(res.render.mock.calls[0][0]).toBe('404');
});

test('500 page renders', () => {
    const err = new Error('some error');
    const req = {};
    const res = { render: jest.fn() };
    const next = jest.fn();
    handlers.serverError(err, req, res, next);
    expect(res.render.mock.calls.length).toBe(1);
    expect(res.render.mock.calls[0][0]).toBe('500');
});

const double = require('../main/double');

test('2 * 2 to be 4', () => {
    const req = {};
    const res = { render: jest.fn() };
    handlers.double(req, res);
    expect(double(2)).toBe(4);
});
