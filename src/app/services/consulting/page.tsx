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
  services: {
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

const consultingServices = [
  {
    title: 'Technology Strategy',
    description: 'Develop a comprehensive technology roadmap aligned with your business goals.',
  },
  {
    title: 'Architecture Review',
    description: 'Expert analysis of your system architecture and recommendations for improvement.',
  },
  {
    title: 'Digital Transformation',
    description: 'Guide your organization through digital transformation initiatives.',
  },
  {
    title: 'Process Optimization',
    description: 'Streamline your development processes and improve team efficiency.',
  },
  {
    title: 'Security Assessment',
    description: 'Comprehensive security audits and recommendations.',
  },
  {
    title: 'Technology Selection',
    description: 'Help choose the right tools and technologies for your projects.',
  },
];

export default function ConsultingPage() {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <Title1 className={styles.header}>Consulting Services</Title1>
      
      <div className={styles.intro}>
        <Body1>
          Our experienced consultants provide strategic guidance to help you make 
          informed technology decisions. We work closely with your team to understand 
          your challenges and develop solutions that drive business value.
        </Body1>
      </div>

      <section className={styles.section}>
        <Title2 className={styles.sectionTitle}>Our Consulting Services</Title2>
        <div className={styles.services}>
          {consultingServices.map((service) => (
            <Card key={service.title} className={styles.card}>
              <CardHeader
                header={<Body1><strong>{service.title}</strong></Body1>}
                description={<Body1>{service.description}</Body1>}
              />
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
