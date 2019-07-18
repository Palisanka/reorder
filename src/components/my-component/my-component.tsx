import { Component, h} from '@stencil/core';
import "@ionic/core"

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css'
})
export class MyComponent {

  reorder(event){
    event.detail.complete();
  }

  componentDidLoad() {
    const reordersElm = document.querySelectorAll('ion-reorder');
    reordersElm.forEach((elm) => {
      console.log(elm);
      elm.addEventListener('click', () => {
        console.log('click not canceled'); // doesn't log since 'ion-reorder' prevent and stopPropagation
      });
    });
  }

  render() {
    return [
      <ion-list>
        <ion-reorder-group disabled={false} onIonItemReorder={ev => this.reorder(ev)} >
          <ion-reorder>
            <ion-item>
              <ion-label>Test 1</ion-label>
            </ion-item>
          </ion-reorder>
          <ion-reorder>
            <ion-item>
              <ion-label>Test 2</ion-label>
            </ion-item>
          </ion-reorder>
          <ion-reorder>
            <ion-item>
              <ion-label>Test 3</ion-label>
            </ion-item>
          </ion-reorder>
          <ion-reorder>
            <ion-item>
              <ion-label>Test 4</ion-label>
            </ion-item>
          </ion-reorder>
        </ion-reorder-group>
      </ion-list>
    ];
  }
}
