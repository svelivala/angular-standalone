import type { Meta, StoryObj } from "@storybook/angular";

import { MyButtonComponent } from "../lib/button/button.component";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<MyButtonComponent> = {
    title: "Example/My-button",
    component: MyButtonComponent,
    tags: ["autodocs"],
    render: (args: MyButtonComponent) => ({
        props: {
            backgroundColor: null,
            ...args,
        },
    }),
    argTypes: {},
};

export default meta;
type Story = StoryObj<MyButtonComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Small: Story = {
    args: {
        size: "sm",
        title: "test",
    },
};

export const Secondary: Story = {
    args: {
        size: "sm",
        title: "test",
        type: "primary",
    },
};

export const Large: Story = {
    args: {
        size: "sm",
        title: "test",
    },
};
