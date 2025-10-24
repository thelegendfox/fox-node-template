import type { FeetPerSecond, MilesPerHour } from "@/types/units/speeds";

/**
 * Converts a given speed to feet per second.
 * @param speed - The distance to be converted to fps.
 * @param unit - What kind of number is to be converted?
 * @returns The fps as an integer.
 */
export function toFeetPerSecond(distance: MilesPerHour, unit: "mph"): FeetPerSecond {
	// This is a switch statement in case I add anything to it in the future.
	switch (unit) {
		case "mph":
			return Math.round(distance * 1.46667); // See toSeconds
	}
}
