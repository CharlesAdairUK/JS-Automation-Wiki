class CentralFeaturedComponent {
    get rootEl() {
        return $('div[class="central-featured"]');
    }

    get germanBtn() {
        return this.rootEl.$('a[id="js-link-box-de"]');
    }
}

module.exports = CentralFeaturedComponent;
