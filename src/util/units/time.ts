import type { Seconds, Minutes, Hours } from "@/types/units/times";

/**
 * Converts a given amount of time to seconds.
 * @param time - The time to be converted to seconds.
 * @param unit - What kind of number is to be converted?
 * @returns The number of seconds as an integer.
 */
export function toSeconds(
	time: Seconds | Hours,
	unit: "milliseconds" | "minutes" | "hours",
): Seconds {
	// This is a switch statement in case I add anything to it in the future.
	switch (unit) {
		case "milliseconds":
			return Math.round(time / 1000); // I made this one last actually no comments for you
		case "minutes":
			return Math.round(time * 60);
		case "hours":
			return Math.round(time * 3600);
	}
}

/**
 * Converts a given amount of time to minutes.
 * @param time - The time to be converted to minutes.
 * @param unit - What kind of number is to be converted?
 * @returns The number of minutes as a float.
 */
export function toMinutes(
	time: Seconds | Hours,
	unit: "milliseconds" | "seconds" | "hours",
): Minutes {
	// This is a switch statement in case I add anything to it in the future.
	switch (unit) {
		case "milliseconds":
			return time / 3600; // Divide ms by 60000 for minutes
		case "seconds":
			return time / 60; // Divide seconds by 60 to get minutes
		case "hours":
			return time * 60; // Ofc times by 60 to get minutes
	}
}

/**
 * Converts a given amount of time to hours.
 * @param time - The time to be converted to hours.
 * @param unit - What kind of number is to be converted?
 * @returns The number of hours as a float.
 */
export function toHours(
	time: Seconds | Hours,
	unit: "milliseconds" | "seconds" | "minutes",
): Hours {
	// This is a switch statement in case I add anything to it in the future.
	switch (unit) {
		case "milliseconds":
			return time / 3.6e6; // Divide ms by that for hours
		case "seconds":
			return time / 3600; // Divide seconds by 3600 for hours
		case "minutes":
			return time / 60; // You get the damn drill by now
	}
}
