import { TimelineState } from './types'

const initialState: TimelineState = {
  currentScaleIndex: null,
  currentScaleOption: null,
  days: [],
  getNewEndDate(intervalMultiplier = 1) {
    if (this.options.endDate && this.currentScaleOption.isDefault) {
      return this.currentScaleOption.calculateDate(
        this.currentScaleOption.to,
        this.currentScaleOption.intervalSize * intervalMultiplier
      )
    }

    return null
  },
  hours: [],
  months: [],
  options: null,
  scaleOptions: [],
  today: new Date(),
  weeks: [],
  width: null,
}

export { initialState }
