'use client';

import React from 'react';
import {
  makeStyles,
  tokens,
  Title1,
} from '@fluentui/react-components';
import { MissionSection } from './components/MissionSection';
import { ValuesSection } from './components/ValuesSection';
import { TeamSection } from './components/TeamSection';

const useStyles = makeStyles({
  container: {
    padding: '2rem',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  header: {
    textAlign: 'center',
    marginBottom: '3rem',
    color: tokens.colorBrandForeground1,
  },
});

export default function AboutPage() {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <Title1 className={styles.header}>About Fluxline.pro</Title1>
      <MissionSection />
      <ValuesSection />
      <TeamSection />
    </div>
  );
}
