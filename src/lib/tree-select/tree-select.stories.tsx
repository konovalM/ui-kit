import type { Meta, StoryObj } from '@storybook/react';
import { TreeSelect } from '@chirp/ui/lib';

const meta: Meta<typeof TreeSelect> = {
    title: 'UI/TreeSelect',
    component: TreeSelect,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof TreeSelect>;

export const Default: Story = {
    render: () => (
        <TreeSelect
            selectProps={{
                fullWidth: true,

                label: 'Select sub-location (optional)',
                placeholder: 'Select sub-location (optional)',
            }}
            options={[
                {
                    id: '1',
                    label: 'Parent 1',
                    children: [
                        { id: '2', label: 'Child 1-1' },
                        { id: '3', label: 'Child 1-2', children: [{ id: '4', label: 'Grandchild 1-2-1' }] },
                    ],
                },
                {
                    id: '5',
                    label: 'Parent 2',
                    children: [{ id: '6', label: 'Child 2-1' }],
                },
            ]}
        />
    ),
};
