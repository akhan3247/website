import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  const navItems = ['BLOG', 'PROJECTS', 'CONTACT'];

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f7474b5166aeac2ef7c378e0fbde4d4a4b50989379b56ad696a73f719c4313fc?placeholderIfAbsent=true&apiKey=60c81d2e93854144ada094e254de7248" className={styles.logoImage} alt="Abdullah Khan logo" />
        <h1 className={styles.logoText}>ABDULLAH KHAN</h1>
      </div>
      <nav className={styles.navigation}>
        {navItems.map((item, index) => (
          <a key={index} href={`#${item.toLowerCase()}`} className={styles.navItem}>{item}</a>
        ))}
      </nav>
    </header>
  );
};

export default Header;