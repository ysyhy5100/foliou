'use strict';

var img = new Image(); img.src = 'data:image/png;base64,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';

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = "body {\n  background: red; }\n  body a {\n    background: url(require(\"./icon.png\")); }\n";
styleInject(css);

var test = "1";
var test_json = {
	test: test
};

console.log(img);
console.log(css);
console.log(test_json);
