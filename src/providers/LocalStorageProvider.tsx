'use client';

import React, { createContext, ReactNode, useMemo } from 'react';

export interface LocalStorageValue { localStorageFail: boolean; }

export const LocalStorageContext = createContext<LocalStorageValue>({ localStorageFail: true });

export default function LocalStorageProvider({ children }: { children: ReactNode }) {
  let storage: Storage | boolean = false;
  let fail = true;
  try {
    const uid = new Date().getDate().toLocaleString();
    (storage = window.localStorage).setItem(uid, uid);
    fail = storage.getItem(uid) !== uid;
    storage.removeItem(uid);
    if (fail) storage = false;
  } catch (err) { /* empty */ }

  const providerValue = useMemo(() => ({
    localStorageFail: fail,
  }), [fail]);

  return (
    <LocalStorageContext.Provider value={providerValue}>
      {children}
    </LocalStorageContext.Provider>
  );
}
