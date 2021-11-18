// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "a {\n  color: white;\n  text-decoration: none;\n}\n#links {\n  width: 100%;\n  order: 2;\n  height: 100%;\n  display: flex;\n  align-items: center;\n}\n.link {\n  width: min-content;\n  transition: all ease-in 300ms;\n  border-bottom: solid 1px transparent;\n  transition: all ease-in 300ms;\n  margin: 0px 25px 0px 25px;\n  padding: 10PX;\n}\n.link:hover {\n  padding-bottom: 5px;\n  color: white;\n  border-bottom: solid 1px #d89cff;\n}\n#number {\n  font-size: 20px;\n  font-weight: lighter;\n  justify-self: flex-end;\n  order: 3;\n  width: 250px;\n  padding: 20px;\n}\n#buuk {\n  order: 1;\n  margin: 0px;\n  font-weight: 800;\n  font-size: 30px;\n  padding: 20px 25px 20px 25px;\n}\n.navhr {\n  height: 75px;\n  border: 1px solid #595959;\n  margin: 0px 15px 0px 15px;\n}\n.nav {\n  border-bottom: 1px solid #595959;\n  height: 75px;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  margin: unset;\n  font-size: 20px;\n  font-weight: 300;\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}