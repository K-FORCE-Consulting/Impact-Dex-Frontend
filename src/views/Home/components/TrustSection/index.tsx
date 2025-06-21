import { Heading, Flex, Text, Image } from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'

const TrustSection = () => {
  const { t } = useTranslation()

  return (
    <Flex justifyContent="center" alignItems="center" flexDirection="column" py="48px">
      <Heading textAlign="center" scale="xl" mb="16px">
        {t('Endorsed by Global Leaders')}
      </Heading>
      <Text textAlign="center" color="textSubtle" mb="32px">
        {t('Our work is supported by a network of forward-thinking partners and innovators.')}
      </Text>

      <Flex flexWrap="wrap" justifyContent="center" alignItems="center">
        {/* Placeholder Logos */}
        <Image src="/images/home/trust/nrdc.png" width={120} height={60} alt="NRDC Logo" m="16px" />
        <Image
          src="/images/home/trust/ibm.png"
          width={120}
          height={60}
          alt="IBM Sustainability Accelerator Logo"
          m="16px"
        />
        <Image src="/images/home/trust/canton.png" width={120} height={60} alt="City of Canton Logo" m="16px" />
        <Image src="/images/home/trust/solarcycle.png" width={120} height={60} alt="SolarCycle Logo" m="16px" />
        <Image src="/images/home/trust/pwc.png" width={120} height={60} alt="PwC India Logo" m="16px" />
        <Image src="/images/home/trust/purdue.png" width={120} height={60} alt="Purdue University Logo" m="16px" />
        <Image src="/images/home/trust/agi.png" width={120} height={60} alt="AGI International Logo" m="16px" />
        <Image src="/images/home/trust/wabash.png" width={120} height={60} alt="Wabash Manufacturing Logo" m="16px" />
      </Flex>
    </Flex>
  )
}

export default TrustSection
