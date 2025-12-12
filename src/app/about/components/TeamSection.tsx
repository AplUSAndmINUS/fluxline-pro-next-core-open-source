'use client';

import React from 'react';
import {
  makeStyles,
  tokens,
  Title2,
  Body1,
  Avatar,
} from '@fluentui/react-components';

const useStyles = makeStyles({
  section: {
    padding: '2rem',
    marginBottom: '2rem',
    backgroundColor: tokens.colorNeutralBackground2,
    borderRadius: tokens.borderRadiusMedium,
  },
  title: {
    marginBottom: '2rem',
    color: tokens.colorBrandForeground1,
  },
  team: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '2rem',
  },
  member: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    gap: '0.5rem',
  },
  name: {
    fontWeight: 'bold',
  },
  role: {
    color: tokens.colorNeutralForeground2,
  },
});

const team = [
  { name: 'Leadership Team', role: 'Executive Management', initials: 'LT' },
  { name: 'Development Team', role: 'Engineering', initials: 'DT' },
  { name: 'Design Team', role: 'UX/UI Design', initials: 'DT' },
  { name: 'Support Team', role: 'Customer Success', initials: 'ST' },
];

export const TeamSection: React.FC = () => {
  const styles = useStyles();

  return (
    <section className={styles.section}>
      <Title2 className={styles.title}>Our Team</Title2>
      <div className={styles.team}>
        {team.map((member) => (
          <div key={member.name} className={styles.member}>
            <Avatar name={member.name} size={72} />
            <Body1 className={styles.name}>{member.name}</Body1>
            <Body1 className={styles.role}>{member.role}</Body1>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
