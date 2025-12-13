'use client';

import React from 'react';
import {
  makeStyles,
  tokens,
  Title2,
  Body1,
  Card,
  CardHeader,
} from '@fluentui/react-components';

const useStyles = makeStyles({
  section: {
    padding: '2rem',
    marginBottom: '2rem',
  },
  title: {
    marginBottom: '2rem',
    color: tokens.colorBrandForeground1,
  },
  values: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '1.5rem',
  },
  card: {
    padding: '1rem',
  },
});

const values = [
  {
    title: 'Innovation',
    description: 'We embrace cutting-edge technologies and creative solutions to solve complex problems.',
  },
  {
    title: 'Quality',
    description: 'We are committed to delivering the highest quality in everything we do.',
  },
  {
    title: 'Integrity',
    description: 'We operate with transparency, honesty, and ethical practices in all our interactions.',
  },
  {
    title: 'Collaboration',
    description: 'We believe in the power of teamwork and strong partnerships with our clients.',
  },
];

export const ValuesSection: React.FC = () => {
  const styles = useStyles();

  return (
    <section className={styles.section}>
      <Title2 className={styles.title}>Our Values</Title2>
      <div className={styles.values}>
        {values.map((value) => (
          <Card key={value.title} className={styles.card}>
            <CardHeader
              header={<Body1><strong>{value.title}</strong></Body1>}
              description={<Body1>{value.description}</Body1>}
            />
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ValuesSection;
