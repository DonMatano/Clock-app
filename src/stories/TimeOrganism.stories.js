import TimeOrganism from '../components/atomic/organisms/TimeOrganism.vue';

export default {
  title: 'Organisms/TimeOrganism',
  component: TimeOrganism,
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { TimeOrganism },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `
    <div class="bg-nighttime-mobile p-3">
      <TimeOrganism v-bind="args" />
    </div>
  `,
});

export const Default = Template.bind({});
