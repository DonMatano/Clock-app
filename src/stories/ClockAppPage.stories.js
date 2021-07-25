import ClockApp from '../components/atomic/pages/ClockApp.vue';

export default {
  title: 'Pages/ClockApp',
  component: ClockApp,
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { ClockApp },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `
      <ClockApp class="h-screen bg-cover bg-blend-darken" v-bind="args" />
  `,
});

export const Default = Template.bind({});
