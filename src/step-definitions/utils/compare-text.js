

function compareText(firstText, secondText, compareOption) {
    switch ((compareOption)) {
    case 'contain':
        return expect(firstText).to.contain(secondText);
    case 'not contain':
        return expect(firstText).to.not.contain(secondText);
    case 'be equal to':
        return expect(firstText).toEqual(secondText);
    case 'not be equal to':
        return expect(firstText).not.toEqual(secondText);
    default:
        throw Error('"${compareOption}" is not a valid compare option!');
    }
}

module.exports = compareText;
