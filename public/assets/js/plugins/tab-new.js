jQuery(document).ready(function(a) {
  var b = window.location.hash.replace("#", "");
  var c = a(".js-tabs"), d = a("body");
  if (c.length) {
      var e = c.find(".js-tablist");
      e.each(function() {
          var b = a(this), c = b.data(), d = "undefined" !== typeof c.tabsPrefixClass ? c.tabsPrefixClass + "-" : "", e = "undefined" !== typeof c.hx ? c.hx : "", f = "undefined" !== typeof c.existingHx ? c.existingHx : "", g = b.children(".js-tablist__item"), h = b.find(".js-tablist__link");
          b.attr("role", "tablist");
          g.attr("role", "presentation");
          h.attr("role", "tab");
          b.addClass(d + "tabs__list");
          g.addClass(d + "tabs__item");
          h.addClass(d + "tabs__link");
          h.each(function() {
              var b = a(this), d = "undefined" !== typeof c.tabsGeneratedHxClass ? c.tabsGeneratedHxClass : "invisible", g = b.attr("href"), h = a(g), i = b.text();
              if ("" !== e) h.prepend("<" + e + ' class="' + d + '" tabindex="0">' + i + "</" + e + ">");
              if ("" !== f) h.find(f + ":first-child").attr("tabindex", 0);
              if ("undefined" !== typeof g && "" !== g && "#" !== g) b.attr({
                  "aria-controls": g.replace("#", ""),
                  tabindex: -1,
                  "aria-selected": "false"
              });
              b.removeAttr("href");
          });
      });
      a(".js-tabcontent").attr({
          role: "tabpanel",
          "aria-hidden": "true"
      }).each(function() {
          var b = a(this), c = b.attr("id"), d = a("#label_" + c).closest(".js-tablist").attr("data-tabs-prefix-class"), e = "undefined" !== typeof d ? d + "-" : "";
          b.attr("aria-labelledby", "label_" + c);
          b.addClass(e + "tabs__content");
      });
      if ("" !== b && 0 !== a("#" + b + ".js-tabcontent").length) if (a("#label_" + b + ".js-tablist__link:not([aria-disabled='true'])").length) {
          a("#" + b + ".js-tabcontent").removeAttr("aria-hidden");
          a("#label_" + b + ".js-tablist__link").attr({
              "aria-selected": "true",
              tabindex: 0
          });
      }
      if ("" !== b && a("#" + b).parents(".js-tabcontent").length) {
          var f = a("#" + b), g = f.parents(".js-tabcontent"), h = g.attr("id");
          if (a("#label_" + h + ".js-tablist__link:not([aria-disabled='true'])").length) {
              g.removeAttr("aria-hidden");
              a("#label_" + h + ".js-tablist__link").attr({
                  "aria-selected": "true",
                  tabindex: 0
              });
          }
      }
      c.each(function() {
          var b = a(this), c = b.find('.js-tablist__link[aria-selected="true"]'), d = b.find('.js-tablist__link[data-selected="1"]:not([aria-disabled="true"]):first'), e = a("#" + d.attr("aria-controls"));
          if (0 === c.length && 0 !== d.length) {
              d.attr({
                  "aria-selected": "true",
                  tabindex: 0
              });
              e.removeAttr("aria-hidden");
          }
      });
      c.each(function() {
          var b = a(this), c = b.find('.js-tablist__link[aria-selected="true"]'), d = b.find('.js-tablist__link:not([aria-disabled="true"]):first'), e = a("#" + d.attr("aria-controls"));
          if (0 === c.length) {
              d.attr({
                  "aria-selected": "true",
                  tabindex: 0
              });
              e.removeAttr("aria-hidden");
          }
      });
      d.on("click", ".js-tablist__link[aria-disabled='true']", function() {
          return false;
      });
      d.on("click", ".js-tablist__link:not([aria-disabled='true'])", function(b) {
          var c = a(this), d = c.attr("aria-controls"), e = a("#" + c.attr("aria-controls")), f = c.closest(".js-tabs"), g = f.data(), h = "undefined" !== typeof g.tabsDisableFragment ? true : false, i = f.find(".js-tablist__link"), j = f.find(".js-tabcontent");
          i.attr({
              tabindex: -1,
              "aria-selected": "false"
          });
          c.attr({
              "aria-selected": "true",
              tabindex: 0
          });
          j.attr("aria-hidden", "true");
          e.removeAttr("aria-hidden");
          if (false === h) setTimeout(function() {
              history.pushState(null, null, location.pathname + location.search + "#" + d);
          }, 1e3);
          b.preventDefault();
      }).on("keydown", ".js-tablist", function(b) {
          var c = a(this).closest(".js-tabs"), d = c.find('.js-tablist__link[aria-selected="true"]').parent(), e = c.find(".js-tablist__item:last-child .js-tablist__link"), f = c.find(".js-tablist__item:first-child .js-tablist__link"), g = false, h = d, i = d;
          do if (h.is(".js-tablist__item:first-child")) h = e.parent(); else h = h.prev(); while ("true" === h.children(".js-tablist__link").attr("aria-disabled") && h !== d);
          do if (i.is(".js-tablist__item:last-child")) i = f.parent(); else i = i.next(); while ("true" === i.children(".js-tablist__link").attr("aria-disabled") && i !== d);
          if (a(document.activeElement).is(c.find(".js-tablist__link"))) g = true;
          if (g && !b.ctrlKey) if (37 == b.keyCode || 38 == b.keyCode) {
              h.children(".js-tablist__link").click().focus();
              b.preventDefault();
          } else if (40 == b.keyCode || 39 == b.keyCode) {
              i.children(".js-tablist__link").click().focus();
              b.preventDefault();
          } else if (36 == b.keyCode) {
              f.click().focus();
              b.preventDefault();
          } else if (35 == b.keyCode) {
              e.click().focus();
              b.preventDefault();
          }
      }).on("keydown", ".js-tabcontent", function(b) {
          var c = a(this), d = c.attr("aria-labelledby"), e = a("#" + d), f = e.parent(), g = f.parent(), h = g.find(".js-tablist__item:first-child"), i = g.find(".js-tablist__item:last-child"), j = f, k = f;
          if ((37 == b.keyCode || 38 == b.keyCode) && b.ctrlKey) {
              e.focus();
              b.preventDefault();
          }
          if (33 == b.keyCode && b.ctrlKey) {
              do if (j.is(".js-tablist__item:first-child")) j = i; else j = j.prev(); while ("true" === j.children(".js-tablist__link").attr("aria-disabled") && j !== f);
              j.children(".js-tablist__link").click().focus();
              b.preventDefault();
          }
          if (34 == b.keyCode && b.ctrlKey) {
              e.focus();
              do if (k.is(".js-tablist__item:last-child")) k = h; else k = k.next(); while ("true" === k.children(".js-tablist__link").attr("aria-disabled") && k !== f);
              k.children(".js-tablist__link").click().focus();
              b.preventDefault();
          }
      }).on("click", ".js-link-to-tab", function() {
          var b = a(this), c = a(b.attr("href")), d = a("#" + c.attr("aria-labelledby"));
          if ("true" !== d.attr("aria-disabled")) {
              d.click();
              setTimeout(function() {
                  d.focus();
              }, 10);
          }
      });
  }
});