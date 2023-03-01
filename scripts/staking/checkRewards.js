const { deployContract, contractAt, sendTxn } = require("../shared/helpers")
const { expandDecimals } = require("../../test/shared/utilities")

async function getDistributor(rewardTracker) {
  const distributorAddress = await rewardTracker.distributor()
  return await contractAt("RewardDistributor", distributorAddress)
}

async function printDistributorBalance(token, distributor, label) {
  const balance = await token.balanceOf(distributor.address)
  const pendingRewards = await distributor.pendingRewards()
  console.log(
    label,
    ethers.utils.formatUnits(balance, 18),
    ethers.utils.formatUnits(pendingRewards, 18),
    balance.gte(pendingRewards) ? "sufficient-balance" : "insufficient-balance",
    ethers.utils.formatUnits(balance.sub(pendingRewards), 18)
  )
}

async function main() {
  const nova = await contractAt("NOVA", "0xfc5A1A6EB076a2C7aD06eD22C90d7E710E35ad0a")
  const esNova = await contractAt("EsNOVA", "0xf42Ae1D54fd613C9bb14810b0588FaAa09a426cA")
  const bnNova = await contractAt("MintableBaseToken", "0x35247165119B69A40edD5304969560D0ef486921")
  const weth = await contractAt("Token", "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1")

  const stakedNovaTracker = await contractAt("RewardTracker", "0x908C4D94D34924765f1eDc22A1DD098397c59dD4")
  const stakedNovaDistributor = await getDistributor(stakedNovaTracker)

  const bonusNovaTracker = await contractAt("RewardTracker", "0x4d268a7d4C16ceB5a606c173Bd974984343fea13")
  const bonusNovaDistributor = await getDistributor(bonusNovaTracker)

  const feeNovaTracker = await contractAt("RewardTracker", "0xd2D1162512F927a7e282Ef43a362659E4F2a728F")
  const feeNovaDistributor = await getDistributor(feeNovaTracker)

  const stakedNlpTracker = await contractAt("RewardTracker", "0x1aDDD80E6039594eE970E5872D247bf0414C8903")
  const stakedNlpDistributor = await getDistributor(stakedNlpTracker)

  const feeNlpTracker = await contractAt("RewardTracker", "0x4e971a87900b931fF39d1Aad67697F49835400b6")
  const feeNlpDistributor = await getDistributor(feeNlpTracker)

  await printDistributorBalance(esNova, stakedNovaDistributor, "esNova in stakedNovaDistributor:")
  await printDistributorBalance(bnNova, bonusNovaDistributor, "bnNova in bonusNovaDistributor:")
  await printDistributorBalance(weth, feeNovaDistributor, "weth in feeNovaDistributor:")
  await printDistributorBalance(esNova, stakedNlpDistributor, "esNova in stakedNlpDistributor:")
  await printDistributorBalance(weth, feeNlpDistributor, "esNova in feeNlpDistributor:")
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error)
    process.exit(1)
  })
