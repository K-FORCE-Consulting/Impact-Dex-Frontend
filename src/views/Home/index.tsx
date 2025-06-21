import styled from 'styled-components'
import PageSection from 'components/PageSection'
import { useWeb3React } from '@pancakeswap/wagmi'
import useTheme from 'hooks/useTheme'
import Container from 'components/Layout/Container'
import { PageMeta } from 'components/Layout/Page'
import { useTranslation } from '@pancakeswap/localization'
import { useActiveChainId } from 'hooks/useActiveChainId'
import { ChainId } from '@pancakeswap/sdk'
import { Heading, Flex, Text, Tag, Link, OpenNewIcon, Button } from '@pancakeswap/uikit'
import CommunityIcon from '@pancakeswap/uikit/src/components/Svg/Icons/Community'
import ChartIcon from '@pancakeswap/uikit/src/components/Svg/Icons/Chart'
import CheckmarkCircleIcon from '@pancakeswap/uikit/src/components/Svg/Icons/CheckmarkCircle'
import PrizeIcon from '@pancakeswap/uikit/src/components/Svg/Icons/Prize'
import Image from 'next/image'
import Hero from './components/Hero'
import { swapSectionData, earnSectionData, cakeSectionData } from './components/SalesSection/data'
import MetricsSection from './components/MetricsSection'
import SalesSection from './components/SalesSection'
import WinSection from './components/WinSection'
import FarmsPoolsRow from './components/FarmsPoolsRow'
import Footer from './components/Footer'
import CakeDataRow from './components/CakeDataRow'
import { WedgeTopLeft, InnerWedgeWrapper, OuterWedgeWrapper, WedgeTopRight } from './components/WedgeSvgs'
import UserBanner from './components/UserBanner'
import MultipleBanner from './components/Banners/MultipleBanner'
import IconCard from './components/IconCard'
import HowItWorksSection from './components/HowItWorksSection'
import TrustSection from './components/TrustSection'
import TokenRewardsSection from './components/TokenRewardsSection'

const StyledHeroSection = styled(PageSection)`
  padding-top: 16px;

  ${({ theme }) => theme.mediaQueries.md} {
    padding-top: 48px;
  }
`

const UserBannerWrapper = styled(Container)`
  z-index: 1;
  position: absolute;
  width: 100%;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  padding-left: 0px;
  padding-right: 0px;

  ${({ theme }) => theme.mediaQueries.lg} {
    padding-left: 24px;
    padding-right: 24px;
  }
`

