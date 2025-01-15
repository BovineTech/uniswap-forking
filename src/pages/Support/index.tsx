import './support.css'

import { i18n } from '@lingui/core'
import { Trans } from '@lingui/macro'
import { useEffect, useState } from 'react'
import { Element, Link as ScrollLink, scrollSpy } from 'react-scroll'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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

export default function Support() {
  const [burgerOpen, setBurgerOpen] = useState(false)
  useEffect(() => {
    // Set up scroll spy to highlight the active link
    scrollSpy.update()
  }, [])

  const currentLanguage = i18n.locale

  useEffect(() => {
    if (burgerOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [burgerOpen])

  return (
    <section className="support" style={currentLanguage === 'he-IL' ? { direction: 'rtl' } : { direction: 'ltr' }}>
      <div className="container">
        <div className="support__inner">
          <aside className={`support__aside ${burgerOpen ? 'active' : ''}`}>
            <div className="support__aside-burger" onClick={() => setBurgerOpen(!burgerOpen)}></div>
            <div className="support__form">
              <h3 className="support__aside-title">Support</h3>

              {/* <div className="support__aside-search">
                  <input className="support__aside-input" type="search" placeholder="Search" />
                  <img className="support__aside-icon" width="20" height="20" src={SearchIcon} alt="search icon" />
                </div> */}

              <ul className="support__list">
                <li className="support__item">
                  <ScrollLink
                    to="section1"
                    smooth={true}
                    duration={350}
                    spy={true}
                    isDynamic={true}
                    activeClass="active"
                    className="support__btn"
                    offset={-170}
                    onClick={() => setBurgerOpen(false)}
                  >
                    <Trans>About Project</Trans>
                  </ScrollLink>
                </li>

                <li className="support__item">
                  <ScrollLink
                    to="section2"
                    smooth={true}
                    duration={350}
                    spy={true}
                    isDynamic={true}
                    activeClass="active"
                    className="support__btn"
                    offset={-170}
                    onClick={() => setBurgerOpen(false)}
                  >
                    <Trans>Automated Market Maker</Trans>
                  </ScrollLink>
                </li>

                <li className="support__item">
                  <ScrollLink
                    to="section3"
                    smooth={true}
                    duration={350}
                    spy={true}
                    isDynamic={true}
                    activeClass="active"
                    className="support__btn"
                    offset={-170}
                    onClick={() => setBurgerOpen(false)}
                  >
                    <Trans>Swap</Trans>
                  </ScrollLink>
                </li>

                <li className="support__item">
                  <ScrollLink
                    to="section4"
                    smooth={true}
                    duration={350}
                    spy={true}
                    isDynamic={true}
                    activeClass="active"
                    className="support__btn"
                    offset={-170}
                    onClick={() => setBurgerOpen(false)}
                  >
                    <Trans>Liquidity Provider</Trans>
                  </ScrollLink>
                </li>

                <li className="support__item">
                  <ScrollLink
                    to="section5"
                    smooth={true}
                    duration={350}
                    spy={true}
                    isDynamic={true}
                    activeClass="active"
                    className="support__btn"
                    offset={-170}
                    onClick={() => setBurgerOpen(false)}
                  >
                    <Trans>Pool</Trans>
                  </ScrollLink>
                </li>

                <li className="support__item">
                  <ScrollLink
                    to="section6"
                    smooth={true}
                    duration={350}
                    spy={true}
                    isDynamic={true}
                    activeClass="active"
                    className="support__btn"
                    offset={-170}
                    onClick={() => setBurgerOpen(false)}
                  >
                    <Trans>Liquidity Provider token</Trans>
                  </ScrollLink>
                </li>

                <li className="support__item">
                  <ScrollLink
                    to="section7"
                    smooth={true}
                    duration={350}
                    spy={true}
                    isDynamic={true}
                    activeClass="active"
                    className="support__btn"
                    offset={-170}
                    onClick={() => setBurgerOpen(false)}
                  >
                    <Trans>Profit for Liquidity Providers</Trans>
                  </ScrollLink>
                </li>

                <li className="support__item">
                  <ScrollLink
                    to="section8"
                    smooth={true}
                    duration={350}
                    spy={true}
                    isDynamic={true}
                    activeClass="active"
                    className="support__btn"
                    offset={-170}
                    onClick={() => setBurgerOpen(false)}
                  >
                    <Trans>Swap Usage Rules</Trans>
                  </ScrollLink>
                </li>

                <li className="support__item">
                  <ScrollLink
                    to="section9"
                    smooth={true}
                    duration={350}
                    spy={true}
                    isDynamic={true}
                    activeClass="active"
                    className="support__btn"
                    offset={-170}
                    onClick={() => setBurgerOpen(false)}
                  >
                    <Trans>Fee</Trans>
                  </ScrollLink>
                </li>

                <li className="support__item">
                  <ScrollLink
                    to="section10"
                    smooth={true}
                    duration={350}
                    spy={true}
                    isDynamic={true}
                    activeClass="active"
                    className="support__btn"
                    offset={-170}
                    onClick={() => setBurgerOpen(false)}
                  >
                    <Trans>Roadmap</Trans>
                  </ScrollLink>
                </li>

                <li className="support__item">
                  <ScrollLink
                    to="section11"
                    smooth={true}
                    duration={350}
                    spy={true}
                    isDynamic={true}
                    activeClass="active"
                    className="support__btn"
                    offset={-170}
                    onClick={() => setBurgerOpen(false)}
                  >
                    <Trans>Partners</Trans>
                  </ScrollLink>
                </li>

                <li className="support__item">
                  <ScrollLink
                    to="section12"
                    smooth={true}
                    duration={350}
                    spy={true}
                    isDynamic={true}
                    activeClass="active"
                    className="support__btn"
                    offset={-170}
                    onClick={() => setBurgerOpen(false)}
                  >
                    <Trans>Listing of new token</Trans>
                  </ScrollLink>
                </li>

                <li className="support__item">
                  <ScrollLink
                    to="section13"
                    smooth={true}
                    duration={350}
                    spy={true}
                    isDynamic={true}
                    activeClass="active"
                    className="support__btn"
                    offset={-170}
                    onClick={() => setBurgerOpen(false)}
                  >
                    <Trans>Contact to Sale</Trans>
                  </ScrollLink>
                </li>

                <li className="support__item">
                  <ScrollLink
                    to="section14"
                    smooth={true}
                    duration={350}
                    spy={true}
                    isDynamic={true}
                    activeClass="active"
                    className="support__btn"
                    offset={-170}
                    onClick={() => setBurgerOpen(false)}
                  >
                    <Trans>Token Warnings</Trans>
                  </ScrollLink>
                </li>
              </ul>
            </div>
          </aside>
          <div className="support__main">
            {/* <h1 className="support__title">Support</h1> */}
            <div className="support__contents">
              <Element className="support__content" name="section1">
                <div className="support__block">
                  <h2 className="support__block-title">About Project</h2>
                  <div className="support__texts">
                    <p>
                      Ac viverra at scelerisque arcu. Sed facilisi nascetur cras et magnis ac. A ac malesuada a
                      condimentum. Amet odio venenatis amet malesuada sed iaculis. Scelerisque iaculis diam diam ut. Non
                      amet eget libero ut. Consequat donec ullamcorper elit faucibus id ac risus bibendum. Turpis at
                      adipiscing maecenas interdum est aliquet platea augue vitae. Felis non ultrices vulputate ultrices
                      semper amet id erat. Facilisi morbi erat duis sit ut. Sagittis semper euismod fames id
                      pellentesque. Mauris purus non fringilla elit tempor massa suspendisse. Et tellus urna sed aliquam
                      eu. Ultrices euismod ultrices elit facilisis arcu consequat bibendum.
                    </p>
                    <p>
                      Vel pharetra nisl scelerisque pretium. Turpis faucibus fermentum dis euismod urna euismod tortor
                      libero. Varius semper gravida aliquam lacus venenatis purus id. Condimentum eu pellentesque amet
                      aliquet nisl commodo volutpat tempus. Auctor pellentesque eget sed scelerisque aliquam ut
                      elementum morbi. Enim faucibus tristique viverra velit adipiscing lobortis vel praesent. Interdum
                      egestas consequat neque phasellus. Amet imperdiet mi cursus nulla aliquam vel tempus. Tortor
                      mauris suspendisse convallis blandit elit diam. Diam nec vel mauris consequat vulputate. Consequat
                      dignissim nisl lectus cursus in.
                    </p>
                    <p>
                      At tempus gravida sollicitudin ridiculus. Amet maecenas ac lorem venenatis etiam tellus. Ut ac
                      urna nibh porttitor lectus ullamcorper. Sed amet mauris consectetur purus. Cras vitae nisi
                      elementum etiam. Nunc turpis ut in tristique commodo id. In leo magna vestibulum cursus arcu nisl
                      mauris. Congue facilisi eu tortor lacinia ut. Ut adipiscing lorem tellus at hac nam. Tempor sem
                      urna libero proin diam ullamcorper aliquet. In elit egestas hendrerit nec magna tortor. Aliquet
                      aliquet non in donec pulvinar non. Diam vulputate phasellus sit commodo est volutpat at faucibus
                      nisi.
                    </p>
                    <p>
                      Non volutpat ridiculus eu enim ultrices eleifend accumsan gravida. Id sed senectus id nulla amet
                      suspendisse egestas. Congue magna pharetra scelerisque sapien volutpat. Nec ornare at netus ornare
                      facilisis adipiscing. Amet sed lorem lorem mollis. Donec ut eget nullam neque ullamcorper. Magna
                      sed lobortis orci id. Pretium aenean faucibus felis leo. Vitae tellus ut commodo duis
                      pellentesque. Orci ipsum nulla urna enim. Facilisis mattis aliquam in sit sed cras egestas id
                      ipsum. Proin in accumsan nibh tortor blandit laoreet sit. Dictumst odio mauris auctor amet sit
                      aliquet gravida. Pharetra ullamcorper arcu proin vitae sit est augue pharetra nisl. Ultricies
                      ultrices pellentesque posuere odio.
                    </p>
                    <p>
                      Luctus vestibulum tempus euismod tincidunt egestas. Curabitur in quam gravida nulla integer. At
                      aliquam mi pellentesque diam tristique aliquet. Vulputate donec nec purus enim. Cursus luctus
                      tristique purus erat sed. Nibh est diam a mus gravida leo. Eros adipiscing eu rhoncus diam. Duis
                      dictum velit id urna nulla enim aliquet ipsum. Turpis purus consectetur suspendisse a ac. Nec ut
                      non in vestibulum luctus tristique in. Amet eu velit ac dolor magnis in. Lectus molestie
                      condimentum etiam sit praesent proin magna blandit. Nunc diam porta nisi ut in. Montes velit et
                      nec euismod blandit sed nisl egestas sollicitudin. Quam at in urna mauris eu vulputate diam. Id
                      duis senectus lectus pretium. At posuere augue massa tortor eget. Gravida lectus elit id rhoncus.
                      Augue a.
                    </p>
                  </div>
                </div>

                <div className="support__block">
                  <h3 className="support__block-title">I. Purposes and grounds for processing personal data</h3>
                  <div className="support__texts">
                    <p>
                      Porttitor est leo vulputate nunc nunc orci odio feugiat. Consectetur adipiscing potenti mauris
                      blandit ut id sit egestas est. Sit lacinia pellentesque libero velit ullamcorper. Interdum neque
                      integer euismod augue sed molestie non dictum. Porttitor nisi nec sit sed mus purus porta
                      condimentum nisi. Vel commodo arcu sed malesuada eleifend amet non eget semper. Dictum ipsum
                      tristique nunc integer volutpat maecenas lectus. Suscipit mattis in ac sed tincidunt ante enim ut
                      viverra. Dignissim mollis tristique at aliquet ipsum. Ut sed enim gravida viverra.
                    </p>
                    <p>
                      Mattis purus vestibulum vel lorem eget varius malesuada. Sagittis quisque fermentum habitant
                      aliquet. Integer lorem pharetra faucibus venenatis fringilla. Luctus vulputate tincidunt in in.
                      Velit libero lectus pellentesque vestibulum placerat blandit lorem metus suspendisse. Vel diam
                      ultrices leo imperdiet. Consectetur odio accumsan vitae sollicitudin. Leo habitant amet id nisl
                      pellentesque tincidunt pulvinar duis at. Quis lacus ultrices vestibulum adipiscing sit ac
                      tincidunt scelerisque. Sed praesent pellentesque cursus orci turpis nisl enim vel at. Sed ut
                      vulputate quam nisl orci nunc. Purus odio sed amet phasellus elementum fusce velit in. Amet non
                      nulla netus quis at massa. Quis imperdiet condimentum morbi tincidunt. Feugiat aliquet donec orci
                      etiam quis aliquet massa in purus.
                    </p>
                    <p>
                      Adipiscing mattis tristique egestas egestas justo risus bibendum turpis sollicitudin. Dignissim
                      arcu aliquet maecenas mauris nisi viverra. A nullam rhoncus a tincidunt ut. Leo sed aliquet
                      venenatis fringilla nunc. Vel eu magna risus porta urna vitae id leo.
                    </p>
                    <p>
                      Velit nec netus tristique diam. Odio nunc interdum nisi lacinia. Odio duis nec ornare mattis.
                      Metus elementum aliquam platea nibh. Gravida viverra dictum amet massa donec vestibulum magna.
                      Pellentesque semper quis sociis viverra vel. Risus ut ipsum ullamcorper a nam auctor dolor fames
                      massa. Libero in erat mi euismod lectus scelerisque quam. Et aliquam condimentum purus id feugiat.
                      Sapien et suscipit neque amet porttitor risus. Leo proin vitae mattis volutpat. Aliquet nullam eu
                      in turpis. Blandit et eget ac at suspendisse. Orci et quam senectus in ut gravida.
                    </p>
                    <p>
                      In pellentesque venenatis tempus vulputate. Eleifend arcu auctor ut auctor suspendisse aliquet
                      tempus sit quam. Commodo vivamus sagittis feugiat porttitor a aenean integer facilisis. Ac nec
                      faucibus malesuada vel. Sapien diam enim dignissim lorem commodo ipsum cras non dictum. Urna
                      aliquam et et dolor neque cursus. Morbi at vestibulum lacinia amet purus est at lacus. Augue proin
                      lorem sed dolor quam mi. Dui mollis aliquet nec iaculis bibendum sed quis semper. Blandit aliquet
                      turpis ornare venenatis. Congue nunc nibh nunc proin aenean tortor volutpat euismod. Vel volutpat
                      neque lectus vel aliquam vel eget amet neque. Pretium justo pulvinar porttitor bibendum. Iaculis
                      diam netus vel feugiat duis sodales congue. Mattis dictumst facilisis congue egestas luctus lacus
                      in turpis proin.
                    </p>
                    <p>
                      Orci mauris tortor eu penatibus lacus egestas. Nunc sed non quis a sollicitudin lacus et. Volutpat
                      gravida nulla interdum elit. Quam turpis mattis posuere nulla augue sit sed maecenas. Convallis mi
                      amet purus ut. Arcu mi sit nisl proin. Nibh aliquam habitant pellentesque viverra justo. Non
                      adipiscing aliquam leo tristique tincidunt. Arcu mauris pharetra viverra pretium amet justo sit.
                      Tortor eget senectus pellentesque egestas. Ultricies ut lectus varius dis. Elementum et egestas
                      blandit porttitor mattis felis magnis ut. Diam id quisque morbi ullamcorper. Nunc nullam curabitur
                      tortor euismod dictum quisque aliquet. Dolor faucibus quis et sem magna aliquet consequat mattis.
                    </p>
                    <p>
                      Convallis facilisis ultrices ac tincidunt pharetra elementum quam. Dignissim in aenean faucibus
                      purus ultrices commodo orci id non. Dignissim pellentesque amet nullam nisl interdum aenean vel
                      enim dignissim. Vestibulum bibendum ullamcorper vulputate tellus ornare volutpat blandit
                      elementum. Amet eu vel faucibus molestie pellentesque pretium. Libero proin condimentum pulvinar
                      suspendisse ac diam orci leo. Fusce aliquet ut enim ultricies ac neque id enim. Id urna a nibh eu
                      vitae auctor nisl suspendisse scelerisque. Tellus semper elit volutpat sagittis. Mauris arcu
                      tincidunt amet vel arcu sollicitudin metus. Volutpat leo vitae pellentesque eget convallis
                      facilisis. Hendrerit sed ut magnis proin diam lacus tincidunt.
                    </p>
                    <p>
                      Pulvinar a mi a ornare varius. Mauris diam congue placerat quisque. Lacus egestas egestas integer
                      quam maecenas in et malesuada scelerisque. Dignissim mi sit id risus. Etiam nullam dolor malesuada
                      dictumst auctor bibendum ut. Tincidunt ut sagittis sit commodo. Phasellus malesuada eu nam et.
                      Diam nunc purus mauris nibh ac.
                    </p>
                    <p>
                      Pretium pellentesque nunc donec ultrices tristique convallis. Dictum phasellus mollis auctor sed
                      vulputate sollicitudin. Urna morbi nam nullam consequat fermentum. Amet imperdiet vestibulum
                      placerat hac viverra. Tempor duis viverra volutpat fermentum. Platea in diam lobortis vulputate.
                      Iaculis amet pharetra sed erat. Bibendum volutpat eleifend sed ut ut blandit at imperdiet.
                      Nascetur pellentesque viverra morbi cursus felis donec lectus eu. Sed eleifend urna mauris
                      malesuada amet eget proin.
                    </p>
                  </div>
                </div>
              </Element>

              <Element className="support__content" name="section2">
                <div className="support__block">
                  <h2 className="support__block-title">Automated Market Maker</h2>
                  <div className="support__texts">
                    <p>
                      Ac viverra at scelerisque arcu. Sed facilisi nascetur cras et magnis ac. A ac malesuada a
                      condimentum. Amet odio venenatis amet malesuada sed iaculis. Scelerisque iaculis diam diam ut. Non
                      amet eget libero ut. Consequat donec ullamcorper elit faucibus id ac risus bibendum. Turpis at
                      adipiscing maecenas interdum est aliquet platea augue vitae. Felis non ultrices vulputate ultrices
                      semper amet id erat. Facilisi morbi erat duis sit ut. Sagittis semper euismod fames id
                      pellentesque. Mauris purus non fringilla elit tempor massa suspendisse. Et tellus urna sed aliquam
                      eu. Ultrices euismod ultrices elit facilisis arcu consequat bibendum.
                    </p>
                    <p>
                      Vel pharetra nisl scelerisque pretium. Turpis faucibus fermentum dis euismod urna euismod tortor
                      libero. Varius semper gravida aliquam lacus venenatis purus id. Condimentum eu pellentesque amet
                      aliquet nisl commodo volutpat tempus. Auctor pellentesque eget sed scelerisque aliquam ut
                      elementum morbi. Enim faucibus tristique viverra velit adipiscing lobortis vel praesent. Interdum
                      egestas consequat neque phasellus. Amet imperdiet mi cursus nulla aliquam vel tempus. Tortor
                      mauris suspendisse convallis blandit elit diam. Diam nec vel mauris consequat vulputate. Consequat
                      dignissim nisl lectus cursus in.
                    </p>
                    <p>
                      At tempus gravida sollicitudin ridiculus. Amet maecenas ac lorem venenatis etiam tellus. Ut ac
                      urna nibh porttitor lectus ullamcorper. Sed amet mauris consectetur purus. Cras vitae nisi
                      elementum etiam. Nunc turpis ut in tristique commodo id. In leo magna vestibulum cursus arcu nisl
                      mauris. Congue facilisi eu tortor lacinia ut. Ut adipiscing lorem tellus at hac nam. Tempor sem
                      urna libero proin diam ullamcorper aliquet. In elit egestas hendrerit nec magna tortor. Aliquet
                      aliquet non in donec pulvinar non. Diam vulputate phasellus sit commodo est volutpat at faucibus
                      nisi.
                    </p>
                    <p>
                      Non volutpat ridiculus eu enim ultrices eleifend accumsan gravida. Id sed senectus id nulla amet
                      suspendisse egestas. Congue magna pharetra scelerisque sapien volutpat. Nec ornare at netus ornare
                      facilisis adipiscing. Amet sed lorem lorem mollis. Donec ut eget nullam neque ullamcorper. Magna
                      sed lobortis orci id. Pretium aenean faucibus felis leo. Vitae tellus ut commodo duis
                      pellentesque. Orci ipsum nulla urna enim. Facilisis mattis aliquam in sit sed cras egestas id
                      ipsum. Proin in accumsan nibh tortor blandit laoreet sit. Dictumst odio mauris auctor amet sit
                      aliquet gravida. Pharetra ullamcorper arcu proin vitae sit est augue pharetra nisl. Ultricies
                      ultrices pellentesque posuere odio.
                    </p>
                    <p>
                      Luctus vestibulum tempus euismod tincidunt egestas. Curabitur in quam gravida nulla integer. At
                      aliquam mi pellentesque diam tristique aliquet. Vulputate donec nec purus enim. Cursus luctus
                      tristique purus erat sed. Nibh est diam a mus gravida leo. Eros adipiscing eu rhoncus diam. Duis
                      dictum velit id urna nulla enim aliquet ipsum. Turpis purus consectetur suspendisse a ac. Nec ut
                      non in vestibulum luctus tristique in. Amet eu velit ac dolor magnis in. Lectus molestie
                      condimentum etiam sit praesent proin magna blandit. Nunc diam porta nisi ut in. Montes velit et
                      nec euismod blandit sed nisl egestas sollicitudin. Quam at in urna mauris eu vulputate diam. Id
                      duis senectus lectus pretium. At posuere augue massa tortor eget. Gravida lectus elit id rhoncus.
                      Augue a.
                    </p>
                  </div>
                </div>

                <div className="support__block">
                  <h3 className="support__block-title">I. Purposes and grounds for processing personal data</h3>
                  <div className="support__texts">
                    <p>
                      Porttitor est leo vulputate nunc nunc orci odio feugiat. Consectetur adipiscing potenti mauris
                      blandit ut id sit egestas est. Sit lacinia pellentesque libero velit ullamcorper. Interdum neque
                      integer euismod augue sed molestie non dictum. Porttitor nisi nec sit sed mus purus porta
                      condimentum nisi. Vel commodo arcu sed malesuada eleifend amet non eget semper. Dictum ipsum
                      tristique nunc integer volutpat maecenas lectus. Suscipit mattis in ac sed tincidunt ante enim ut
                      viverra. Dignissim mollis tristique at aliquet ipsum. Ut sed enim gravida viverra.
                    </p>
                    <p>
                      Mattis purus vestibulum vel lorem eget varius malesuada. Sagittis quisque fermentum habitant
                      aliquet. Integer lorem pharetra faucibus venenatis fringilla. Luctus vulputate tincidunt in in.
                      Velit libero lectus pellentesque vestibulum placerat blandit lorem metus suspendisse. Vel diam
                      ultrices leo imperdiet. Consectetur odio accumsan vitae sollicitudin. Leo habitant amet id nisl
                      pellentesque tincidunt pulvinar duis at. Quis lacus ultrices vestibulum adipiscing sit ac
                      tincidunt scelerisque. Sed praesent pellentesque cursus orci turpis nisl enim vel at. Sed ut
                      vulputate quam nisl orci nunc. Purus odio sed amet phasellus elementum fusce velit in. Amet non
                      nulla netus quis at massa. Quis imperdiet condimentum morbi tincidunt. Feugiat aliquet donec orci
                      etiam quis aliquet massa in purus.
                    </p>
                    <p>
                      Adipiscing mattis tristique egestas egestas justo risus bibendum turpis sollicitudin. Dignissim
                      arcu aliquet maecenas mauris nisi viverra. A nullam rhoncus a tincidunt ut. Leo sed aliquet
                      venenatis fringilla nunc. Vel eu magna risus porta urna vitae id leo.
                    </p>
                    <p>
                      Velit nec netus tristique diam. Odio nunc interdum nisi lacinia. Odio duis nec ornare mattis.
                      Metus elementum aliquam platea nibh. Gravida viverra dictum amet massa donec vestibulum magna.
                      Pellentesque semper quis sociis viverra vel. Risus ut ipsum ullamcorper a nam auctor dolor fames
                      massa. Libero in erat mi euismod lectus scelerisque quam. Et aliquam condimentum purus id feugiat.
                      Sapien et suscipit neque amet porttitor risus. Leo proin vitae mattis volutpat. Aliquet nullam eu
                      in turpis. Blandit et eget ac at suspendisse. Orci et quam senectus in ut gravida.
                    </p>
                    <p>
                      In pellentesque venenatis tempus vulputate. Eleifend arcu auctor ut auctor suspendisse aliquet
                      tempus sit quam. Commodo vivamus sagittis feugiat porttitor a aenean integer facilisis. Ac nec
                      faucibus malesuada vel. Sapien diam enim dignissim lorem commodo ipsum cras non dictum. Urna
                      aliquam et et dolor neque cursus. Morbi at vestibulum lacinia amet purus est at lacus. Augue proin
                      lorem sed dolor quam mi. Dui mollis aliquet nec iaculis bibendum sed quis semper. Blandit aliquet
                      turpis ornare venenatis. Congue nunc nibh nunc proin aenean tortor volutpat euismod. Vel volutpat
                      neque lectus vel aliquam vel eget amet neque. Pretium justo pulvinar porttitor bibendum. Iaculis
                      diam netus vel feugiat duis sodales congue. Mattis dictumst facilisis congue egestas luctus lacus
                      in turpis proin.
                    </p>
                    <p>
                      Orci mauris tortor eu penatibus lacus egestas. Nunc sed non quis a sollicitudin lacus et. Volutpat
                      gravida nulla interdum elit. Quam turpis mattis posuere nulla augue sit sed maecenas. Convallis mi
                      amet purus ut. Arcu mi sit nisl proin. Nibh aliquam habitant pellentesque viverra justo. Non
                      adipiscing aliquam leo tristique tincidunt. Arcu mauris pharetra viverra pretium amet justo sit.
                      Tortor eget senectus pellentesque egestas. Ultricies ut lectus varius dis. Elementum et egestas
                      blandit porttitor mattis felis magnis ut. Diam id quisque morbi ullamcorper. Nunc nullam curabitur
                      tortor euismod dictum quisque aliquet. Dolor faucibus quis et sem magna aliquet consequat mattis.
                    </p>
                    <p>
                      Convallis facilisis ultrices ac tincidunt pharetra elementum quam. Dignissim in aenean faucibus
                      purus ultrices commodo orci id non. Dignissim pellentesque amet nullam nisl interdum aenean vel
                      enim dignissim. Vestibulum bibendum ullamcorper vulputate tellus ornare volutpat blandit
                      elementum. Amet eu vel faucibus molestie pellentesque pretium. Libero proin condimentum pulvinar
                      suspendisse ac diam orci leo. Fusce aliquet ut enim ultricies ac neque id enim. Id urna a nibh eu
                      vitae auctor nisl suspendisse scelerisque. Tellus semper elit volutpat sagittis. Mauris arcu
                      tincidunt amet vel arcu sollicitudin metus. Volutpat leo vitae pellentesque eget convallis
                      facilisis. Hendrerit sed ut magnis proin diam lacus tincidunt.
                    </p>
                    <p>
                      Pulvinar a mi a ornare varius. Mauris diam congue placerat quisque. Lacus egestas egestas integer
                      quam maecenas in et malesuada scelerisque. Dignissim mi sit id risus. Etiam nullam dolor malesuada
                      dictumst auctor bibendum ut. Tincidunt ut sagittis sit commodo. Phasellus malesuada eu nam et.
                      Diam nunc purus mauris nibh ac.
                    </p>
                    <p>
                      Pretium pellentesque nunc donec ultrices tristique convallis. Dictum phasellus mollis auctor sed
                      vulputate sollicitudin. Urna morbi nam nullam consequat fermentum. Amet imperdiet vestibulum
                      placerat hac viverra. Tempor duis viverra volutpat fermentum. Platea in diam lobortis vulputate.
                      Iaculis amet pharetra sed erat. Bibendum volutpat eleifend sed ut ut blandit at imperdiet.
                      Nascetur pellentesque viverra morbi cursus felis donec lectus eu. Sed eleifend urna mauris
                      malesuada amet eget proin.
                    </p>
                  </div>
                </div>
              </Element>

              <Element className="support__content" name="section3">
                <div className="support__block">
                  <h2 className="support__block-title">Swap</h2>
                  <div className="support__texts">
                    <p>
                      Ac viverra at scelerisque arcu. Sed facilisi nascetur cras et magnis ac. A ac malesuada a
                      condimentum. Amet odio venenatis amet malesuada sed iaculis. Scelerisque iaculis diam diam ut. Non
                      amet eget libero ut. Consequat donec ullamcorper elit faucibus id ac risus bibendum. Turpis at
                      adipiscing maecenas interdum est aliquet platea augue vitae. Felis non ultrices vulputate ultrices
                      semper amet id erat. Facilisi morbi erat duis sit ut. Sagittis semper euismod fames id
                      pellentesque. Mauris purus non fringilla elit tempor massa suspendisse. Et tellus urna sed aliquam
                      eu. Ultrices euismod ultrices elit facilisis arcu consequat bibendum.
                    </p>
                    <p>
                      Vel pharetra nisl scelerisque pretium. Turpis faucibus fermentum dis euismod urna euismod tortor
                      libero. Varius semper gravida aliquam lacus venenatis purus id. Condimentum eu pellentesque amet
                      aliquet nisl commodo volutpat tempus. Auctor pellentesque eget sed scelerisque aliquam ut
                      elementum morbi. Enim faucibus tristique viverra velit adipiscing lobortis vel praesent. Interdum
                      egestas consequat neque phasellus. Amet imperdiet mi cursus nulla aliquam vel tempus. Tortor
                      mauris suspendisse convallis blandit elit diam. Diam nec vel mauris consequat vulputate. Consequat
                      dignissim nisl lectus cursus in.
                    </p>
                    <p>
                      At tempus gravida sollicitudin ridiculus. Amet maecenas ac lorem venenatis etiam tellus. Ut ac
                      urna nibh porttitor lectus ullamcorper. Sed amet mauris consectetur purus. Cras vitae nisi
                      elementum etiam. Nunc turpis ut in tristique commodo id. In leo magna vestibulum cursus arcu nisl
                      mauris. Congue facilisi eu tortor lacinia ut. Ut adipiscing lorem tellus at hac nam. Tempor sem
                      urna libero proin diam ullamcorper aliquet. In elit egestas hendrerit nec magna tortor. Aliquet
                      aliquet non in donec pulvinar non. Diam vulputate phasellus sit commodo est volutpat at faucibus
                      nisi.
                    </p>
                    <p>
                      Non volutpat ridiculus eu enim ultrices eleifend accumsan gravida. Id sed senectus id nulla amet
                      suspendisse egestas. Congue magna pharetra scelerisque sapien volutpat. Nec ornare at netus ornare
                      facilisis adipiscing. Amet sed lorem lorem mollis. Donec ut eget nullam neque ullamcorper. Magna
                      sed lobortis orci id. Pretium aenean faucibus felis leo. Vitae tellus ut commodo duis
                      pellentesque. Orci ipsum nulla urna enim. Facilisis mattis aliquam in sit sed cras egestas id
                      ipsum. Proin in accumsan nibh tortor blandit laoreet sit. Dictumst odio mauris auctor amet sit
                      aliquet gravida. Pharetra ullamcorper arcu proin vitae sit est augue pharetra nisl. Ultricies
                      ultrices pellentesque posuere odio.
                    </p>
                    <p>
                      Luctus vestibulum tempus euismod tincidunt egestas. Curabitur in quam gravida nulla integer. At
                      aliquam mi pellentesque diam tristique aliquet. Vulputate donec nec purus enim. Cursus luctus
                      tristique purus erat sed. Nibh est diam a mus gravida leo. Eros adipiscing eu rhoncus diam. Duis
                      dictum velit id urna nulla enim aliquet ipsum. Turpis purus consectetur suspendisse a ac. Nec ut
                      non in vestibulum luctus tristique in. Amet eu velit ac dolor magnis in. Lectus molestie
                      condimentum etiam sit praesent proin magna blandit. Nunc diam porta nisi ut in. Montes velit et
                      nec euismod blandit sed nisl egestas sollicitudin. Quam at in urna mauris eu vulputate diam. Id
                      duis senectus lectus pretium. At posuere augue massa tortor eget. Gravida lectus elit id rhoncus.
                      Augue a.
                    </p>
                  </div>
                </div>

                <div className="support__block">
                  <h3 className="support__block-title">I. Purposes and grounds for processing personal data</h3>
                  <div className="support__texts">
                    <p>
                      Porttitor est leo vulputate nunc nunc orci odio feugiat. Consectetur adipiscing potenti mauris
                      blandit ut id sit egestas est. Sit lacinia pellentesque libero velit ullamcorper. Interdum neque
                      integer euismod augue sed molestie non dictum. Porttitor nisi nec sit sed mus purus porta
                      condimentum nisi. Vel commodo arcu sed malesuada eleifend amet non eget semper. Dictum ipsum
                      tristique nunc integer volutpat maecenas lectus. Suscipit mattis in ac sed tincidunt ante enim ut
                      viverra. Dignissim mollis tristique at aliquet ipsum. Ut sed enim gravida viverra.
                    </p>
                    <p>
                      Mattis purus vestibulum vel lorem eget varius malesuada. Sagittis quisque fermentum habitant
                      aliquet. Integer lorem pharetra faucibus venenatis fringilla. Luctus vulputate tincidunt in in.
                      Velit libero lectus pellentesque vestibulum placerat blandit lorem metus suspendisse. Vel diam
                      ultrices leo imperdiet. Consectetur odio accumsan vitae sollicitudin. Leo habitant amet id nisl
                      pellentesque tincidunt pulvinar duis at. Quis lacus ultrices vestibulum adipiscing sit ac
                      tincidunt scelerisque. Sed praesent pellentesque cursus orci turpis nisl enim vel at. Sed ut
                      vulputate quam nisl orci nunc. Purus odio sed amet phasellus elementum fusce velit in. Amet non
                      nulla netus quis at massa. Quis imperdiet condimentum morbi tincidunt. Feugiat aliquet donec orci
                      etiam quis aliquet massa in purus.
                    </p>
                    <p>
                      Adipiscing mattis tristique egestas egestas justo risus bibendum turpis sollicitudin. Dignissim
                      arcu aliquet maecenas mauris nisi viverra. A nullam rhoncus a tincidunt ut. Leo sed aliquet
                      venenatis fringilla nunc. Vel eu magna risus porta urna vitae id leo.
                    </p>
                    <p>
                      Velit nec netus tristique diam. Odio nunc interdum nisi lacinia. Odio duis nec ornare mattis.
                      Metus elementum aliquam platea nibh. Gravida viverra dictum amet massa donec vestibulum magna.
                      Pellentesque semper quis sociis viverra vel. Risus ut ipsum ullamcorper a nam auctor dolor fames
                      massa. Libero in erat mi euismod lectus scelerisque quam. Et aliquam condimentum purus id feugiat.
                      Sapien et suscipit neque amet porttitor risus. Leo proin vitae mattis volutpat. Aliquet nullam eu
                      in turpis. Blandit et eget ac at suspendisse. Orci et quam senectus in ut gravida.
                    </p>
                    <p>
                      In pellentesque venenatis tempus vulputate. Eleifend arcu auctor ut auctor suspendisse aliquet
                      tempus sit quam. Commodo vivamus sagittis feugiat porttitor a aenean integer facilisis. Ac nec
                      faucibus malesuada vel. Sapien diam enim dignissim lorem commodo ipsum cras non dictum. Urna
                      aliquam et et dolor neque cursus. Morbi at vestibulum lacinia amet purus est at lacus. Augue proin
                      lorem sed dolor quam mi. Dui mollis aliquet nec iaculis bibendum sed quis semper. Blandit aliquet
                      turpis ornare venenatis. Congue nunc nibh nunc proin aenean tortor volutpat euismod. Vel volutpat
                      neque lectus vel aliquam vel eget amet neque. Pretium justo pulvinar porttitor bibendum. Iaculis
                      diam netus vel feugiat duis sodales congue. Mattis dictumst facilisis congue egestas luctus lacus
                      in turpis proin.
                    </p>
                    <p>
                      Orci mauris tortor eu penatibus lacus egestas. Nunc sed non quis a sollicitudin lacus et. Volutpat
                      gravida nulla interdum elit. Quam turpis mattis posuere nulla augue sit sed maecenas. Convallis mi
                      amet purus ut. Arcu mi sit nisl proin. Nibh aliquam habitant pellentesque viverra justo. Non
                      adipiscing aliquam leo tristique tincidunt. Arcu mauris pharetra viverra pretium amet justo sit.
                      Tortor eget senectus pellentesque egestas. Ultricies ut lectus varius dis. Elementum et egestas
                      blandit porttitor mattis felis magnis ut. Diam id quisque morbi ullamcorper. Nunc nullam curabitur
                      tortor euismod dictum quisque aliquet. Dolor faucibus quis et sem magna aliquet consequat mattis.
                    </p>
                    <p>
                      Convallis facilisis ultrices ac tincidunt pharetra elementum quam. Dignissim in aenean faucibus
                      purus ultrices commodo orci id non. Dignissim pellentesque amet nullam nisl interdum aenean vel
                      enim dignissim. Vestibulum bibendum ullamcorper vulputate tellus ornare volutpat blandit
                      elementum. Amet eu vel faucibus molestie pellentesque pretium. Libero proin condimentum pulvinar
                      suspendisse ac diam orci leo. Fusce aliquet ut enim ultricies ac neque id enim. Id urna a nibh eu
                      vitae auctor nisl suspendisse scelerisque. Tellus semper elit volutpat sagittis. Mauris arcu
                      tincidunt amet vel arcu sollicitudin metus. Volutpat leo vitae pellentesque eget convallis
                      facilisis. Hendrerit sed ut magnis proin diam lacus tincidunt.
                    </p>
                    <p>
                      Pulvinar a mi a ornare varius. Mauris diam congue placerat quisque. Lacus egestas egestas integer
                      quam maecenas in et malesuada scelerisque. Dignissim mi sit id risus. Etiam nullam dolor malesuada
                      dictumst auctor bibendum ut. Tincidunt ut sagittis sit commodo. Phasellus malesuada eu nam et.
                      Diam nunc purus mauris nibh ac.
                    </p>
                    <p>
                      Pretium pellentesque nunc donec ultrices tristique convallis. Dictum phasellus mollis auctor sed
                      vulputate sollicitudin. Urna morbi nam nullam consequat fermentum. Amet imperdiet vestibulum
                      placerat hac viverra. Tempor duis viverra volutpat fermentum. Platea in diam lobortis vulputate.
                      Iaculis amet pharetra sed erat. Bibendum volutpat eleifend sed ut ut blandit at imperdiet.
                      Nascetur pellentesque viverra morbi cursus felis donec lectus eu. Sed eleifend urna mauris
                      malesuada amet eget proin.
                    </p>
                  </div>
                </div>
              </Element>

              <Element className="support__content" name="section4">
                <div className="support__block">
                  <h2 className="support__block-title">Liquidity Provider</h2>
                  <div className="support__texts">
                    <p>
                      Ac viverra at scelerisque arcu. Sed facilisi nascetur cras et magnis ac. A ac malesuada a
                      condimentum. Amet odio venenatis amet malesuada sed iaculis. Scelerisque iaculis diam diam ut. Non
                      amet eget libero ut. Consequat donec ullamcorper elit faucibus id ac risus bibendum. Turpis at
                      adipiscing maecenas interdum est aliquet platea augue vitae. Felis non ultrices vulputate ultrices
                      semper amet id erat. Facilisi morbi erat duis sit ut. Sagittis semper euismod fames id
                      pellentesque. Mauris purus non fringilla elit tempor massa suspendisse. Et tellus urna sed aliquam
                      eu. Ultrices euismod ultrices elit facilisis arcu consequat bibendum.
                    </p>
                    <p>
                      Vel pharetra nisl scelerisque pretium. Turpis faucibus fermentum dis euismod urna euismod tortor
                      libero. Varius semper gravida aliquam lacus venenatis purus id. Condimentum eu pellentesque amet
                      aliquet nisl commodo volutpat tempus. Auctor pellentesque eget sed scelerisque aliquam ut
                      elementum morbi. Enim faucibus tristique viverra velit adipiscing lobortis vel praesent. Interdum
                      egestas consequat neque phasellus. Amet imperdiet mi cursus nulla aliquam vel tempus. Tortor
                      mauris suspendisse convallis blandit elit diam. Diam nec vel mauris consequat vulputate. Consequat
                      dignissim nisl lectus cursus in.
                    </p>
                    <p>
                      At tempus gravida sollicitudin ridiculus. Amet maecenas ac lorem venenatis etiam tellus. Ut ac
                      urna nibh porttitor lectus ullamcorper. Sed amet mauris consectetur purus. Cras vitae nisi
                      elementum etiam. Nunc turpis ut in tristique commodo id. In leo magna vestibulum cursus arcu nisl
                      mauris. Congue facilisi eu tortor lacinia ut. Ut adipiscing lorem tellus at hac nam. Tempor sem
                      urna libero proin diam ullamcorper aliquet. In elit egestas hendrerit nec magna tortor. Aliquet
                      aliquet non in donec pulvinar non. Diam vulputate phasellus sit commodo est volutpat at faucibus
                      nisi.
                    </p>
                    <p>
                      Non volutpat ridiculus eu enim ultrices eleifend accumsan gravida. Id sed senectus id nulla amet
                      suspendisse egestas. Congue magna pharetra scelerisque sapien volutpat. Nec ornare at netus ornare
                      facilisis adipiscing. Amet sed lorem lorem mollis. Donec ut eget nullam neque ullamcorper. Magna
                      sed lobortis orci id. Pretium aenean faucibus felis leo. Vitae tellus ut commodo duis
                      pellentesque. Orci ipsum nulla urna enim. Facilisis mattis aliquam in sit sed cras egestas id
                      ipsum. Proin in accumsan nibh tortor blandit laoreet sit. Dictumst odio mauris auctor amet sit
                      aliquet gravida. Pharetra ullamcorper arcu proin vitae sit est augue pharetra nisl. Ultricies
                      ultrices pellentesque posuere odio.
                    </p>
                    <p>
                      Luctus vestibulum tempus euismod tincidunt egestas. Curabitur in quam gravida nulla integer. At
                      aliquam mi pellentesque diam tristique aliquet. Vulputate donec nec purus enim. Cursus luctus
                      tristique purus erat sed. Nibh est diam a mus gravida leo. Eros adipiscing eu rhoncus diam. Duis
                      dictum velit id urna nulla enim aliquet ipsum. Turpis purus consectetur suspendisse a ac. Nec ut
                      non in vestibulum luctus tristique in. Amet eu velit ac dolor magnis in. Lectus molestie
                      condimentum etiam sit praesent proin magna blandit. Nunc diam porta nisi ut in. Montes velit et
                      nec euismod blandit sed nisl egestas sollicitudin. Quam at in urna mauris eu vulputate diam. Id
                      duis senectus lectus pretium. At posuere augue massa tortor eget. Gravida lectus elit id rhoncus.
                      Augue a.
                    </p>
                  </div>
                </div>

                <div className="support__block">
                  <h3 className="support__block-title">I. Purposes and grounds for processing personal data</h3>
                  <div className="support__texts">
                    <p>
                      Porttitor est leo vulputate nunc nunc orci odio feugiat. Consectetur adipiscing potenti mauris
                      blandit ut id sit egestas est. Sit lacinia pellentesque libero velit ullamcorper. Interdum neque
                      integer euismod augue sed molestie non dictum. Porttitor nisi nec sit sed mus purus porta
                      condimentum nisi. Vel commodo arcu sed malesuada eleifend amet non eget semper. Dictum ipsum
                      tristique nunc integer volutpat maecenas lectus. Suscipit mattis in ac sed tincidunt ante enim ut
                      viverra. Dignissim mollis tristique at aliquet ipsum. Ut sed enim gravida viverra.
                    </p>
                    <p>
                      Mattis purus vestibulum vel lorem eget varius malesuada. Sagittis quisque fermentum habitant
                      aliquet. Integer lorem pharetra faucibus venenatis fringilla. Luctus vulputate tincidunt in in.
                      Velit libero lectus pellentesque vestibulum placerat blandit lorem metus suspendisse. Vel diam
                      ultrices leo imperdiet. Consectetur odio accumsan vitae sollicitudin. Leo habitant amet id nisl
                      pellentesque tincidunt pulvinar duis at. Quis lacus ultrices vestibulum adipiscing sit ac
                      tincidunt scelerisque. Sed praesent pellentesque cursus orci turpis nisl enim vel at. Sed ut
                      vulputate quam nisl orci nunc. Purus odio sed amet phasellus elementum fusce velit in. Amet non
                      nulla netus quis at massa. Quis imperdiet condimentum morbi tincidunt. Feugiat aliquet donec orci
                      etiam quis aliquet massa in purus.
                    </p>
                    <p>
                      Adipiscing mattis tristique egestas egestas justo risus bibendum turpis sollicitudin. Dignissim
                      arcu aliquet maecenas mauris nisi viverra. A nullam rhoncus a tincidunt ut. Leo sed aliquet
                      venenatis fringilla nunc. Vel eu magna risus porta urna vitae id leo.
                    </p>
                    <p>
                      Velit nec netus tristique diam. Odio nunc interdum nisi lacinia. Odio duis nec ornare mattis.
                      Metus elementum aliquam platea nibh. Gravida viverra dictum amet massa donec vestibulum magna.
                      Pellentesque semper quis sociis viverra vel. Risus ut ipsum ullamcorper a nam auctor dolor fames
                      massa. Libero in erat mi euismod lectus scelerisque quam. Et aliquam condimentum purus id feugiat.
                      Sapien et suscipit neque amet porttitor risus. Leo proin vitae mattis volutpat. Aliquet nullam eu
                      in turpis. Blandit et eget ac at suspendisse. Orci et quam senectus in ut gravida.
                    </p>
                    <p>
                      In pellentesque venenatis tempus vulputate. Eleifend arcu auctor ut auctor suspendisse aliquet
                      tempus sit quam. Commodo vivamus sagittis feugiat porttitor a aenean integer facilisis. Ac nec
                      faucibus malesuada vel. Sapien diam enim dignissim lorem commodo ipsum cras non dictum. Urna
                      aliquam et et dolor neque cursus. Morbi at vestibulum lacinia amet purus est at lacus. Augue proin
                      lorem sed dolor quam mi. Dui mollis aliquet nec iaculis bibendum sed quis semper. Blandit aliquet
                      turpis ornare venenatis. Congue nunc nibh nunc proin aenean tortor volutpat euismod. Vel volutpat
                      neque lectus vel aliquam vel eget amet neque. Pretium justo pulvinar porttitor bibendum. Iaculis
                      diam netus vel feugiat duis sodales congue. Mattis dictumst facilisis congue egestas luctus lacus
                      in turpis proin.
                    </p>
                    <p>
                      Orci mauris tortor eu penatibus lacus egestas. Nunc sed non quis a sollicitudin lacus et. Volutpat
                      gravida nulla interdum elit. Quam turpis mattis posuere nulla augue sit sed maecenas. Convallis mi
                      amet purus ut. Arcu mi sit nisl proin. Nibh aliquam habitant pellentesque viverra justo. Non
                      adipiscing aliquam leo tristique tincidunt. Arcu mauris pharetra viverra pretium amet justo sit.
                      Tortor eget senectus pellentesque egestas. Ultricies ut lectus varius dis. Elementum et egestas
                      blandit porttitor mattis felis magnis ut. Diam id quisque morbi ullamcorper. Nunc nullam curabitur
                      tortor euismod dictum quisque aliquet. Dolor faucibus quis et sem magna aliquet consequat mattis.
                    </p>
                    <p>
                      Convallis facilisis ultrices ac tincidunt pharetra elementum quam. Dignissim in aenean faucibus
                      purus ultrices commodo orci id non. Dignissim pellentesque amet nullam nisl interdum aenean vel
                      enim dignissim. Vestibulum bibendum ullamcorper vulputate tellus ornare volutpat blandit
                      elementum. Amet eu vel faucibus molestie pellentesque pretium. Libero proin condimentum pulvinar
                      suspendisse ac diam orci leo. Fusce aliquet ut enim ultricies ac neque id enim. Id urna a nibh eu
                      vitae auctor nisl suspendisse scelerisque. Tellus semper elit volutpat sagittis. Mauris arcu
                      tincidunt amet vel arcu sollicitudin metus. Volutpat leo vitae pellentesque eget convallis
                      facilisis. Hendrerit sed ut magnis proin diam lacus tincidunt.
                    </p>
                    <p>
                      Pulvinar a mi a ornare varius. Mauris diam congue placerat quisque. Lacus egestas egestas integer
                      quam maecenas in et malesuada scelerisque. Dignissim mi sit id risus. Etiam nullam dolor malesuada
                      dictumst auctor bibendum ut. Tincidunt ut sagittis sit commodo. Phasellus malesuada eu nam et.
                      Diam nunc purus mauris nibh ac.
                    </p>
                    <p>
                      Pretium pellentesque nunc donec ultrices tristique convallis. Dictum phasellus mollis auctor sed
                      vulputate sollicitudin. Urna morbi nam nullam consequat fermentum. Amet imperdiet vestibulum
                      placerat hac viverra. Tempor duis viverra volutpat fermentum. Platea in diam lobortis vulputate.
                      Iaculis amet pharetra sed erat. Bibendum volutpat eleifend sed ut ut blandit at imperdiet.
                      Nascetur pellentesque viverra morbi cursus felis donec lectus eu. Sed eleifend urna mauris
                      malesuada amet eget proin.
                    </p>
                  </div>
                </div>
              </Element>

              <Element className="support__content" name="section5">
                <div className="support__block">
                  <h2 className="support__block-title">Pool</h2>
                  <div className="support__texts">
                    <p>
                      Ac viverra at scelerisque arcu. Sed facilisi nascetur cras et magnis ac. A ac malesuada a
                      condimentum. Amet odio venenatis amet malesuada sed iaculis. Scelerisque iaculis diam diam ut. Non
                      amet eget libero ut. Consequat donec ullamcorper elit faucibus id ac risus bibendum. Turpis at
                      adipiscing maecenas interdum est aliquet platea augue vitae. Felis non ultrices vulputate ultrices
                      semper amet id erat. Facilisi morbi erat duis sit ut. Sagittis semper euismod fames id
                      pellentesque. Mauris purus non fringilla elit tempor massa suspendisse. Et tellus urna sed aliquam
                      eu. Ultrices euismod ultrices elit facilisis arcu consequat bibendum.
                    </p>
                    <p>
                      Vel pharetra nisl scelerisque pretium. Turpis faucibus fermentum dis euismod urna euismod tortor
                      libero. Varius semper gravida aliquam lacus venenatis purus id. Condimentum eu pellentesque amet
                      aliquet nisl commodo volutpat tempus. Auctor pellentesque eget sed scelerisque aliquam ut
                      elementum morbi. Enim faucibus tristique viverra velit adipiscing lobortis vel praesent. Interdum
                      egestas consequat neque phasellus. Amet imperdiet mi cursus nulla aliquam vel tempus. Tortor
                      mauris suspendisse convallis blandit elit diam. Diam nec vel mauris consequat vulputate. Consequat
                      dignissim nisl lectus cursus in.
                    </p>
                    <p>
                      At tempus gravida sollicitudin ridiculus. Amet maecenas ac lorem venenatis etiam tellus. Ut ac
                      urna nibh porttitor lectus ullamcorper. Sed amet mauris consectetur purus. Cras vitae nisi
                      elementum etiam. Nunc turpis ut in tristique commodo id. In leo magna vestibulum cursus arcu nisl
                      mauris. Congue facilisi eu tortor lacinia ut. Ut adipiscing lorem tellus at hac nam. Tempor sem
                      urna libero proin diam ullamcorper aliquet. In elit egestas hendrerit nec magna tortor. Aliquet
                      aliquet non in donec pulvinar non. Diam vulputate phasellus sit commodo est volutpat at faucibus
                      nisi.
                    </p>
                    <p>
                      Non volutpat ridiculus eu enim ultrices eleifend accumsan gravida. Id sed senectus id nulla amet
                      suspendisse egestas. Congue magna pharetra scelerisque sapien volutpat. Nec ornare at netus ornare
                      facilisis adipiscing. Amet sed lorem lorem mollis. Donec ut eget nullam neque ullamcorper. Magna
                      sed lobortis orci id. Pretium aenean faucibus felis leo. Vitae tellus ut commodo duis
                      pellentesque. Orci ipsum nulla urna enim. Facilisis mattis aliquam in sit sed cras egestas id
                      ipsum. Proin in accumsan nibh tortor blandit laoreet sit. Dictumst odio mauris auctor amet sit
                      aliquet gravida. Pharetra ullamcorper arcu proin vitae sit est augue pharetra nisl. Ultricies
                      ultrices pellentesque posuere odio.
                    </p>
                    <p>
                      Luctus vestibulum tempus euismod tincidunt egestas. Curabitur in quam gravida nulla integer. At
                      aliquam mi pellentesque diam tristique aliquet. Vulputate donec nec purus enim. Cursus luctus
                      tristique purus erat sed. Nibh est diam a mus gravida leo. Eros adipiscing eu rhoncus diam. Duis
                      dictum velit id urna nulla enim aliquet ipsum. Turpis purus consectetur suspendisse a ac. Nec ut
                      non in vestibulum luctus tristique in. Amet eu velit ac dolor magnis in. Lectus molestie
                      condimentum etiam sit praesent proin magna blandit. Nunc diam porta nisi ut in. Montes velit et
                      nec euismod blandit sed nisl egestas sollicitudin. Quam at in urna mauris eu vulputate diam. Id
                      duis senectus lectus pretium. At posuere augue massa tortor eget. Gravida lectus elit id rhoncus.
                      Augue a.
                    </p>
                  </div>
                </div>

                <div className="support__block">
                  <h3 className="support__block-title">I. Purposes and grounds for processing personal data</h3>
                  <div className="support__texts">
                    <p>
                      Porttitor est leo vulputate nunc nunc orci odio feugiat. Consectetur adipiscing potenti mauris
                      blandit ut id sit egestas est. Sit lacinia pellentesque libero velit ullamcorper. Interdum neque
                      integer euismod augue sed molestie non dictum. Porttitor nisi nec sit sed mus purus porta
                      condimentum nisi. Vel commodo arcu sed malesuada eleifend amet non eget semper. Dictum ipsum
                      tristique nunc integer volutpat maecenas lectus. Suscipit mattis in ac sed tincidunt ante enim ut
                      viverra. Dignissim mollis tristique at aliquet ipsum. Ut sed enim gravida viverra.
                    </p>
                    <p>
                      Mattis purus vestibulum vel lorem eget varius malesuada. Sagittis quisque fermentum habitant
                      aliquet. Integer lorem pharetra faucibus venenatis fringilla. Luctus vulputate tincidunt in in.
                      Velit libero lectus pellentesque vestibulum placerat blandit lorem metus suspendisse. Vel diam
                      ultrices leo imperdiet. Consectetur odio accumsan vitae sollicitudin. Leo habitant amet id nisl
                      pellentesque tincidunt pulvinar duis at. Quis lacus ultrices vestibulum adipiscing sit ac
                      tincidunt scelerisque. Sed praesent pellentesque cursus orci turpis nisl enim vel at. Sed ut
                      vulputate quam nisl orci nunc. Purus odio sed amet phasellus elementum fusce velit in. Amet non
                      nulla netus quis at massa. Quis imperdiet condimentum morbi tincidunt. Feugiat aliquet donec orci
                      etiam quis aliquet massa in purus.
                    </p>
                    <p>
                      Adipiscing mattis tristique egestas egestas justo risus bibendum turpis sollicitudin. Dignissim
                      arcu aliquet maecenas mauris nisi viverra. A nullam rhoncus a tincidunt ut. Leo sed aliquet
                      venenatis fringilla nunc. Vel eu magna risus porta urna vitae id leo.
                    </p>
                    <p>
                      Velit nec netus tristique diam. Odio nunc interdum nisi lacinia. Odio duis nec ornare mattis.
                      Metus elementum aliquam platea nibh. Gravida viverra dictum amet massa donec vestibulum magna.
                      Pellentesque semper quis sociis viverra vel. Risus ut ipsum ullamcorper a nam auctor dolor fames
                      massa. Libero in erat mi euismod lectus scelerisque quam. Et aliquam condimentum purus id feugiat.
                      Sapien et suscipit neque amet porttitor risus. Leo proin vitae mattis volutpat. Aliquet nullam eu
                      in turpis. Blandit et eget ac at suspendisse. Orci et quam senectus in ut gravida.
                    </p>
                    <p>
                      In pellentesque venenatis tempus vulputate. Eleifend arcu auctor ut auctor suspendisse aliquet
                      tempus sit quam. Commodo vivamus sagittis feugiat porttitor a aenean integer facilisis. Ac nec
                      faucibus malesuada vel. Sapien diam enim dignissim lorem commodo ipsum cras non dictum. Urna
                      aliquam et et dolor neque cursus. Morbi at vestibulum lacinia amet purus est at lacus. Augue proin
                      lorem sed dolor quam mi. Dui mollis aliquet nec iaculis bibendum sed quis semper. Blandit aliquet
                      turpis ornare venenatis. Congue nunc nibh nunc proin aenean tortor volutpat euismod. Vel volutpat
                      neque lectus vel aliquam vel eget amet neque. Pretium justo pulvinar porttitor bibendum. Iaculis
                      diam netus vel feugiat duis sodales congue. Mattis dictumst facilisis congue egestas luctus lacus
                      in turpis proin.
                    </p>
                    <p>
                      Orci mauris tortor eu penatibus lacus egestas. Nunc sed non quis a sollicitudin lacus et. Volutpat
                      gravida nulla interdum elit. Quam turpis mattis posuere nulla augue sit sed maecenas. Convallis mi
                      amet purus ut. Arcu mi sit nisl proin. Nibh aliquam habitant pellentesque viverra justo. Non
                      adipiscing aliquam leo tristique tincidunt. Arcu mauris pharetra viverra pretium amet justo sit.
                      Tortor eget senectus pellentesque egestas. Ultricies ut lectus varius dis. Elementum et egestas
                      blandit porttitor mattis felis magnis ut. Diam id quisque morbi ullamcorper. Nunc nullam curabitur
                      tortor euismod dictum quisque aliquet. Dolor faucibus quis et sem magna aliquet consequat mattis.
                    </p>
                    <p>
                      Convallis facilisis ultrices ac tincidunt pharetra elementum quam. Dignissim in aenean faucibus
                      purus ultrices commodo orci id non. Dignissim pellentesque amet nullam nisl interdum aenean vel
                      enim dignissim. Vestibulum bibendum ullamcorper vulputate tellus ornare volutpat blandit
                      elementum. Amet eu vel faucibus molestie pellentesque pretium. Libero proin condimentum pulvinar
                      suspendisse ac diam orci leo. Fusce aliquet ut enim ultricies ac neque id enim. Id urna a nibh eu
                      vitae auctor nisl suspendisse scelerisque. Tellus semper elit volutpat sagittis. Mauris arcu
                      tincidunt amet vel arcu sollicitudin metus. Volutpat leo vitae pellentesque eget convallis
                      facilisis. Hendrerit sed ut magnis proin diam lacus tincidunt.
                    </p>
                    <p>
                      Pulvinar a mi a ornare varius. Mauris diam congue placerat quisque. Lacus egestas egestas integer
                      quam maecenas in et malesuada scelerisque. Dignissim mi sit id risus. Etiam nullam dolor malesuada
                      dictumst auctor bibendum ut. Tincidunt ut sagittis sit commodo. Phasellus malesuada eu nam et.
                      Diam nunc purus mauris nibh ac.
                    </p>
                    <p>
                      Pretium pellentesque nunc donec ultrices tristique convallis. Dictum phasellus mollis auctor sed
                      vulputate sollicitudin. Urna morbi nam nullam consequat fermentum. Amet imperdiet vestibulum
                      placerat hac viverra. Tempor duis viverra volutpat fermentum. Platea in diam lobortis vulputate.
                      Iaculis amet pharetra sed erat. Bibendum volutpat eleifend sed ut ut blandit at imperdiet.
                      Nascetur pellentesque viverra morbi cursus felis donec lectus eu. Sed eleifend urna mauris
                      malesuada amet eget proin.
                    </p>
                  </div>
                </div>
              </Element>

              <Element className="support__content" name="section6">
                <div className="support__block">
                  <h2 className="support__block-title">Liquidity Provider token</h2>
                  <div className="support__texts">
                    <p>
                      Ac viverra at scelerisque arcu. Sed facilisi nascetur cras et magnis ac. A ac malesuada a
                      condimentum. Amet odio venenatis amet malesuada sed iaculis. Scelerisque iaculis diam diam ut. Non
                      amet eget libero ut. Consequat donec ullamcorper elit faucibus id ac risus bibendum. Turpis at
                      adipiscing maecenas interdum est aliquet platea augue vitae. Felis non ultrices vulputate ultrices
                      semper amet id erat. Facilisi morbi erat duis sit ut. Sagittis semper euismod fames id
                      pellentesque. Mauris purus non fringilla elit tempor massa suspendisse. Et tellus urna sed aliquam
                      eu. Ultrices euismod ultrices elit facilisis arcu consequat bibendum.
                    </p>
                    <p>
                      Vel pharetra nisl scelerisque pretium. Turpis faucibus fermentum dis euismod urna euismod tortor
                      libero. Varius semper gravida aliquam lacus venenatis purus id. Condimentum eu pellentesque amet
                      aliquet nisl commodo volutpat tempus. Auctor pellentesque eget sed scelerisque aliquam ut
                      elementum morbi. Enim faucibus tristique viverra velit adipiscing lobortis vel praesent. Interdum
                      egestas consequat neque phasellus. Amet imperdiet mi cursus nulla aliquam vel tempus. Tortor
                      mauris suspendisse convallis blandit elit diam. Diam nec vel mauris consequat vulputate. Consequat
                      dignissim nisl lectus cursus in.
                    </p>
                    <p>
                      At tempus gravida sollicitudin ridiculus. Amet maecenas ac lorem venenatis etiam tellus. Ut ac
                      urna nibh porttitor lectus ullamcorper. Sed amet mauris consectetur purus. Cras vitae nisi
                      elementum etiam. Nunc turpis ut in tristique commodo id. In leo magna vestibulum cursus arcu nisl
                      mauris. Congue facilisi eu tortor lacinia ut. Ut adipiscing lorem tellus at hac nam. Tempor sem
                      urna libero proin diam ullamcorper aliquet. In elit egestas hendrerit nec magna tortor. Aliquet
                      aliquet non in donec pulvinar non. Diam vulputate phasellus sit commodo est volutpat at faucibus
                      nisi.
                    </p>
                    <p>
                      Non volutpat ridiculus eu enim ultrices eleifend accumsan gravida. Id sed senectus id nulla amet
                      suspendisse egestas. Congue magna pharetra scelerisque sapien volutpat. Nec ornare at netus ornare
                      facilisis adipiscing. Amet sed lorem lorem mollis. Donec ut eget nullam neque ullamcorper. Magna
                      sed lobortis orci id. Pretium aenean faucibus felis leo. Vitae tellus ut commodo duis
                      pellentesque. Orci ipsum nulla urna enim. Facilisis mattis aliquam in sit sed cras egestas id
                      ipsum. Proin in accumsan nibh tortor blandit laoreet sit. Dictumst odio mauris auctor amet sit
                      aliquet gravida. Pharetra ullamcorper arcu proin vitae sit est augue pharetra nisl. Ultricies
                      ultrices pellentesque posuere odio.
                    </p>
                    <p>
                      Luctus vestibulum tempus euismod tincidunt egestas. Curabitur in quam gravida nulla integer. At
                      aliquam mi pellentesque diam tristique aliquet. Vulputate donec nec purus enim. Cursus luctus
                      tristique purus erat sed. Nibh est diam a mus gravida leo. Eros adipiscing eu rhoncus diam. Duis
                      dictum velit id urna nulla enim aliquet ipsum. Turpis purus consectetur suspendisse a ac. Nec ut
                      non in vestibulum luctus tristique in. Amet eu velit ac dolor magnis in. Lectus molestie
                      condimentum etiam sit praesent proin magna blandit. Nunc diam porta nisi ut in. Montes velit et
                      nec euismod blandit sed nisl egestas sollicitudin. Quam at in urna mauris eu vulputate diam. Id
                      duis senectus lectus pretium. At posuere augue massa tortor eget. Gravida lectus elit id rhoncus.
                      Augue a.
                    </p>
                  </div>
                </div>

                <div className="support__block">
                  <h3 className="support__block-title">I. Purposes and grounds for processing personal data</h3>
                  <div className="support__texts">
                    <p>
                      Porttitor est leo vulputate nunc nunc orci odio feugiat. Consectetur adipiscing potenti mauris
                      blandit ut id sit egestas est. Sit lacinia pellentesque libero velit ullamcorper. Interdum neque
                      integer euismod augue sed molestie non dictum. Porttitor nisi nec sit sed mus purus porta
                      condimentum nisi. Vel commodo arcu sed malesuada eleifend amet non eget semper. Dictum ipsum
                      tristique nunc integer volutpat maecenas lectus. Suscipit mattis in ac sed tincidunt ante enim ut
                      viverra. Dignissim mollis tristique at aliquet ipsum. Ut sed enim gravida viverra.
                    </p>
                    <p>
                      Mattis purus vestibulum vel lorem eget varius malesuada. Sagittis quisque fermentum habitant
                      aliquet. Integer lorem pharetra faucibus venenatis fringilla. Luctus vulputate tincidunt in in.
                      Velit libero lectus pellentesque vestibulum placerat blandit lorem metus suspendisse. Vel diam
                      ultrices leo imperdiet. Consectetur odio accumsan vitae sollicitudin. Leo habitant amet id nisl
                      pellentesque tincidunt pulvinar duis at. Quis lacus ultrices vestibulum adipiscing sit ac
                      tincidunt scelerisque. Sed praesent pellentesque cursus orci turpis nisl enim vel at. Sed ut
                      vulputate quam nisl orci nunc. Purus odio sed amet phasellus elementum fusce velit in. Amet non
                      nulla netus quis at massa. Quis imperdiet condimentum morbi tincidunt. Feugiat aliquet donec orci
                      etiam quis aliquet massa in purus.
                    </p>
                    <p>
                      Adipiscing mattis tristique egestas egestas justo risus bibendum turpis sollicitudin. Dignissim
                      arcu aliquet maecenas mauris nisi viverra. A nullam rhoncus a tincidunt ut. Leo sed aliquet
                      venenatis fringilla nunc. Vel eu magna risus porta urna vitae id leo.
                    </p>
                    <p>
                      Velit nec netus tristique diam. Odio nunc interdum nisi lacinia. Odio duis nec ornare mattis.
                      Metus elementum aliquam platea nibh. Gravida viverra dictum amet massa donec vestibulum magna.
                      Pellentesque semper quis sociis viverra vel. Risus ut ipsum ullamcorper a nam auctor dolor fames
                      massa. Libero in erat mi euismod lectus scelerisque quam. Et aliquam condimentum purus id feugiat.
                      Sapien et suscipit neque amet porttitor risus. Leo proin vitae mattis volutpat. Aliquet nullam eu
                      in turpis. Blandit et eget ac at suspendisse. Orci et quam senectus in ut gravida.
                    </p>
                    <p>
                      In pellentesque venenatis tempus vulputate. Eleifend arcu auctor ut auctor suspendisse aliquet
                      tempus sit quam. Commodo vivamus sagittis feugiat porttitor a aenean integer facilisis. Ac nec
                      faucibus malesuada vel. Sapien diam enim dignissim lorem commodo ipsum cras non dictum. Urna
                      aliquam et et dolor neque cursus. Morbi at vestibulum lacinia amet purus est at lacus. Augue proin
                      lorem sed dolor quam mi. Dui mollis aliquet nec iaculis bibendum sed quis semper. Blandit aliquet
                      turpis ornare venenatis. Congue nunc nibh nunc proin aenean tortor volutpat euismod. Vel volutpat
                      neque lectus vel aliquam vel eget amet neque. Pretium justo pulvinar porttitor bibendum. Iaculis
                      diam netus vel feugiat duis sodales congue. Mattis dictumst facilisis congue egestas luctus lacus
                      in turpis proin.
                    </p>
                    <p>
                      Orci mauris tortor eu penatibus lacus egestas. Nunc sed non quis a sollicitudin lacus et. Volutpat
                      gravida nulla interdum elit. Quam turpis mattis posuere nulla augue sit sed maecenas. Convallis mi
                      amet purus ut. Arcu mi sit nisl proin. Nibh aliquam habitant pellentesque viverra justo. Non
                      adipiscing aliquam leo tristique tincidunt. Arcu mauris pharetra viverra pretium amet justo sit.
                      Tortor eget senectus pellentesque egestas. Ultricies ut lectus varius dis. Elementum et egestas
                      blandit porttitor mattis felis magnis ut. Diam id quisque morbi ullamcorper. Nunc nullam curabitur
                      tortor euismod dictum quisque aliquet. Dolor faucibus quis et sem magna aliquet consequat mattis.
                    </p>
                    <p>
                      Convallis facilisis ultrices ac tincidunt pharetra elementum quam. Dignissim in aenean faucibus
                      purus ultrices commodo orci id non. Dignissim pellentesque amet nullam nisl interdum aenean vel
                      enim dignissim. Vestibulum bibendum ullamcorper vulputate tellus ornare volutpat blandit
                      elementum. Amet eu vel faucibus molestie pellentesque pretium. Libero proin condimentum pulvinar
                      suspendisse ac diam orci leo. Fusce aliquet ut enim ultricies ac neque id enim. Id urna a nibh eu
                      vitae auctor nisl suspendisse scelerisque. Tellus semper elit volutpat sagittis. Mauris arcu
                      tincidunt amet vel arcu sollicitudin metus. Volutpat leo vitae pellentesque eget convallis
                      facilisis. Hendrerit sed ut magnis proin diam lacus tincidunt.
                    </p>
                    <p>
                      Pulvinar a mi a ornare varius. Mauris diam congue placerat quisque. Lacus egestas egestas integer
                      quam maecenas in et malesuada scelerisque. Dignissim mi sit id risus. Etiam nullam dolor malesuada
                      dictumst auctor bibendum ut. Tincidunt ut sagittis sit commodo. Phasellus malesuada eu nam et.
                      Diam nunc purus mauris nibh ac.
                    </p>
                    <p>
                      Pretium pellentesque nunc donec ultrices tristique convallis. Dictum phasellus mollis auctor sed
                      vulputate sollicitudin. Urna morbi nam nullam consequat fermentum. Amet imperdiet vestibulum
                      placerat hac viverra. Tempor duis viverra volutpat fermentum. Platea in diam lobortis vulputate.
                      Iaculis amet pharetra sed erat. Bibendum volutpat eleifend sed ut ut blandit at imperdiet.
                      Nascetur pellentesque viverra morbi cursus felis donec lectus eu. Sed eleifend urna mauris
                      malesuada amet eget proin.
                    </p>
                  </div>
                </div>
              </Element>

              <Element className="support__content" name="section7">
                <div className="support__block">
                  <h2 className="support__block-title">Profit for Liquidity Providers</h2>
                  <div className="support__texts">
                    <p>
                      Ac viverra at scelerisque arcu. Sed facilisi nascetur cras et magnis ac. A ac malesuada a
                      condimentum. Amet odio venenatis amet malesuada sed iaculis. Scelerisque iaculis diam diam ut. Non
                      amet eget libero ut. Consequat donec ullamcorper elit faucibus id ac risus bibendum. Turpis at
                      adipiscing maecenas interdum est aliquet platea augue vitae. Felis non ultrices vulputate ultrices
                      semper amet id erat. Facilisi morbi erat duis sit ut. Sagittis semper euismod fames id
                      pellentesque. Mauris purus non fringilla elit tempor massa suspendisse. Et tellus urna sed aliquam
                      eu. Ultrices euismod ultrices elit facilisis arcu consequat bibendum.
                    </p>
                    <p>
                      Vel pharetra nisl scelerisque pretium. Turpis faucibus fermentum dis euismod urna euismod tortor
                      libero. Varius semper gravida aliquam lacus venenatis purus id. Condimentum eu pellentesque amet
                      aliquet nisl commodo volutpat tempus. Auctor pellentesque eget sed scelerisque aliquam ut
                      elementum morbi. Enim faucibus tristique viverra velit adipiscing lobortis vel praesent. Interdum
                      egestas consequat neque phasellus. Amet imperdiet mi cursus nulla aliquam vel tempus. Tortor
                      mauris suspendisse convallis blandit elit diam. Diam nec vel mauris consequat vulputate. Consequat
                      dignissim nisl lectus cursus in.
                    </p>
                    <p>
                      At tempus gravida sollicitudin ridiculus. Amet maecenas ac lorem venenatis etiam tellus. Ut ac
                      urna nibh porttitor lectus ullamcorper. Sed amet mauris consectetur purus. Cras vitae nisi
                      elementum etiam. Nunc turpis ut in tristique commodo id. In leo magna vestibulum cursus arcu nisl
                      mauris. Congue facilisi eu tortor lacinia ut. Ut adipiscing lorem tellus at hac nam. Tempor sem
                      urna libero proin diam ullamcorper aliquet. In elit egestas hendrerit nec magna tortor. Aliquet
                      aliquet non in donec pulvinar non. Diam vulputate phasellus sit commodo est volutpat at faucibus
                      nisi.
                    </p>
                    <p>
                      Non volutpat ridiculus eu enim ultrices eleifend accumsan gravida. Id sed senectus id nulla amet
                      suspendisse egestas. Congue magna pharetra scelerisque sapien volutpat. Nec ornare at netus ornare
                      facilisis adipiscing. Amet sed lorem lorem mollis. Donec ut eget nullam neque ullamcorper. Magna
                      sed lobortis orci id. Pretium aenean faucibus felis leo. Vitae tellus ut commodo duis
                      pellentesque. Orci ipsum nulla urna enim. Facilisis mattis aliquam in sit sed cras egestas id
                      ipsum. Proin in accumsan nibh tortor blandit laoreet sit. Dictumst odio mauris auctor amet sit
                      aliquet gravida. Pharetra ullamcorper arcu proin vitae sit est augue pharetra nisl. Ultricies
                      ultrices pellentesque posuere odio.
                    </p>
                    <p>
                      Luctus vestibulum tempus euismod tincidunt egestas. Curabitur in quam gravida nulla integer. At
                      aliquam mi pellentesque diam tristique aliquet. Vulputate donec nec purus enim. Cursus luctus
                      tristique purus erat sed. Nibh est diam a mus gravida leo. Eros adipiscing eu rhoncus diam. Duis
                      dictum velit id urna nulla enim aliquet ipsum. Turpis purus consectetur suspendisse a ac. Nec ut
                      non in vestibulum luctus tristique in. Amet eu velit ac dolor magnis in. Lectus molestie
                      condimentum etiam sit praesent proin magna blandit. Nunc diam porta nisi ut in. Montes velit et
                      nec euismod blandit sed nisl egestas sollicitudin. Quam at in urna mauris eu vulputate diam. Id
                      duis senectus lectus pretium. At posuere augue massa tortor eget. Gravida lectus elit id rhoncus.
                      Augue a.
                    </p>
                  </div>
                </div>

                <div className="support__block">
                  <h3 className="support__block-title">I. Purposes and grounds for processing personal data</h3>
                  <div className="support__texts">
                    <p>
                      Porttitor est leo vulputate nunc nunc orci odio feugiat. Consectetur adipiscing potenti mauris
                      blandit ut id sit egestas est. Sit lacinia pellentesque libero velit ullamcorper. Interdum neque
                      integer euismod augue sed molestie non dictum. Porttitor nisi nec sit sed mus purus porta
                      condimentum nisi. Vel commodo arcu sed malesuada eleifend amet non eget semper. Dictum ipsum
                      tristique nunc integer volutpat maecenas lectus. Suscipit mattis in ac sed tincidunt ante enim ut
                      viverra. Dignissim mollis tristique at aliquet ipsum. Ut sed enim gravida viverra.
                    </p>
                    <p>
                      Mattis purus vestibulum vel lorem eget varius malesuada. Sagittis quisque fermentum habitant
                      aliquet. Integer lorem pharetra faucibus venenatis fringilla. Luctus vulputate tincidunt in in.
                      Velit libero lectus pellentesque vestibulum placerat blandit lorem metus suspendisse. Vel diam
                      ultrices leo imperdiet. Consectetur odio accumsan vitae sollicitudin. Leo habitant amet id nisl
                      pellentesque tincidunt pulvinar duis at. Quis lacus ultrices vestibulum adipiscing sit ac
                      tincidunt scelerisque. Sed praesent pellentesque cursus orci turpis nisl enim vel at. Sed ut
                      vulputate quam nisl orci nunc. Purus odio sed amet phasellus elementum fusce velit in. Amet non
                      nulla netus quis at massa. Quis imperdiet condimentum morbi tincidunt. Feugiat aliquet donec orci
                      etiam quis aliquet massa in purus.
                    </p>
                    <p>
                      Adipiscing mattis tristique egestas egestas justo risus bibendum turpis sollicitudin. Dignissim
                      arcu aliquet maecenas mauris nisi viverra. A nullam rhoncus a tincidunt ut. Leo sed aliquet
                      venenatis fringilla nunc. Vel eu magna risus porta urna vitae id leo.
                    </p>
                    <p>
                      Velit nec netus tristique diam. Odio nunc interdum nisi lacinia. Odio duis nec ornare mattis.
                      Metus elementum aliquam platea nibh. Gravida viverra dictum amet massa donec vestibulum magna.
                      Pellentesque semper quis sociis viverra vel. Risus ut ipsum ullamcorper a nam auctor dolor fames
                      massa. Libero in erat mi euismod lectus scelerisque quam. Et aliquam condimentum purus id feugiat.
                      Sapien et suscipit neque amet porttitor risus. Leo proin vitae mattis volutpat. Aliquet nullam eu
                      in turpis. Blandit et eget ac at suspendisse. Orci et quam senectus in ut gravida.
                    </p>
                    <p>
                      In pellentesque venenatis tempus vulputate. Eleifend arcu auctor ut auctor suspendisse aliquet
                      tempus sit quam. Commodo vivamus sagittis feugiat porttitor a aenean integer facilisis. Ac nec
                      faucibus malesuada vel. Sapien diam enim dignissim lorem commodo ipsum cras non dictum. Urna
                      aliquam et et dolor neque cursus. Morbi at vestibulum lacinia amet purus est at lacus. Augue proin
                      lorem sed dolor quam mi. Dui mollis aliquet nec iaculis bibendum sed quis semper. Blandit aliquet
                      turpis ornare venenatis. Congue nunc nibh nunc proin aenean tortor volutpat euismod. Vel volutpat
                      neque lectus vel aliquam vel eget amet neque. Pretium justo pulvinar porttitor bibendum. Iaculis
                      diam netus vel feugiat duis sodales congue. Mattis dictumst facilisis congue egestas luctus lacus
                      in turpis proin.
                    </p>
                    <p>
                      Orci mauris tortor eu penatibus lacus egestas. Nunc sed non quis a sollicitudin lacus et. Volutpat
                      gravida nulla interdum elit. Quam turpis mattis posuere nulla augue sit sed maecenas. Convallis mi
                      amet purus ut. Arcu mi sit nisl proin. Nibh aliquam habitant pellentesque viverra justo. Non
                      adipiscing aliquam leo tristique tincidunt. Arcu mauris pharetra viverra pretium amet justo sit.
                      Tortor eget senectus pellentesque egestas. Ultricies ut lectus varius dis. Elementum et egestas
                      blandit porttitor mattis felis magnis ut. Diam id quisque morbi ullamcorper. Nunc nullam curabitur
                      tortor euismod dictum quisque aliquet. Dolor faucibus quis et sem magna aliquet consequat mattis.
                    </p>
                    <p>
                      Convallis facilisis ultrices ac tincidunt pharetra elementum quam. Dignissim in aenean faucibus
                      purus ultrices commodo orci id non. Dignissim pellentesque amet nullam nisl interdum aenean vel
                      enim dignissim. Vestibulum bibendum ullamcorper vulputate tellus ornare volutpat blandit
                      elementum. Amet eu vel faucibus molestie pellentesque pretium. Libero proin condimentum pulvinar
                      suspendisse ac diam orci leo. Fusce aliquet ut enim ultricies ac neque id enim. Id urna a nibh eu
                      vitae auctor nisl suspendisse scelerisque. Tellus semper elit volutpat sagittis. Mauris arcu
                      tincidunt amet vel arcu sollicitudin metus. Volutpat leo vitae pellentesque eget convallis
                      facilisis. Hendrerit sed ut magnis proin diam lacus tincidunt.
                    </p>
                    <p>
                      Pulvinar a mi a ornare varius. Mauris diam congue placerat quisque. Lacus egestas egestas integer
                      quam maecenas in et malesuada scelerisque. Dignissim mi sit id risus. Etiam nullam dolor malesuada
                      dictumst auctor bibendum ut. Tincidunt ut sagittis sit commodo. Phasellus malesuada eu nam et.
                      Diam nunc purus mauris nibh ac.
                    </p>
                    <p>
                      Pretium pellentesque nunc donec ultrices tristique convallis. Dictum phasellus mollis auctor sed
                      vulputate sollicitudin. Urna morbi nam nullam consequat fermentum. Amet imperdiet vestibulum
                      placerat hac viverra. Tempor duis viverra volutpat fermentum. Platea in diam lobortis vulputate.
                      Iaculis amet pharetra sed erat. Bibendum volutpat eleifend sed ut ut blandit at imperdiet.
                      Nascetur pellentesque viverra morbi cursus felis donec lectus eu. Sed eleifend urna mauris
                      malesuada amet eget proin.
                    </p>
                  </div>
                </div>
              </Element>

              <Element className="support__content" name="section8">
                <div className="support__block">
                  <h2 className="support__block-title">Swap Usage Rules</h2>
                  <div className="support__texts">
                    <p>
                      Ac viverra at scelerisque arcu. Sed facilisi nascetur cras et magnis ac. A ac malesuada a
                      condimentum. Amet odio venenatis amet malesuada sed iaculis. Scelerisque iaculis diam diam ut. Non
                      amet eget libero ut. Consequat donec ullamcorper elit faucibus id ac risus bibendum. Turpis at
                      adipiscing maecenas interdum est aliquet platea augue vitae. Felis non ultrices vulputate ultrices
                      semper amet id erat. Facilisi morbi erat duis sit ut. Sagittis semper euismod fames id
                      pellentesque. Mauris purus non fringilla elit tempor massa suspendisse. Et tellus urna sed aliquam
                      eu. Ultrices euismod ultrices elit facilisis arcu consequat bibendum.
                    </p>
                    <p>
                      Vel pharetra nisl scelerisque pretium. Turpis faucibus fermentum dis euismod urna euismod tortor
                      libero. Varius semper gravida aliquam lacus venenatis purus id. Condimentum eu pellentesque amet
                      aliquet nisl commodo volutpat tempus. Auctor pellentesque eget sed scelerisque aliquam ut
                      elementum morbi. Enim faucibus tristique viverra velit adipiscing lobortis vel praesent. Interdum
                      egestas consequat neque phasellus. Amet imperdiet mi cursus nulla aliquam vel tempus. Tortor
                      mauris suspendisse convallis blandit elit diam. Diam nec vel mauris consequat vulputate. Consequat
                      dignissim nisl lectus cursus in.
                    </p>
                    <p>
                      At tempus gravida sollicitudin ridiculus. Amet maecenas ac lorem venenatis etiam tellus. Ut ac
                      urna nibh porttitor lectus ullamcorper. Sed amet mauris consectetur purus. Cras vitae nisi
                      elementum etiam. Nunc turpis ut in tristique commodo id. In leo magna vestibulum cursus arcu nisl
                      mauris. Congue facilisi eu tortor lacinia ut. Ut adipiscing lorem tellus at hac nam. Tempor sem
                      urna libero proin diam ullamcorper aliquet. In elit egestas hendrerit nec magna tortor. Aliquet
                      aliquet non in donec pulvinar non. Diam vulputate phasellus sit commodo est volutpat at faucibus
                      nisi.
                    </p>
                    <p>
                      Non volutpat ridiculus eu enim ultrices eleifend accumsan gravida. Id sed senectus id nulla amet
                      suspendisse egestas. Congue magna pharetra scelerisque sapien volutpat. Nec ornare at netus ornare
                      facilisis adipiscing. Amet sed lorem lorem mollis. Donec ut eget nullam neque ullamcorper. Magna
                      sed lobortis orci id. Pretium aenean faucibus felis leo. Vitae tellus ut commodo duis
                      pellentesque. Orci ipsum nulla urna enim. Facilisis mattis aliquam in sit sed cras egestas id
                      ipsum. Proin in accumsan nibh tortor blandit laoreet sit. Dictumst odio mauris auctor amet sit
                      aliquet gravida. Pharetra ullamcorper arcu proin vitae sit est augue pharetra nisl. Ultricies
                      ultrices pellentesque posuere odio.
                    </p>
                    <p>
                      Luctus vestibulum tempus euismod tincidunt egestas. Curabitur in quam gravida nulla integer. At
                      aliquam mi pellentesque diam tristique aliquet. Vulputate donec nec purus enim. Cursus luctus
                      tristique purus erat sed. Nibh est diam a mus gravida leo. Eros adipiscing eu rhoncus diam. Duis
                      dictum velit id urna nulla enim aliquet ipsum. Turpis purus consectetur suspendisse a ac. Nec ut
                      non in vestibulum luctus tristique in. Amet eu velit ac dolor magnis in. Lectus molestie
                      condimentum etiam sit praesent proin magna blandit. Nunc diam porta nisi ut in. Montes velit et
                      nec euismod blandit sed nisl egestas sollicitudin. Quam at in urna mauris eu vulputate diam. Id
                      duis senectus lectus pretium. At posuere augue massa tortor eget. Gravida lectus elit id rhoncus.
                      Augue a.
                    </p>
                  </div>
                </div>

                <div className="support__block">
                  <h3 className="support__block-title">I. Purposes and grounds for processing personal data</h3>
                  <div className="support__texts">
                    <p>
                      Porttitor est leo vulputate nunc nunc orci odio feugiat. Consectetur adipiscing potenti mauris
                      blandit ut id sit egestas est. Sit lacinia pellentesque libero velit ullamcorper. Interdum neque
                      integer euismod augue sed molestie non dictum. Porttitor nisi nec sit sed mus purus porta
                      condimentum nisi. Vel commodo arcu sed malesuada eleifend amet non eget semper. Dictum ipsum
                      tristique nunc integer volutpat maecenas lectus. Suscipit mattis in ac sed tincidunt ante enim ut
                      viverra. Dignissim mollis tristique at aliquet ipsum. Ut sed enim gravida viverra.
                    </p>
                    <p>
                      Mattis purus vestibulum vel lorem eget varius malesuada. Sagittis quisque fermentum habitant
                      aliquet. Integer lorem pharetra faucibus venenatis fringilla. Luctus vulputate tincidunt in in.
                      Velit libero lectus pellentesque vestibulum placerat blandit lorem metus suspendisse. Vel diam
                      ultrices leo imperdiet. Consectetur odio accumsan vitae sollicitudin. Leo habitant amet id nisl
                      pellentesque tincidunt pulvinar duis at. Quis lacus ultrices vestibulum adipiscing sit ac
                      tincidunt scelerisque. Sed praesent pellentesque cursus orci turpis nisl enim vel at. Sed ut
                      vulputate quam nisl orci nunc. Purus odio sed amet phasellus elementum fusce velit in. Amet non
                      nulla netus quis at massa. Quis imperdiet condimentum morbi tincidunt. Feugiat aliquet donec orci
                      etiam quis aliquet massa in purus.
                    </p>
                    <p>
                      Adipiscing mattis tristique egestas egestas justo risus bibendum turpis sollicitudin. Dignissim
                      arcu aliquet maecenas mauris nisi viverra. A nullam rhoncus a tincidunt ut. Leo sed aliquet
                      venenatis fringilla nunc. Vel eu magna risus porta urna vitae id leo.
                    </p>
                    <p>
                      Velit nec netus tristique diam. Odio nunc interdum nisi lacinia. Odio duis nec ornare mattis.
                      Metus elementum aliquam platea nibh. Gravida viverra dictum amet massa donec vestibulum magna.
                      Pellentesque semper quis sociis viverra vel. Risus ut ipsum ullamcorper a nam auctor dolor fames
                      massa. Libero in erat mi euismod lectus scelerisque quam. Et aliquam condimentum purus id feugiat.
                      Sapien et suscipit neque amet porttitor risus. Leo proin vitae mattis volutpat. Aliquet nullam eu
                      in turpis. Blandit et eget ac at suspendisse. Orci et quam senectus in ut gravida.
                    </p>
                    <p>
                      In pellentesque venenatis tempus vulputate. Eleifend arcu auctor ut auctor suspendisse aliquet
                      tempus sit quam. Commodo vivamus sagittis feugiat porttitor a aenean integer facilisis. Ac nec
                      faucibus malesuada vel. Sapien diam enim dignissim lorem commodo ipsum cras non dictum. Urna
                      aliquam et et dolor neque cursus. Morbi at vestibulum lacinia amet purus est at lacus. Augue proin
                      lorem sed dolor quam mi. Dui mollis aliquet nec iaculis bibendum sed quis semper. Blandit aliquet
                      turpis ornare venenatis. Congue nunc nibh nunc proin aenean tortor volutpat euismod. Vel volutpat
                      neque lectus vel aliquam vel eget amet neque. Pretium justo pulvinar porttitor bibendum. Iaculis
                      diam netus vel feugiat duis sodales congue. Mattis dictumst facilisis congue egestas luctus lacus
                      in turpis proin.
                    </p>
                    <p>
                      Orci mauris tortor eu penatibus lacus egestas. Nunc sed non quis a sollicitudin lacus et. Volutpat
                      gravida nulla interdum elit. Quam turpis mattis posuere nulla augue sit sed maecenas. Convallis mi
                      amet purus ut. Arcu mi sit nisl proin. Nibh aliquam habitant pellentesque viverra justo. Non
                      adipiscing aliquam leo tristique tincidunt. Arcu mauris pharetra viverra pretium amet justo sit.
                      Tortor eget senectus pellentesque egestas. Ultricies ut lectus varius dis. Elementum et egestas
                      blandit porttitor mattis felis magnis ut. Diam id quisque morbi ullamcorper. Nunc nullam curabitur
                      tortor euismod dictum quisque aliquet. Dolor faucibus quis et sem magna aliquet consequat mattis.
                    </p>
                    <p>
                      Convallis facilisis ultrices ac tincidunt pharetra elementum quam. Dignissim in aenean faucibus
                      purus ultrices commodo orci id non. Dignissim pellentesque amet nullam nisl interdum aenean vel
                      enim dignissim. Vestibulum bibendum ullamcorper vulputate tellus ornare volutpat blandit
                      elementum. Amet eu vel faucibus molestie pellentesque pretium. Libero proin condimentum pulvinar
                      suspendisse ac diam orci leo. Fusce aliquet ut enim ultricies ac neque id enim. Id urna a nibh eu
                      vitae auctor nisl suspendisse scelerisque. Tellus semper elit volutpat sagittis. Mauris arcu
                      tincidunt amet vel arcu sollicitudin metus. Volutpat leo vitae pellentesque eget convallis
                      facilisis. Hendrerit sed ut magnis proin diam lacus tincidunt.
                    </p>
                    <p>
                      Pulvinar a mi a ornare varius. Mauris diam congue placerat quisque. Lacus egestas egestas integer
                      quam maecenas in et malesuada scelerisque. Dignissim mi sit id risus. Etiam nullam dolor malesuada
                      dictumst auctor bibendum ut. Tincidunt ut sagittis sit commodo. Phasellus malesuada eu nam et.
                      Diam nunc purus mauris nibh ac.
                    </p>
                    <p>
                      Pretium pellentesque nunc donec ultrices tristique convallis. Dictum phasellus mollis auctor sed
                      vulputate sollicitudin. Urna morbi nam nullam consequat fermentum. Amet imperdiet vestibulum
                      placerat hac viverra. Tempor duis viverra volutpat fermentum. Platea in diam lobortis vulputate.
                      Iaculis amet pharetra sed erat. Bibendum volutpat eleifend sed ut ut blandit at imperdiet.
                      Nascetur pellentesque viverra morbi cursus felis donec lectus eu. Sed eleifend urna mauris
                      malesuada amet eget proin.
                    </p>
                  </div>
                </div>
              </Element>

              <Element className="support__content" name="section9">
                <div className="support__block">
                  <h2 className="support__block-title">Fee</h2>
                  <div className="support__texts">
                    <p>
                      Ac viverra at scelerisque arcu. Sed facilisi nascetur cras et magnis ac. A ac malesuada a
                      condimentum. Amet odio venenatis amet malesuada sed iaculis. Scelerisque iaculis diam diam ut. Non
                      amet eget libero ut. Consequat donec ullamcorper elit faucibus id ac risus bibendum. Turpis at
                      adipiscing maecenas interdum est aliquet platea augue vitae. Felis non ultrices vulputate ultrices
                      semper amet id erat. Facilisi morbi erat duis sit ut. Sagittis semper euismod fames id
                      pellentesque. Mauris purus non fringilla elit tempor massa suspendisse. Et tellus urna sed aliquam
                      eu. Ultrices euismod ultrices elit facilisis arcu consequat bibendum.
                    </p>
                    <p>
                      Vel pharetra nisl scelerisque pretium. Turpis faucibus fermentum dis euismod urna euismod tortor
                      libero. Varius semper gravida aliquam lacus venenatis purus id. Condimentum eu pellentesque amet
                      aliquet nisl commodo volutpat tempus. Auctor pellentesque eget sed scelerisque aliquam ut
                      elementum morbi. Enim faucibus tristique viverra velit adipiscing lobortis vel praesent. Interdum
                      egestas consequat neque phasellus. Amet imperdiet mi cursus nulla aliquam vel tempus. Tortor
                      mauris suspendisse convallis blandit elit diam. Diam nec vel mauris consequat vulputate. Consequat
                      dignissim nisl lectus cursus in.
                    </p>
                    <p>
                      At tempus gravida sollicitudin ridiculus. Amet maecenas ac lorem venenatis etiam tellus. Ut ac
                      urna nibh porttitor lectus ullamcorper. Sed amet mauris consectetur purus. Cras vitae nisi
                      elementum etiam. Nunc turpis ut in tristique commodo id. In leo magna vestibulum cursus arcu nisl
                      mauris. Congue facilisi eu tortor lacinia ut. Ut adipiscing lorem tellus at hac nam. Tempor sem
                      urna libero proin diam ullamcorper aliquet. In elit egestas hendrerit nec magna tortor. Aliquet
                      aliquet non in donec pulvinar non. Diam vulputate phasellus sit commodo est volutpat at faucibus
                      nisi.
                    </p>
                    <p>
                      Non volutpat ridiculus eu enim ultrices eleifend accumsan gravida. Id sed senectus id nulla amet
                      suspendisse egestas. Congue magna pharetra scelerisque sapien volutpat. Nec ornare at netus ornare
                      facilisis adipiscing. Amet sed lorem lorem mollis. Donec ut eget nullam neque ullamcorper. Magna
                      sed lobortis orci id. Pretium aenean faucibus felis leo. Vitae tellus ut commodo duis
                      pellentesque. Orci ipsum nulla urna enim. Facilisis mattis aliquam in sit sed cras egestas id
                      ipsum. Proin in accumsan nibh tortor blandit laoreet sit. Dictumst odio mauris auctor amet sit
                      aliquet gravida. Pharetra ullamcorper arcu proin vitae sit est augue pharetra nisl. Ultricies
                      ultrices pellentesque posuere odio.
                    </p>
                    <p>
                      Luctus vestibulum tempus euismod tincidunt egestas. Curabitur in quam gravida nulla integer. At
                      aliquam mi pellentesque diam tristique aliquet. Vulputate donec nec purus enim. Cursus luctus
                      tristique purus erat sed. Nibh est diam a mus gravida leo. Eros adipiscing eu rhoncus diam. Duis
                      dictum velit id urna nulla enim aliquet ipsum. Turpis purus consectetur suspendisse a ac. Nec ut
                      non in vestibulum luctus tristique in. Amet eu velit ac dolor magnis in. Lectus molestie
                      condimentum etiam sit praesent proin magna blandit. Nunc diam porta nisi ut in. Montes velit et
                      nec euismod blandit sed nisl egestas sollicitudin. Quam at in urna mauris eu vulputate diam. Id
                      duis senectus lectus pretium. At posuere augue massa tortor eget. Gravida lectus elit id rhoncus.
                      Augue a.
                    </p>
                  </div>
                </div>

                <div className="support__block">
                  <h3 className="support__block-title">I. Purposes and grounds for processing personal data</h3>
                  <div className="support__texts">
                    <p>
                      Porttitor est leo vulputate nunc nunc orci odio feugiat. Consectetur adipiscing potenti mauris
                      blandit ut id sit egestas est. Sit lacinia pellentesque libero velit ullamcorper. Interdum neque
                      integer euismod augue sed molestie non dictum. Porttitor nisi nec sit sed mus purus porta
                      condimentum nisi. Vel commodo arcu sed malesuada eleifend amet non eget semper. Dictum ipsum
                      tristique nunc integer volutpat maecenas lectus. Suscipit mattis in ac sed tincidunt ante enim ut
                      viverra. Dignissim mollis tristique at aliquet ipsum. Ut sed enim gravida viverra.
                    </p>
                    <p>
                      Mattis purus vestibulum vel lorem eget varius malesuada. Sagittis quisque fermentum habitant
                      aliquet. Integer lorem pharetra faucibus venenatis fringilla. Luctus vulputate tincidunt in in.
                      Velit libero lectus pellentesque vestibulum placerat blandit lorem metus suspendisse. Vel diam
                      ultrices leo imperdiet. Consectetur odio accumsan vitae sollicitudin. Leo habitant amet id nisl
                      pellentesque tincidunt pulvinar duis at. Quis lacus ultrices vestibulum adipiscing sit ac
                      tincidunt scelerisque. Sed praesent pellentesque cursus orci turpis nisl enim vel at. Sed ut
                      vulputate quam nisl orci nunc. Purus odio sed amet phasellus elementum fusce velit in. Amet non
                      nulla netus quis at massa. Quis imperdiet condimentum morbi tincidunt. Feugiat aliquet donec orci
                      etiam quis aliquet massa in purus.
                    </p>
                    <p>
                      Adipiscing mattis tristique egestas egestas justo risus bibendum turpis sollicitudin. Dignissim
                      arcu aliquet maecenas mauris nisi viverra. A nullam rhoncus a tincidunt ut. Leo sed aliquet
                      venenatis fringilla nunc. Vel eu magna risus porta urna vitae id leo.
                    </p>
                    <p>
                      Velit nec netus tristique diam. Odio nunc interdum nisi lacinia. Odio duis nec ornare mattis.
                      Metus elementum aliquam platea nibh. Gravida viverra dictum amet massa donec vestibulum magna.
                      Pellentesque semper quis sociis viverra vel. Risus ut ipsum ullamcorper a nam auctor dolor fames
                      massa. Libero in erat mi euismod lectus scelerisque quam. Et aliquam condimentum purus id feugiat.
                      Sapien et suscipit neque amet porttitor risus. Leo proin vitae mattis volutpat. Aliquet nullam eu
                      in turpis. Blandit et eget ac at suspendisse. Orci et quam senectus in ut gravida.
                    </p>
                    <p>
                      In pellentesque venenatis tempus vulputate. Eleifend arcu auctor ut auctor suspendisse aliquet
                      tempus sit quam. Commodo vivamus sagittis feugiat porttitor a aenean integer facilisis. Ac nec
                      faucibus malesuada vel. Sapien diam enim dignissim lorem commodo ipsum cras non dictum. Urna
                      aliquam et et dolor neque cursus. Morbi at vestibulum lacinia amet purus est at lacus. Augue proin
                      lorem sed dolor quam mi. Dui mollis aliquet nec iaculis bibendum sed quis semper. Blandit aliquet
                      turpis ornare venenatis. Congue nunc nibh nunc proin aenean tortor volutpat euismod. Vel volutpat
                      neque lectus vel aliquam vel eget amet neque. Pretium justo pulvinar porttitor bibendum. Iaculis
                      diam netus vel feugiat duis sodales congue. Mattis dictumst facilisis congue egestas luctus lacus
                      in turpis proin.
                    </p>
                    <p>
                      Orci mauris tortor eu penatibus lacus egestas. Nunc sed non quis a sollicitudin lacus et. Volutpat
                      gravida nulla interdum elit. Quam turpis mattis posuere nulla augue sit sed maecenas. Convallis mi
                      amet purus ut. Arcu mi sit nisl proin. Nibh aliquam habitant pellentesque viverra justo. Non
                      adipiscing aliquam leo tristique tincidunt. Arcu mauris pharetra viverra pretium amet justo sit.
                      Tortor eget senectus pellentesque egestas. Ultricies ut lectus varius dis. Elementum et egestas
                      blandit porttitor mattis felis magnis ut. Diam id quisque morbi ullamcorper. Nunc nullam curabitur
                      tortor euismod dictum quisque aliquet. Dolor faucibus quis et sem magna aliquet consequat mattis.
                    </p>
                    <p>
                      Convallis facilisis ultrices ac tincidunt pharetra elementum quam. Dignissim in aenean faucibus
                      purus ultrices commodo orci id non. Dignissim pellentesque amet nullam nisl interdum aenean vel
                      enim dignissim. Vestibulum bibendum ullamcorper vulputate tellus ornare volutpat blandit
                      elementum. Amet eu vel faucibus molestie pellentesque pretium. Libero proin condimentum pulvinar
                      suspendisse ac diam orci leo. Fusce aliquet ut enim ultricies ac neque id enim. Id urna a nibh eu
                      vitae auctor nisl suspendisse scelerisque. Tellus semper elit volutpat sagittis. Mauris arcu
                      tincidunt amet vel arcu sollicitudin metus. Volutpat leo vitae pellentesque eget convallis
                      facilisis. Hendrerit sed ut magnis proin diam lacus tincidunt.
                    </p>
                    <p>
                      Pulvinar a mi a ornare varius. Mauris diam congue placerat quisque. Lacus egestas egestas integer
                      quam maecenas in et malesuada scelerisque. Dignissim mi sit id risus. Etiam nullam dolor malesuada
                      dictumst auctor bibendum ut. Tincidunt ut sagittis sit commodo. Phasellus malesuada eu nam et.
                      Diam nunc purus mauris nibh ac.
                    </p>
                    <p>
                      Pretium pellentesque nunc donec ultrices tristique convallis. Dictum phasellus mollis auctor sed
                      vulputate sollicitudin. Urna morbi nam nullam consequat fermentum. Amet imperdiet vestibulum
                      placerat hac viverra. Tempor duis viverra volutpat fermentum. Platea in diam lobortis vulputate.
                      Iaculis amet pharetra sed erat. Bibendum volutpat eleifend sed ut ut blandit at imperdiet.
                      Nascetur pellentesque viverra morbi cursus felis donec lectus eu. Sed eleifend urna mauris
                      malesuada amet eget proin.
                    </p>
                  </div>
                </div>
              </Element>

              <Element className="support__content" name="section10">
                <div className="support__block">
                  <h2 className="support__block-title">Roadmap</h2>
                  <div className="support__texts">
                    <p>
                      Ac viverra at scelerisque arcu. Sed facilisi nascetur cras et magnis ac. A ac malesuada a
                      condimentum. Amet odio venenatis amet malesuada sed iaculis. Scelerisque iaculis diam diam ut. Non
                      amet eget libero ut. Consequat donec ullamcorper elit faucibus id ac risus bibendum. Turpis at
                      adipiscing maecenas interdum est aliquet platea augue vitae. Felis non ultrices vulputate ultrices
                      semper amet id erat. Facilisi morbi erat duis sit ut. Sagittis semper euismod fames id
                      pellentesque. Mauris purus non fringilla elit tempor massa suspendisse. Et tellus urna sed aliquam
                      eu. Ultrices euismod ultrices elit facilisis arcu consequat bibendum.
                    </p>
                    <p>
                      Vel pharetra nisl scelerisque pretium. Turpis faucibus fermentum dis euismod urna euismod tortor
                      libero. Varius semper gravida aliquam lacus venenatis purus id. Condimentum eu pellentesque amet
                      aliquet nisl commodo volutpat tempus. Auctor pellentesque eget sed scelerisque aliquam ut
                      elementum morbi. Enim faucibus tristique viverra velit adipiscing lobortis vel praesent. Interdum
                      egestas consequat neque phasellus. Amet imperdiet mi cursus nulla aliquam vel tempus. Tortor
                      mauris suspendisse convallis blandit elit diam. Diam nec vel mauris consequat vulputate. Consequat
                      dignissim nisl lectus cursus in.
                    </p>
                    <p>
                      At tempus gravida sollicitudin ridiculus. Amet maecenas ac lorem venenatis etiam tellus. Ut ac
                      urna nibh porttitor lectus ullamcorper. Sed amet mauris consectetur purus. Cras vitae nisi
                      elementum etiam. Nunc turpis ut in tristique commodo id. In leo magna vestibulum cursus arcu nisl
                      mauris. Congue facilisi eu tortor lacinia ut. Ut adipiscing lorem tellus at hac nam. Tempor sem
                      urna libero proin diam ullamcorper aliquet. In elit egestas hendrerit nec magna tortor. Aliquet
                      aliquet non in donec pulvinar non. Diam vulputate phasellus sit commodo est volutpat at faucibus
                      nisi.
                    </p>
                    <p>
                      Non volutpat ridiculus eu enim ultrices eleifend accumsan gravida. Id sed senectus id nulla amet
                      suspendisse egestas. Congue magna pharetra scelerisque sapien volutpat. Nec ornare at netus ornare
                      facilisis adipiscing. Amet sed lorem lorem mollis. Donec ut eget nullam neque ullamcorper. Magna
                      sed lobortis orci id. Pretium aenean faucibus felis leo. Vitae tellus ut commodo duis
                      pellentesque. Orci ipsum nulla urna enim. Facilisis mattis aliquam in sit sed cras egestas id
                      ipsum. Proin in accumsan nibh tortor blandit laoreet sit. Dictumst odio mauris auctor amet sit
                      aliquet gravida. Pharetra ullamcorper arcu proin vitae sit est augue pharetra nisl. Ultricies
                      ultrices pellentesque posuere odio.
                    </p>
                    <p>
                      Luctus vestibulum tempus euismod tincidunt egestas. Curabitur in quam gravida nulla integer. At
                      aliquam mi pellentesque diam tristique aliquet. Vulputate donec nec purus enim. Cursus luctus
                      tristique purus erat sed. Nibh est diam a mus gravida leo. Eros adipiscing eu rhoncus diam. Duis
                      dictum velit id urna nulla enim aliquet ipsum. Turpis purus consectetur suspendisse a ac. Nec ut
                      non in vestibulum luctus tristique in. Amet eu velit ac dolor magnis in. Lectus molestie
                      condimentum etiam sit praesent proin magna blandit. Nunc diam porta nisi ut in. Montes velit et
                      nec euismod blandit sed nisl egestas sollicitudin. Quam at in urna mauris eu vulputate diam. Id
                      duis senectus lectus pretium. At posuere augue massa tortor eget. Gravida lectus elit id rhoncus.
                      Augue a.
                    </p>
                  </div>
                </div>

                <div className="support__block">
                  <h3 className="support__block-title">I. Purposes and grounds for processing personal data</h3>
                  <div className="support__texts">
                    <p>
                      Porttitor est leo vulputate nunc nunc orci odio feugiat. Consectetur adipiscing potenti mauris
                      blandit ut id sit egestas est. Sit lacinia pellentesque libero velit ullamcorper. Interdum neque
                      integer euismod augue sed molestie non dictum. Porttitor nisi nec sit sed mus purus porta
                      condimentum nisi. Vel commodo arcu sed malesuada eleifend amet non eget semper. Dictum ipsum
                      tristique nunc integer volutpat maecenas lectus. Suscipit mattis in ac sed tincidunt ante enim ut
                      viverra. Dignissim mollis tristique at aliquet ipsum. Ut sed enim gravida viverra.
                    </p>
                    <p>
                      Mattis purus vestibulum vel lorem eget varius malesuada. Sagittis quisque fermentum habitant
                      aliquet. Integer lorem pharetra faucibus venenatis fringilla. Luctus vulputate tincidunt in in.
                      Velit libero lectus pellentesque vestibulum placerat blandit lorem metus suspendisse. Vel diam
                      ultrices leo imperdiet. Consectetur odio accumsan vitae sollicitudin. Leo habitant amet id nisl
                      pellentesque tincidunt pulvinar duis at. Quis lacus ultrices vestibulum adipiscing sit ac
                      tincidunt scelerisque. Sed praesent pellentesque cursus orci turpis nisl enim vel at. Sed ut
                      vulputate quam nisl orci nunc. Purus odio sed amet phasellus elementum fusce velit in. Amet non
                      nulla netus quis at massa. Quis imperdiet condimentum morbi tincidunt. Feugiat aliquet donec orci
                      etiam quis aliquet massa in purus.
                    </p>
                    <p>
                      Adipiscing mattis tristique egestas egestas justo risus bibendum turpis sollicitudin. Dignissim
                      arcu aliquet maecenas mauris nisi viverra. A nullam rhoncus a tincidunt ut. Leo sed aliquet
                      venenatis fringilla nunc. Vel eu magna risus porta urna vitae id leo.
                    </p>
                    <p>
                      Velit nec netus tristique diam. Odio nunc interdum nisi lacinia. Odio duis nec ornare mattis.
                      Metus elementum aliquam platea nibh. Gravida viverra dictum amet massa donec vestibulum magna.
                      Pellentesque semper quis sociis viverra vel. Risus ut ipsum ullamcorper a nam auctor dolor fames
                      massa. Libero in erat mi euismod lectus scelerisque quam. Et aliquam condimentum purus id feugiat.
                      Sapien et suscipit neque amet porttitor risus. Leo proin vitae mattis volutpat. Aliquet nullam eu
                      in turpis. Blandit et eget ac at suspendisse. Orci et quam senectus in ut gravida.
                    </p>
                    <p>
                      In pellentesque venenatis tempus vulputate. Eleifend arcu auctor ut auctor suspendisse aliquet
                      tempus sit quam. Commodo vivamus sagittis feugiat porttitor a aenean integer facilisis. Ac nec
                      faucibus malesuada vel. Sapien diam enim dignissim lorem commodo ipsum cras non dictum. Urna
                      aliquam et et dolor neque cursus. Morbi at vestibulum lacinia amet purus est at lacus. Augue proin
                      lorem sed dolor quam mi. Dui mollis aliquet nec iaculis bibendum sed quis semper. Blandit aliquet
                      turpis ornare venenatis. Congue nunc nibh nunc proin aenean tortor volutpat euismod. Vel volutpat
                      neque lectus vel aliquam vel eget amet neque. Pretium justo pulvinar porttitor bibendum. Iaculis
                      diam netus vel feugiat duis sodales congue. Mattis dictumst facilisis congue egestas luctus lacus
                      in turpis proin.
                    </p>
                    <p>
                      Orci mauris tortor eu penatibus lacus egestas. Nunc sed non quis a sollicitudin lacus et. Volutpat
                      gravida nulla interdum elit. Quam turpis mattis posuere nulla augue sit sed maecenas. Convallis mi
                      amet purus ut. Arcu mi sit nisl proin. Nibh aliquam habitant pellentesque viverra justo. Non
                      adipiscing aliquam leo tristique tincidunt. Arcu mauris pharetra viverra pretium amet justo sit.
                      Tortor eget senectus pellentesque egestas. Ultricies ut lectus varius dis. Elementum et egestas
                      blandit porttitor mattis felis magnis ut. Diam id quisque morbi ullamcorper. Nunc nullam curabitur
                      tortor euismod dictum quisque aliquet. Dolor faucibus quis et sem magna aliquet consequat mattis.
                    </p>
                    <p>
                      Convallis facilisis ultrices ac tincidunt pharetra elementum quam. Dignissim in aenean faucibus
                      purus ultrices commodo orci id non. Dignissim pellentesque amet nullam nisl interdum aenean vel
                      enim dignissim. Vestibulum bibendum ullamcorper vulputate tellus ornare volutpat blandit
                      elementum. Amet eu vel faucibus molestie pellentesque pretium. Libero proin condimentum pulvinar
                      suspendisse ac diam orci leo. Fusce aliquet ut enim ultricies ac neque id enim. Id urna a nibh eu
                      vitae auctor nisl suspendisse scelerisque. Tellus semper elit volutpat sagittis. Mauris arcu
                      tincidunt amet vel arcu sollicitudin metus. Volutpat leo vitae pellentesque eget convallis
                      facilisis. Hendrerit sed ut magnis proin diam lacus tincidunt.
                    </p>
                    <p>
                      Pulvinar a mi a ornare varius. Mauris diam congue placerat quisque. Lacus egestas egestas integer
                      quam maecenas in et malesuada scelerisque. Dignissim mi sit id risus. Etiam nullam dolor malesuada
                      dictumst auctor bibendum ut. Tincidunt ut sagittis sit commodo. Phasellus malesuada eu nam et.
                      Diam nunc purus mauris nibh ac.
                    </p>
                    <p>
                      Pretium pellentesque nunc donec ultrices tristique convallis. Dictum phasellus mollis auctor sed
                      vulputate sollicitudin. Urna morbi nam nullam consequat fermentum. Amet imperdiet vestibulum
                      placerat hac viverra. Tempor duis viverra volutpat fermentum. Platea in diam lobortis vulputate.
                      Iaculis amet pharetra sed erat. Bibendum volutpat eleifend sed ut ut blandit at imperdiet.
                      Nascetur pellentesque viverra morbi cursus felis donec lectus eu. Sed eleifend urna mauris
                      malesuada amet eget proin.
                    </p>
                  </div>
                </div>
              </Element>

              <Element className="support__content" name="section11">
                <div className="support__block">
                  <h2 className="support__block-title">Partners</h2>
                  <div className="support__texts">
                    <p>
                      Ac viverra at scelerisque arcu. Sed facilisi nascetur cras et magnis ac. A ac malesuada a
                      condimentum. Amet odio venenatis amet malesuada sed iaculis. Scelerisque iaculis diam diam ut. Non
                      amet eget libero ut. Consequat donec ullamcorper elit faucibus id ac risus bibendum. Turpis at
                      adipiscing maecenas interdum est aliquet platea augue vitae. Felis non ultrices vulputate ultrices
                      semper amet id erat. Facilisi morbi erat duis sit ut. Sagittis semper euismod fames id
                      pellentesque. Mauris purus non fringilla elit tempor massa suspendisse. Et tellus urna sed aliquam
                      eu. Ultrices euismod ultrices elit facilisis arcu consequat bibendum.
                    </p>
                    <p>
                      Vel pharetra nisl scelerisque pretium. Turpis faucibus fermentum dis euismod urna euismod tortor
                      libero. Varius semper gravida aliquam lacus venenatis purus id. Condimentum eu pellentesque amet
                      aliquet nisl commodo volutpat tempus. Auctor pellentesque eget sed scelerisque aliquam ut
                      elementum morbi. Enim faucibus tristique viverra velit adipiscing lobortis vel praesent. Interdum
                      egestas consequat neque phasellus. Amet imperdiet mi cursus nulla aliquam vel tempus. Tortor
                      mauris suspendisse convallis blandit elit diam. Diam nec vel mauris consequat vulputate. Consequat
                      dignissim nisl lectus cursus in.
                    </p>
                    <p>
                      At tempus gravida sollicitudin ridiculus. Amet maecenas ac lorem venenatis etiam tellus. Ut ac
                      urna nibh porttitor lectus ullamcorper. Sed amet mauris consectetur purus. Cras vitae nisi
                      elementum etiam. Nunc turpis ut in tristique commodo id. In leo magna vestibulum cursus arcu nisl
                      mauris. Congue facilisi eu tortor lacinia ut. Ut adipiscing lorem tellus at hac nam. Tempor sem
                      urna libero proin diam ullamcorper aliquet. In elit egestas hendrerit nec magna tortor. Aliquet
                      aliquet non in donec pulvinar non. Diam vulputate phasellus sit commodo est volutpat at faucibus
                      nisi.
                    </p>
                    <p>
                      Non volutpat ridiculus eu enim ultrices eleifend accumsan gravida. Id sed senectus id nulla amet
                      suspendisse egestas. Congue magna pharetra scelerisque sapien volutpat. Nec ornare at netus ornare
                      facilisis adipiscing. Amet sed lorem lorem mollis. Donec ut eget nullam neque ullamcorper. Magna
                      sed lobortis orci id. Pretium aenean faucibus felis leo. Vitae tellus ut commodo duis
                      pellentesque. Orci ipsum nulla urna enim. Facilisis mattis aliquam in sit sed cras egestas id
                      ipsum. Proin in accumsan nibh tortor blandit laoreet sit. Dictumst odio mauris auctor amet sit
                      aliquet gravida. Pharetra ullamcorper arcu proin vitae sit est augue pharetra nisl. Ultricies
                      ultrices pellentesque posuere odio.
                    </p>
                    <p>
                      Luctus vestibulum tempus euismod tincidunt egestas. Curabitur in quam gravida nulla integer. At
                      aliquam mi pellentesque diam tristique aliquet. Vulputate donec nec purus enim. Cursus luctus
                      tristique purus erat sed. Nibh est diam a mus gravida leo. Eros adipiscing eu rhoncus diam. Duis
                      dictum velit id urna nulla enim aliquet ipsum. Turpis purus consectetur suspendisse a ac. Nec ut
                      non in vestibulum luctus tristique in. Amet eu velit ac dolor magnis in. Lectus molestie
                      condimentum etiam sit praesent proin magna blandit. Nunc diam porta nisi ut in. Montes velit et
                      nec euismod blandit sed nisl egestas sollicitudin. Quam at in urna mauris eu vulputate diam. Id
                      duis senectus lectus pretium. At posuere augue massa tortor eget. Gravida lectus elit id rhoncus.
                      Augue a.
                    </p>
                  </div>
                </div>

                <div className="support__block">
                  <h3 className="support__block-title">I. Purposes and grounds for processing personal data</h3>
                  <div className="support__texts">
                    <p>
                      Porttitor est leo vulputate nunc nunc orci odio feugiat. Consectetur adipiscing potenti mauris
                      blandit ut id sit egestas est. Sit lacinia pellentesque libero velit ullamcorper. Interdum neque
                      integer euismod augue sed molestie non dictum. Porttitor nisi nec sit sed mus purus porta
                      condimentum nisi. Vel commodo arcu sed malesuada eleifend amet non eget semper. Dictum ipsum
                      tristique nunc integer volutpat maecenas lectus. Suscipit mattis in ac sed tincidunt ante enim ut
                      viverra. Dignissim mollis tristique at aliquet ipsum. Ut sed enim gravida viverra.
                    </p>
                    <p>
                      Mattis purus vestibulum vel lorem eget varius malesuada. Sagittis quisque fermentum habitant
                      aliquet. Integer lorem pharetra faucibus venenatis fringilla. Luctus vulputate tincidunt in in.
                      Velit libero lectus pellentesque vestibulum placerat blandit lorem metus suspendisse. Vel diam
                      ultrices leo imperdiet. Consectetur odio accumsan vitae sollicitudin. Leo habitant amet id nisl
                      pellentesque tincidunt pulvinar duis at. Quis lacus ultrices vestibulum adipiscing sit ac
                      tincidunt scelerisque. Sed praesent pellentesque cursus orci turpis nisl enim vel at. Sed ut
                      vulputate quam nisl orci nunc. Purus odio sed amet phasellus elementum fusce velit in. Amet non
                      nulla netus quis at massa. Quis imperdiet condimentum morbi tincidunt. Feugiat aliquet donec orci
                      etiam quis aliquet massa in purus.
                    </p>
                    <p>
                      Adipiscing mattis tristique egestas egestas justo risus bibendum turpis sollicitudin. Dignissim
                      arcu aliquet maecenas mauris nisi viverra. A nullam rhoncus a tincidunt ut. Leo sed aliquet
                      venenatis fringilla nunc. Vel eu magna risus porta urna vitae id leo.
                    </p>
                    <p>
                      Velit nec netus tristique diam. Odio nunc interdum nisi lacinia. Odio duis nec ornare mattis.
                      Metus elementum aliquam platea nibh. Gravida viverra dictum amet massa donec vestibulum magna.
                      Pellentesque semper quis sociis viverra vel. Risus ut ipsum ullamcorper a nam auctor dolor fames
                      massa. Libero in erat mi euismod lectus scelerisque quam. Et aliquam condimentum purus id feugiat.
                      Sapien et suscipit neque amet porttitor risus. Leo proin vitae mattis volutpat. Aliquet nullam eu
                      in turpis. Blandit et eget ac at suspendisse. Orci et quam senectus in ut gravida.
                    </p>
                    <p>
                      In pellentesque venenatis tempus vulputate. Eleifend arcu auctor ut auctor suspendisse aliquet
                      tempus sit quam. Commodo vivamus sagittis feugiat porttitor a aenean integer facilisis. Ac nec
                      faucibus malesuada vel. Sapien diam enim dignissim lorem commodo ipsum cras non dictum. Urna
                      aliquam et et dolor neque cursus. Morbi at vestibulum lacinia amet purus est at lacus. Augue proin
                      lorem sed dolor quam mi. Dui mollis aliquet nec iaculis bibendum sed quis semper. Blandit aliquet
                      turpis ornare venenatis. Congue nunc nibh nunc proin aenean tortor volutpat euismod. Vel volutpat
                      neque lectus vel aliquam vel eget amet neque. Pretium justo pulvinar porttitor bibendum. Iaculis
                      diam netus vel feugiat duis sodales congue. Mattis dictumst facilisis congue egestas luctus lacus
                      in turpis proin.
                    </p>
                    <p>
                      Orci mauris tortor eu penatibus lacus egestas. Nunc sed non quis a sollicitudin lacus et. Volutpat
                      gravida nulla interdum elit. Quam turpis mattis posuere nulla augue sit sed maecenas. Convallis mi
                      amet purus ut. Arcu mi sit nisl proin. Nibh aliquam habitant pellentesque viverra justo. Non
                      adipiscing aliquam leo tristique tincidunt. Arcu mauris pharetra viverra pretium amet justo sit.
                      Tortor eget senectus pellentesque egestas. Ultricies ut lectus varius dis. Elementum et egestas
                      blandit porttitor mattis felis magnis ut. Diam id quisque morbi ullamcorper. Nunc nullam curabitur
                      tortor euismod dictum quisque aliquet. Dolor faucibus quis et sem magna aliquet consequat mattis.
                    </p>
                    <p>
                      Convallis facilisis ultrices ac tincidunt pharetra elementum quam. Dignissim in aenean faucibus
                      purus ultrices commodo orci id non. Dignissim pellentesque amet nullam nisl interdum aenean vel
                      enim dignissim. Vestibulum bibendum ullamcorper vulputate tellus ornare volutpat blandit
                      elementum. Amet eu vel faucibus molestie pellentesque pretium. Libero proin condimentum pulvinar
                      suspendisse ac diam orci leo. Fusce aliquet ut enim ultricies ac neque id enim. Id urna a nibh eu
                      vitae auctor nisl suspendisse scelerisque. Tellus semper elit volutpat sagittis. Mauris arcu
                      tincidunt amet vel arcu sollicitudin metus. Volutpat leo vitae pellentesque eget convallis
                      facilisis. Hendrerit sed ut magnis proin diam lacus tincidunt.
                    </p>
                    <p>
                      Pulvinar a mi a ornare varius. Mauris diam congue placerat quisque. Lacus egestas egestas integer
                      quam maecenas in et malesuada scelerisque. Dignissim mi sit id risus. Etiam nullam dolor malesuada
                      dictumst auctor bibendum ut. Tincidunt ut sagittis sit commodo. Phasellus malesuada eu nam et.
                      Diam nunc purus mauris nibh ac.
                    </p>
                    <p>
                      Pretium pellentesque nunc donec ultrices tristique convallis. Dictum phasellus mollis auctor sed
                      vulputate sollicitudin. Urna morbi nam nullam consequat fermentum. Amet imperdiet vestibulum
                      placerat hac viverra. Tempor duis viverra volutpat fermentum. Platea in diam lobortis vulputate.
                      Iaculis amet pharetra sed erat. Bibendum volutpat eleifend sed ut ut blandit at imperdiet.
                      Nascetur pellentesque viverra morbi cursus felis donec lectus eu. Sed eleifend urna mauris
                      malesuada amet eget proin.
                    </p>
                  </div>
                </div>
              </Element>

              <Element className="support__content" name="section12">
                <div className="support__block">
                  <h2 className="support__block-title">Listing of new token</h2>
                  <div className="support__texts">
                    <p>
                      Ac viverra at scelerisque arcu. Sed facilisi nascetur cras et magnis ac. A ac malesuada a
                      condimentum. Amet odio venenatis amet malesuada sed iaculis. Scelerisque iaculis diam diam ut. Non
                      amet eget libero ut. Consequat donec ullamcorper elit faucibus id ac risus bibendum. Turpis at
                      adipiscing maecenas interdum est aliquet platea augue vitae. Felis non ultrices vulputate ultrices
                      semper amet id erat. Facilisi morbi erat duis sit ut. Sagittis semper euismod fames id
                      pellentesque. Mauris purus non fringilla elit tempor massa suspendisse. Et tellus urna sed aliquam
                      eu. Ultrices euismod ultrices elit facilisis arcu consequat bibendum.
                    </p>
                    <p>
                      Vel pharetra nisl scelerisque pretium. Turpis faucibus fermentum dis euismod urna euismod tortor
                      libero. Varius semper gravida aliquam lacus venenatis purus id. Condimentum eu pellentesque amet
                      aliquet nisl commodo volutpat tempus. Auctor pellentesque eget sed scelerisque aliquam ut
                      elementum morbi. Enim faucibus tristique viverra velit adipiscing lobortis vel praesent. Interdum
                      egestas consequat neque phasellus. Amet imperdiet mi cursus nulla aliquam vel tempus. Tortor
                      mauris suspendisse convallis blandit elit diam. Diam nec vel mauris consequat vulputate. Consequat
                      dignissim nisl lectus cursus in.
                    </p>
                    <p>
                      At tempus gravida sollicitudin ridiculus. Amet maecenas ac lorem venenatis etiam tellus. Ut ac
                      urna nibh porttitor lectus ullamcorper. Sed amet mauris consectetur purus. Cras vitae nisi
                      elementum etiam. Nunc turpis ut in tristique commodo id. In leo magna vestibulum cursus arcu nisl
                      mauris. Congue facilisi eu tortor lacinia ut. Ut adipiscing lorem tellus at hac nam. Tempor sem
                      urna libero proin diam ullamcorper aliquet. In elit egestas hendrerit nec magna tortor. Aliquet
                      aliquet non in donec pulvinar non. Diam vulputate phasellus sit commodo est volutpat at faucibus
                      nisi.
                    </p>
                    <p>
                      Non volutpat ridiculus eu enim ultrices eleifend accumsan gravida. Id sed senectus id nulla amet
                      suspendisse egestas. Congue magna pharetra scelerisque sapien volutpat. Nec ornare at netus ornare
                      facilisis adipiscing. Amet sed lorem lorem mollis. Donec ut eget nullam neque ullamcorper. Magna
                      sed lobortis orci id. Pretium aenean faucibus felis leo. Vitae tellus ut commodo duis
                      pellentesque. Orci ipsum nulla urna enim. Facilisis mattis aliquam in sit sed cras egestas id
                      ipsum. Proin in accumsan nibh tortor blandit laoreet sit. Dictumst odio mauris auctor amet sit
                      aliquet gravida. Pharetra ullamcorper arcu proin vitae sit est augue pharetra nisl. Ultricies
                      ultrices pellentesque posuere odio.
                    </p>
                    <p>
                      Luctus vestibulum tempus euismod tincidunt egestas. Curabitur in quam gravida nulla integer. At
                      aliquam mi pellentesque diam tristique aliquet. Vulputate donec nec purus enim. Cursus luctus
                      tristique purus erat sed. Nibh est diam a mus gravida leo. Eros adipiscing eu rhoncus diam. Duis
                      dictum velit id urna nulla enim aliquet ipsum. Turpis purus consectetur suspendisse a ac. Nec ut
                      non in vestibulum luctus tristique in. Amet eu velit ac dolor magnis in. Lectus molestie
                      condimentum etiam sit praesent proin magna blandit. Nunc diam porta nisi ut in. Montes velit et
                      nec euismod blandit sed nisl egestas sollicitudin. Quam at in urna mauris eu vulputate diam. Id
                      duis senectus lectus pretium. At posuere augue massa tortor eget. Gravida lectus elit id rhoncus.
                      Augue a.
                    </p>
                  </div>
                </div>

                <div className="support__block">
                  <h3 className="support__block-title">I. Purposes and grounds for processing personal data</h3>
                  <div className="support__texts">
                    <p>
                      Porttitor est leo vulputate nunc nunc orci odio feugiat. Consectetur adipiscing potenti mauris
                      blandit ut id sit egestas est. Sit lacinia pellentesque libero velit ullamcorper. Interdum neque
                      integer euismod augue sed molestie non dictum. Porttitor nisi nec sit sed mus purus porta
                      condimentum nisi. Vel commodo arcu sed malesuada eleifend amet non eget semper. Dictum ipsum
                      tristique nunc integer volutpat maecenas lectus. Suscipit mattis in ac sed tincidunt ante enim ut
                      viverra. Dignissim mollis tristique at aliquet ipsum. Ut sed enim gravida viverra.
                    </p>
                    <p>
                      Mattis purus vestibulum vel lorem eget varius malesuada. Sagittis quisque fermentum habitant
                      aliquet. Integer lorem pharetra faucibus venenatis fringilla. Luctus vulputate tincidunt in in.
                      Velit libero lectus pellentesque vestibulum placerat blandit lorem metus suspendisse. Vel diam
                      ultrices leo imperdiet. Consectetur odio accumsan vitae sollicitudin. Leo habitant amet id nisl
                      pellentesque tincidunt pulvinar duis at. Quis lacus ultrices vestibulum adipiscing sit ac
                      tincidunt scelerisque. Sed praesent pellentesque cursus orci turpis nisl enim vel at. Sed ut
                      vulputate quam nisl orci nunc. Purus odio sed amet phasellus elementum fusce velit in. Amet non
                      nulla netus quis at massa. Quis imperdiet condimentum morbi tincidunt. Feugiat aliquet donec orci
                      etiam quis aliquet massa in purus.
                    </p>
                    <p>
                      Adipiscing mattis tristique egestas egestas justo risus bibendum turpis sollicitudin. Dignissim
                      arcu aliquet maecenas mauris nisi viverra. A nullam rhoncus a tincidunt ut. Leo sed aliquet
                      venenatis fringilla nunc. Vel eu magna risus porta urna vitae id leo.
                    </p>
                    <p>
                      Velit nec netus tristique diam. Odio nunc interdum nisi lacinia. Odio duis nec ornare mattis.
                      Metus elementum aliquam platea nibh. Gravida viverra dictum amet massa donec vestibulum magna.
                      Pellentesque semper quis sociis viverra vel. Risus ut ipsum ullamcorper a nam auctor dolor fames
                      massa. Libero in erat mi euismod lectus scelerisque quam. Et aliquam condimentum purus id feugiat.
                      Sapien et suscipit neque amet porttitor risus. Leo proin vitae mattis volutpat. Aliquet nullam eu
                      in turpis. Blandit et eget ac at suspendisse. Orci et quam senectus in ut gravida.
                    </p>
                    <p>
                      In pellentesque venenatis tempus vulputate. Eleifend arcu auctor ut auctor suspendisse aliquet
                      tempus sit quam. Commodo vivamus sagittis feugiat porttitor a aenean integer facilisis. Ac nec
                      faucibus malesuada vel. Sapien diam enim dignissim lorem commodo ipsum cras non dictum. Urna
                      aliquam et et dolor neque cursus. Morbi at vestibulum lacinia amet purus est at lacus. Augue proin
                      lorem sed dolor quam mi. Dui mollis aliquet nec iaculis bibendum sed quis semper. Blandit aliquet
                      turpis ornare venenatis. Congue nunc nibh nunc proin aenean tortor volutpat euismod. Vel volutpat
                      neque lectus vel aliquam vel eget amet neque. Pretium justo pulvinar porttitor bibendum. Iaculis
                      diam netus vel feugiat duis sodales congue. Mattis dictumst facilisis congue egestas luctus lacus
                      in turpis proin.
                    </p>
                    <p>
                      Orci mauris tortor eu penatibus lacus egestas. Nunc sed non quis a sollicitudin lacus et. Volutpat
                      gravida nulla interdum elit. Quam turpis mattis posuere nulla augue sit sed maecenas. Convallis mi
                      amet purus ut. Arcu mi sit nisl proin. Nibh aliquam habitant pellentesque viverra justo. Non
                      adipiscing aliquam leo tristique tincidunt. Arcu mauris pharetra viverra pretium amet justo sit.
                      Tortor eget senectus pellentesque egestas. Ultricies ut lectus varius dis. Elementum et egestas
                      blandit porttitor mattis felis magnis ut. Diam id quisque morbi ullamcorper. Nunc nullam curabitur
                      tortor euismod dictum quisque aliquet. Dolor faucibus quis et sem magna aliquet consequat mattis.
                    </p>
                    <p>
                      Convallis facilisis ultrices ac tincidunt pharetra elementum quam. Dignissim in aenean faucibus
                      purus ultrices commodo orci id non. Dignissim pellentesque amet nullam nisl interdum aenean vel
                      enim dignissim. Vestibulum bibendum ullamcorper vulputate tellus ornare volutpat blandit
                      elementum. Amet eu vel faucibus molestie pellentesque pretium. Libero proin condimentum pulvinar
                      suspendisse ac diam orci leo. Fusce aliquet ut enim ultricies ac neque id enim. Id urna a nibh eu
                      vitae auctor nisl suspendisse scelerisque. Tellus semper elit volutpat sagittis. Mauris arcu
                      tincidunt amet vel arcu sollicitudin metus. Volutpat leo vitae pellentesque eget convallis
                      facilisis. Hendrerit sed ut magnis proin diam lacus tincidunt.
                    </p>
                    <p>
                      Pulvinar a mi a ornare varius. Mauris diam congue placerat quisque. Lacus egestas egestas integer
                      quam maecenas in et malesuada scelerisque. Dignissim mi sit id risus. Etiam nullam dolor malesuada
                      dictumst auctor bibendum ut. Tincidunt ut sagittis sit commodo. Phasellus malesuada eu nam et.
                      Diam nunc purus mauris nibh ac.
                    </p>
                    <p>
                      Pretium pellentesque nunc donec ultrices tristique convallis. Dictum phasellus mollis auctor sed
                      vulputate sollicitudin. Urna morbi nam nullam consequat fermentum. Amet imperdiet vestibulum
                      placerat hac viverra. Tempor duis viverra volutpat fermentum. Platea in diam lobortis vulputate.
                      Iaculis amet pharetra sed erat. Bibendum volutpat eleifend sed ut ut blandit at imperdiet.
                      Nascetur pellentesque viverra morbi cursus felis donec lectus eu. Sed eleifend urna mauris
                      malesuada amet eget proin.
                    </p>
                  </div>
                </div>
              </Element>

              <Element className="support__content" name="section13">
                <div className="support__block">
                  <h2 className="support__block-title">Contact to Sale</h2>
                  <div className="support__texts">
                    <p>
                      Ac viverra at scelerisque arcu. Sed facilisi nascetur cras et magnis ac. A ac malesuada a
                      condimentum. Amet odio venenatis amet malesuada sed iaculis. Scelerisque iaculis diam diam ut. Non
                      amet eget libero ut. Consequat donec ullamcorper elit faucibus id ac risus bibendum. Turpis at
                      adipiscing maecenas interdum est aliquet platea augue vitae. Felis non ultrices vulputate ultrices
                      semper amet id erat. Facilisi morbi erat duis sit ut. Sagittis semper euismod fames id
                      pellentesque. Mauris purus non fringilla elit tempor massa suspendisse. Et tellus urna sed aliquam
                      eu. Ultrices euismod ultrices elit facilisis arcu consequat bibendum.
                    </p>
                    <p>
                      Vel pharetra nisl scelerisque pretium. Turpis faucibus fermentum dis euismod urna euismod tortor
                      libero. Varius semper gravida aliquam lacus venenatis purus id. Condimentum eu pellentesque amet
                      aliquet nisl commodo volutpat tempus. Auctor pellentesque eget sed scelerisque aliquam ut
                      elementum morbi. Enim faucibus tristique viverra velit adipiscing lobortis vel praesent. Interdum
                      egestas consequat neque phasellus. Amet imperdiet mi cursus nulla aliquam vel tempus. Tortor
                      mauris suspendisse convallis blandit elit diam. Diam nec vel mauris consequat vulputate. Consequat
                      dignissim nisl lectus cursus in.
                    </p>
                    <p>
                      At tempus gravida sollicitudin ridiculus. Amet maecenas ac lorem venenatis etiam tellus. Ut ac
                      urna nibh porttitor lectus ullamcorper. Sed amet mauris consectetur purus. Cras vitae nisi
                      elementum etiam. Nunc turpis ut in tristique commodo id. In leo magna vestibulum cursus arcu nisl
                      mauris. Congue facilisi eu tortor lacinia ut. Ut adipiscing lorem tellus at hac nam. Tempor sem
                      urna libero proin diam ullamcorper aliquet. In elit egestas hendrerit nec magna tortor. Aliquet
                      aliquet non in donec pulvinar non. Diam vulputate phasellus sit commodo est volutpat at faucibus
                      nisi.
                    </p>
                    <p>
                      Non volutpat ridiculus eu enim ultrices eleifend accumsan gravida. Id sed senectus id nulla amet
                      suspendisse egestas. Congue magna pharetra scelerisque sapien volutpat. Nec ornare at netus ornare
                      facilisis adipiscing. Amet sed lorem lorem mollis. Donec ut eget nullam neque ullamcorper. Magna
                      sed lobortis orci id. Pretium aenean faucibus felis leo. Vitae tellus ut commodo duis
                      pellentesque. Orci ipsum nulla urna enim. Facilisis mattis aliquam in sit sed cras egestas id
                      ipsum. Proin in accumsan nibh tortor blandit laoreet sit. Dictumst odio mauris auctor amet sit
                      aliquet gravida. Pharetra ullamcorper arcu proin vitae sit est augue pharetra nisl. Ultricies
                      ultrices pellentesque posuere odio.
                    </p>
                    <p>
                      Luctus vestibulum tempus euismod tincidunt egestas. Curabitur in quam gravida nulla integer. At
                      aliquam mi pellentesque diam tristique aliquet. Vulputate donec nec purus enim. Cursus luctus
                      tristique purus erat sed. Nibh est diam a mus gravida leo. Eros adipiscing eu rhoncus diam. Duis
                      dictum velit id urna nulla enim aliquet ipsum. Turpis purus consectetur suspendisse a ac. Nec ut
                      non in vestibulum luctus tristique in. Amet eu velit ac dolor magnis in. Lectus molestie
                      condimentum etiam sit praesent proin magna blandit. Nunc diam porta nisi ut in. Montes velit et
                      nec euismod blandit sed nisl egestas sollicitudin. Quam at in urna mauris eu vulputate diam. Id
                      duis senectus lectus pretium. At posuere augue massa tortor eget. Gravida lectus elit id rhoncus.
                      Augue a.
                    </p>
                  </div>
                </div>

                <div className="support__block">
                  <h3 className="support__block-title">I. Purposes and grounds for processing personal data</h3>
                  <div className="support__texts">
                    <p>
                      Porttitor est leo vulputate nunc nunc orci odio feugiat. Consectetur adipiscing potenti mauris
                      blandit ut id sit egestas est. Sit lacinia pellentesque libero velit ullamcorper. Interdum neque
                      integer euismod augue sed molestie non dictum. Porttitor nisi nec sit sed mus purus porta
                      condimentum nisi. Vel commodo arcu sed malesuada eleifend amet non eget semper. Dictum ipsum
                      tristique nunc integer volutpat maecenas lectus. Suscipit mattis in ac sed tincidunt ante enim ut
                      viverra. Dignissim mollis tristique at aliquet ipsum. Ut sed enim gravida viverra.
                    </p>
                    <p>
                      Mattis purus vestibulum vel lorem eget varius malesuada. Sagittis quisque fermentum habitant
                      aliquet. Integer lorem pharetra faucibus venenatis fringilla. Luctus vulputate tincidunt in in.
                      Velit libero lectus pellentesque vestibulum placerat blandit lorem metus suspendisse. Vel diam
                      ultrices leo imperdiet. Consectetur odio accumsan vitae sollicitudin. Leo habitant amet id nisl
                      pellentesque tincidunt pulvinar duis at. Quis lacus ultrices vestibulum adipiscing sit ac
                      tincidunt scelerisque. Sed praesent pellentesque cursus orci turpis nisl enim vel at. Sed ut
                      vulputate quam nisl orci nunc. Purus odio sed amet phasellus elementum fusce velit in. Amet non
                      nulla netus quis at massa. Quis imperdiet condimentum morbi tincidunt. Feugiat aliquet donec orci
                      etiam quis aliquet massa in purus.
                    </p>
                    <p>
                      Adipiscing mattis tristique egestas egestas justo risus bibendum turpis sollicitudin. Dignissim
                      arcu aliquet maecenas mauris nisi viverra. A nullam rhoncus a tincidunt ut. Leo sed aliquet
                      venenatis fringilla nunc. Vel eu magna risus porta urna vitae id leo.
                    </p>
                    <p>
                      Velit nec netus tristique diam. Odio nunc interdum nisi lacinia. Odio duis nec ornare mattis.
                      Metus elementum aliquam platea nibh. Gravida viverra dictum amet massa donec vestibulum magna.
                      Pellentesque semper quis sociis viverra vel. Risus ut ipsum ullamcorper a nam auctor dolor fames
                      massa. Libero in erat mi euismod lectus scelerisque quam. Et aliquam condimentum purus id feugiat.
                      Sapien et suscipit neque amet porttitor risus. Leo proin vitae mattis volutpat. Aliquet nullam eu
                      in turpis. Blandit et eget ac at suspendisse. Orci et quam senectus in ut gravida.
                    </p>
                    <p>
                      In pellentesque venenatis tempus vulputate. Eleifend arcu auctor ut auctor suspendisse aliquet
                      tempus sit quam. Commodo vivamus sagittis feugiat porttitor a aenean integer facilisis. Ac nec
                      faucibus malesuada vel. Sapien diam enim dignissim lorem commodo ipsum cras non dictum. Urna
                      aliquam et et dolor neque cursus. Morbi at vestibulum lacinia amet purus est at lacus. Augue proin
                      lorem sed dolor quam mi. Dui mollis aliquet nec iaculis bibendum sed quis semper. Blandit aliquet
                      turpis ornare venenatis. Congue nunc nibh nunc proin aenean tortor volutpat euismod. Vel volutpat
                      neque lectus vel aliquam vel eget amet neque. Pretium justo pulvinar porttitor bibendum. Iaculis
                      diam netus vel feugiat duis sodales congue. Mattis dictumst facilisis congue egestas luctus lacus
                      in turpis proin.
                    </p>
                    <p>
                      Orci mauris tortor eu penatibus lacus egestas. Nunc sed non quis a sollicitudin lacus et. Volutpat
                      gravida nulla interdum elit. Quam turpis mattis posuere nulla augue sit sed maecenas. Convallis mi
                      amet purus ut. Arcu mi sit nisl proin. Nibh aliquam habitant pellentesque viverra justo. Non
                      adipiscing aliquam leo tristique tincidunt. Arcu mauris pharetra viverra pretium amet justo sit.
                      Tortor eget senectus pellentesque egestas. Ultricies ut lectus varius dis. Elementum et egestas
                      blandit porttitor mattis felis magnis ut. Diam id quisque morbi ullamcorper. Nunc nullam curabitur
                      tortor euismod dictum quisque aliquet. Dolor faucibus quis et sem magna aliquet consequat mattis.
                    </p>
                    <p>
                      Convallis facilisis ultrices ac tincidunt pharetra elementum quam. Dignissim in aenean faucibus
                      purus ultrices commodo orci id non. Dignissim pellentesque amet nullam nisl interdum aenean vel
                      enim dignissim. Vestibulum bibendum ullamcorper vulputate tellus ornare volutpat blandit
                      elementum. Amet eu vel faucibus molestie pellentesque pretium. Libero proin condimentum pulvinar
                      suspendisse ac diam orci leo. Fusce aliquet ut enim ultricies ac neque id enim. Id urna a nibh eu
                      vitae auctor nisl suspendisse scelerisque. Tellus semper elit volutpat sagittis. Mauris arcu
                      tincidunt amet vel arcu sollicitudin metus. Volutpat leo vitae pellentesque eget convallis
                      facilisis. Hendrerit sed ut magnis proin diam lacus tincidunt.
                    </p>
                    <p>
                      Pulvinar a mi a ornare varius. Mauris diam congue placerat quisque. Lacus egestas egestas integer
                      quam maecenas in et malesuada scelerisque. Dignissim mi sit id risus. Etiam nullam dolor malesuada
                      dictumst auctor bibendum ut. Tincidunt ut sagittis sit commodo. Phasellus malesuada eu nam et.
                      Diam nunc purus mauris nibh ac.
                    </p>
                    <p>
                      Pretium pellentesque nunc donec ultrices tristique convallis. Dictum phasellus mollis auctor sed
                      vulputate sollicitudin. Urna morbi nam nullam consequat fermentum. Amet imperdiet vestibulum
                      placerat hac viverra. Tempor duis viverra volutpat fermentum. Platea in diam lobortis vulputate.
                      Iaculis amet pharetra sed erat. Bibendum volutpat eleifend sed ut ut blandit at imperdiet.
                      Nascetur pellentesque viverra morbi cursus felis donec lectus eu. Sed eleifend urna mauris
                      malesuada amet eget proin.
                    </p>
                  </div>
                </div>
              </Element>

              <Element className="support__content" name="section14">
                <div className="support__block">
                  <h2 className="support__block-title">Token Warnings</h2>
                  <div className="support__texts">
                    <p>
                      Ac viverra at scelerisque arcu. Sed facilisi nascetur cras et magnis ac. A ac malesuada a
                      condimentum. Amet odio venenatis amet malesuada sed iaculis. Scelerisque iaculis diam diam ut. Non
                      amet eget libero ut. Consequat donec ullamcorper elit faucibus id ac risus bibendum. Turpis at
                      adipiscing maecenas interdum est aliquet platea augue vitae. Felis non ultrices vulputate ultrices
                      semper amet id erat. Facilisi morbi erat duis sit ut. Sagittis semper euismod fames id
                      pellentesque. Mauris purus non fringilla elit tempor massa suspendisse. Et tellus urna sed aliquam
                      eu. Ultrices euismod ultrices elit facilisis arcu consequat bibendum.
                    </p>
                    <p>
                      Vel pharetra nisl scelerisque pretium. Turpis faucibus fermentum dis euismod urna euismod tortor
                      libero. Varius semper gravida aliquam lacus venenatis purus id. Condimentum eu pellentesque amet
                      aliquet nisl commodo volutpat tempus. Auctor pellentesque eget sed scelerisque aliquam ut
                      elementum morbi. Enim faucibus tristique viverra velit adipiscing lobortis vel praesent. Interdum
                      egestas consequat neque phasellus. Amet imperdiet mi cursus nulla aliquam vel tempus. Tortor
                      mauris suspendisse convallis blandit elit diam. Diam nec vel mauris consequat vulputate. Consequat
                      dignissim nisl lectus cursus in.
                    </p>
                    <p>
                      At tempus gravida sollicitudin ridiculus. Amet maecenas ac lorem venenatis etiam tellus. Ut ac
                      urna nibh porttitor lectus ullamcorper. Sed amet mauris consectetur purus. Cras vitae nisi
                      elementum etiam. Nunc turpis ut in tristique commodo id. In leo magna vestibulum cursus arcu nisl
                      mauris. Congue facilisi eu tortor lacinia ut. Ut adipiscing lorem tellus at hac nam. Tempor sem
                      urna libero proin diam ullamcorper aliquet. In elit egestas hendrerit nec magna tortor. Aliquet
                      aliquet non in donec pulvinar non. Diam vulputate phasellus sit commodo est volutpat at faucibus
                      nisi.
                    </p>
                    <p>
                      Non volutpat ridiculus eu enim ultrices eleifend accumsan gravida. Id sed senectus id nulla amet
                      suspendisse egestas. Congue magna pharetra scelerisque sapien volutpat. Nec ornare at netus ornare
                      facilisis adipiscing. Amet sed lorem lorem mollis. Donec ut eget nullam neque ullamcorper. Magna
                      sed lobortis orci id. Pretium aenean faucibus felis leo. Vitae tellus ut commodo duis
                      pellentesque. Orci ipsum nulla urna enim. Facilisis mattis aliquam in sit sed cras egestas id
                      ipsum. Proin in accumsan nibh tortor blandit laoreet sit. Dictumst odio mauris auctor amet sit
                      aliquet gravida. Pharetra ullamcorper arcu proin vitae sit est augue pharetra nisl. Ultricies
                      ultrices pellentesque posuere odio.
                    </p>
                    <p>
                      Luctus vestibulum tempus euismod tincidunt egestas. Curabitur in quam gravida nulla integer. At
                      aliquam mi pellentesque diam tristique aliquet. Vulputate donec nec purus enim. Cursus luctus
                      tristique purus erat sed. Nibh est diam a mus gravida leo. Eros adipiscing eu rhoncus diam. Duis
                      dictum velit id urna nulla enim aliquet ipsum. Turpis purus consectetur suspendisse a ac. Nec ut
                      non in vestibulum luctus tristique in. Amet eu velit ac dolor magnis in. Lectus molestie
                      condimentum etiam sit praesent proin magna blandit. Nunc diam porta nisi ut in. Montes velit et
                      nec euismod blandit sed nisl egestas sollicitudin. Quam at in urna mauris eu vulputate diam. Id
                      duis senectus lectus pretium. At posuere augue massa tortor eget. Gravida lectus elit id rhoncus.
                      Augue a.
                    </p>
                  </div>
                </div>

                <div className="support__block">
                  <h3 className="support__block-title">I. Purposes and grounds for processing personal data</h3>
                  <div className="support__texts">
                    <p>
                      Porttitor est leo vulputate nunc nunc orci odio feugiat. Consectetur adipiscing potenti mauris
                      blandit ut id sit egestas est. Sit lacinia pellentesque libero velit ullamcorper. Interdum neque
                      integer euismod augue sed molestie non dictum. Porttitor nisi nec sit sed mus purus porta
                      condimentum nisi. Vel commodo arcu sed malesuada eleifend amet non eget semper. Dictum ipsum
                      tristique nunc integer volutpat maecenas lectus. Suscipit mattis in ac sed tincidunt ante enim ut
                      viverra. Dignissim mollis tristique at aliquet ipsum. Ut sed enim gravida viverra.
                    </p>
                    <p>
                      Mattis purus vestibulum vel lorem eget varius malesuada. Sagittis quisque fermentum habitant
                      aliquet. Integer lorem pharetra faucibus venenatis fringilla. Luctus vulputate tincidunt in in.
                      Velit libero lectus pellentesque vestibulum placerat blandit lorem metus suspendisse. Vel diam
                      ultrices leo imperdiet. Consectetur odio accumsan vitae sollicitudin. Leo habitant amet id nisl
                      pellentesque tincidunt pulvinar duis at. Quis lacus ultrices vestibulum adipiscing sit ac
                      tincidunt scelerisque. Sed praesent pellentesque cursus orci turpis nisl enim vel at. Sed ut
                      vulputate quam nisl orci nunc. Purus odio sed amet phasellus elementum fusce velit in. Amet non
                      nulla netus quis at massa. Quis imperdiet condimentum morbi tincidunt. Feugiat aliquet donec orci
                      etiam quis aliquet massa in purus.
                    </p>
                    <p>
                      Adipiscing mattis tristique egestas egestas justo risus bibendum turpis sollicitudin. Dignissim
                      arcu aliquet maecenas mauris nisi viverra. A nullam rhoncus a tincidunt ut. Leo sed aliquet
                      venenatis fringilla nunc. Vel eu magna risus porta urna vitae id leo.
                    </p>
                    <p>
                      Velit nec netus tristique diam. Odio nunc interdum nisi lacinia. Odio duis nec ornare mattis.
                      Metus elementum aliquam platea nibh. Gravida viverra dictum amet massa donec vestibulum magna.
                      Pellentesque semper quis sociis viverra vel. Risus ut ipsum ullamcorper a nam auctor dolor fames
                      massa. Libero in erat mi euismod lectus scelerisque quam. Et aliquam condimentum purus id feugiat.
                      Sapien et suscipit neque amet porttitor risus. Leo proin vitae mattis volutpat. Aliquet nullam eu
                      in turpis. Blandit et eget ac at suspendisse. Orci et quam senectus in ut gravida.
                    </p>
                    <p>
                      In pellentesque venenatis tempus vulputate. Eleifend arcu auctor ut auctor suspendisse aliquet
                      tempus sit quam. Commodo vivamus sagittis feugiat porttitor a aenean integer facilisis. Ac nec
                      faucibus malesuada vel. Sapien diam enim dignissim lorem commodo ipsum cras non dictum. Urna
                      aliquam et et dolor neque cursus. Morbi at vestibulum lacinia amet purus est at lacus. Augue proin
                      lorem sed dolor quam mi. Dui mollis aliquet nec iaculis bibendum sed quis semper. Blandit aliquet
                      turpis ornare venenatis. Congue nunc nibh nunc proin aenean tortor volutpat euismod. Vel volutpat
                      neque lectus vel aliquam vel eget amet neque. Pretium justo pulvinar porttitor bibendum. Iaculis
                      diam netus vel feugiat duis sodales congue. Mattis dictumst facilisis congue egestas luctus lacus
                      in turpis proin.
                    </p>
                    <p>
                      Orci mauris tortor eu penatibus lacus egestas. Nunc sed non quis a sollicitudin lacus et. Volutpat
                      gravida nulla interdum elit. Quam turpis mattis posuere nulla augue sit sed maecenas. Convallis mi
                      amet purus ut. Arcu mi sit nisl proin. Nibh aliquam habitant pellentesque viverra justo. Non
                      adipiscing aliquam leo tristique tincidunt. Arcu mauris pharetra viverra pretium amet justo sit.
                      Tortor eget senectus pellentesque egestas. Ultricies ut lectus varius dis. Elementum et egestas
                      blandit porttitor mattis felis magnis ut. Diam id quisque morbi ullamcorper. Nunc nullam curabitur
                      tortor euismod dictum quisque aliquet. Dolor faucibus quis et sem magna aliquet consequat mattis.
                    </p>
                    <p>
                      Convallis facilisis ultrices ac tincidunt pharetra elementum quam. Dignissim in aenean faucibus
                      purus ultrices commodo orci id non. Dignissim pellentesque amet nullam nisl interdum aenean vel
                      enim dignissim. Vestibulum bibendum ullamcorper vulputate tellus ornare volutpat blandit
                      elementum. Amet eu vel faucibus molestie pellentesque pretium. Libero proin condimentum pulvinar
                      suspendisse ac diam orci leo. Fusce aliquet ut enim ultricies ac neque id enim. Id urna a nibh eu
                      vitae auctor nisl suspendisse scelerisque. Tellus semper elit volutpat sagittis. Mauris arcu
                      tincidunt amet vel arcu sollicitudin metus. Volutpat leo vitae pellentesque eget convallis
                      facilisis. Hendrerit sed ut magnis proin diam lacus tincidunt.
                    </p>
                    <p>
                      Pulvinar a mi a ornare varius. Mauris diam congue placerat quisque. Lacus egestas egestas integer
                      quam maecenas in et malesuada scelerisque. Dignissim mi sit id risus. Etiam nullam dolor malesuada
                      dictumst auctor bibendum ut. Tincidunt ut sagittis sit commodo. Phasellus malesuada eu nam et.
                      Diam nunc purus mauris nibh ac.
                    </p>
                    <p>
                      Pretium pellentesque nunc donec ultrices tristique convallis. Dictum phasellus mollis auctor sed
                      vulputate sollicitudin. Urna morbi nam nullam consequat fermentum. Amet imperdiet vestibulum
                      placerat hac viverra. Tempor duis viverra volutpat fermentum. Platea in diam lobortis vulputate.
                      Iaculis amet pharetra sed erat. Bibendum volutpat eleifend sed ut ut blandit at imperdiet.
                      Nascetur pellentesque viverra morbi cursus felis donec lectus eu. Sed eleifend urna mauris
                      malesuada amet eget proin.
                    </p>
                  </div>
                </div>
              </Element>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
