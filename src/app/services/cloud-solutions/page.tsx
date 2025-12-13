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
  solutions: {
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

const cloudSolutions = [
  {
    title: 'Cloud Migration',
    description: 'Seamless migration of your applications and data to the cloud.',
  },
  {
    title: 'Infrastructure as Code',
    description: 'Automated infrastructure provisioning and management.',
  },
  {
    title: 'Serverless Architecture',
    description: 'Build scalable applications with serverless technologies.',
  },
  {
    title: 'Container Orchestration',
    description: 'Deploy and manage containerized applications with Kubernetes.',
  },
  {
    title: 'Cloud Security',
    description: 'Implement robust security measures for your cloud infrastructure.',
  },
  {
    title: 'Cost Optimization',
    description: 'Optimize your cloud spending while maintaining performance.',
  },
];

export default function CloudSolutionsPage() {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <Title1 className={styles.header}>Cloud Solutions</Title1>
      
      <div className={styles.intro}>
        <Body1>
          Leverage the power of cloud computing to scale your business. We provide 
          comprehensive cloud solutions including migration, architecture design, 
          and ongoing management to help you maximize the benefits of cloud technology.
        </Body1>
      </div>

      <section className={styles.section}>
        <Title2 className={styles.sectionTitle}>Our Cloud Services</Title2>
        <div className={styles.solutions}>
          {cloudSolutions.map((solution) => (
            <Card key={solution.title} className={styles.card}>
              <CardHeader
                header={<Body1><strong>{solution.title}</strong></Body1>}
                description={<Body1>{solution.description}</Body1>}
              />
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
