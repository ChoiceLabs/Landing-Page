(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['footer'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<footer>\n  <p>&copy; Choice 2015 All rights reserved.</p>\n</footer>\n";
},"useData":true});
templates['header'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<header>\n  <div class=\"container\">\n    <a href=\"/\" id=\"logo\"><img alt=\"Choice company driving car logo\" src=\"assets/images/choice_logo.png\" id=\"logo-image\"></a>\n    <ul class=\"navbar navbar-right nav\">\n      <li>\n        <!-- <a href=\"/merchants\" class=\"button\" id=\"merchant-button\">For Companies</a> -->\n      </li>\n    </ul>\n  </div>\n</header>\n";
},"useData":true});
})();