const Home: React.FC<React.PropsWithChildren> = () => {
  const { theme } = useTheme()
  const { account } = useWeb3React()
  const { chainId } = useActiveChainId()

  const HomeSectionContainerStyles = { margin: '0', width: '100%', maxWidth: '968px' }

  const { t } = useTranslation()

  return (
    <>
      <PageMeta />
      <style jsx global>{`
        #home-1 .page-bg {
          background: linear-gradient(139.73deg, #e8f5e8 0%, #f0f8f0 100%);
        }
        [data-theme='dark'] #home-1 .page-bg {
          background: radial-gradient(103.12% 50% at 50% 50%, #1a1f1a 0%, #0a0f0a 100%);
        }
        #home-2 .page-bg {
          background: linear-gradient(180deg, #ffffff 22%, #e8f5e8 100%);
        }
        [data-theme='dark'] #home-2 .page-bg {
          background: linear-gradient(180deg, #0a0f0a 22%, #1a1f1a 100%);
        }
        #home-3 .page-bg {
          background: linear-gradient(180deg, #a4cbf9 0%, #f0f8f0 100%);
        }
        [data-theme='dark'] #home-3 .page-bg {
          background: linear-gradient(180deg, #6bc063 0%, #0a0f0a 100%);
        }
        #home-4 .inner-wedge svg {
          fill: #e8f5e8;
        }
        [data-theme='dark'] #home-4 .inner-wedge svg {
          fill: #1a1f1a;
        }
      `}</style>

      {/* Hero Section */}
      <StyledHeroSection
        innerProps={{ style: { margin: '0', width: '100%' } }}
        containerProps={{ id: 'home-1' }}
        index={2}
        hasCurvedDivider={false}
      >
        {account && (chainId === ChainId.ETHEREUM || chainId === ChainId.GOERLI_ARBI) && (
          <UserBannerWrapper>
            <UserBanner />
          </UserBannerWrapper>
        )}
        <MultipleBanner />
        <Hero />
      </StyledHeroSection>

      {/* Impact in Action Section */}
      <PageSection
        innerProps={{ style: { margin: '0', width: '100%' } }}
        containerProps={{ id: 'home-2' }}
        index={2}
        hasCurvedDivider={false}
      >
        <MetricsSection />
      </PageSection>

      {/* What Makes Us Different Section */}
      <PageSection innerProps={{ style: { margin: '0', width: '100%' } }} index={2} hasCurvedDivider={false}>
        <Flex justifyContent="center" alignItems="center" flexDirection="column">
          <Heading textAlign="center" scale="xl" mb="16px">
            {t('Not Just DeFi. ReFi.')}
          </Heading>
          <Text textAlign="center" color="textSubtle" mb="32px">
            {t('We built a transparent financial layer for the planet.')}
          </Text>

          <Flex flexDirection={['column', null, null, 'row']}>
            <IconCard
              icon={<CheckmarkCircleIcon color="success" width="36px" />}
              mr={[null, null, null, '16px']}
              mb={['16px', null, null, '0']}
            >
              <Flex flexDirection="column">
                {/* eslint-disable-next-line react/jsx-boolean-value */}
                <Text bold>{t('Verified Real-World Impact')}</Text>
                <Text fontSize="14px" color="textSubtle">
                  {t('Every token is backed by audited, real-world sustainability projects.')}
                </Text>
                <Link
                  href="/how-it-works"
                  color="primary"
                  style={{ alignItems: 'center', display: 'flex', marginTop: '8px' }}
                >
                  {t('See how it works')}
                  <OpenNewIcon ml="4px" color="primary" />
                </Link>
              </Flex>
            </IconCard>
            <IconCard
              icon={<CommunityIcon color="primary" width="36px" />}
              mr={[null, null, null, '16px']}
              mb={['16px', null, null, '0']}
            >
              <Flex flexDirection="column">
                {/* eslint-disable-next-line react/jsx-boolean-value */}
                <Text bold>{t('Blockchain-Powered Transparency')}</Text>
                <Text fontSize="14px" color="textSubtle">
                  {t('Trace every transaction on a public, unchangeable ledger.')}
                </Text>
                <Link
                  href="/how-it-works"
                  color="primary"
                  style={{ alignItems: 'center', display: 'flex', marginTop: '8px' }}
                >
                  {t('See how it works')}
                  <OpenNewIcon ml="4px" color="primary" />
                </Link>
              </Flex>
            </IconCard>
            <IconCard
              icon={<ChartIcon color="secondary" width="36px" />}
              mr={[null, null, null, '16px']}
              mb={['16px', null, null, '0']}
            >
              <Flex flexDirection="column">
                {/* eslint-disable-next-line react/jsx-boolean-value */}
                <Text bold>{t('Inclusive Global Validator Network')}</Text>
                <Text fontSize="14px" color="textSubtle">
                  {t('Empowering local experts to verify and score projects worldwide.')}
                </Text>
                <Link
                  href="/how-it-works"
                  color="primary"
                  style={{ alignItems: 'center', display: 'flex', marginTop: '8px' }}
                >
                  {t('See how it works')}
                  <OpenNewIcon ml="4px" color="primary" />
                </Link>
              </Flex>
            </IconCard>
            <IconCard icon={<PrizeIcon color="warning" width="36px" />}>
              <Flex flexDirection="column">
                {/* eslint-disable-next-line react/jsx-boolean-value */}
                <Text bold>{t('Rewards for Doing the Right Thing')}</Text>
                <Text fontSize="14px" color="textSubtle">
                  {t('Earn rewards for funding, validating, and trading impact.')}
                </Text>
                <Link
                  href="/how-it-works"
                  color="primary"
                  style={{ alignItems: 'center', display: 'flex', marginTop: '8px' }}
                >
                  {t('See how it works')}
                  <OpenNewIcon ml="4px" color="primary" />
                </Link>
              </Flex>
            </IconCard>
          </Flex>
        </Flex>
      </PageSection>

      {/* Marketplace Flow Section */}
      <PageSection
        innerProps={{ style: HomeSectionContainerStyles }}
        background={theme.colors.background}
        containerProps={{ id: 'home-4' }}
        index={2}
        hasCurvedDivider={false}
      >
        <OuterWedgeWrapper>
          <InnerWedgeWrapper top>
            <WedgeTopLeft />
          </InnerWedgeWrapper>
        </OuterWedgeWrapper>
        <SalesSection {...swapSectionData(t)} />
      </PageSection>

      {/* Validator Spotlight Section */}
      <PageSection
        innerProps={{ style: { margin: '0', width: '100%' } }}
        index={2}
        hasCurvedDivider={true}
        background={theme.colors.backgroundAlt}
      >
        <Flex justifyContent="center" alignItems="center" flexDirection="column">
          <Heading textAlign="center" scale="xl" mb="16px">
            {t('The People Who Make It Possible')}
          </Heading>
          <Text textAlign="center" color="textSubtle" mb="32px">
            {t('Our global network of validators ensures every project is real, verified, and ready for impact.')}
          </Text>

          {/* Placeholder for Validator Cards */}
          <Flex flexDirection={['column', null, null, 'row']} mb="32px">
            <IconCard
              icon={
                <Image src="/images/home/validators/validator1.png" width={36} height={36} alt="Validator Jane Doe" />
              }
              mr={[null, null, null, '16px']}
              mb={['16px', null, null, '0']}
            >
              <Flex flexDirection="column">
                {/* eslint-disable-next-line react/jsx-boolean-value */}
                <Text bold>{t('Dr. Aisha Khan, Kenya')}</Text>
                <Text fontSize="14px" color="textSubtle" fontStyle="italic">
                  {t('"I help ensure communities get paid for saving our planet."')}
                </Text>
              </Flex>
            </IconCard>
            <IconCard
              icon={
                <Image
                  src="/images/home/validators/validator2.png"
                  width={36}
                  height={36}
                  alt="Validator Carlos Gomez"
                />
              }
              mr={[null, null, null, '16px']}
              mb={['16px', null, null, '0']}
            >
              <Flex flexDirection="column">
                {/* eslint-disable-next-line react/jsx-boolean-value */}
                <Text bold>{t('Carlos Gomez, Brazil')}</Text>
                <Text fontSize="14px" color="textSubtle" fontStyle="italic">
                  {t('"We are bringing trust to the Amazon\'s carbon market."')}
                </Text>
              </Flex>
            </IconCard>
            <IconCard
              icon={
                <Image
                  src="/images/home/validators/validator3.png"
                  width={36}
                  height={36}
                  alt="Validator Priya Sharma"
                />
              }
            >
              <Flex flexDirection="column">
                {/* eslint-disable-next-line react/jsx-boolean-value */}
                <Text bold>{t('Priya Sharma, India')}</Text>
                <Text fontSize="14px" color="textSubtle" fontStyle="italic">
                  {t('"Verifying regenerative agriculture is my passion."')}
                </Text>
              </Flex>
            </IconCard>
          </Flex>

          <Button as="a" href="/become-a-validator" target="_blank" rel="noopener noreferrer">
            {t('Become a Validator – Get Trained. Get Paid. Make Impact.')}
          </Button>
        </Flex>
      </PageSection>

      {/* Project Explorer Preview Section */}
      <PageSection
        innerProps={{ style: HomeSectionContainerStyles }}
        background={theme.colors.gradientCardHeader}
        index={2}
        hasCurvedDivider={false}
      >
        <Flex justifyContent="center" alignItems="center" flexDirection="column">
          <Heading textAlign="center" scale="xl" mb="16px">
            {t('See What You Can Fund, Stake, or Trade')}
          </Heading>
          <Text textAlign="center" color="textSubtle" mb="32px">
            {t('Browse verified projects that match your values and investment goals.')}
          </Text>
          <Flex flexDirection={['column', null, null, 'row']} mb="32px">
            <IconCard
              icon={
                <Image src="/images/home/projects/kenya-solar.png" width={36} height={36} alt="Kenya Solar Microgrid" />
              }
              mr={[null, null, null, '16px']}
              mb={['16px', null, null, '0']}
            >
              <Flex flexDirection="column">
                {/* eslint-disable-next-line react/jsx-boolean-value */}
                <Text bold>{t('Kenya Solar Microgrid')}</Text>
                <Text fontSize="14px" color="textSubtle">
                  {t('200 MWh Offset')}
                </Text>
              </Flex>
            </IconCard>
            <IconCard
              icon={
                <Image
                  src="/images/home/projects/wabash-circular.png"
                  width={36}
                  height={36}
                  alt="Wabash Circular Manufacturing"
                />
              }
              mr={[null, null, null, '16px']}
              mb={['16px', null, null, '0']}
            >
              <Flex flexDirection="column">
                {/* eslint-disable-next-line react/jsx-boolean-value */}
                <Text bold>{t('Wabash Circular Manufacturing')}</Text>
                <Text fontSize="14px" color="textSubtle">
                  {t('50K Tons Diverted')}
                </Text>
              </Flex>
            </IconCard>
            <IconCard
              icon={
                <Image
                  src="/images/home/projects/nola-green.png"
                  width={36}
                  height={36}
                  alt="New Orleans Green Stormwater"
                />
              }
            >
              <Flex flexDirection="column">
                {/* eslint-disable-next-line react/jsx-boolean-value */}
                <Text bold>{t('New Orleans Green Stormwater')}</Text>
                <Text fontSize="14px" color="textSubtle">
                  {t('5K Credits Minted')}
                </Text>
              </Flex>
            </IconCard>
          </Flex>
          <Flex>
            <Button as="a" href="/projects" mr="16px">
              {t('Explore All Projects')}
            </Button>
            <Button as="a" href="/stake" variant="secondary">
              {t('Start Staking Now')}
            </Button>
          </Flex>
        </Flex>
      </PageSection>

      {/* How It Works Section */}
      <PageSection
        innerProps={{ style: HomeSectionContainerStyles }}
        containerProps={{
          id: 'home-3',
        }}
        index={2}
        hasCurvedDivider={false}
      >
        <HowItWorksSection />
      </PageSection>

      {/* Trust & Backing Section */}
      <PageSection
        innerProps={{ style: HomeSectionContainerStyles }}
        background={theme.colors.backgroundAlt}
        index={2}
        hasCurvedDivider={false}
      >
        <TrustSection />
      </PageSection>

      {/* Token Rewards Section */}
      <PageSection
        innerProps={{ style: HomeSectionContainerStyles }}
        background={theme.colors.background}
        index={2}
        hasCurvedDivider={false}
      >
        <TokenRewardsSection />
      </PageSection>

      {/* Footer / Global CTA */}
      <PageSection
        innerProps={{ style: HomeSectionContainerStyles }}
        background="linear-gradient(180deg, #3a8a37 0%, #75cfcf 100%)"
        index={2}
        hasCurvedDivider={false}
      >
        <Footer />
      </PageSection>
    </>
  )
}

export default Home
