// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".line {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n#mobile {\n  width: 800px;\n}\n.normaltext {\n  font-family: Sora;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 24px;\n  line-height: 30px;\n  color: #000000;\n}\n#applestore {\n  background-image: url(\"/images/applestore.png\");\n  background-size: initial;\n  background-repeat: no-repeat;\n  width: 300px;\n  height: 100px;\n}\n#googlestore {\n  margin-top: 20px;\n  background-image: url(\"/images/googlestore.png\");\n  background-size: cover;\n  width: 300px;\n  height: 100px;\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}