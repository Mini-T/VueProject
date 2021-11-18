// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "footer {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background: #fafafa;\n  width: 100%;\n  height: 120px;\n}\n.footerlink {\n  transition: all ease-in 300ms;\n  margin: 50px;\n  font-style: normal;\n  padding-bottom: 5px;\n  font-weight: 300;\n  font-size: 20px;\n  line-height: 25px;\n  color: #000000 !important;\n  border-bottom: solid 1px transparent;\n}\n.footerlink:hover {\n  padding-bottom: 0px;\n  border-bottom: solid 1px #9900ff;\n  background: -webkit-linear-gradient(left, #d99cf0 -2.19%, #927bf9 102.14%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n#issuenumber {\n  font-weight: 600;\n}\n#logo {\n  margin-left: 50px;\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}