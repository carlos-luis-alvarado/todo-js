(()=>{"use strict";var t={d:(e,o)=>{for(var n in o)t.o(o,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:o[n]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)};function e(t,e){for(var o,n=0;n<e.length;n++)(o=e[n]).enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}t.d({},{L:()=>y});var o=function(){function t(e){(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")})(this,t),this.tarea=e,this.id=(new Date).getTime(),this.completado=!1,this.creado=new Date}return function(t,o,n){o&&e(t.prototype,o),n&&e(t,n),Object.defineProperty(t,"prototype",{writable:!1})}(t,[{key:"imprimirClase",value:function(){console.log("".concat(this.tarea," - ").concat(this.id))}}],[{key:"fromJson",value:function(e){var o=e.id,n=e.tarea,r=e.completado,a=e.creado,i=new t(n);return i.id=o,i.completado=r,i.creado=a,i}}]),t}();function n(t,e){var o="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!o){if(Array.isArray(t)||(o=function(t,e){if(t){if("string"==typeof t)return r(t,e);var o=Object.prototype.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?r(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){o&&(t=o);var n=0,a=function(){};return{s:a,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i=!0,l=!1;return{s:function(){o=o.call(t)},n:function(){var t=o.next();return i=t.done,t},e:function(t){l=!0,t},f:function t(){try{i||null==o.return||o.return()}finally{if(l)throw t}}}}function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var o=0,n=Array(e);o<e;o++)n[o]=t[o];return n}function a(t,e){for(var o,n=0;n<e.length;n++)(o=e[n]).enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}var i=function(){function t(){(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")})(this,t),this.cargarLocalStorage()}return function(t,e,o){e&&a(t.prototype,e),o&&a(t,o),Object.defineProperty(t,"prototype",{writable:!1})}(t,[{key:"nuevoTodo",value:function(t){this.todos.push(t),this.guardarLocalStorage()}},{key:"eliminarTodo",value:function(t){this.todos=this.todos.filter((function(e){return e.id!=t})),this.guardarLocalStorage()}},{key:"marcarCompletado",value:function(t){var e,o=n(this.todos);try{for(o.s();!(e=o.n()).done;){var r=e.value;if(console.log(t,r.id),r.id==t){r.completado=!r.completado,this.guardarLocalStorage();break}}}catch(t){o.e(t)}finally{o.f()}}},{key:"eliminarCompletados",value:function(){this.todos=this.todos.filter((function(t){return!t.completado})),this.guardarLocalStorage()}},{key:"guardarLocalStorage",value:function(){localStorage.setItem("todo",JSON.stringify(this.todos))}},{key:"cargarLocalStorage",value:function(){this.todos=localStorage.getItem("todo")?JSON.parse(localStorage.getItem("todo")):[],this.todos=this.todos.map(o.fromJson)}}]),t}();function l(t,e){var o="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!o){if(Array.isArray(t)||(o=function(t,e){if(t){if("string"==typeof t)return c(t,e);var o=Object.prototype.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?c(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){o&&(t=o);var n=0,r=function(){};return{s:r,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a=!0,i=!1;return{s:function(){o=o.call(t)},n:function(){var t=o.next();return a=t.done,t},e:function(t){i=!0,t},f:function t(){try{a||null==o.return||o.return()}finally{if(i)throw t}}}}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var o=0,n=Array(e);o<e;o++)n[o]=t[o];return n}var u=document.querySelector(".todo-list"),s=document.querySelector(".new-todo"),d=document.querySelector(".clear-completed"),f=document.querySelector(".filters"),m=document.querySelectorAll(".filtro"),v=function(t){var e='\n    <li class="'.concat(t.completado?"completed":"",'" data-id="').concat(t.id,'">\n\t\t<div class="view">\n\t\t\t<input class="toggle" type="checkbox" ').concat(t.completado?"checked":"",">\n\t\t\t<label>").concat(t.tarea,'</label>\n\t\t\t<button class="destroy"></button>\n\t\t</div>\n\t\t<input class="edit" value="Create a TodoMVC template">\n\t</li>'),o=document.createElement("div");return o.innerHTML=e,u.append(o.firstElementChild),o.firstElementChild};s.addEventListener("keyup",(function(t){if(13===t.keyCode&&0<s.value.length){console.log(s.value);var e=new o(s.value);y.nuevoTodo(e),console.log(y),v(e),s.value=""}})),u.addEventListener("click",(function(t){var e=t.target.localName,o=t.target.parentElement.parentElement,n=o.getAttribute("data-id");e.includes("input")?(y.marcarCompletado(n),o.classList.toggle("completed")):e.includes("button")&&(y.eliminarTodo(n),u.removeChild(o))})),d.addEventListener("click",(function(){y.eliminarCompletados();for(var t,e=u.children.length-1;0<=e;e--)(t=u.children[e]).classList.contains("completed")&&u.removeChild(t)})),f.addEventListener("click",(function(t){var e=t.target.text;if(e){m.forEach((function(t){return t.classList.remove("selected")})),t.target.classList.add("selected");var o,n=l(u.children);try{for(n.s();!(o=n.n()).done;){var r=o.value;r.classList.remove("hidden");var a=r.classList.contains("completed");"Pendientes"===e?a&&r.classList.add("hidden"):"Completados"===e&&(a||r.classList.add("hidden"))}}catch(t){n.e(t)}finally{n.f()}}}));var y=new i;y.todos.forEach(v),console.log("todos",y.todos)})();