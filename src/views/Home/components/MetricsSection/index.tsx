import { Heading, Flex, Text, Skeleton, ChartIcon, CommunityIcon, VoteIcon } from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'
import useTheme from 'hooks/useTheme'
import { formatLocalisedCompactNumber } from 'utils/formatBalance'
import useSWRImmutable from 'swr/immutable'
import IconCard, { IconCardData } from '../IconCard'
import StatCardContent from './StatCardContent'

const Stats = () => {
  const { t } = useTranslation()
  const { theme } = useTheme()

  // TODO: Replace with real data fetching from the impact API
  const { data: tonsCO2Removed } = useSWRImmutable('tonsCO2Removed')
  const { data: projectsFunded } = useSWRImmutable('projectsFunded')
  const { data: activeValidators } = useSWRImmutable('activeValidators')

  const formattedTonsCO2 = tonsCO2Removed ? formatLocalisedCompactNumber(tonsCO2Removed) : '-'
  const formattedProjects = projectsFunded ? formatLocalisedCompactNumber(projectsFunded) : '-'
  const formattedValidators = activeValidators ? formatLocalisedCompactNumber(activeValidators) : '-'

  const highlightBarText = t('Highlight: SolarCycle just tokenized 5,000 tons of scrap solar glass.')

  const CO2CardData: IconCardData = {
    icon: <ChartIcon color="success" width="36px" />,
  }

  const ProjectsCardData: IconCardData = {
    icon: <VoteIcon color="secondary" width="36px" />,
  }

  const ValidatorsCardData: IconCardData = {
    icon: <CommunityIcon color="primary" width="36px" />,
  }

  return (
    <Flex justifyContent="center" alignItems="center" flexDirection="column">
      <Heading textAlign="center" scale="xl" mb="32px">
        {t('Impact in Action')}
      </Heading>
      <Text textAlign="center" color="textSubtle" bold mb="32px">
        {highlightBarText}
      </Text>

      <Flex flexDirection={['column', null, null, 'row']}>
        <IconCard {...CO2CardData} mr={[null, null, null, '16px']} mb={['16px', null, null, '0']}>
          <StatCardContent
            headingText={t('%tons% Tons', { tons: formattedTonsCO2 || '1.2M+' })}
            bodyText={t('of CO₂ Equivalent Removed')}
            highlightColor={theme.colors.success}
          />
        </IconCard>
        <IconCard {...ProjectsCardData} mr={[null, null, null, '16px']} mb={['16px', null, null, '0']}>
          <StatCardContent
            headingText={t('%projects% Projects', { projects: formattedProjects || '50+' })}
            bodyText={t('Verified & Funded Globally')}
            highlightColor={theme.colors.secondary}
          />
        </IconCard>
        <IconCard {...ValidatorsCardData}>
          <StatCardContent
            headingText={t('%validators% Validators', { validators: formattedValidators || '200+' })}
            bodyText={t('Ensuring Proof-of-Impact')}
            highlightColor={theme.colors.primary}
          />
        </IconCard>
      </Flex>
    </Flex>
  )
}

export default Stats
