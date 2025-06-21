import { Heading, Flex, Text, Button, Link, Image } from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'
import { NextLinkFromReactRouter as RouterLink } from 'components/NextLink'

const TokenRewardsSection = () => {
  const { t } = useTranslation()

  return (
    <Flex justifyContent="center" alignItems="center" py="48px">
      <Flex flexDirection={['column', null, null, 'row']} alignItems="center" justifyContent="center">
        <Flex flexDirection="column" flex="1" mr={[null, null, null, '32px']}>
          <Heading scale="xl" mb="16px">
            {t('KFG: The Heart of the Ecosystem')}
          </Heading>
          <Text color="textSubtle" mb="16px">
            {t(
              'The K-Force Global (KFG) token powers the marketplace and rewards every participant in the regenerative economy.',
            )}
          </Text>
          <ul>
            <li>
              <Text mb="8px">{t('Earn KFG by validating, staking, or offsetting emissions.')}</Text>
            </li>
            <li>
              <Text mb="8px">{t('Use KFG to govern the Proof-of-Impact™ engine.')}</Text>
            </li>
            <li>
              <Text>{t('Built on a deflationary, utility-based model for long-term value.')}</Text>
            </li>
          </ul>
          <Flex mt="24px">
            <Button as="a" href="/whitepaper" target="_blank" rel="noopener noreferrer" mr="16px">
              {t('Read Whitepaper')}
            </Button>
            <RouterLink to="/earn">
              <Button variant="secondary">{t('Earn KFG')}</Button>
            </RouterLink>
          </Flex>
        </Flex>
        <Flex
          height={['192px', null, null, '300px']}
          width={['192px', null, null, '300px']}
          flex={[null, null, null, '1']}
          mt={['24px', null, null, '0']}
        >
          <Image src="/images/home/kfg-token.png" width={300} height={300} alt="KFG Token" />
        </Flex>
      </Flex>
    </Flex>
  )
}

export default TokenRewardsSection
