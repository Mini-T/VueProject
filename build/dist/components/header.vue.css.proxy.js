// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".header {\n  height: 53vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  z-index: 1;\n}\n.bigtitle {\n  margin: 0px;\n  line-height: 75px;\n  font-size: 60px;\n}\n.subtitle {\n  margin: 0px;\n  text-align: center;\n  font-size: 50px;\n  background: -webkit-linear-gradient(left, #d99cf0 -2.19%, #927bf9 102.14%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n#svgcaca {\n  position: absolute;\n  top: 243px;\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}