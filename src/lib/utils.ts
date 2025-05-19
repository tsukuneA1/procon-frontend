import { type ClassValue, clsx } from "clsx";
import { formatDistanceToNow } from "date-fns";
import { ja } from "date-fns/locale";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function getTimeDistance(dateString: string) {
	const date = new Date(dateString);
	return formatDistanceToNow(date, { addSuffix: true, locale: ja });
}
