import { shallowMount } from "@vue/test-utils";
import { expect, test } from 'vitest';
import LogoComponent from './LogoComponent.vue'

test('Text test', () => {
    const wrapper = shallowMount(LogoComponent)
    expect(wrapper.text()).toBe('알체라디오디오지호')
})
