import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { AnotherComponent } from './another-component.component';

export default {
  title: 'AnotherComponent',
  component: AnotherComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<AnotherComponent>;

const Template: Story<AnotherComponent> = (args: AnotherComponent) => ({
  component: AnotherComponent,
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
}