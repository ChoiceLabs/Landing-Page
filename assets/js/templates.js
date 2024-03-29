(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['footer'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<footer>\n  <p>"
    + this.escapeExpression(((helper = (helper = helpers.copyright || (depth0 != null ? depth0.copyright : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"copyright","hash":{},"data":data}) : helper)))
    + "</p>\n</footer>\n";
},"useData":true});
templates['header'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<header>\n  <div class=\"container\">\n    <a href=\"/\" id=\"logo\"><img alt=\"Choice company driving car logo\" src=\""
    + this.escapeExpression(((helper = (helper = helpers.logo_file || (depth0 != null ? depth0.logo_file : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"logo_file","hash":{},"data":data}) : helper)))
    + "\" id=\"logo-image\"></a>\n    <ul class=\"navbar navbar-right nav\">\n      <li>\n        <!-- <a href=\"/merchants\" class=\"button\" id=\"merchant-button\">For Companies</a> -->\n      </li>\n    </ul>\n  </div>\n</header>\n";
},"useData":true});
templates['hero'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"jumbotron\" id=\"hero-section-jumbotron\">\n  <div class=\"container\" id=\"hero-section\">\n\n    <div class=\"row\">\n\n      <div class=\"col-md-7\" id=\"choice-description\">\n        <h1> Drive with Choice </h1>\n        <p> Earn up to $25 an hour, <span style=\"font-style: italics\"> even during off-peak times.</span> </p>\n        <p>Choice partners with multiple, hand-selected retailers to provide you with access more jobs, increased efficiency, and higher pay. </p>\n      </div>\n\n      <div class=\"col-md-4 col-md-offset-1\" id=\"form-container\">\n\n        <form>\n          <h2 id=\"cta\"> Start Driving </h2>\n          <p id=\"instructions\"> Enter your info, download the Choice App, and we will reach out to get you started! </p>\n\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <input type=\"text\" class=\"form-control\" id=\"first-name-input\" placeholder=\"First\">\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <input type=\"text\" class=\"form-control\" id=\"last-name-input\" placeholder=\"Last\">\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <input type=\"text\" class=\"form-control\" id=\"email-input\" placeholder=\"Email\">\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <input type=\"text\" class=\"form-control\" id=\"phone-number-input\" placeholder=\"Phone\">\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <input type=\"text\" class=\"form-control\" id=\"city-input\" placeholder=\"City\">\n            </div>\n          </div>\n\n          <div id=\"form-status\"></div>\n          <a onclick=\"submit()\" class=\"button\" id=\"submit-button\">Apply Now</a>\n        </form>\n\n      </div>\n    </div>\n\n  </div>\n</div>\n";
},"useData":true});
templates['how_it_works'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"jumbotron\" id=\"how-it-works-container\">\n  <div class=\"container\">\n    <h2 class=\"section-header\"> How it Works </h2>\n    <div class=\"slider\">\n\n      <div id=\"slide1\">\n        <div class=\"row\">\n          <div class=\"col-md-3 col-md-offset-1\">\n            <img src=\"assets/images/pick_job.png\" height=\"500\" width=\"244\">\n          </div>\n          <div class=\"col-md-5 col-md-offset-1 col-xs-8 col-xs-offset-2 caption\">\n            <div class=\"how-it-works-text-wrapper\">\n              <h3>Pick your job</h3>\n              <p>A single package pickup, and multiple drop-off locations to minimize your time and maximize your earnings.</p>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div id=\"slide2\">\n        <div class=\"row\">\n          <div class=\"col-md-3 col-md-offset-1\">\n            <img src=\"assets/images/follow_steps_choose_order.png\" height=\"500\" width=\"244\">\n          </div>\n          <div class=\"col-md-5 col-md-offset-1 col-xs-8 col-xs-offset-2 caption\">\n            <div class=\"how-it-works-text-wrapper\">\n              <h3>Simple steps, displayed clearly</h3>\n              <p>We give you a list of deliveries, you get to choose the best order to do them in.</p>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div id=\"slide3\">\n        <div class=\"row\">\n          <div class=\"col-md-3 col-md-offset-1\">\n            <img src=\"assets/images/ext_nav_opt.png\" height=\"500\" width=\"244\">\n          </div>\n          <div class=\"col-md-5 col-md-offset-1 col-xs-8 col-xs-offset-2 caption\">\n            <div class=\"how-it-works-text-wrapper\">\n              <h3>Navigate with ease</h3>\n              <p>The Choice app will direct you right to your delivery, or let you use your favourite navigation app.</p>\n            </div>\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>\n";
},"useData":true});
templates['why_choice'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"jumbotron\">\n  <div class=\"container\" id=\"why-choice-container\">\n    <div class=\"row\">\n      <h2 class=\"section-header\"> On Demand the way it should have been. </h2>\n\n      <div class=\"col-md-4 col-md-offset-0 col-sm-8 col-sm-offset-2\">\n        <img src=\"assets/images/connections-128.png\">\n        <h3>Access to More Jobs</h3>\n        <p> Don&#39;t be tied to one provider&#39;s. &#32; Choose from a variety of well-paying jobs throughout the day &#8212; all on one platform.</p>\n      </div>\n\n      <div class=\"col-md-4 col-md-offset-0 col-sm-8 col-sm-offset-2\">\n        <img src=\"assets/images/agile_flexible_planning-128.png\">\n        <h3>Eliminate Slow Times</h3>\n        <p> No more sitting around idle during the midday slump. &#32; Make the most of your time, any time of the day.  </p>\n      </div>\n\n      <div class=\"col-md-4 col-md-offset-0 col-sm-8 col-sm-offset-2\">\n        <img src=\"assets/images/agile_sprint_goal-128.png\">\n        <h3>Truly Flexible Schedules</h3>\n        <p> &#34;Work when you want&#34; became &#34;work when there&#39;s work.&#34; With Choice, regain control with predictable schedules. </p>\n      </div>\n\n    </div>\n  </div>\n</div>\n";
},"useData":true});
templates['resources'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<meta charset=\"UTF-8\">\n\n<!-- Bootstrap -->\n<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css\">\n<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap-theme.min.css\">\n\n<!-- jQuery -->\n<script type=\"text/javascript\" src=\"https://code.jquery.com/jquery-2.1.4.min.js\"></script>\n<script type=\"text/javascript\" src=\"https://code.jquery.com/jquery-migrate-1.2.1.min.js\"></script>\n\n<!-- Firebase -->\n<script src=\"https://cdn.firebase.com/js/client/2.2.7/firebase.js\"></script>\n<script type=\"text/javascript\" src=\"assets/js/firebase.js\"></script>\n\n<!-- Templating -->\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/2.0.0/handlebars.js\"></script>\n<script type=\"text/javascript\" src=\"assets/js/templates.js\"></script>\n<script type=\"text/javascript\" src=\"assets/js/actuate_common.js\"></script>\n<script type=\"text/javascript\" src=\"assets/js/actuate_landing.js\"></script>\n\n<!-- Slick Slider -->\n<link rel=\"stylesheet\" type=\"text/css\" href=\"https://cdn.jsdelivr.net/jquery.slick/1.5.6/slick.css\"/>\n<link rel=\"stylesheet\" type=\"text/css\" href=\"https://cdn.jsdelivr.net/jquery.slick/1.5.6/slick-theme.css\"/>\n<script type=\"text/javascript\" src=\"https://cdn.jsdelivr.net/jquery.slick/1.5.6/slick.min.js\"></script>\n<script type=\"text/javascript\" src=\"assets/js/landing/slider_config.js\"></script>\n\n<!-- Landing Page -->\n<script type=\"text/javascript\" src=\"assets/js/form.js\"></script>\n<link rel=\"stylesheet\" type=\"text/css\" href=\"assets/css/index.css\">\n";
},"useData":true});
templates['slide1_content'] = template({"1":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "    <option value=\""
    + alias2(alias1(depth0, depth0))
    + "\">"
    + alias2(alias1(depth0, depth0))
    + "</option>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<form id=\"basics-form\">\n  <input type=\"text\" class=\"form-control\" id=\"first-name-input\" placeholder=\"First Name\">\n  <input type=\"text\" class=\"form-control\" id=\"last-name-input\" placeholder=\"Last Name\">\n  <input type=\"tel\" class=\"form-control\" id=\"phone-input\" placeholder=\"Phone\">\n  <input type=\"text\" class=\"form-control\" id=\"email-input\" placeholder=\"Email\">\n  <select class=\"form-control\" id=\"city-select\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.cities : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "  </select>\n\n  <div class=\"yes-no-button no\">\n    <p>"
    + alias3(((helper = (helper = helpers['checkbox-text'] || (depth0 != null ? depth0['checkbox-text'] : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"checkbox-text","hash":{},"data":data}) : helper)))
    + "</p>\n    <img src=\""
    + alias3(((helper = (helper = helpers['checkbox-image'] || (depth0 != null ? depth0['checkbox-image'] : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"checkbox-image","hash":{},"data":data}) : helper)))
    + "\">\n  </div>\n\n</form>\n";
},"useData":true});
templates['slide2_content'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<form id=\"experience-form\">\n\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <p class=\"question-text\">Which of these are you able to drive (and have a license for)?</p>\n      <input type=\"checkbox\" value=\"auto\"><label> Automatic</label>\n      <input type=\"checkbox\" value=\"manual\"><label> Manual</label>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-md-12 question\">\n      <p class=\"question-text\"> Do you have driving experience in any of these?</p>\n      <input type=\"checkbox\"><label>Traditional Valet </label>\n      <input type=\"checkbox\"><label> Uber </label>\n      <input type=\"checkbox\"><label> Lyft </label>\n      <br>\n      <input type=\"checkbox\"><label> Sidecar </label>\n      <input type=\"checkbox\"><label> Other On Demand Service </label>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-md-12 question\">\n      <p class=\"question-text\">Please describe any other customer service experience?</p>\n      <textarea class=\"form-control\" id=\"customer-service-form-textarea\" rows=\"8\" placeholder=\"\"></textarea>\n    </div>\n  </div>\n\n</form>\n";
},"useData":true});
templates['slide3_content'] = template({"1":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "  <div class=\"row\">\n    <div class=\"col-md-12 question\">\n      <p class=\"question-text\">"
    + alias2(alias1((depth0 != null ? depth0['question-text'] : depth0), depth0))
    + "</p>\n      <input type=\"radio\" /> <label>"
    + alias2(alias1((depth0 != null ? depth0['toggle-true-text'] : depth0), depth0))
    + "</label>\n      <input type=\"radio\" /> <label>"
    + alias2(alias1((depth0 != null ? depth0['toggle-false-text'] : depth0), depth0))
    + "</label>\n    </div>\n  </div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<form id=\"eligibility-form\">\n\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.questions : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n</form>\n";
},"useData":true});
templates['slide4_content'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<p class=\"question-text\"> What times work with your current schedule?</p>\n<form class=\"col-md-8 col-md-offset-2\" id=\"availability-form\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <p>**Easy time and day chooser goes here**</p>\n    </div>\n  </div>\n</form>\n";
},"useData":true});
templates['slide_header'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"slide__header\">\n  <h2 class=\"slide__header__title\">"
    + alias3(((helper = (helper = helpers.heading || (depth0 != null ? depth0.heading : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"heading","hash":{},"data":data}) : helper)))
    + "</h2>\n  <p class=\"slide__header__caption\">"
    + alias3(((helper = (helper = helpers.caption || (depth0 != null ? depth0.caption : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"caption","hash":{},"data":data}) : helper)))
    + "</p>\n</div>\n";
},"useData":true});
templates['slider'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"slider\" id=\"signup-form-slider\">\n\n  <!-- SLIDE 1 -->\n  <div class=\"row slide\">\n    <div class=\"slide1-header-placeholder\"></div>\n    <div class=\"slide1-content-placeholder\"></div>\n  </div>\n\n  <!-- SLIDE 2 -->\n  <div class=\"row slide\">\n    <div class=\"slide2-header-placeholder\"></div>\n    <div class=\"slide2-content-placeholder\"></div>\n  </div>\n\n  <!-- SLIDE 3 -->\n  <div class=\"row slide\">\n    <div class=\"slide3-header-placeholder\"></div>\n    <div class=\"slide3-content-placeholder\"></div>\n  </div>\n\n  <!-- SLIDE 4 -->\n  <div class=\"row slide\">\n    <div class=\"slide4-header-placeholder\"></div>\n    <div class=\"slide4-content-placeholder\"></div>\n  </div>\n\n</div>  <!-- slider -->\n";
},"useData":true});
})();