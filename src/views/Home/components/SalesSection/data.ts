import { TranslateFunction } from '@pancakeswap/localization'
import { SalesSectionProps } from '.'

export const swapSectionData = (t: TranslateFunction): SalesSectionProps => ({
  headingText: t('From Real Project to Real-World Impact.'),
  bodyText: t(
    "Follow the journey: A farmer in Uganda installs a biodigester, a K-Force Validator verifies the project's impact, it gets minted as a tradable token, and a corporate buyer stakes the asset to meet their ESG goals. Everyone earns rewards for driving positive change.",
  ),
  reverse: false,
  primaryButton: {
    to: '/projects',
    text: t('Explore Projects'),
    external: false,
  },
  secondaryButton: {
    to: '/how-it-works',
    text: t('Learn More'),
    external: false,
  },
  images: {
    path: '/images/home/flow/',
    attributes: [
      { src: 'step1', alt: t('Farmer with biodigester') },
      { src: 'step2', alt: t('Validator verifying project') },
      { src: 'step3', alt: t('Token minted on DEX') },
    ],
  },
})

export const earnSectionData = (t: TranslateFunction): SalesSectionProps => ({
  headingText: t('Earn passive income with crypto.'),
  bodyText: t('PepeDex makes it easy to make your crypto work for you.'),
  reverse: true,
  primaryButton: {
    to: '/farms',
    text: t('Explore'),
    external: false,
  },
  secondaryButton: {
    to: 'https://rxqueen.neocities.org/ac/newhorizons',
    text: t('Learn'),
    external: true,
  },
  images: {
    path: '/images/home/earn/',
    attributes: [
      { src: 'pie', alt: t('Pie chart') },
      { src: 'stonks', alt: t('Stocks chart') },
      { src: 'folder', alt: t('Folder with cake token') },
    ],
  },
})

export const cakeSectionData = (t: TranslateFunction): SalesSectionProps => ({
  headingText: t('CAKE makes our world go round.'),
  bodyText: t(
    'CAKE token is at the heart of the PepeDex ecosystem. Buy it, win it, farm it, spend it, stake it... heck, you can even vote with it!',
  ),
  reverse: false,
  primaryButton: {
    to: '/swap?outputCurrency=0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82&chainId=56',
    text: t('Buy COPE'),
    external: false,
  },
  secondaryButton: {
    to: 'https://rxqueen.neocities.org/ac/newhorizons',
    text: t('Learn'),
    external: true,
  },

  images: {
    path: '/images/home/cake/',
    attributes: [
      { src: 'bottom-right', alt: t('Small 3d pancake') },
      { src: 'top-right', alt: t('Small 3d pancake') },
      { src: 'coin', alt: t('CAKE token') },
      { src: 'top-left', alt: t('Small 3d pancake') },
    ],
  },
})
