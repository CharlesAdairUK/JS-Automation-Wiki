class LangListDropComponent {
    get rootEl() {
        return $('div[id="js-lang-lists"]');
    }

    get langDropBtn() {
        return $('button[id="js-lang-list-button"]');
    }

    get langDropContent() {
        return this.rootEl.$('div[id="js-lang-lists"]');
    }
}

module.exports = LangListDropComponent;
