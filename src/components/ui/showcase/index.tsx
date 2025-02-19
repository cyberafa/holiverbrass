import { ProductShowcaseApp } from "@sections";
import { ShowcaseTypes } from "./types";
import "./style.scss";

function UiShowcase({ products }: ShowcaseTypes): JSX.Element {
  return (
    <div className="ui-showcase">
      <header className="ui-showcase-header">
        <div className="ui-showcase-category">
          {"categoria"} <span>/</span> {"categoria"}
        </div>
        <div className="ui-showcase-filter">
          <label htmlFor="filter">Organizar por</label>
          <select name="filter">
            <option value="Selecione" selected disabled>
              Selecione
            </option>
          </select>
        </div>
      </header>
      <ProductShowcaseApp products={products} />
    </div>
  );
}

export default UiShowcase;
