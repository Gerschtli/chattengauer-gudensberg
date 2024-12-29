import type { EventData } from './types';

export const TIME_ZONE = 'Europe/Berlin';

export function getStart(time: EventData['time']) {
	switch (time.type) {
		case 'all-day': {
			return new Date(time.day);
		}
		case 'range': {
			return time.start;
		}
	}
}

export function getEnd(time: EventData['time']) {
	switch (time.type) {
		case 'all-day': {
			const date = new Date(time.day);
			date.setDate(date.getDate() + 1);
			date.setHours(date.getHours() + 6);

			return date;
		}
		case 'range': {
			return time.end;
		}
	}
}
