
import UiButton from './UiButton';
import UiField from './UiField';
import UiInput from './UiInput';
import UiModal from './UiModal';
import UiSelect from './UiSelect';
// eslint-disable-next-line import/first
import Vue from 'vue';

Vue.component('ui-button', UiButton);
Vue.component('ui-field', UiField);
Vue.component('ui-input', UiInput);
Vue.component('ui-modal', UiModal);
Vue.component('ui-select', UiSelect);

export default {
  UiButton,
  UiField,
  UiInput,
  UiModal,
  UiSelect,
};
