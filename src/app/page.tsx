'use client';

import React from 'react';
import {
  makeStyles,
  tokens,
  Title1,
  Title3,
  Body1,
  Button,
  Card,
  CardHeader,
} from '@fluentui/react-components';
import Link from 'next/link';

const useStyles = makeStyles({
  container: {
    padding: '2rem',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  hero: {
    padding: '4rem 2rem',
    textAlign: 'center',
    backgroundColor: tokens.colorNeutralBackground2,
    borderRadius: tokens.borderRadiusLarge,
    marginBottom: '3rem',
  },
  title: {
    marginBottom: '1rem',
    color: tokens.colorBrandForeground1,
  },
  subtitle: {
    marginBottom: '2rem',
    color: tokens.colorNeutralForeground2,
  },
  actions: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  features: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
    marginTop: '3rem',
  },
  card: {
    padding: '1.5rem',
  },
});

export default function Home() {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <Title1 className={styles.title}>
          Welcome to Fluxline.pro
        </Title1>
        <Body1 className={styles.subtitle}>
          Professional services and solutions for modern businesses
        </Body1>
        <div className={styles.actions}>
          <Link href="/services">
            <Button appearance="primary" size="large">
              Explore Services
            </Button>
          </Link>
          <Link href="/about">
            <Button appearance="secondary" size="large">
              Learn More
            </Button>
          </Link>
        </div>
      </div>

      <div className={styles.features}>
        <Card className={styles.card}>
          <CardHeader
            header={<Title3>Modern Solutions</Title3>}
            description={
              <Body1>
                Cutting-edge technology solutions tailored to your business needs
              </Body1>
            }
          />
        </Card>

        <Card className={styles.card}>
          <CardHeader
            header={<Title3>Expert Team</Title3>}
            description={
              <Body1>
                Experienced professionals dedicated to delivering excellence
              </Body1>
            }
          />
        </Card>

        <Card className={styles.card}>
          <CardHeader
            header={<Title3>Proven Results</Title3>}
            description={
              <Body1>
                Track record of successful projects and satisfied clients
              </Body1>
            }
          />
        </Card>
      </div>
    </div>
  );
}
