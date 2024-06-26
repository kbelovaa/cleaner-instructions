import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import img0 from '../../images/img0.png';
import img1 from '../../images/img1.png';
import img2 from '../../images/img2.png';
import img3 from '../../images/img3.png';
import img4 from '../../images/img4.png';
import img4es from '../../images/img4_es.png';
import img5 from '../../images/img5.png';
import img5es from '../../images/img5_es.png';
import img6 from '../../images/img6.png';
import img6es from '../../images/img6_es.png';
import img7 from '../../images/img7.png';
import img7es from '../../images/img7_es.png';
import img8 from '../../images/img8.png';
import img8es from '../../images/img8_es.png';
import img9 from '../../images/img9.png';
import img9es from '../../images/img9_es.png';
import img10 from '../../images/img10.png';
import img10es from '../../images/img10_es.png';
import img11 from '../../images/img11.png';
import img11es from '../../images/img11_es.png';
import img12 from '../../images/img12.png';
import img12es from '../../images/img12_es.png';
import img13 from '../../images/img13.png';
import img13es from '../../images/img13_es.png';
import img14 from '../../images/img14.png';
import img14es from '../../images/img14_es.png';
import img15 from '../../images/img15.png';
import img15es from '../../images/img15_es.png';
import img16 from '../../images/img16.png';
import img16es from '../../images/img16_es.png';
import img17 from '../../images/img17.png';
import img17es from '../../images/img17_es.png';
import img18 from '../../images/img18.png';
import img18es from '../../images/img18_es.png';
import img19 from '../../images/img19.png';
import img19es from '../../images/img19_es.png';
import img20 from '../../images/img20.png';
import img20es from '../../images/img20_es.png';
import img21 from '../../images/img21.png';
import img21es from '../../images/img21_es.png';
import img22 from '../../images/img22.png';
import './Main.scss';

