import { ChangeEvent, useCallback } from 'react'

interface InputSliderProps {
  value: number
  onChange: (value: number) => void
  step?: number
  min?: number
  max?: number
  size?: number
}

export default function Slider({
  value,
  onChange,
  min = 0,
  step = 1,
  max = 100,
  size = 28,
  ...rest
}: InputSliderProps) {
  const changeCallback = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      onChange(parseInt(e.target.value))
    },
    [onChange]
  )

  return (
    <div className="slider-container">
      <input
        size={size}
        {...rest}
        type="range"
        value={value}
        onChange={changeCallback}
        aria-labelledby="input slider"
        step={step}
        min={min}
        max={max}
        style={{
          background: `linear-gradient(to right, var(--blue) 0%, var(--blue) ${value}%, #ddd ${value}%, #ddd 100%)`,
        }}
      />
    </div>
  )
}
