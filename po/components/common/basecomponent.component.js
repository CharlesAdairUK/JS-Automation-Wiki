class BaseComponent {
    constructor(rootselector, isCollection) {
        this.rootselector = rootselector;
        if (isCollection === true) this.isCollection = true;
    }

    get rootEl() {
        if (this.isCollection === true) return $$(this.rootselector);
        return $(this.rootselector);
    }
}

module.exports = BaseComponent;
