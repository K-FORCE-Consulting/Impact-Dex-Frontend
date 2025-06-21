import { BetPosition } from 'state/types'
import { formatBnb, formatUsd, getMultiplier, getPayout } from 'views/Predictions/components/History/helpers'

describe('formatUsd', () => {
  it.each([
    [500, '$500.0000'],
    [265.22, '$265.2200'],
    [689.889, '$689.8890'],
    [10.8829, '$10.8829'],
    [10.88296, '$10.8830'],
  ])('format %i USD correctly with 4 decimals', (value, expected) => {
    expect(formatUsd(value, 4)).toEqual(expected)
  })

  it('returns 0 if USD is undefined', () => {
    expect(formatUsd(undefined, 4)).toEqual('$0.0000')
  })
})

describe('formatBnb', () => {
  it.each([
    [20, '20.0000'],
    [265.22, '265.2200'],
    [689.889, '689.8890'],
    [10.8829, '10.8829'],
    [10.88296, '10.8830'],
  ])('format %i BNB correctly with 4 decimals', (value, expected) => {
    expect(formatBnb(value, 4)).toEqual(expected)
  })

  it('returns 0 if BNB is undefined', () => {
    expect(formatBnb(undefined, 4)).toEqual('0')
  })
})

describe('getMultiplier', () => {
  it.each([
    [100, 400, 0.25],
    [50000, 2500, 20],
    [0, 2500, 0],
    [10, 0, 0],
  ])('correctly calculates multiplier', (value, value2, expected) => {
    expect(getMultiplier(value, value2)).toEqual(expected)
  })
})

