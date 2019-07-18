import { Component, ComponentInterface, Listen, h } from '@stencil/core';

// TODO: fix getIonMode import -> use of 'ios' for dev
// import { getIonMode } from '../../global/ionic-global';
// import { getIonMode } from '../../../node_modules/@ionic/core/dist/types/global/ionic-global';

@Component({
  tag: 'my-reorder',
  styleUrls: {
    ios: 'reorder.ios.scss',
    md: 'reorder.md.scss',
  },
  shadow: true
})
export class Reorder implements ComponentInterface {

  @Listen('click', { capture: true })
  onClick() {
    // ev.preventDefault();
    // ev.stopImmediatePropagation();
    console.log('click');
  }

  hostData() {
    const mode = 'ios';
    // const mode = getIonMode();
    return {
      class: {
        [mode]: true,
      }
    };
  }

  render() {
    return (
      <slot>
        <ion-icon name="reorder" lazy={false} class="reorder-icon" />
      </slot>
    );
  }

}
