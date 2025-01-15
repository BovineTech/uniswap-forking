import { Trans } from '@lingui/macro'
import { ButtonLight } from 'components/Button'
import { useIsMobile } from 'nft/hooks'
import { useState } from 'react'
import styled from 'styled-components'
import { ThemedText } from 'theme/components'
import { useIsDarkMode } from 'theme/components/ThemeToggle'

import DeltaPayPlugin from '../../assets/images/DeltaPayPlugin.svg'

const Image = styled.img`
  max-width: 510px;
  width: 100%;

  @media screen and (max-width: 768px) {
    max-width: 410px;
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ButtonBuyNow = styled(ButtonLight)`
  width: 220px;
  min-width: 220px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoint.lg}px) {
    width: 100%;
  }
`

const PageWrapper = styled(Container)`
  flex: 1;
  justify-content: center;
  max-width: 1200px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.md}px) {
    justify-content: flex-start;
    padding-top: 64px;
  }
`
const ContainerWrapper = styled(Container)<{ buyNowActive: boolean }>`
  justify-content: center;
  border-radius: 10px;
  gap: 100px;
  padding: 60px;
  background-color: ${({ buyNowActive }) => (buyNowActive ? '#363A41' : 'transparent')};
  flex-direction: ${({ buyNowActive }) => (buyNowActive ? 'row' : 'column')};
  margin: auto 20px;
  transition: all 0.3s ease;

  @media screen and (max-width: ${({ theme }) => theme.breakpoint.lg}px) {
    flex-direction: column;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoint.sm}px) {
    gap: 40px;
    padding: 20px;
  }
`

const RightPart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 22px;
`

const DescriptionText = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  row-gap: 24px;
`

export default function BuyCrypto() {
  const isDarkMode = useIsDarkMode()
  const isMobile = useIsMobile()
  const [buyNowActive, setBuyNowActive] = useState(false)

  const Title = isMobile ? ThemedText.LargeHeader : ThemedText.Hero
  const Paragraph = isMobile ? ThemedText.HeadlineMedium : ThemedText.HeadlineLarge

  return (
    <PageWrapper>
      {/* <Header>
        <Container>
          <Title>DeltaPayPlugin</Title>
          <Paragraph color="neutral2">
            <Trans>DeltaPayPlugin</Trans>
          </Paragraph>
        </Container>
        <Image src={isDarkMode ? darkImage : lightImage} alt="Liluni" />
      </Header>
      <SmallButtonPrimary as={Link} to="/">
        <Trans>Oops, take me back to Swap</Trans>
      </SmallButtonPrimary> */}
      <h1 className="deltapay__title title">DeltaPayPlugin</h1>
      <ContainerWrapper buyNowActive={buyNowActive}>
        <Image src={DeltaPayPlugin} alt="DeltaPayPlugin" />
        <RightPart>
          {buyNowActive && (
            <DescriptionText>
              <h3 className="buy-crypto__label">
                DeltaPayPlugin פלטפורמה לרכישה מיידית של מטבעות קריפטוגרפיים ואינטגרציה עם מערכות תשלום.
              </h3>

              <h3 className="buy-crypto__label buy-crypto__label--second">הפרוטוקול מאפשר:</h3>
              <p className="buy-crypto__text">
                לקנות מטבעות קריפטו במחיר הטוב ביותר, משתמש AI כדי למצוא את המחיר הטוב ביותר ב-20+ בורסות בתנאים הטובים
                ביותר לעסקה (עומק ספר ההזמנות, שלמות ההזמנה/רכישה, מהירות ומחיר נוח). "DeltaPayPlugin" כולל
                פונקציות משולבות עבור לקוחות עסקיים המאפשר לנהל בנוחות את הלקוחות שלך.
              </p>
              <p className="buy-crypto__text">
                לפרוטוקול 6-9 רמות אבטחה, ואינו שומר מפתחות משתמש או סיסמאות! הגרסה המוגבלת יכולה לעבוד כמחליף מקוון
                24/7 או כמערכת תשלומים לקבלת תשלומים עם המרה מיידית למטבע פיאט, לעסקים בכל מקום בעולם. הממשק הפשוט והנוח
                ביותר הן ללקוחות והן לבעלי עסקים.
              </p>
              <p className="buy-crypto__text">
                נכון לעכשיו, הגרסה לישראל נמצאת בשלבי רישום ורישוי אחרונים ואינה זמינה ללקוחות קמעונאיים. בעתיד הקרוב,
                רכישת מטבעות קריפטו באמצעות העברה בנקאית וכרטיסי אשראי תהפוך לזמינה ברחבי הארץ.
              </p>
            </DescriptionText>
          )}
          <ButtonBuyNow onClick={() => setBuyNowActive(!buyNowActive)} fontWeight={535}>
            <Trans>Buy Now</Trans>
          </ButtonBuyNow>
        </RightPart>
      </ContainerWrapper>
    </PageWrapper>
  )
}
