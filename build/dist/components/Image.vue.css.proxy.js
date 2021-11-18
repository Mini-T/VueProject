// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".desctitle {\n  margin-top: 0px;\n  font-weight: 800;\n  font-size: 40px;\n}\n.descsubtitle {\n  font-weight: 200;\n  font-size: 25px;\n  margin-bottom: 0px;\n}\n#reserver {\n  color: white;\n  background: linear-gradient(72.83deg, #d48ae6 0%, #9a82fc 100%);\n  border-radius: 14px;\n  border: none;\n  font-size: 25px;\n  font-weight: 800;\n  text-transform: uppercase;\n  width: 219px;\n  height: 75px;\n}\n.left {\n  padding: 50px;\n  padding-left: 100px;\n  width: 100%;\n  justify-self: flex-start;\n}\n.right {\n  display: flex;\n  width: 100%;\n  justify-content: flex-end;\n  padding: 50px;\n}\n#image {\n  background-size: cover;\n  background-position: center;\n  border-radius: 0px 0px 75px 75px;\n  width: 85vw;\n  height: 750px;\n  grid-area: img;\n}\n#darklayer {\n  border-radius: 0px 0px 75px 75px;\n  display: flex;\n  align-items: flex-end;\n  background: linear-gradient(360deg, rgba(37, 26, 35, 0.98) 0%, rgba(37, 26, 35, 0) 100%);\n  width: 100%;\n  height: 100%;\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}