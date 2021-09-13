import { CalendarSelectionMode } from '@ui5/webcomponents-react/lib/CalendarSelectionMode';
import { CalendarType } from '@ui5/webcomponents-react/lib/CalendarType';
import { withWebComponent, WithWebComponentPropTypes } from '@ui5/webcomponents-react/lib/withWebComponent';
import '@ui5/webcomponents/dist/Calendar';
import { FC, ReactNode } from 'react';

export interface CalendarPropTypes extends WithWebComponentPropTypes {
  /**
   * Defines the visibility of the week numbers column.
   *
   * **Note: **For calendars other than Gregorian, the week numbers are not displayed regardless of what is set.****
   */
  hideWeekNumbers?: boolean;
  /**
   * Defines the type of selection used in the calendar component. Accepted property values are:
   *
   * *   `CalendarSelectionMode.Single` - enables a single date selection.(default value)
   * *   `CalendarSelectionMode.Range` - enables selection of a date range.
   * *   `CalendarSelectionMode.Multiple` - enables selection of multiple dates.
   */
  selectionMode?: CalendarSelectionMode;
  /**
   * Determines the format, displayed in the input field.
   */
  formatPattern?: string;
  /**
   * Determines the maximum date available for selection.
   */
  maxDate?: string;
  /**
   * Determines the мinimum date available for selection.
   */
  minDate?: string;
  /**
   * Sets a calendar type used for display. If not set, the calendar type of the global configuration is used.<br/>__Note:__ Calendar types other than Gregorian must be imported manually:<br />`import "@ui5/webcomponents-localization/dist/features/calendar/{primaryCalendarType}.js";`
   */
  primaryCalendarType?: CalendarType;
  /**
   * Defines the secondary calendar type. If not set, the calendar will only show the primary calendar type.
   */
  secondaryCalendarType?: CalendarType;
  /**
   * Defines the selected date or dates (depending on the `selectionMode` property) for this calendar as instances of `CalendarDate`
   */
  children?: ReactNode | ReactNode[];
  /**
   * Fired when the selected dates change. **Note:** If you call `preventDefault()` for this event, `Calendar` will not create instances of `CalendarDate` for the newly selected dates. In that case you should do this manually.
   */
  onSelectedDatesChange?: (event: CustomEvent<{ values: unknown[]; dates: unknown[] }>) => void;
}

/**
 * The `Calendar` component allows users to select one or more dates.
 *
 * Currently selected dates are represented with instances of `CalendarDate` as children of the `Calendar`. The value property of each `CalendarDate` must be a date string, correctly formatted according to the `Calendar`'s `formatPattern` property. Whenever the user changes the date selection, `Calendar` will automatically create/remove instances of `CalendarDate` in itself, unless you prevent this behavior by calling `preventDefault()` for the `selected-dates-change` event. This is useful if you want to control the selected dates externally.
 *
 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/Calendar" target="_blank">UI5 Web Components Playground</a>
 */
const Calendar: FC<CalendarPropTypes> = withWebComponent<CalendarPropTypes>(
  'ui5-calendar',
  ['selectionMode', 'formatPattern', 'maxDate', 'minDate', 'primaryCalendarType', 'secondaryCalendarType'],
  ['hideWeekNumbers'],
  [],
  ['selected-dates-change']
);

Calendar.displayName = 'Calendar';

Calendar.defaultProps = {
  hideWeekNumbers: false,
  selectionMode: CalendarSelectionMode.Single
};

export { Calendar };
