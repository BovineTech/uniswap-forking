import { ColumnCenter } from 'components/Column'
import { ScrollBarStyles } from 'components/Common'
import Modal from 'components/Modal'
import Row from 'components/Row'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { CloseIcon } from 'theme/components'

import Logo from '../../assets/img/svg/logo.svg'
import LogoBlack from '../../assets/img/svg/logo-black.svg'

const Wrapper = styled(ColumnCenter)`
  padding: 16px 24px;
`

const ScrollContainer = styled.div`
  overflow-y: auto;
  padding-right: 12px;

  ${ScrollBarStyles}
`

const Footer = () => {
  const { pathname } = useLocation()
  const [showAgreement, setShowAgreement] = useState(false)
  return (
    <footer className="footer">
      <Modal maxWidth={1200} isOpen={showAgreement} onDismiss={() => setShowAgreement(false)}>
        <Wrapper gap="md">
          <Row padding="8px 0px 4px" justify="flex-end">
            <CloseIcon size={24} onClick={() => setShowAgreement(false)} />
          </Row>
          <ScrollContainer>
            <div className="agreement__text" style={{ textAlign: 'center' }}>
              Swap Usage Rules
            </div>
            <div className="agreement__text agreement__title">הסכם משתמש</div>
            <div className="agreement__text agreement__subtitle">
              הסכם בין פרוטוקול BambaSwap (להלן "הפרוטוקול") למשתמש (להלן "המשתמש")
            </div>
            <div className="agreement__text agreement__subtitle" style={{ paddingBottom: '0px' }}>
              לפני שמתחילים:
            </div>
            <div className="agreement__text agreement__subtitle">
              רכישה ומכירה של נכסי קריפטו מטבען הם מסוכנים. נכסי קריפטו אינם מבוטחים על ידי לביטוח פיקדונות פדרלית
              (FDIC), להגנת משקיעים בניירות ערך (SIPC) או על ידי כל חברת ביטוח ממשלתית או פרטית אחרת, כולל מפני גניבה
              מקוונת או בדרכים אחרות. פעולות עם קריפטו אינן מוסדרות במדינות ובטריטוריות רבות בארצות הברית וישראל ערך
              נכסי קריפטו עשוי להיות מאוד תנודתי ובלתי צפוי, מה שעלול להוביל להפסדים משמעותיים בזמן קצר, כולל אובדן
              מוחלט של ערך. מחיר ונזילות נכסי קריפטו עברו תנודות משמעותיות בעבר ועשויים לעבור תנודות משמעותיות בעתיד.
              רכישה ומכירה של נכסי קריפטו מטבען הן פעולות מסוכנות, ויש לשקול את הסיכונים לפני קבלת החלטות רכישה או מכירה
              של נכסי קריפטו.
            </div>
            <div className="agreement__text agreement__subtitle">1. מבוא</div>
            <div className="agreement__text">
              הסכם זה (להלן "ההסכם") מסדיר את היחסים בין הפרוטוקול BambaSwap לבין המשתמש בהקשר לשימוש בשירותים המוצעים
              על הפלטפורמה הפועלת על רשת Polygon ואחרים בעתיד.
            </div>
            <div className="agreement__text agreement__subtitle">2. קוד פתוח</div>
            <div className="agreement__text">
              הפרוטוקול BambaSwap פותח על בסיס תוכנה פתוחה תוך שימוש בחוזים חכמים מאומתים. המשתמש מבין ששימוש בקוד פתוח
              עשוי לכלול סיכונים הקשורים לפגיעויות או שגיאות בקוד, שעלולות להשפיע על פעולותיו.
            </div>
            <div className="agreement__text agreement__subtitle">3. בדיקת ביתא</div>
            <div className="agreement__text">
              הפרוטוקול BambaSwap נמצא בשלב בדיקת ביתא, מה שמעיד על כך שעשויות להיות בעיות טכניות, בעיות או חוסרים.
              המשתמש מודע לכך ששימוש בתוכנות בטעינה עשוי להוביל לתוצאות בלתי צפויות.
            </div>
            <div className="agreement__text agreement__subtitle">4. אחריות המשתמש</div>
            <div className="agreement__text">
              המשתמש נושא באחריות מלאה לכל פעולותיו ולכל עסקאות (טרנזקציות) המבוצעות דרך הפרוטוקול. המשתמש מחויב לפקח
              באופן עצמאי על מצב חשבונותיו ולבצע ניתוח של פעולותיו.
            </div>
            <div className="agreement__text agreement__subtitle">5. חובת הזהירות</div>
            <div className="agreement__text">
              מפתחי הפרוטוקול אינם מספקים ייעוץ או המלצות בנוגע לאסטרטגיות מסחר או השקעה. כל משתמש מחויב להעריך את כל
              הסיכונים באופן עצמאי ולבחור אסטרטגיה מתאימה בהתחשב ביכולותיו ובמטרותיו הכספיות.
            </div>
            <div className="agreement__text agreement__subtitle">6. הבנה של מאפייני הבלוקצ'יין</div>
            <div className="agreement__text">
              המשתמש מאשר שהוא מבין את מאפייני הבלוקצ'יין ואת הבעיות וההפסדים שעלולים להיגרם כתוצאה מהחלטותיו או
              מפעולותיו ברשת או בבלוקצ'יין. המשתמש מודע לכך שעסקאות עשויות להיות בלתי הפיכות ונתונות לשינויים בשוק.
            </div>
            <div className="agreement__text agreement__subtitle">7. חובת ההגבלה על מחירים ועסקאות</div>
            <div className="agreement__text">
              מפתחי הפרוטוקול BambaSwap אינם יכולים להשפיע על מחירים, שיעורי המרה או עסקאות שגויות.{' '}
              <span>לא BambaSwap</span>, ולא ספקי השירותים שלו (כולל, בין השאר, ספקי השירותים שלנו) מספקים ייעוץ השקעות
              או ייעוץ מס. המשתמש נושא באחריות הבלעדית לכל החלטות רכישה, מכירה, המרה או העברת נכסי קריפטו דרך מרכז
              הקריפטו שלו, כולל הבנת כל חובות המס שעשויות לחול עליו. אנו לא מנהלים את נכסי הקריפטו שלך בשמך. בכל המקרים
              בהתאם להנחיות שלך ולתנאים הקריפטוגרפיים הנוכחיים. בעוד ש-BambaSwap עשוי לספק תוכן חינוכי מסוים, כולל
              התראות על מחירי קריפטו, הוא מוגש רק למטרות הפניה כלליות ואינו מותאם אישית לצרכים ולנסיבות האישיות שלך
              ואינו צריך להתפרש כהמלצה. אתה צריך לקבוע אם רכישה או מכירה מסוימת או המרת נכסי קריפטו מתאימות לך, בהתבסס
              על המטרות ההשקעתיות שלך, הנסיבות הפיננסיות שלך והסיבולת שלך לסיכון, ולקבל החלטות עצמאיות לגבי עסקאות.
            </div>
            <div className="agreement__text agreement__subtitle">8. הגבלת אחריות</div>
            <div className="agreement__text">
              מפתחי BambaSwap אינם נושאים באחריות על פעולות של צדדים שלישיים. כל משתמש מעריך ומקבל אחריות על פעולותיו
              והחלטותיו הקשורות לשימוש בפרוטוקול. המפתחים אינם אחראים על כל נזק, ישיר או עקיף, שיגרם כתוצאה משימוש
              בפרוטוקול.
            </div>
            <div className="agreement__text agreement__subtitle">9. סעיפים סופיים</div>
            <div className="agreement__text">
              הסכם זה הוא מחייב עבור הצדדים מרגע קבלתו על ידי המשתמש. באמצעות השימוש בפרוטוקול, המשתמש מאשר שהוא מודע
              לתנאי הסכם זה ומסכים להם.
            </div>
          </ScrollContainer>
        </Wrapper>
      </Modal>
      <div className="container">
        <div className="footer__inner">
          <a className="footer__logo" href="#">
            <img
              className="footer__logo-img"
              width="172"
              height="38"
              src={pathname === '/support' ? LogoBlack : Logo}
              alt="logo iocn"
            />
          </a>

          {pathname !== '/support' && (
            <nav className="footer__nav">
              <ul className="footer__list">
                <li className="footer__item">
                  <Link className="footer__link" to="/support">
                    About project
                  </Link>
                </li>
                <li className="footer__item">
                  <a className="footer__link" href="https://lucem.fund" target="_blank" rel="noreferrer">
                    Participant of the Lucem Fund project
                  </a>
                </li>
                <li className="footer__item">
                  <div className="footer__link" onClick={() => setShowAgreement(true)}>
                    Swap Usage Rules
                  </div>
                </li>
                <li className="footer__item">
                  <Link className="footer__link" to="/support">
                    Listing of new tokens
                  </Link>
                </li>
              </ul>

              <ul className="footer__list">
                <li className="footer__item">
                  <Link className="footer__link" to="/support">
                    Liquidity Provider
                  </Link>
                </li>
                <li className="footer__item">
                  <Link className="footer__link" to="/support">
                    Road map
                  </Link>
                </li>
                <li className="footer__item">
                  <Link className="footer__link" to="/support">
                    Support
                  </Link>
                </li>
                <li className="footer__item">
                  <Link className="footer__link" to="/support">
                    Partners
                  </Link>
                </li>
              </ul>

              <ul className="footer__list">
                <li className="footer__item">
                  <Link className="footer__link" to="/support">
                    Pool
                  </Link>
                </li>
                <li className="footer__item">
                  <Link className="footer__link" to="/support">
                    Term of Use
                  </Link>
                </li>
                <li className="footer__item">
                  <Link className="footer__link" to="/support">
                    Fee
                  </Link>
                </li>
                <li className="footer__item">
                  <Link className="footer__link" to="/support">
                    Contact to Sale
                  </Link>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </div>
    </footer>
  )
}

export default Footer
