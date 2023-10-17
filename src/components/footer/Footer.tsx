import React from 'react';
import Image from 'next/image';
import Link from "next/link";
import { footerLinks } from '@/constants';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
          <div className={styles.footer_content}>
            <div className={styles.logo_image}>
                <Image src='/symbol.png' alt='logo' width={75} height={75} className='object-contain' />
            </div>
            <div className={styles.footer_links}>
              {footerLinks.map((item) => (
                <div key={item.title} className={styles.footer_link}>
                  <h3 className={styles.footers_title}>{item.title}</h3>
                  <div className={styles.link_section}>
                      {item.items.map((link) => (
                        <Link
                        key={link.label}
                        href={link.href}
                        className={styles.link}
                        >
                        {link.label}
                        </Link>
                      ))}
                    {item.title == 'Follow us' && (
                      <div className={styles.social_icon}>
                        <TwitterIcon />
                        <GoogleIcon />
                        <FacebookIcon />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.footer_divider} />

          <div className={styles.footer_copyrights}>
            <p className={styles.footer_copyrights_text}>@2021 Manual. All rights reserved</p>
          </div>
        </footer>
    );
};

export default Footer;
