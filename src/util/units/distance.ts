import type { Miles, Feet } from "@/types/units/distances";

/**
 * Converts a given amount of distance to miles.
 * @param distance - The distance to be converted to miles.
 * @param unit - What kind of number is to be converted?
 * @returns The number of miles as a float.
 */
export function toMiles(distance: Feet, unit: "feet"): Miles {
	// This is a switch statement in case I add anything to it in the future.
	switch (unit) {
		case "feet":
			return distance / 5280; // See toSeconds
	}
}
