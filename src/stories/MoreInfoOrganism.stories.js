import MoreInfoOrganism from '../components/atomic/organisms/MoreInfoOrganism.vue';

export default {
  title: 'Organisms/MoreInfoOrganism',
  component: MoreInfoOrganism,
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { MoreInfoOrganism },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `
    <div class="h-screen bg-daytime-mobile bg-cover">
      <MoreInfoOrganism v-bind="args" />
    </div>
  `,
});

export const Default = Template.bind({});
