"use server";

import { cookies } from 'next/headers';

export async function removeCookie(name) {
  const cookieStore = cookies();

  cookieStore.set({
    name: name,
    value: '',
    expires: new Date(0), // Expire the cookie immediately
    path: '/',
  });

  return { success: true };
}
