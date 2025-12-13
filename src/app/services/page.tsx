'use client';

import React from 'react';
import {
  makeStyles,
  tokens,
  Title1,
  Body1,
} from '@fluentui/react-components';
import { ServiceCard } from './components/ServiceCard';

const useStyles = makeStyles({
  container: {
    padding: '2rem',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  header: {
    textAlign: 'center',
    marginBottom: '1rem',
    color: tokens.colorBrandForeground1,
  },
  intro: {
    textAlign: 'center',
    marginBottom: '3rem',
    color: tokens.colorNeutralForeground2,
  },
  services: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
  },
});

const services = [
  {
    title: 'Web Development',
    description: 'Custom web applications built with modern technologies and best practices.',
    href: '/services/web-development',
  },
  {
    title: 'Consulting',
    description: 'Expert guidance to help you make informed technology decisions.',
    href: '/services/consulting',
  },
  {
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and migration services.',
    href: '/services/cloud-solutions',
  },
];

export default function ServicesPage() {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <Title1 className={styles.header}>Our Services</Title1>
      <Body1 className={styles.intro}>
        Comprehensive solutions designed to help your business succeed
      </Body1>
      <div className={styles.services}>
        {services.map((service) => (
          <ServiceCard
            key={service.href}
            title={service.title}
            description={service.description}
            href={service.href}
          />
        ))}
      </div>
    </div>
  );
}
