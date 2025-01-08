import React from 'react';
import styles from '../About/About.module.css';
import HeroPage from '../HeroPage/HeroPage';
import About from '../About/About';
import Experience from '../Experience/Experience';
import Project from '../Project/Project';
import Contact from '../Contact/Contact';

const Layout = () => {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        element.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div>
            <nav className={styles.sideNav}>
                <div className={styles.logoContainer}>
                    <img 
                        src="assets/logo.png" 
                        alt="Logo" 
                        className={styles.logo}
                    />
                </div>
                <div className={styles.navItems}>
                    <div 
                        className={styles.navItem}
                        onClick={() => scrollToSection('hero')}
                    >
                        HOME
                    </div>
                    <div 
                        className={styles.navItem}
                        onClick={() => scrollToSection('about')}
                    >
                        ABOUT ME
                    </div>
                    <div 
                        className={styles.navItem}
                        onClick={() => scrollToSection('experience')}
                    >
                        EXPERIENCE
                    </div>
                    <div 
                        className={styles.navItem}
                        onClick={() => scrollToSection('projects')}
                    >
                        PROJECTS
                    </div>
                    <div 
                        className={styles.navItem}
                        onClick={() => scrollToSection('contact')}
                    >
                        CONTACT
                    </div>
                </div>
            </nav>
            
            <div id="hero">
                <HeroPage />
            </div>
            <div id="about">
                <About />
            </div>
            <div id="experience">
                <Experience />
            </div>
            <div id="projects">
                <Project />
            </div>
            <div id="contact">
                <Contact />
            </div>
        </div>
    );
};

export default Layout;