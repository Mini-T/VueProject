// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "#artistes {\n  width: 85vw;\n  display: flex;\n  flex-direction: row;\n}\n.onglet {\n  cursor: pointer;\n  transition: all ease-in 300ms;\n  font-weight: 800;\n  font-size: 25px;\n  border-left: solid 1px;\n  border-right: solid 1px;\n  border-image: linear-gradient(to top, grey 20%, transparent 80%) 1;\n  border-top: none;\n  border-bottom: none;\n  color: white;\n  width: 17vw;\n  height: 10vh;\n  background: transparent;\n}\n.onglet:hover {\n  background-color: #da8be313;\n  border-left: solid 1px #da8be317;\n  border-right: solid 1px #da8be317;\n  border-top: none;\n  border-bottom: none;\n  border-radius: 30px 30px 0px 0px;\n}\n.active {\n  border-radius: 30px 30px 0px 0px;\n  border: none;\n  background: linear-gradient(75.5deg, #da8be3 0%, #9681fd 95.43%);\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}