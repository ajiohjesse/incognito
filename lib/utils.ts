import { clsx, type ClassValue } from 'clsx';
import { jwtVerify } from 'jose';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getUserFromToken = async (token: string | null | undefined) => {
  if (!token) return null;

  try {
    const { payload } = await jwtVerify(
      token,
      new TextEncoder().encode(process.env.JWT || ''),
    );
    return payload as unknown as { userName: string };
  } catch (error) {
    return null;
  }
};

export function getWords(input: string, count: number): string {
  const words = input.split(/\s+/);
  const selectedWords = words.slice(0, count);
  return selectedWords.join(' ');
}

export function formatCustomDate(dateString: string): string {
  function getDaySuffix(day: number): string {
    if (day >= 11 && day <= 13) {
      return 'th';
    }
    switch (day % 10) {
      case 1:
        return 'st';
      case 2:
        return 'nd';
      case 3:
        return 'rd';
      default:
        return 'th';
    }
  }

  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'short' });
  const year = date.getFullYear().toString().slice(-2);
  const hour = date.getHours();
  const minute = date.getMinutes();
  const ampm = hour >= 12 ? 'pm' : 'am';
  const formattedDate = `${day}${getDaySuffix(day)} ${month}, ${year} at ${
    hour % 12 || 12
  }:${minute.toString().padStart(2, '0')}${ampm}`;
  return formattedDate;
}
