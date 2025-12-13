'use client';

import React from 'react';
import {
  makeStyles,
  tokens,
  Title1,
  Title2,
  Body1,
  Card,
  CardHeader,
} from '@fluentui/react-components';

const useStyles = makeStyles({
  container: {
    padding: '2rem',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  header: {
    marginBottom: '2rem',
    color: tokens.colorBrandForeground1,
  },
  intro: {
    marginBottom: '3rem',
    padding: '2rem',
    backgroundColor: tokens.colorNeutralBackground2,
    borderRadius: tokens.borderRadiusMedium,
  },
  features: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '1.5rem',
    marginTop: '2rem',
  },
  card: {
    padding: '1.5rem',
  },
  section: {
    marginTop: '3rem',
  },
  sectionTitle: {
    marginBottom: '1.5rem',
    color: tokens.colorBrandForeground1,
  },
});

const features = [
  {
    title: 'Responsive Design',
    description: 'Mobile-first approach ensuring your site looks great on all devices.',
  },
  {
    title: 'Modern Frameworks',
    description: 'Built with React, Next.js, and other cutting-edge technologies.',
  },
  {
    title: 'Performance Optimized',
    description: 'Fast loading times and excellent user experience.',
  },
  {
    title: 'SEO Friendly',
    description: 'Built with search engine optimization in mind from the ground up.',
  },
  {
    title: 'Secure & Reliable',
    description: 'Industry-standard security practices and reliable hosting.',
  },
  {
    title: 'Maintenance & Support',
    description: 'Ongoing support and updates to keep your site running smoothly.',
  },
];

export default function WebDevelopmentPage() {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <Title1 className={styles.header}>Web Development</Title1>
      
      <div className={styles.intro}>
        <Body1>
          We specialize in creating modern, responsive web applications that deliver 
          exceptional user experiences. Our team uses the latest technologies and 
          best practices to build scalable, maintainable solutions tailored to your needs.
        </Body1>
      </div>

      <section className={styles.section}>
        <Title2 className={styles.sectionTitle}>What We Offer</Title2>
        <div className={styles.features}>
          {features.map((feature) => (
            <Card key={feature.title} className={styles.card}>
              <CardHeader
                header={<Body1><strong>{feature.title}</strong></Body1>}
                description={<Body1>{feature.description}</Body1>}
              />
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
