'use client';

import React from 'react';
import { FluentProvider } from '@fluentui/react-components';
import { fluxlineLightTheme } from '@/theme/theme';
import Header from '@/components/Header';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <FluentProvider theme={fluxlineLightTheme}>
      <Header />
      <main>{children}</main>
    </FluentProvider>
  );
}