describe('getPayout', () => {
  const bet1Bull = {
    id: 'bet1',
    hash: 'bet1hash',
    amount: 500,
    position: BetPosition.BULL,
    claimed: false,
    claimedHash: 'hash',
    claimedAt: 0,
    claimedBlock: 0,
    claimedBNB: 0,
    claimedNetBNB: 0,
    createdAt: 0,
    updatedAt: 0,
    user: {
      id: 'bet1user',
      address: 'bet1address',
      block: 1000,
      totalBets: 0,
      totalBNB: 0,
      createdAt: 0,
      updatedAt: 0,
      totalBetsBull: 0,
      totalBetsBear: 0,
      totalBNBBull: 0,
      totalBNBBear: 0,
      totalBetsClaimed: 0,
      totalBNBClaimed: 0,
      winRate: 0,
      averageBNB: 0,
      netBNB: 0,
    },
    round: {
      id: 'round',
      epoch: 4,
      position: BetPosition.BEAR,
      failed: false,
      startAt: 0,
      startBlock: 1000,
      startHash: 'hash',
      lockAt: 0,
      lockBlock: 1,
      lockHash: 'hash',
      lockPrice: 251,
      lockRoundId: '1',
      closeAt: 0,
      closeBlock: 1000,
      closeHash: 'hash',
      closePrice: 250,
      closeRoundId: '1',
      totalBets: 1,
      totalAmount: 600,
      bullBets: 1,
      bullAmount: 400,
      bearBets: 1,
      bearAmount: 200,
      bets: [],
    },
  }

  const bet1Bear = {
    id: 'bet1',
    hash: 'bet1hash',
    amount: 500,
    position: BetPosition.BEAR,
    claimed: false,
    claimedHash: 'hash',
    claimedAt: 0,
    claimedBlock: 0,
    claimedBNB: 0,
    claimedNetBNB: 0,
    createdAt: 0,
    updatedAt: 0,
    user: {
      id: 'bet1user',
      address: 'bet1address',
      block: 1000,
      totalBets: 0,
      totalBNB: 0,
      createdAt: 0,
      updatedAt: 0,
      totalBetsBull: 0,
      totalBetsBear: 0,
      totalBNBBull: 0,
      totalBNBBear: 0,
      totalBetsClaimed: 0,
      totalBNBClaimed: 0,
      winRate: 0,
      averageBNB: 0,
      netBNB: 0,
    },
    round: {
      id: 'round',
      epoch: 4,
      position: BetPosition.BEAR,
      failed: false,
      startAt: 0,
      startBlock: 1000,
      startHash: 'hash',
      lockAt: 0,
      lockBlock: 1,
      lockHash: 'hash',
      lockPrice: 251,
      lockRoundId: '1',
      closeAt: 0,
      closeBlock: 1000,
      closeHash: 'hash',
      closePrice: 250,
      closeRoundId: '1',
      totalBets: 1,
      totalAmount: 600,
      bullBets: 1,
      bullAmount: 400,
      bearBets: 1,
      bearAmount: 200,
      bets: [],
    },
  }

  const bet2Bull = {
    id: 'bet2',
    hash: 'bet2hash',
    amount: 688,
    position: BetPosition.BULL,
    claimed: false,
    claimedHash: 'hash',
    claimedAt: 0,
    claimedBlock: 0,
    claimedBNB: 0,
    claimedNetBNB: 0,
    createdAt: 0,
    updatedAt: 0,
    user: {
      id: 'bet2user',
      address: 'bet2address',
      block: 1000,
      totalBets: 0,
      totalBNB: 0,
      createdAt: 0,
      updatedAt: 0,
      totalBetsBull: 0,
      totalBetsBear: 0,
      totalBNBBull: 0,
      totalBNBBear: 0,
      totalBetsClaimed: 0,
      totalBNBClaimed: 0,
      winRate: 0,
      averageBNB: 0,
      netBNB: 0,
    },
    round: {
      id: 'round',
      epoch: 4,
      position: BetPosition.BEAR,
      failed: false,
      startAt: 0,
      startBlock: 1000,
      startHash: 'hash',
      lockAt: 0,
      lockBlock: 1,
      lockHash: 'hash',
      lockPrice: 251,
      lockRoundId: '1',
      closeAt: 0,
      closeBlock: 1000,
      closeHash: 'hash',
      closePrice: 250,
      closeRoundId: '1',
      totalBets: 1,
      totalAmount: 3600,
      bullBets: 1,
      bullAmount: 2000,
      bearBets: 1,
      bearAmount: 1600,
      bets: [],
    },
  }

  const bet2Bear = {
    id: 'bet2',
    hash: 'bet2hash',
    amount: 688,
    position: BetPosition.BEAR,
    claimed: false,
    claimedHash: 'hash',
    claimedAt: 0,
    claimedBlock: 0,
    claimedBNB: 0,
    claimedNetBNB: 0,
    createdAt: 0,
    updatedAt: 0,
    user: {
      id: 'bet2user',
      address: 'bet2address',
      block: 1000,
      totalBets: 0,
      totalBNB: 0,
      createdAt: 0,
      updatedAt: 0,
      totalBetsBull: 0,
      totalBetsBear: 0,
      totalBNBBull: 0,
      totalBNBBear: 0,
      totalBetsClaimed: 0,
      totalBNBClaimed: 0,
      winRate: 0,
      averageBNB: 0,
      netBNB: 0,
    },
    round: {
      id: 'round',
      epoch: 4,
      position: BetPosition.BEAR,
      failed: false,
      startAt: 0,
      startBlock: 1000,
      startHash: 'hash',
      lockAt: 0,
      lockBlock: 1,
      lockHash: 'hash',
      lockPrice: 251,
      lockRoundId: '1',
      closeAt: 0,
      closeBlock: 1000,
      closeHash: 'hash',
      closePrice: 250,
      closeRoundId: '1',
      totalBets: 1,
      totalAmount: 3600,
      bullBets: 1,
      bullAmount: 2000,
      bearBets: 1,
      bearAmount: 1600,
      bets: [],
    },
  }

  it.each([
    [bet1Bull, 750],
    [bet1Bear, 1500],
    [bet2Bull, 1238.4],
    [bet2Bear, 1548],
  ])('correctly calculates payout', (value, expected) => {
    expect(getPayout(value)).toEqual(expected)
  })

  it.each([
    [bet1Bull, 0.97, 727.5],
    [bet1Bear, 0.97, 1455],
    [bet2Bull, 0.97, 1201.248],
    [bet2Bear, 0.97, 1501.56],
  ])('correctly calculates payout including reward rate', (value, rewardRate, expected) => {
    expect(getPayout(value, rewardRate)).toEqual(expected)
  })
})
