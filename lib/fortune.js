const fortunes = [
    '아는 것이 힘이다',
    '모르는게 약이다',
    '유유상종',
    '만사형통',
    '지나간 것은 잊어라',
];

exports.getFortune = () => {
    const idx = Math.floor(Math.random() * fortunes.length);
    return fortunes[idx];
};
