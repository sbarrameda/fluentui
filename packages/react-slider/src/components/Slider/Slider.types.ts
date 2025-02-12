import * as React from 'react';
import { ComponentState, ComponentProps, IntrinsicShorthandProps } from '@fluentui/react-utilities';

export type SliderSlots = {
  /**
   * The root of the Slider.
   * The root slot receives the `className` and `style` specified directly on the `<Slider>`.
   * All other native props will be applied to the primary slot, `input`.
   */
  root: IntrinsicShorthandProps<'div'>;

  /**
   * The Slider's base. It is used to visibly display the min and max selectable values.
   */
  rail: IntrinsicShorthandProps<'div'>;

  /**
   * The draggable icon used to select a given value from the Slider.
   * This is the element containing `role = 'slider'`.
   */
  thumb: IntrinsicShorthandProps<'div'>;

  /**
   * The hidden input for the Slider.
   * This is the PRIMARY slot: all native properties specified directly on `<Slider>` will be applied to this slot,
   * except `className` and `style`, which remain on the root slot.
   *
   */
  input: IntrinsicShorthandProps<'input'> & {
    /**
     * Orient is a non standard attribute that allows for vertical orientation in Firefox. It is set internally
     * when `vertical` is set to true.
     * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range#non_standard_attributes
     * Webkit/Chromium support for vertical inputs is provided via -webkit-appearance css property
     */
    orient?: 'horizontal' | 'vertical';
  };
};

export type SliderCommons = {
  /**
   * The starting value for an uncontrolled Slider.
   * Mutually exclusive with `value` prop.
   */
  defaultValue?: number;

  /**
   * The current value of the controlled Slider.
   * Mutually exclusive with `defaultValue` prop.
   */
  value?: number;

  /**
   * The min value of the Slider.
   * @default 0
   */
  min?: number;

  /**
   * The max value of the Slider.
   * @default 100
   */
  max?: number;

  /**
   * The number of steps that the Slider's `value` will increment upon change. When provided, the Slider
   * will snap to the closest available value. This must be a positive value.
   * @default 1
   */
  step?: number;

  /**
   *  Whether to render the Slider as disabled.
   *
   * @default `false` (renders enabled)
   */
  disabled?: boolean;

  /**
   * Whether to render the Slider vertically.
   * @default `false` (renders horizontally)
   */
  vertical?: boolean;

  /**
   * The starting origin point for the Slider.
   * @default min
   */
  origin?: number;

  /**
   * The size of the Slider.
   * @default 'medium'
   */
  size?: 'small' | 'medium';

  /**
   * Triggers a callback when the value has been changed. This will be called on every individual step.
   */
  onChange?: (ev: React.ChangeEvent<HTMLInputElement>, data: SliderOnChangeData) => void;

  /**
   * The Slider's current value label to be read by the screen reader.
   */
  getAriaValueText?: (value: number) => string;
};

export type SliderOnChangeData = {
  value: number;
};

export type SliderProps = Omit<ComponentProps<SliderSlots, 'input'>, 'defaultValue' | 'onChange' | 'size' | 'value'> &
  SliderCommons;

export type SliderState = ComponentState<SliderSlots> & SliderCommons;
