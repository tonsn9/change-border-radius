import { useRef } from "react";

export default function BoardRadiusPreviewer() {
  const topLeft = useRef();
  const topRight = useRef();
  const bottomRight = useRef();
  const bottomLeft = useRef();

  const cssPreviewer = useRef();
  const radiusPreviewer = useRef();

  const modificarCss = () => {
    const codeCornerBorder = `border-radius: ${topLeft.current.value}px ${topRight.current.value}px ${bottomLeft.current.value}px ${bottomRight.current.value}px  ;
      border-top-left-radius: ${topLeft.current.value || 0}px;
      border-top-right-radius: ${topRight.current.value || 0}px;
      border-bottom-left-radius: ${bottomLeft.current.value || 0}px;
      border-bottom-right-radius: ${bottomRight.current.value || 0}px;
     `;
    cssPreviewer.current.value = codeCornerBorder;
  };

  const modificarElemento = (e) => {
    e.preventDefault();
    const canto = e.target.getAttribute("data-bordaParaModificar");
    const valorDoCanto = e.target.value;
    radiusPreviewer.current.style[
      `border-${canto}-radius`
    ] = `${valorDoCanto}px`;

    modificarCss();
  };

  const copyCss = () => {
    cssPreviewer.current.select();
    document.execCommand("copy", false, null);
  };

  return (
    <div className="BoardRadiusPreviewer">
      <div className="BoardRadiusPreviewer-Settings">
        <h2>Controles</h2>
        <ul className="BoardRadiusPreviewer-List">
          <li>
            <label htmlFor="topLeft-input">Superior Esquerdo</label>
            <input
              id="topLeft-input"
              type="number"
              ref={topLeft}
              onChange={modificarElemento}
              data-bordaParaModificar="top-left"
            />
          </li>
          <li>
            <label htmlFor="topRight-input">Superior Direito</label>
            <input
              id="topRight-input"
              type="number"
              ref={topRight}
              onChange={modificarElemento}
              data-bordaParaModificar="top-right"
            />
          </li>
          <li>
            <label htmlFor="bottomRight-input">Inferior Direito</label>
            <input
              id="bottomRight-input"
              type="number"
              ref={bottomRight}
              onChange={modificarElemento}
              data-bordaParaModificar="bottom-right"
            />
          </li>
          <li>
            <label htmlFor="bottomLeft-input">Inferior Esquerdo</label>
            <input
              id="bottomLeft-input"
              type="number"
              ref={bottomLeft}
              onChange={modificarElemento}
              data-bordaParaModificar="bottom-left"
            />
          </li>
        </ul>
      </div>
      <div
        className="BoardRadiusPreviewer-Previewer"
        ref={radiusPreviewer}
      ></div>
      <div className="BoardRadiusPreviewer-Css">
        <h2>Css</h2>
        <textarea
          className="BoardRadiusPreviewer-CssInput"
          ref={cssPreviewer}
          rows="10"
          id="copiar-css"
        ></textarea>
        <button onClick={copyCss}>Copiar CSS</button>
      </div>
    </div>
  );
}
