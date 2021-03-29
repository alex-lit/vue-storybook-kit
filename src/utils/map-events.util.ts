import { action } from '@storybook/addon-actions';

/**
 * Маппит имена событий на вызов addon-actions
 *
 * @param eventsNames Массив имен событий
 */
export function mapEvents(eventsNames: readonly string[]) {
  const eventsMap: Record<string, (payload: any) => void> = {};

  eventsNames.forEach((event) => {
    eventsMap[event] = (payload) => action(event)(payload);
  });

  return eventsMap;
}
