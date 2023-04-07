import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

// import theme from './theme';

export default defineNuxtPlugin(nuxtApp => {
  const vuetify = createVuetify({
    ssr: true,
    defaults: {
      VAlert: {
        density: 'comfortable',
      },
      VAvatar: {
        // ℹ️ Remove after next release
        variant: 'flat',
      },
      VBadge: {
        // set v-badge default color to primary
        color: 'primary',
      },
      VBtn: {
        // set v-btn default color to primary
        color: 'primary',
      },
      VChip: {
        elevation: 0,
      },
      VMenu: {
        VList: {
          density: 'compact',
        },
      },
      VPagination: {
        activeColor: 'primary',
        density: 'comfortable',
      },
      VTabs: {
        // set v-tabs default color to primary
        color: 'primary',
      },
      VTooltip: {
        // set v-tooltip default location to top
        location: 'top',
      },
    
      // VList: {
      //   VListItem: {
      //     activeColor: 'primary',
      //   },
      // },
      VCheckbox: {
        // set v-checkbox default color to primary
        color: 'primary',
        density: 'comfortable',
        hideDetails: 'auto',
      },
      VRadioGroup: {
        color: 'primary',
        density: 'comfortable',
        hideDetails: 'auto',
      },
      VRadio: {
        density: 'comfortable',
        hideDetails: 'auto',
      },
      VSelect: {
        variant: 'outlined',
        density: 'comfortable',
        color: 'primary',
        hideDetails: 'auto',
      },
      VRangeSlider: {
        // set v-range-slider default color to primary
        color: 'primary',
        density: 'comfortable',
        thumbLabel: true,
        hideDetails: 'auto',
      },
      VRating: {
        // set v-rating default color to primary
        color: 'warning',
      },
      VProgressCircular: {
        // set v-progress-circular default color to primary
        color: 'primary',
      },
      VSlider: {
        // set v-slider default color to primary
        color: 'primary',
        hideDetails: 'auto',
      },
      VTextField: {
        variant: 'outlined',
        density: 'comfortable',
        color: 'primary',
        hideDetails: 'auto',
      },
      VAutocomplete: {
        variant: 'outlined',
        density: 'comfortable',
        color: 'primary',
        hideDetails: 'auto',
      },
      VCombobox: {
        variant: 'outlined',
        density: 'comfortable',
        color: 'primary',
        hideDetails: 'auto',
      },
      VFileInput: {
        variant: 'outlined',
        density: 'comfortable',
        color: 'primary',
        hideDetails: 'auto',
      },
      VTextarea: {
        variant: 'outlined',
        density: 'comfortable',
        color: 'primary',
        hideDetails: 'auto',
      },
      VSwitch: {
        // set v-switch default color to primary
        color: 'primary',
        hideDetails: 'auto',
      },
    },
    theme: {
      defaultTheme: 'light',
      themes: {
        light: {
          dark: false,
          colors: {
            'primary': '#9155FD',
            'secondary': '#8A8D93',
            'on-secondary': '#fff',
            'success': '#56CA00',
            'info': '#16B1FF',
            'warning': '#FFB400',
            'error': '#FF4C51',
            'on-primary': '#FFFFFF',
            'on-success': '#FFFFFF',
            'on-warning': '#FFFFFF',
            'background': '#F4F5FA',
            'on-background': '#3A3541',
            'on-surface': '#3A3541',
            'grey-50': '#FAFAFA',
            'grey-100': '#F5F5F5',
            'grey-200': '#EEEEEE',
            'grey-300': '#E0E0E0',
            'grey-400': '#BDBDBD',
            'grey-500': '#9E9E9E',
            'grey-600': '#757575',
            'grey-700': '#616161',
            'grey-800': '#424242',
            'grey-900': '#212121',
          },

          variables: {
            'border-color': '#3A3541',
            'medium-emphasis-opacity': 0.68,

            // Shadows
            'shadow-key-umbra-opacity': 'rgba(var(--v-theme-on-surface), 0.08)',
            'shadow-key-penumbra-opacity': 'rgba(var(--v-theme-on-surface), 0.12)',
            'shadow-key-ambient-opacity': 'rgba(var(--v-theme-on-surface), 0.04)',
          },
        },
        dark: {
          dark: true,
          colors: {
            'primary': '#9155FD',
            'secondary': '#8A8D93',
            'on-secondary': '#fff',
            'success': '#56CA00',
            'info': '#16B1FF',
            'warning': '#FFB400',
            'error': '#FF4C51',
            'on-primary': '#FFFFFF',
            'on-success': '#FFFFFF',
            'on-warning': '#FFFFFF',
            'background': '#28243D',
            'on-background': '#E7E3FC',
            'surface': '#312D4B',
            'on-surface': '#E7E3FC',
            'grey-50': '#2A2E42',
            'grey-100': '#2F3349',
            'grey-200': '#4A5072',
            'grey-300': '#5E6692',
            'grey-400': '#7983BB',
            'grey-500': '#8692D0',
            'grey-600': '#AAB3DE',
            'grey-700': '#B6BEE3',
            'grey-800': '#CFD3EC',
            'grey-900': '#E7E9F6',
          },
          variables: {
            'border-color': '#E7E3FC',
            'medium-emphasis-opacity': 0.68,

            // Shadows
            'shadow-key-umbra-opacity': 'rgba(20, 18, 33, 0.08)',
            'shadow-key-penumbra-opacity': 'rgba(20, 18, 33, 0.12)',
            'shadow-key-ambient-opacity': 'rgba(20, 18, 33, 0.04)',
          },
        },
      },
    },
    components,
    directives,
  });

  nuxtApp.vueApp.use(vuetify);
});
