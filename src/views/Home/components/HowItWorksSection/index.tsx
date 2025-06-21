import { Heading, Flex, Text, Card, CardBody, Tag, Link, OpenNewIcon, Button } from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'

const HowItWorksSection = () => {
  const { t } = useTranslation()

  return (
    <Flex justifyContent="center" alignItems="center" flexDirection="column" py="48px">
      <Heading textAlign="center" scale="xl" mb="16px">
        {t('Transparent. Auditable. Powerful.')}
      </Heading>
      <Text textAlign="center" color="textSubtle" mb="32px">
        {t('A simple, four-step process to start trading impact.')}
      </Text>

      <Flex flexDirection={['column', null, 'row']} alignItems="stretch">
        {/* Step 1 */}
        <Card mx="8px" mb={['16px', null, '0']}>
          <CardBody>
            <Tag variant="secondary" outline>
              Step 1
            </Tag>
            <Text bold my="8px">
              {t('Create Wallet (or Login)')}
            </Text>
            <Text fontSize="14px" color="textSubtle">
              {t('Securely connect to the DEX with your favorite Web3 wallet.')}
            </Text>
          </CardBody>
        </Card>
        {/* Step 2 */}
        <Card mx="8px" mb={['16px', null, '0']}>
          <CardBody>
            <Tag variant="secondary" outline>
              Step 2
            </Tag>
            <Text bold my="8px">
              {t('Browse Verified Projects')}
            </Text>
            <Text fontSize="14px" color="textSubtle">
              {t('Explore a global marketplace of high-integrity impact tokens.')}
            </Text>
          </CardBody>
        </Card>
        {/* Step 3 */}
        <Card mx="8px" mb={['16px', null, '0']}>
          <CardBody>
            <Tag variant="secondary" outline>
              Step 3
            </Tag>
            <Text bold my="8px">
              {t('Buy, Trade, or Stake Tokens')}
            </Text>
            <Text fontSize="14px" color="textSubtle">
              {t('Fund projects directly, trade on the open market, or stake to earn.')}
            </Text>
          </CardBody>
        </Card>
        {/* Step 4 */}
        <Card mx="8px">
          <CardBody>
            <Tag variant="secondary" outline>
              Step 4
            </Tag>
            <Text bold my="8px">
              {t('Earn & Monitor Your Impact')}
            </Text>
            <Text fontSize="14px" color="textSubtle">
              {t('Track your rewards and see your tangible, real-world impact grow.')}
            </Text>
          </CardBody>
        </Card>
      </Flex>

      <Button
        mt="32px"
        as="a"
        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        target="_blank"
        rel="noopener noreferrer"
      >
        {t('Watch How It Works')}
        <OpenNewIcon ml="4px" color="white" />
      </Button>
    </Flex>
  )
}

export default HowItWorksSection
