'use client';

import React from 'react';
import {
  makeStyles,
  Title3,
  Body1,
  Button,
  Card,
  CardHeader,
  CardFooter,
} from '@fluentui/react-components';
import Link from 'next/link';
import { ArrowRight24Regular } from '@fluentui/react-icons';

const useStyles = makeStyles({
  card: {
    padding: '1.5rem',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  footer: {
    marginTop: 'auto',
  },
});

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, href }) => {
  const styles = useStyles();

  return (
    <Card className={styles.card}>
      <CardHeader
        header={<Title3>{title}</Title3>}
        description={<Body1>{description}</Body1>}
      />
      <CardFooter className={styles.footer}>
        <Link href={href}>
          <Button
            appearance="primary"
            icon={<ArrowRight24Regular />}
            iconPosition="after"
          >
            Learn More
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
