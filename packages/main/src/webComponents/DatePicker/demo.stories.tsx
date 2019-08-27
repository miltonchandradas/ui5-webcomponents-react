import { action } from '@storybook/addon-actions';
import { boolean, select } from '@storybook/addon-knobs';
import React from 'react';
import { CalendarType } from '../../lib/CalendarType';
import { DatePicker } from '../../lib/DatePicker';
import { ValueState } from '../../lib/ValueState';

export default {
  title: 'UI5 Web Components | DatePicker',
  component: DatePicker
};

export const generatedDefaultStory = () => (
  <DatePicker
    value={'generatedString'}
    valueState={select('valueState', ValueState, null)}
    formatPattern={'generatedString'}
    primaryCalendarType={select('primaryCalendarType', CalendarType, null)}
    disabled={boolean('disabled', false)}
    readonly={boolean('readonly', false)}
    placeholder={'generatedString'}
    onChange={action('onChange')}
    onInput={action('onInput')}
  />
);

generatedDefaultStory.story = {
  name: 'Generated default story'
};
