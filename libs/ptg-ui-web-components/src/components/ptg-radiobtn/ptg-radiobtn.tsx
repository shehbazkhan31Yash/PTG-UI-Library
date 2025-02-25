import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'ptg-radiobtn',
  styleUrl: 'ptg-radiobtn.css',
  // scoped:true,
  // shadow: true,
})
export class PtgRadiobtn {

  @Prop() name: string;

  @Prop() value: string;

  @Prop() ids: string;

  @Prop() sender: string;

  @Prop() type: string;

  render() {
    return (
      <div>
      <label>
      <input type= {this.type} id= {this.ids} name={this.name} value={this.value}> </input> {this.sender}
      </label>
      </div >
    );
  }
}