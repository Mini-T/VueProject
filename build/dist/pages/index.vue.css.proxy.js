// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "body {\n  background-color: white;\n}\nhtml ::-webkit-scrollbar {\n  display: none;\n  overflow-x: hidden;\n}\n.home {\n  padding: 0px;\n  background: radial-gradient(51.9% 336.54% at 51.9% 50%, #241b4d 0%, #1b1b1b 100%);\n  border-radius: 0px 0px 150px 150px;\n  background-size: cover;\n  background-repeat: no-repeat;\n  margin: 0px;\n  color: white;\n  width: 100vw;\n  height: 2459px;\n  left: 0px;\n  top: 0px;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n}\n.prefooter {\n  height: 780px;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}