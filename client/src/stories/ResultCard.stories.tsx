import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ResultCard from '../components/ui/ResultCard';
import { Results } from 'shared/poll-types';

export default {
  title: 'ResultCard',
  component: ResultCard,
} as ComponentMeta<typeof ResultCard>;

const Template: ComponentStory<typeof ResultCard> = (args) => (
  <div className="h-screen max-w-sm m-auto">
    <ResultCard {...args} />
  </div>
);

const results: Results = [
  {
    nominationID: '1',
    score: 5.0,
    nominationText: 'test',
  },
  {
    nominationID: '2',
    score: 2.56,
    nominationText: 'test1',
  },
  {
    nominationID: '3',
    score: 2.4,
    nominationText: "test2",
  },
  {
    nominationID: '4',
    score: 1.55,
    nominationText: 'test3',
  },
  {
    nominationID: '5',
    score: 1.41,
    nominationText: 'test4',
  },
  {
    nominationID: '6',
    score: 1.11,
    nominationText: 'test5',
  },
  {
    nominationID: '7',
    score: 0.0,
    nominationText: 'test6',
  },
];

export const ResultCardLong = Template.bind({});
ResultCardLong.args = {
  results,
};