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
