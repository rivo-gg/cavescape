type Requirements = {
  os: string
  processor: string
  memory: string
  graphics: string
  storage: string
}
export type SystemRequirements = {
  minimum: Requirements
  recommended: Requirements
}

export const systemRequirements: SystemRequirements = {
  minimum: {
    os: 'Windows 7/8/10/11',
    processor: '2.0 GHz Dual Core',
    memory: '2 GB RAM',
    graphics: 'DirectX 9.0c Compatible Graphics Card',
    storage: '500 MB available space'
  },
  recommended: {
    os: 'Windows 10/11',
    processor: '2.5 GHz Quad Core',
    memory: '4 GB RAM',
    graphics: 'DirectX 11 Compatible Graphics Card',
    storage: '500 MB available space'
  }
}
