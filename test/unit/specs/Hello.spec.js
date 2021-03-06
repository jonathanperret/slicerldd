import Vue from 'vue';
import Hello from 'src/components/Hello';

describe('Hello.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Hello);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('.hello h1').textContent)
      .to.equal('Welcome to my web slicer !!!!!!!!');
    expect(vm.$el.querySelector('canvas'))
      .to.not.be.null;
  });
});
