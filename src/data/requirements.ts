type Requirements = {
  os: string
  processor: string
  memory: string
  graphics: string
  storage: string
  notes?: string
}
export type SystemRequirements = {
  minimum: Requirements
  recommended: Requirements
}

export const systemRequirements: SystemRequirements = {
  minimum: {
    os: 'Windows 10 or later (64-Bit)',
    processor: 'i5-3570 3.4 Ghz 4 Core',
    memory: '8 GB RAM',
    graphics:
      'NVIDIA GeForce GTX 1660/GTX 1050-Ti, or AMD RX 470/RX 570, or equivalent performance & VRAM',
    storage: '5 GB available space',
    notes: 'Internet connection required for multiplayer'
  },
  recommended: {
    os: 'Windows 11 or later (64-Bit)',
    processor:
      'Ryzen 5 5600X or i5-12400 or equivalent performance, 6 physical cores minimum',
    memory: '16 GB RAM',
    graphics: 'NVIDIA RTX 2070 or RX 5700, or equivalent performance & VRAM',
    storage: '5 GB available space',
    notes: 'Internet connection required for multiplayer'
  }
}
