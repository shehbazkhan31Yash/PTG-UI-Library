import { Component, h, Prop, State } from '@stencil/core';

export type selectInterface = {
  selectData: { id: number; caption: string }[];
};

@Component({
  tag: 'ptg-select',
  styleUrl: 'ptg-select.scss',
  shadow: true,
})
export class PtgSelect implements selectInterface {
  @Prop() selectData: any;
  @Prop() multiSelect: boolean = false;
  @State() expanded: boolean = false;

  private showCheckboxes = () => {
    this.expanded = !this.expanded;
  };

  render() {
    console.log(this.multiSelect);
    return (
      <div>
        {!this.multiSelect && (
          <select id="optionValue">
            <option selected>select</option>
            {this.selectData.map((option) => {
              return <option value={option.caption}>{option.caption}</option>;
            })}
          </select>
        )}
        {this.multiSelect && (
          <div class="multiselect">
            <div class="selectBox" onClick={() => this.showCheckboxes()}>
              <div class="overSelect">Select</div>
            </div>
            {this.expanded && (
              <ul>
                <li>
                  <label htmlFor="one">
                    <input type="checkbox" id="one" />
                    First checkbox
                  </label>
                </li>
                <li>
                  <label htmlFor="two">
                    <input type="checkbox" id="two" />
                    Second checkbox
                  </label>
                </li>
                <li>
                  <label htmlFor="three">
                    <input type="checkbox" id="three" />
                    Third checkbox
                  </label>
                </li>
              </ul>
            )}
          </div>
        )}
      </div>
    );
  }
}
