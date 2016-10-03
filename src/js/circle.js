// var data = {
//     "categories": [
//       {
//         "title": "Category 1",
//         "sub": [
//           "Sub category 1.1",
//           "Sub category 1.2",
//           "Sub category 1.3",
//           "Sub category 1.4"
//         ]
//       }, {
//         "title": "Category 2",
//         "sub": [
//           "Sub category 2.1",
//           "Sub category 2.2",
//           "Sub category 2.3"
//         ]
//       }, {
//         "title": "Category 3",
//         "sub": [
//           "Sub category 3.1",
//           "Sub category 3.2",
//           "Sub category 3.3",
//           "Sub category 3.4",
//           "Sub category 3.5"
//         ]
//       }, {
//         "title": "Category 4",
//         "sub": [
//           "Sub category 4.1",
//           "Sub category 4.2",
//           "Sub category 4.3"
//         ]
//       }, {
//         "title": "Category 5",
//         "sub": [
//           "Sub category 5.1",
//           "Sub category 5.2",
//           "Sub category 5.3"
//         ]
//       }, {
//         "title": "Category 6",
//         "sub": [
//           "Sub category 6.1",
//           "Sub category 6.2",
//           "Sub category 6.3"
//         ]
//       }, {
//         "title": "Category 7",
//         "sub": [
//           "Sub category 7.1",
//           "Sub category 7.2",
//           "Sub category 7.3",
//           "Sub category 7.4",
//           "Sub category 7.5",
//           "Sub category 7.6"
//         ]
//       }
//     ]
// };
//
// (function (scope, doc) {
//   'use strict';
//
//   var DATA_URL = '../data.json';
//
//   var readyPromise = null,
//     dataPromise = null;
//
//   var App = scope.App = Object.create(null, {
//     DOMReady: {
//       get: function () {
//         if (readyPromise) {
//           return readyPromise;
//         }
//
//         readyPromise = new Promise(function (resolve) {
//           if (doc.readyState !== 'loading') {
//             return resolve(doc);
//           }
//
//           doc.addEventListener('DOMContentLoaded', resolve.bind(null, doc));
//         });
//
//         return readyPromise;
//       }
//     },
//
//     ready: {
//       get: function () {
//         if (dataPromise) {
//           return dataPromise;
//         }
//
//         dataPromise = new Promise(function (resolve, reject) {
//           /*var dataRequest = new XMLHttpRequest();
//
//            dataRequest.onload = function () {
//            resolve(dataRequest.response);
//            };
//            dataRequest.onerror = reject;
//
//            dataRequest.responseType = 'json';
//            dataRequest.open('GET', DATA_URL);
//            dataRequest.send();*/
//           resolve(data);
//         });
//
//         return this.DOMReady.then(function () {
//           return dataPromise;
//         });
//       }
//     }
//   });
//
// })(window, document);
//
//
// App.ready.then(function (data) {
//   'use strict';
//
//   var categoryTplNode = document.querySelector('#category-tpl li'),
//     subCategoryTplNode = document.querySelector('#sub-category-tpl li'),
//     menuFragment = document.createDocumentFragment(),
//     menuNode = document.querySelector('.menu__categories ul'),
//     subCategoryMarker = document.createElement('i'),
//     subMenuNode = document.querySelector('.menu__sub-categories'),
//
//     coefficient = 360 / data.categories.length;
//
//   data.categories.forEach(function (category, index) {
//     var categoryTpl = categoryTplNode.cloneNode(true),
//       subCategoriesUL = document.createElement('ul'),
//       categoryMarker = categoryTpl.querySelector('.menu__categories-marker'),
//       categoryLink = categoryTpl.querySelector('span');
//
//     categoryLink.textContent = category.title;
//     categoryLink.dataset.index = index + 1;
//
//     if (index === 0) {
//       categoryTpl.setAttribute('active', '');
//       subCategoriesUL.setAttribute('active', '');
//     }
//
//     var c = 360 / category.sub.length;
//
//     subCategoriesUL.style.transform = "rotate(${c + 90}deg)";
//
//     category.sub.forEach(function (subCategory, index) {
//       var subCategoryTpl = subCategoryTplNode.cloneNode(true);
//
//       index = index + 1;
//
//       subCategoryTpl.querySelector('a').textContent = subCategory;
//       subCategoriesUL.appendChild(subCategoryTpl);
//       subCategoryTpl.style.transform = "rotate(${index * c}deg) skew(${90 - c}deg)";
//       subCategoryTpl.querySelector('a').style.transform = "skew(${90 + c}deg) rotate(${(270 - c) - (index * c)}deg) scale(1)";
//
//       categoryMarker.appendChild(subCategoryMarker.cloneNode(false));
//     });
//
//     subMenuNode.appendChild(subCategoriesUL);
//
//     menuFragment.appendChild(categoryTpl);
//   });
//
//   var categoriesElem = document.querySelector('.menu__categories'),
//     lastRotate = null,
//     currentNode = null;
//
//   menuNode.addEventListener('click', function (e) {
//     var index = Number(e.target.dataset.index),
//       activeElem = categoriesElem.querySelector('[active]');
//
//     if (!index) {
//       return;
//     }
//
//     currentNode = e.target.parentNode.parentNode;
//
//     activeElem.removeAttribute('active');
//     subMenuNode.querySelector('[active]').removeAttribute('active');
//     subMenuNode.querySelector("ul:nth-child(${index})").setAttribute('active', '');
//
//     var rotate = 90 - ((coefficient * index) + (coefficient / 2));
//
//     categoriesElem.style.transform = "translate(-50%, -50%) rotate(${rotate}deg)";
//
//     lastRotate = 90 - ((coefficient * index) + (coefficient / 2));
//   });
//
//   categoriesElem.addEventListener('transitionend', function (e) {
//     if (e.propertyName !== 'transform') {
//       return;
//     }
//
//     currentNode.setAttribute('active', '');
//   });
//
//   menuNode.appendChild(menuFragment);
// });
