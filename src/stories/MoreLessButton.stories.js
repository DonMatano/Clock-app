import MoreLessButton from '../components/atomic/molecules/MoreLessButton.vue';

export default {
  title: 'Molecules/MoreLessButton',
  component: MoreLessButton,
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { MoreLessButton },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `
    <div class="bg-gray-800 p-2">
      <MoreLessButton v-bind="args" />
    </div>
  `,
});

export const Default = Template.bind({});
