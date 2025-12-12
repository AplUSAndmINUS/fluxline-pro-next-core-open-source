'use client';

import React from 'react';
import Link from 'next/link';
import {
  makeStyles,
  tokens,
  Button,
  Text,
} from '@fluentui/react-components';
import { Navigation24Regular } from '@fluentui/react-icons';

const useStyles = makeStyles({
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '1rem 2rem',
    backgroundColor: tokens.colorNeutralBackground1,
    borderBottom: `1px solid ${tokens.colorNeutralStroke1}`,
    boxShadow: tokens.shadow4,
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: tokens.colorBrandForeground1,
    textDecoration: 'none',
  },
  nav: {
    display: 'flex',
    gap: '1rem',
    alignItems: 'center',
  },
  navLink: {
    textDecoration: 'none',
    color: tokens.colorNeutralForeground1,
    padding: '0.5rem 1rem',
    borderRadius: tokens.borderRadiusMedium,
    transition: 'background-color 0.2s',
    ':hover': {
      backgroundColor: tokens.colorNeutralBackground1Hover,
    },
  },
  menuButton: {
    display: 'none',
    '@media (max-width: 768px)': {
      display: 'block',
    },
  },
});

export const Header: React.FC = () => {
  const styles = useStyles();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        <Text size={500}><strong>Fluxline.pro</strong></Text>
      </Link>
      
      <nav className={styles.nav}>
        <Link href="/" className={styles.navLink}>
          Home
        </Link>
        <Link href="/about" className={styles.navLink}>
          About
        </Link>
        <Link href="/services" className={styles.navLink}>
          Services
        </Link>
      </nav>

      <Button
        appearance="subtle"
        icon={<Navigation24Regular />}
        className={styles.menuButton}
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle menu"
      />
    </header>
  );
};

export default Header;
