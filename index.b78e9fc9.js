var e=document.querySelector(".append-row"),t=document.querySelector(".remove-row"),n=document.querySelector(".append-column"),r=document.querySelector(".remove-column");n.addEventListener("click",function(){document.querySelectorAll("tr").forEach(function(e){e.insertAdjacentHTML("beforeend","<td></td>")});var e=document.querySelector("tr");e.children.length>9&&(n.disabled=!0),e.children.length>2&&(r.disabled=!1)}),r.addEventListener("click",function(){document.querySelectorAll("tr").forEach(function(e){e.lastElementChild.remove()});var e=document.querySelector("tr");e.children.length<3&&(r.disabled=!0),e.children.length<10&&(n.disabled=!1)}),e.addEventListener("click",function(){var n=document.querySelector("tbody"),r=document.querySelector("tr");n.insertAdjacentHTML("beforeEnd","".concat(r.outerHTML));var d=document.querySelectorAll("tr");d.length>9&&(e.disabled=!0),d.length>2&&(t.disabled=!1)}),t.addEventListener("click",function(){var n=document.querySelector("tbody");n.lastElementChild.remove(),n.children.length<3&&(t.disabled=!0),n.children.length<10&&(e.disabled=!1)});//# sourceMappingURL=index.b78e9fc9.js.map

//# sourceMappingURL=index.b78e9fc9.js.map
