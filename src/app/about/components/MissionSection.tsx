'use client';

import React from 'react';
import {
  makeStyles,
  tokens,
  Title2,
  Body1,
} from '@fluentui/react-components';

const useStyles = makeStyles({
  section: {
    padding: '2rem',
    marginBottom: '2rem',
    backgroundColor: tokens.colorNeutralBackground2,
    borderRadius: tokens.borderRadiusMedium,
  },
  title: {
    marginBottom: '1rem',
    color: tokens.colorBrandForeground1,
  },
  content: {
    lineHeight: '1.6',
    color: tokens.colorNeutralForeground2,
  },
});

export const MissionSection: React.FC = () => {
  const styles = useStyles();

  return (
    <section className={styles.section}>
      <Title2 className={styles.title}>Our Mission</Title2>
      <Body1 className={styles.content}>
        At Fluxline.pro, we are dedicated to delivering exceptional services and solutions
        that empower businesses to thrive in the digital age. Our mission is to provide
        innovative, reliable, and scalable solutions that drive growth and success for our clients.
      </Body1>
    </section>
  );
};

export default MissionSection;
