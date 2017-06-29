// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, element) {
  var elements = [];
  element = element || document.body;
  var children = element.childNodes;
  if (element.classList && element.classList.contains(className)) {
    elements.push(element);
  }
  if (children) {
    for (var i = 0; i < children.length; i++) {
      elements = elements.concat(getElementsByClassName(className, children[i]));
    }
  }
  return elements;
};
