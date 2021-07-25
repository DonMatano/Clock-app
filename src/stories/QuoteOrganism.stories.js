import QuoteOrganism from '../components/atomic/organisms/QuoteOrganism.vue';

export default {
  title: 'Organisms/QuoteOrganism',
  component: QuoteOrganism,
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { QuoteOrganism },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `
    <div class="bg-nighttime-mobile p-4">
      <QuoteOrganism v-bind="args" />
    </div>
  `,
});

export const Default = Template.bind({});