const Main = () => {
  const [windowWidth, setWindowWidth] = useState();

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setWindowWidth(width);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const { t, i18n } = useTranslation();
  const { language } = i18n;

  return (
    <div className="main">
      <div className="container">
        <section className="section system">
          <h1 className="section__title">{t('system')}</h1>
          <p className="section__text">{t('systemText')}</p>
          <div className="system__images">
            <div className="system__img-wrap">
              {windowWidth <= 1440 ? (
                <img className="system__img_1" src={img0} alt="Mobile+Web Customer" />
              ) : (
                <img className="system__img_1" src={img1} alt="Mobile+Web Customer" />
              )}
              <span className="system__img-label">{t('mobileWeb')}</span>
            </div>
            <div className="system__img-wrap">
              <img className="system__img_2" src={img2} alt="Mobile Cleaner " />
              <span className="system__img-label">{t('mobileCleaner')}</span>
            </div>
            <div className="system__img-wrap">
              <img className="system__img_3" src={img3} alt="Admin panel" />
              <span className="system__img-label">{t('admin')}</span>
            </div>
          </div>
        </section>
        <section className="section how-it-works">
          <h1 className="section__title">{t('howItWorks')}</h1>
          <p className="section__text">{t('howItWorksText1')}</p>
          <p className="section__text">{t('howItWorksText2')}</p>
          <div className="how-it-works__images">
            {language === 'en' ? (
              <img className="how-it-works__img img" src={img4} alt="Requests list" />
            ) : (
              <img className="how-it-works__img img" src={img4es} alt="Requests list" />
            )}
            {language === 'en' ? (
              <img className="how-it-works__img img" src={img5} alt="Requests map" />
            ) : (
              <img className="how-it-works__img img" src={img5es} alt="Requests map" />
            )}
          </div>
        </section>
        <section className="section app">
          <h1 className="section__title">{t('mobileApp')}</h1>
          <p className="section__text">{t('mobileAppText')}</p>
          <div className="app__images">
            {language === 'en' ? (
              <img className="app__img img" src={img6} alt="Push notification" />
            ) : (
              <img className="app__img img" src={img6es} alt="Push notification" />
            )}
            {language === 'en' ? (
              <img className="app__img img" src={img7} alt="App notification" />
            ) : (
              <img className="app__img img" src={img7es} alt="App notification" />
            )}
          </div>
        </section>
        <section className="section menu">
          <h1 className="section__title">{t('menuBar')}</h1>
          <p className="section__text">{t('menuBarText1')}</p>
          <p className="section__text">{t('menuBarText2')}</p>
          <div className="menu__images">
            <div className="menu__img-wrap">
              {language === 'en' ? (
                <img className="menu__img_1 img" src={img8} alt="Tab bar" />
              ) : (
                <img className="menu__img_1 img" src={img8es} alt="Tab bar" />
              )}
              <div className="menu__img-border_1 border"></div>
            </div>
            <svg
              className="menu__arrow"
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="41"
              viewBox="0 0 40 41"
              fill="none"
            >
              <path
                d="M21.667 28.8159L30.0003 20.4826L21.667 12.1493"
                stroke="#268664"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M11.667 28.8159L20.0003 20.4826L11.667 12.1493"
                stroke="#268664"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <div className="menu__img-wrap">
              {language === 'en' ? (
                <img className="menu__img_2 img" src={img9} alt="Profile screen" />
              ) : (
                <img className="menu__img_2 img" src={img9es} alt="Profile screen" />
              )}
              <div className="menu__img-border_2 border"></div>
            </div>
          </div>
        </section>
        <section className="section hours">
          <h1 className="section__title">{t('workingHours')}</h1>
          <p className="section__text">{t('workingHoursText1')}</p>
          <p className="section__text">{t('workingHoursText2')}</p>
          <p className="section__text">{t('workingHoursText3')}</p>
          <div className="hours__images">
            <div className="hours__img-wrap">
              {language === 'en' ? (
                <img className="img" src={img10} alt="Working hours" />
              ) : (
                <img className="img" src={img10es} alt="Working hours" />
              )}
              <div className="hours__img-border_1 border"></div>
            </div>
            <svg
              className="hours__arrow"
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="41"
              viewBox="0 0 40 41"
              fill="none"
            >
              <path
                d="M21.667 28.8159L30.0003 20.4826L21.667 12.1493"
                stroke="#268664"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M11.667 28.8159L20.0003 20.4826L11.667 12.1493"
                stroke="#268664"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <div className="hours__img-wrap">
              {language === 'en' ? (
                <img className="img" src={img11} alt="Working hours" />
              ) : (
                <img className="img" src={img11es} alt="Working hours" />
              )}
              <div className="hours__img-border_2 border"></div>
            </div>
            <svg
              className="hours__arrow"
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="41"
              viewBox="0 0 40 41"
              fill="none"
            >
              <path
                d="M21.667 28.8159L30.0003 20.4826L21.667 12.1493"
                stroke="#268664"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M11.667 28.8159L20.0003 20.4826L11.667 12.1493"
                stroke="#268664"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            {language === 'en' ? (
              <img className="img" src={img12} alt="Working hours" />
            ) : (
              <img className="img" src={img12es} alt="Working hours" />
            )}
          </div>
        </section>
        <section className="section radius">
          <h1 className="section__title">{t('workingRadius')}</h1>
          <p className="section__text">{t('workingRadiusText1')}</p>
          <p className="section__text">{t('workingRadiusText2')}</p>
          <p className="section__text">{t('workingRadiusText3')}</p>
          <div className="radius__images">
            <div className="radius__img-wrap">
              {language === 'en' ? (
                <img className="img" src={img9} alt="Working radius" />
              ) : (
                <img className="img" src={img9es} alt="Working radius" />
              )}
              <div className="radius__img-border_1 border"></div>
            </div>
            <svg
              className="radius__arrow"
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="41"
              viewBox="0 0 40 41"
              fill="none"
            >
              <path
                d="M21.667 28.8159L30.0003 20.4826L21.667 12.1493"
                stroke="#268664"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M11.667 28.8159L20.0003 20.4826L11.667 12.1493"
                stroke="#268664"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <div className="radius__img-wrap">
              {language === 'en' ? (
                <img className="img" src={img13} alt="Working radius" />
              ) : (
                <img className="img" src={img13es} alt="Working radius" />
              )}
              <div className="radius__img-border_2 border"></div>
            </div>
            <svg
              className="radius__arrow"
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="41"
              viewBox="0 0 40 41"
              fill="none"
            >
              <path
                d="M21.667 28.8159L30.0003 20.4826L21.667 12.1493"
                stroke="#268664"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M11.667 28.8159L20.0003 20.4826L11.667 12.1493"
                stroke="#268664"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            {language === 'en' ? (
              <img className="img" src={img14} alt="Working radius" />
            ) : (
              <img className="img" src={img14es} alt="Working radius" />
            )}
          </div>
        </section>
        <section className="section status">
          <h1 className="section__title">{t('status')}</h1>
          <p className="section__text">{t('statusText1')}</p>
          <p className="section__text">{t('statusText2')}</p>
          <p className="section__text">{t('statusText3')}</p>
          <p className="section__text">{t('statusText4')}</p>
          <div className="status__images">
            <div className="status__img-wrap">
              {language === 'en' ? (
                <img className="status__img img" src={img15} alt="Profile status" />
              ) : (
                <img className="status__img img" src={img15es} alt="Profile status" />
              )}
              <div className="status__img-border border"></div>
            </div>
            <div className="status__img-wrap">
              {language === 'en' ? (
                <img className="status__img img" src={img16} alt="Profile status" />
              ) : (
                <img className="status__img img" src={img16es} alt="Profile status" />
              )}
              <div className="status__img-border border"></div>
            </div>
            <div className="status__img-wrap">
              {language === 'en' ? (
                <img className="status__img img" src={img17} alt="Profile status" />
              ) : (
                <img className="status__img img" src={img17es} alt="Profile status" />
              )}
              <div className="status__img-border border"></div>
            </div>
          </div>
        </section>
        <section className="section request">
          <h1 className="section__title">{t('request')}</h1>
          <p className="section__text">{t('requestText')}</p>
          <div className="request__images">
            {language === 'en' ? (
              <img className="request__img img" src={img18} alt="Requests list" />
            ) : (
              <img className="request__img img" src={img18es} alt="Requests list" />
            )}
            {language === 'en' ? (
              <img className="request__img img" src={img5} alt="Requests map" />
            ) : (
              <img className="request__img img" src={img5es} alt="Requests map" />
            )}
          </div>
        </section>
        <section className="section schedule">
          <h1 className="section__title">{t('schedule')}</h1>
          <p className="section__text">{t('scheduleText')}</p>
          <div className="schedule__images">
            <div className="schedule__img-wrap">
              {language === 'en' ? (
                <img className="img" src={img19} alt="Schedule" />
              ) : (
                <img className="img" src={img19es} alt="Schedule" />
              )}
              <div className="schedule__img-border_1 border"></div>
            </div>
            <svg
              className="schedule__arrow"
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="41"
              viewBox="0 0 40 41"
              fill="none"
            >
              <path
                d="M21.667 28.8159L30.0003 20.4826L21.667 12.1493"
                stroke="#268664"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M11.667 28.8159L20.0003 20.4826L11.667 12.1493"
                stroke="#268664"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <div className="schedule__img-wrap">
              {language === 'en' ? (
                <img className="img" src={img20} alt="Job details" />
              ) : (
                <img className="img" src={img20es} alt="Job details" />
              )}
              <div className="schedule__img-border_2 border"></div>
            </div>
          </div>
        </section>
        <section className="section notifications">
          <h1 className="section__title">{t('notifications')}</h1>
          <p className="section__text">{t('notificationsText')}</p>
          <div className="notifications__images">
            <div className="notifications__img-wrap">
              {language === 'en' ? (
                <img className="img" src={img21} alt="Notifications" />
              ) : (
                <img className="img" src={img21es} alt="Notifications" />
              )}
              <div className="notifications__img-border_1 border"></div>
            </div>
            <svg
              className="notifications__arrow"
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="41"
              viewBox="0 0 40 41"
              fill="none"
            >
              <path
                d="M21.667 28.8159L30.0003 20.4826L21.667 12.1493"
                stroke="#268664"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M11.667 28.8159L20.0003 20.4826L11.667 12.1493"
                stroke="#268664"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <div className="notifications__img-wrap">
              {language === 'en' ? (
                <img className="img" src={img7} alt="Notification" />
              ) : (
                <img className="img" src={img7es} alt="Notification" />
              )}
              <div className="notifications__img-border_2 border"></div>
            </div>
          </div>
        </section>
        <section className="section bonuses">
          <h1 className="section__title">{t('bonuses')}</h1>
          <p className="section__text">{t('bonusesText1')}</p>
          <p className="section__text">{t('bonusesText2')}</p>
          <p className="section__text">{t('bonusesText3')}</p>
          <p className="section__text">{t('bonusesText4')}</p>
          <img className="bonuses__img" src={img22} alt="Percent" />
        </section>
        <section className="section usp">
          <h1 className="section__title">{t('usp')}</h1>
          <p className="section__text">{t('uspText1')}</p>
          <p className="section__text">{t('uspText2')}</p>
          <p className="section__text">{t('uspText3')}</p>
          <p className="section__text">{t('uspText4')}</p>
          <p className="section__text">{t('uspText5')}</p>
          <p className="section__text">{t('uspText6')}</p>
        </section>
        <section className="section customer">
          <h1 className="section__title">{t('targetCustomer')}</h1>
          <p className="section__text">{t('targetCustomerText')}</p>
        </section>
      </div>
    </div>
  );
};

export default Main;
